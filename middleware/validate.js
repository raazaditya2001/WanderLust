const {reviewSchema} = require("../schemaValidation/reviewSchema.js");
const {listingSchema}=require('../schemaValidation/schema.js');
const expressError=require("../utils/expressError.js");

module.exports.listingValidSchema = (req,res,next) => {
 let result=listingSchema.validate(req.body);
    if(result.error){
        throw new expressError(400,result.error);
    }
    else{
        next();
    }
};

module.exports.reviewValidateSchema = (req,res,next) =>{
 let result=reviewSchema.validate(req.body);
    if(result.error){
        throw new expressError(400,result.error);
    }
    else{
        next();
    }
};