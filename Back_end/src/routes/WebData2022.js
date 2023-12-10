import express from 'express';
const router = express.Router();

import { Web2022,Web2021,Web2020,Web2019,Web2018,Web2017,Web2016 } from '../app/controller/WebData.js';

router.get('/web2016', Web2016);
router.get('/web2017', Web2017);
router.get('/web2018', Web2018);
router.get('/web2019', Web2019);
router.get('/web2020', Web2020);
router.get('/web2021', Web2021);
router.get('/web2022', Web2022);

export default router;
