import {RequestHandler} from "express";
import {NewsService} from "../services/news.service";

export class NewsController {
    private newsService: NewsService;

    constructor() {
        this.newsService = new NewsService();
    }

    getNews: RequestHandler = (req, res): void => {
        const page = req.query.page as unknown as number;
        const pageSize = req.query.pageSize as unknown as number;

        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const news = this.newsService.getNews();
        const paginatedNews = news.slice(startIndex, endIndex);
        const totalPages = Math.ceil(news.length / pageSize);

        if (page && pageSize) res.send({news: paginatedNews, totalPages});
        else res.send({news, totalPages: 1});
    };

    getSingleNews: RequestHandler = async (req, res) => {
        try {
            const singleNews = await this.newsService.getSingleNews(req.params.id);
            res.send(singleNews);
        } catch (e) {
            res.status(400).send({message: (e as Error).message})
        }
    }
};