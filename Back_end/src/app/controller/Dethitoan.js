import mongoose from 'mongoose';
import dethitoan from '../models/dethimontoan.js';
export function Dethitoan(req, res, next) {
    dethitoan.find({})
        .then(dethitoan => {
            dethitoan= dethitoan.map(dethitoan => dethitoan.toObject());
            //res.render('home', {dethitoan});
            res.json(dethitoan);
        }) 
    .catch(next);
}
