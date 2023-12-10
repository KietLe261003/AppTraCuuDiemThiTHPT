import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const courseSchema = new mongoose.Schema({
    __id: mongoose.Schema.Types.ObjectId,
    name: {type: String, requireed: true},
    nameNganh: {type: String, required: true,},
    year2016: {type: Number, required: true,default: 0},
    year2017: {type: Number, required: true, default: 0},
    year2018: {type: Number, required: true,default: 0},
    year2019: {type: Number, required: true,default: 0},
    year2020: {type: Number, required: true,default: 0},
    year2021: {type: Number, required: true,default: 0},
    year2022: {type: Number, required: true,},
    slug: {type: String}
   // dateCreate: {type: Date, default: Date.now},
    // dateUpdate: {type: Date, default: Date.now}
});



//export const schema = model.schema;
export default  mongoose.model('Course',courseSchema);
