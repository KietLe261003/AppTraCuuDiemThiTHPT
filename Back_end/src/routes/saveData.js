import express from 'express';
const router = express.Router();
import { SaveData } from '../app/controller/CrawlController.js';

// const NewsController = newsController;
//  NewsController.index

router.post('/',SaveData);

export default router;