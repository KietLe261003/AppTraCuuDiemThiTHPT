import axios from "axios";
let data=[];
async function getUser() {
    try {
      const response = await axios.get('http://10.0.2.2:3000/dethitoan');
      console.log(response);
      let data1=response.data;
      for(let i=0;i<data1.length;i++)
      {
          let oj={
            Question: data1[i].question,
            Option: ["A","B","C","D"],
            AcpOption: data1[i].dapan
          }
          data.push(oj);
      }
      //debugger
    } catch (error) {
        //debugger
      console.error(error);
    }
}
getUser();
export default data;
// data;
// debugger
// export default data
// export default data=[
//     {
//         Question: "Ai là top 1",
//         Option: ["Minh Thắng","Văn Minh","Thu Huyền","Kiệt Lê"],
//         AcpOption: "Minh Thắng"
//     },
//     {
//         Question: "Top 1 thích uống gì",
//         Option: ["Dâu","Cam","Đào","Vải"],
//         AcpOption: "Đào"
//     },
//     {
//         Question: "Ai là chủ nhiệm clb IT",
//         Option: ["Minh Thắng","Thầy Cường","Thu Huyền","Kiệt Lê"],
//         AcpOption: "Thầy Cường"
//     }
// ]