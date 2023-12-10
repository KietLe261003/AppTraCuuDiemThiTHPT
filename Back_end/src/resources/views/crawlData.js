const fetchData = async () =>{
  try {
        let res = await axios.get('http://localhost:5000/crawl');
        const data=res.data;
        for (let i = 0; i < data.length; i++) {
          const data1=data[i];
          axios.post('/dataSave', { data1 })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }  
    } catch (error) {
        console.log(error);
    }
}
const myButton = document.getElementById("myButton");

// Đặt thời gian đợi (đơn vị: mili giây)
const delay = 31536000000;

// Định nghĩa hàm để bấm nút
function clickButton() {
  myButton.click();
}
setTimeout(clickButton, delay);
const saveData = async () =>{
  try {
    let res = axios.post('/dataSave','haha')
    console.log('haha');
  } catch (error) {
    console.log(error);
  }
}