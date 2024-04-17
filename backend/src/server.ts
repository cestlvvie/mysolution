import express from 'express'
import bodyParser from 'body-parser';
import {NewsController} from "./controllers/news.controller";
import cors from 'cors';

const PORT = 8000;

const app = express();
const newsController = new NewsController();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', newsController.getNews);
app.get('/:id', newsController.getSingleNews);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
