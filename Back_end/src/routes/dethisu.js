import express from 'express';
const router = express.Router();
import {dethisu} from '../app/controller/Dethisu.js'

router.get('/',dethisu);
export default router