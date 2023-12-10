import express from 'express';
const router = express.Router();
import { home, search } from '../app/controller/SiteController.js';


router.get('/search', search);
router.get('/', home);

export default router;
