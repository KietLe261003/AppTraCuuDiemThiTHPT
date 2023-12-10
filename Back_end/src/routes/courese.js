import express from 'express';
const router = express.Router();
import  { courseController}  from '../app/controller/CoureseContronller.js';


router.get('/:slug',courseController);

export default router; 
