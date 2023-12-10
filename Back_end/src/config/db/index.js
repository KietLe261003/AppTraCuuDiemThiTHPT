import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/quan_ly_diem');
        console.log('Kết nối thành công rồi nha')
    } catch (error) {
        console.log('Kết nối đã lõ')
    }
}
export default connect;
