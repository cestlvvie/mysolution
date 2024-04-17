"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = __importStar(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
const node_crypto_1 = require("node:crypto");
class Scraper {
    constructor() {
        this.baseUrl = 'https://tengrinews.kz';
        this.getNews = () => __awaiter(this, void 0, void 0, function* () {
            const news = [];
            const response = yield axios_1.default.get(this.baseUrl);
            const $ = cheerio.load(response.data);
            $('.main-news_super_item, .main-news_top_item').each((i, el) => {
                if (i < 30) {
                    const singleNews = $(el);
                    const id = (0, node_crypto_1.randomUUID)();
                    const title = singleNews.find('.main-news_super_item_title, .main-news_top_item_title').text().trim();
                    const url = singleNews.find('a').attr('href');
                    const time = singleNews.find('.main-news_super_item_meta span, .main-news_top_item_meta').text().trim();
                    const image = singleNews.find('picture img').attr('src');
                    if (title && url && time && image)
                        news.push({ id, title, url, time, image });
                }
            });
            return news;
        });
        this.getSingleNews = (url) => __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.baseUrl + url);
            const $ = cheerio.load(response.data);
            const author = {
                ava: $('.content_main_meta_author_item_photo img').attr('src'),
                name: $('.content_main_meta_author_item_name a').text()
            };
            const description = $('.content_main_desc').text();
            const content = $('.content_main_text p ').text();
            return { author, description, content };
        });
    }
}
exports.default = Scraper;
