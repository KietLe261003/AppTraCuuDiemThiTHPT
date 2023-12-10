import express from "express";
const router = express.Router();
import { Crawl } from "../app/controller/CrawlController2020.js";
router.get('/',Crawl);

export default router;