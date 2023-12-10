import axios from 'axios';
const data = async (value)  =>{
    try {
        let urlWeb = 'http://10.0.2.2:3000/courese/' + value;
        const response = await axios.get(urlWeb);
            let ResponseUser = response.data[0];
            let user = {};
            user.name=ResponseUser.name;
            user.nameGiaovien= ResponseUser.nameGiaovien;
            return user;
        //throw 'Uesr not found';
        
      } catch (error) {
        debugger;
        throw error;
      };
}
export default {data}