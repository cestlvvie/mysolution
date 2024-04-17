"use strict";
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
exports.NewsService = void 0;
const scraper_1 = __importDefault(require("../scraper"));
class NewsService {
    constructor() {
        this.news = [];
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            try {
                this.news = yield this.scraper.getNews();
            }
            catch (e) {
                this.news = [];
            }
        });
        this.getNews = () => this.news;
        this.getSingleNews = (id) => __awaiter(this, void 0, void 0, function* () {
            const singleNews = this.news.find((n) => n.id === id);
            if (singleNews) {
                const innerInfo = yield this.scraper.getSingleNews(singleNews.url);
                return Object.assign(Object.assign({}, innerInfo), { time: singleNews.time, title: singleNews.title, image: singleNews.image });
            }
            else
                throw new Error('Invalid id');
        });
        this.scraper = new scraper_1.default();
        this.init();
    }
}
exports.NewsService = NewsService;
