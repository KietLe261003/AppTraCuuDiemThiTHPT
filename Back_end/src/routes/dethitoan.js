import express from 'express';
const router = express.Router();
import { Dethitoan } from '../app/controller/Dethitoan.js';

// const NewsController = newsController;
//  NewsController.index

router.get('/', Dethitoan);

export default router;