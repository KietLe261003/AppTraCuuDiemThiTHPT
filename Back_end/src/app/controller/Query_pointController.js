import Course from '../models/Soures.js';
export function Query_pointController(req,res){
    Course.find({year2022: {$gte: 18}})
    .then(couese => res.json(couese))
    //res.send('đây là course' + ' '+req.params.slug);
};