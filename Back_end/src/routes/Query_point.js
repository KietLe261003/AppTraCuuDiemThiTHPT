import express from 'express';
const router = express.Router();
import {Query_pointController} from '../app/controller/Query_pointController.js';


router.get('/',Query_pointController);

export default router