import express from 'express';
const router = express.Router();
import { Datasave } from '../app/controller/CrawlController.js';

// const NewsController = newsController;
//  NewsController.index

router.post('/',Datasave);

export default router;