import axios from 'axios';
function data_News() {
    let data = [];
    axios.get('http://10.0.2.2:3000/news')
    .then(function (response) {
        response.data.forEach(item=>{
            let ob= {
                uri: '',
                tieude: '',
                capnhat: '',
                noidung: '',
            };
            ob=item;
            data.push(ob);
        })
        return data;
        debugger;
    })
    .catch(function (error) {
        debugger;
        console.log(error);
    })
}
export default {data_News};