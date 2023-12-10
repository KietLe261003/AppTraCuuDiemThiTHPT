import path, { extname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import cors from 'cors'
import route from './routes/index.js';
import db from './config/db/index.js';
import mongoose, { mongo } from 'mongoose';
const app = express();
const port = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var a = path.join(__dirname, 'resources/views');
console.log("asd", a)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'resources/views')));
app.use(cors());
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
//Template handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', 'src/resources/views');

//connect mongosee
db();

//route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
