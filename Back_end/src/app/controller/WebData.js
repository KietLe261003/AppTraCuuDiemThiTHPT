import mongoose from 'mongoose';
import Data2022 from '../models/Data2022.js';
import Data2021 from '../models/Data2021.js';
import Data2020 from '../models/Data2020.js';
import Data2019 from '../models/Data2019.js';
import Data2018 from '../models/Data2018.js';
import Data2017 from '../models/Data2017.js';
import Data2016 from '../models/Data2016.js';
export function Web2022(req, res, next) {
    let a=[];
    Data2022.find({})
        .then(Data2022 => {
            Data2022= Data2022.map(Data2022 => Data2022.toObject());
            for(let i=0;i<Data2022.length;i++)
            {
                let c=0;
                for(let j=0;j<i;j++)
                {
                    if(Data2022[i].nameTruong==Data2022[j].nameTruong && Data2022[i].maN == Data2022[j].maN)
                    {
                        c=1;
                        break;
                    }
                }
                if(c==0)
                {
                    a.push(Data2022[i]);
                }
            }
            res.json(a);
        }) 
    .catch(next);
}
export function Web2021(req, res, next) {
    Data2021.find({})
        .then(Data2021 => {
            Data2021= Data2021.map(Data2021 => Data2021.toObject());
            res.json(Data2021);
        }) 
    .catch(next);
}
export function Web2020(req, res, next) {
    Data2020.find({})
        .then(Data2020 => {
            Data2020= Data2020.map(Data2020 => Data2020.toObject());
            res.json(Data2020);
        }) 
    .catch(next);
}
export function Web2019(req, res, next) {
    Data2019.find({})
        .then(Data2019 => {
            Data2019= Data2019.map(Data2019 => Data2019.toObject());
            res.json(Data2019);
        }) 
    .catch(next);
}
export function Web2018(req, res, next) {
    Data2018.find({})
        .then(Data2018 => {
            Data2018= Data2018.map(Data2018 => Data2018.toObject());
            res.json(Data2018);
        }) 
    .catch(next);
}
export function Web2017(req, res, next) {
    Data2017.find({})
        .then(Data2017 => {
            Data2017= Data2017.map(Data2017 => Data2017.toObject());
            res.json(Data2017);
        }) 
    .catch(next);
}
export function Web2016(req, res, next) {
    Data2016.find({})
        .then(Data2016 => {
            Data2016= Data2016.map(Data2016 => Data2016.toObject());
            res.json(Data2016);
        }) 
    .catch(next);
}