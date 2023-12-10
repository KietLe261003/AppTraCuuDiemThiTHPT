import require from 'request';
import * as cheerio from 'cheerio';
import e from 'express';
import axios from 'axios';
let state = [];
async function fetchData2 (url){
    try {
        let data=[];
        let year2021=url+'?y=2021';
        let year2020=url+'?y=2020';
        let year2019=url+'?y=2019';
        let year2018=url+'?y=2018';
        let year2017=url+'?y=2017';
        let year2016=url+'?y=2016';

        //data2022
        let res = await axios.get(year2019);
        let $= await cheerio.load(res.data);
        $(
            "#one > table > tbody > tr.bg_white > td",
            //"#one > table > tbody > tr.bg_white > td:nth-child(5)"
        ).each((i,e)=>{
            data.push($(e).text().trim());
            //state.push($(e).text());
        })
        for (let i = 0; i < data.length; i+=6) {
            let ob = {
                stt: data[i],
                maN: data[i+1],
                tenN: data[i+2],
                tohop: data[i+3],
                y2022: data[i+4],
                uri: year2019,
            }
            state.push(ob);
        }
    } catch (error) {
        console.log(error);
    }
}
const fetchData = async () =>{
    try {
        //let res = await axios.get('https://diemthi.tuyensinh247.com/diem-chuan.html');
        let res = await axios.get('https://diemthi.tuyensinh247.com/diem-chuan.html');
        let $= await cheerio.load(res.data);
        const link=$("a")
        .map((i,link)=>{
            let route='';
            for (let index = 0; index < 12; index++) {
                route+=link.attribs.href[index];  
            }
            if(route=='/diem-chuan/')
            {
                let url='https://diemthi.tuyensinh247.com'+link.attribs.href;
                //state.push(url);
               fetchData2(url);
            }
        }).get(); 
        //console.log(link);
    } catch (error) {
        console.log(error);
    }
}
fetchData();
export function Crawl(req,res) {
    //res.render('news');
    res.send(state);
}