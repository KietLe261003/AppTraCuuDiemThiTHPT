import mongoose from 'mongoose';
import Course from '../models/Soures.js'
export function home(req, res, next) {
    res.json(req.body);
    Course.find({})
        .then(Course => {
            Course= Course.map(Course => Course.toObject());
            //res.render('home', {Course});
            res.json(Course);
        }) 
    .catch(next);
}
export function search(req, res) {
    res.render('search');
}
