import * as cheerio from 'cheerio';
import axios from 'axios';
import {randomUUID} from "node:crypto";
import {INews, INewsBody} from "./interfaces/news.interface";

export default class Scraper {
    private baseUrl = 'https://tengrinews.kz';

    getNews = async () => {
        const news: INews[] = [];
        const response = await axios.get(this.baseUrl);
        const $ = cheerio.load(response.data);
        $('.main-news_super_item, .main-news_top_item').each((i, el) => {
            if (i < 30) {
                const singleNews = $(el);

                const id = randomUUID();
                const title = singleNews.find('.main-news_super_item_title, .main-news_top_item_title').text().trim();
                const url = singleNews.find('a').attr('href');
                const time = singleNews.find('.main-news_super_item_meta span, .main-news_top_item_meta').text().trim();
                const image = singleNews.find('picture img').attr('src')

                if (title && url && time && image) news.push({id, title, url, time, image});
            }
        })

        return news;
    };

    getSingleNews = async (url: string) => {
        const response = await axios.get(this.baseUrl + url);
        const $ = cheerio.load(response.data);
        const author = {
          ava: $('.content_main_meta_author_item_photo img').attr('src'),
          name:$('.content_main_meta_author_item_name a').text()
        };
        const description = $('.content_main_desc').text();
        const content = $('.content_main_text p ').text();

        return {author, description, content};
    };
}