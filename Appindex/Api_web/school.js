import axios from 'axios';
const school = async ()  =>{
    try {
        const response = await axios.get('http://10.0.2.2:3000/');
            let ResponseUser = response.data[0];
            let user = {};
            user.name=ResponseUser.name;
            user.nameGiaovien= ResponseUser.nameNganh;
            user.year2016= ResponseUser.year2016;
            user.year2017= ResponseUser.year2017;
            user.year2018= ResponseUser.year2018;
            user.year2019= ResponseUser.year2019;
            user.year2020= ResponseUser.year2020;
            user.year2021= ResponseUser.year2021;
            user.year2022= ResponseUser.year2022;
            return user;
      } catch (error) {
        debugger;
        throw error;
      };
}
export default {school}