import express from 'express';
const router = express.Router();
import { news } from '../app/controller/NewsController.js';

// const NewsController = newsController;
//  NewsController.index

router.get('/', news);

export default router;
