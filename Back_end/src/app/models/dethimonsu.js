import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const courseSchema = new mongoose.Schema({
    __id: mongoose.Schema.Types.ObjectId,
    cau: {type: String,require: true},
    cauHoi: {type: String,require: true},
    cauA: {type: String,require: true},
    cauB: {type: String,require: true},
    cauC: {type: String,require: true},
    cauD: {type: String,require: true},
    DapAn: {type: String,require: true},
});



//export const schema = model.schema;
export default  mongoose.model('dethisu',courseSchema);
