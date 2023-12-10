import newsRouter from './news.js';
import siteRouter from './site.js';
import coureseRouter from './courese.js';
import Query_pointRouter from './Query_point.js';
import CrawlRouter from './crawl.js';
import Crawl2021 from './crawl2021.js'
import Crawl2020 from './crawl2020.js'
import Crawl2019 from './crawl2019.js'
import Crawl2018 from './crawl2018.js'
import Crawl2017 from './crawl2017.js'
import Crawl2016 from './crawl2016.js'
import dethitoan from './dethitoan.js'
import DataSave from './DataSave.js'
import WebData2022 from './WebData2022.js'
import dethisu from './dethisu.js'
function route(app) {
    //app.use('/data2022',)
    app.use('/dethisu',dethisu),
    app.use('/web',WebData2022);
    app.use('/dataSave',DataSave);
    app.use('/crawl2016',Crawl2016);
    app.use('/crawl2017',Crawl2017);
    app.use('/crawl2018',Crawl2018);
    app.use('/crawl2019',Crawl2019);
    app.use('/crawl2020',Crawl2020);
    app.use('/crawl2021',Crawl2021);
    app.use('/crawl',CrawlRouter);
    app.use('/Query_point',Query_pointRouter);
    app.use('/news', newsRouter);
    app.use('/courese', coureseRouter); 
    app.use('/dethitoan',dethitoan);
    app.use('/', siteRouter);
}

export default route;
