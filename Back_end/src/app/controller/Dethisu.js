import mongoose from 'mongoose';
import dethimonsu from '../models/dethimonsu.js';
export function dethisu(req, res, next) {
    dethimonsu.find({})
        .then(dethimonsu => {
            dethimonsu= dethimonsu.map(dethimonsu => dethimonsu.toObject());
            //res.render('home', {dethimonsu});
            res.json(dethimonsu);
        }) 
    .catch(next);
}
