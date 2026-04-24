const Listing =require("../models/listing.js");
const Review =require("../models/review.js");

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","Login before procced");
        return res.redirect("/user/login");
    }
    next();
}
 // redirect save url
module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

module.exports.isAuthorize = async (req,res,next)=>{
    let {id}=req.params;
    let listing = await Listing.findByIdAndUpdate(id);
    // authorize
    if(res.locals.currUser && !res.locals.currUser._id.equals(listing.owner._id)){
        req.flash("error","you are not authorize");
       return res.redirect("/listings/"+id);
    }
    next();
}

module.exports.reviewAuthorize = async (req,res,next) => {
    let {id,reviewId}=req.params;
    let review = await Review.findByIdAndUpdate(reviewId);
    // authorize
    if(res.locals.currUser && !res.locals.currUser._id.equals(review.author._id)){
        req.flash("error","you are not authorize");
       return res.redirect("/listings/"+id);
    }
    next();
}