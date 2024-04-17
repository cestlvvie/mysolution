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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const news_service_1 = require("../services/news.service");
class NewsController {
    constructor() {
        this.getNews = (req, res) => {
            const page = req.query.page;
            const pageSize = req.query.pageSize;
            const startIndex = (page - 1) * pageSize;
            const endIndex = page * pageSize;
            const news = this.newsService.getNews();
            const paginatedNews = news.slice(startIndex, endIndex);
            const totalPages = Math.ceil(news.length / pageSize);
            if (page && pageSize)
                res.send({ news: paginatedNews, totalPages });
            else
                res.send({ news, totalPages: 1 });
        };
        this.getSingleNews = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const singleNews = yield this.newsService.getSingleNews(req.params.id);
                res.send(singleNews);
            }
            catch (e) {
                res.status(400).send({ message: e.message });
            }
        });
        this.newsService = new news_service_1.NewsService();
    }
}
exports.NewsController = NewsController;
