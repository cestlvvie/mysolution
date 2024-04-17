import {INews, INewsBody} from "../interfaces/news.interface";

import Scraper from "../scraper";

export class NewsService {
    private news: INews[] = [];
    private scraper: Scraper;

    constructor() {
        this.scraper = new Scraper();
        this.init();
    }

    init = async () => {
        try {
            this.news = await this.scraper.getNews();
        } catch (e) {
            this.news = [];
        }
    };

    getNews = (): INews[] => this.news;

    getSingleNews = async (id: string): Promise<INewsBody>  => {
        const singleNews = this.news.find((n) => n.id === id);
        if (singleNews) {
            const innerInfo = await this.scraper.getSingleNews(singleNews.url);
            return {
                ...innerInfo,
                time: singleNews.time,
                title: singleNews.title,
                image: singleNews.image
            };
        }
        else throw new Error('Invalid id');
    }
}