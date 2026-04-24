const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn, reviewAuthorize} = require("../middleware/user_auth.js");
const {reviewValidateSchema} = require("../middleware/validate.js");

const reviewController = require('../controller/review.js');




//review post route
router.post("/",isLoggedIn,reviewValidateSchema,wrapAsync(reviewController.create)
);

// delete Review route
router.delete("/:reviewId",isLoggedIn,reviewAuthorize,wrapAsync(reviewController.delete));

module.exports=router;
