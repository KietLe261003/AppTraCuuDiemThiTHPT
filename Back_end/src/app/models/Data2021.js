import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const courseSchema = new mongoose.Schema({
    __id: mongoose.Schema.Types.ObjectId,
    nameTruong: {type: String,require: true},
    stt: {type: String},
    maN: {type: String},
    tenN: {type: String},
    tohop: {type: String},
    y2022: {type: String},
    uri: {type: String},
});



//export const schema = model.schema;
export default  mongoose.model('Diem2021',courseSchema);
