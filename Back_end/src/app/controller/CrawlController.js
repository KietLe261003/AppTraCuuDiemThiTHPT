import require from 'request';
import * as cheerio from 'cheerio';
import e from 'express';
import axios from 'axios';
import Data2022 from '../models/Data2022.js';
import Data2021 from '../models/Data2021.js';
import Data2020 from '../models/Data2020.js';
import Data2019 from '../models/Data2019.js';
import Data2018 from '../models/Data2018.js';
import Data2017 from '../models/Data2017.js';
import Data2016 from '../models/Data2016.js';
import mongoose from 'mongoose';
let state = [];
//crawl data của các trường
async function fetchData2(url) {
    try {
        let data = [];
        let name = [];
        let year2021 = url + '?y=2021';
        let year2020 = url + '?y=2020';
        let year2019 = url + '?y=2019';
        let year2018 = url + '?y=2018';
        let year2017 = url + '?y=2017';
        let year2016 = url + '?y=2016';

        //data2022
        let res = await axios.get(url);
        let $ = await cheerio.load(res.data);
        $(
            "#one > table > tbody > tr.bg_white > td",
            //"#one > table > tbody > tr.bg_white > td:nth-child(5)"
        ).each((i, e) => {
            data.push($(e).text().trim());
            //state.push($(e).text());
        })
        $(
            "#reBench > div.seah-bemak.resul-bemak > div.resul-seah > div.clearfix > p.inl-block.fl"
        ).each((i, e) => {
            let name1 = $(e).find('p.inl-block.fl > strong').text().trim();
            name.push(name1);
        })
        // let oj={
        //     label: name[0],
        //     value: url
        // }
        //state.push(oj);
        for (let i = 0; i < data.length; i += 6) {
            let ob = {
                nameTruong: name[0],
                stt: data[i],
                maN: data[i + 1],
                tenN: data[i + 2],
                tohop: data[i + 3],
                y2022: data[i + 4],
                uri: url,
            }
            state.push(ob);
        }
    } catch (error) {
        console.log(error);
    }
}
//crawl các link của các trường
const fetchData = async () => {
    try {
        //let res = await axios.get('https://diemthi.tuyensinh247.com/diem-chuan.html');
        let res = await axios.get('https://diemthi.tuyensinh247.com/diem-chuan.html');
        let $ = await cheerio.load(res.data);
        const link = $("a")
            .map((i, link) => {
                let route = '';
                for (let index = 0; index < 12; index++) {
                    route += link.attribs.href[index];
                }
                if (route == '/diem-chuan/') {
                    let url = 'https://diemthi.tuyensinh247.com' + link.attribs.href;
                    //let name=nameT(url);
                    //state.push(url);
                    fetchData2(url);
                }
                //console.log(link.attribs.href);
            }).get();
        //console.log(link);
    } catch (error) {
        console.log(error);
    }
}
fetchData();
export function Crawl(req, res) {
    res.send(state);
}

export async function data(req, res) {
    //await fetchData();
    //res.send(state);
    //console.log(res.body)
    res.render('crawl');
}

export async function Datasave(req,res) {
    const x= req.body;
    //console.log(x);
    const data1 = {
        nameTruong: x.data1.nameTruong,
        stt: x.data1.stt,
        maN: x.data1.maN,
        tenN: x.data1.tenN,
        tohop: x.data1.tohop,
        y2022: x.data1.y2022,
        uri: x.data1.uri,
    }
    const Dt2022 = new Data2022(data1);
    await Dt2022.save();
    res.json(x.data1);
}
