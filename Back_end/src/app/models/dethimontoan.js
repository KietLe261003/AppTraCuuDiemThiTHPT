import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const courseSchema = new mongoose.Schema({
    __id: mongoose.Schema.Types.ObjectId,
    cau1: {type: String,require: true},
    dapan: {type: String,require: true},
});



//export const schema = model.schema;
export default  mongoose.model('dethitoan',courseSchema);
