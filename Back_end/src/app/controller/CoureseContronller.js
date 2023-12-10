import Course from '../models/Soures.js';
export function courseController(req,res){
    Course.find({slug: req.params.slug})
    .then(couese => res.json(couese))
    //res.send('đây là course' + ' '+req.params.slug);
};