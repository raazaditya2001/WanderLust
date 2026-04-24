const Listing =require("../models/listing.js");
const Review =require("../models/review.js");


// create route
module.exports.create = async(req,res,next)=>{
    let {id}=req.params;
    const newReview =new Review(req.body.review);
    newReview.author = req.user._id;
    
    let listing1=await Listing.findById(id);
    listing1.reviews.push(newReview);

    await newReview.save();
    await listing1.save();
    
    req.flash("success","Review is Successfully Created!");
    res.redirect("/listings/"+id);
    
};

//destroy route
module.exports.delete = async(req,res,next)=>{
    let{id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review is Successfully Deleted!");

    res.redirect("/listings/"+id);

};