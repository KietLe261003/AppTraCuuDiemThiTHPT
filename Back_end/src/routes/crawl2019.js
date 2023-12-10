import express from "express";
const router = express.Router();
import { Crawl } from "../app/controller/CrawlController2019.js";
router.get('/',Crawl);

export default router;