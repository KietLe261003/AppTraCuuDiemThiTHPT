import express from "express";
const router = express.Router();
import { Crawl,data} from "../app/controller/CrawlController.js";
router.get('/data',data);
router.get('/',Crawl);

export default router;