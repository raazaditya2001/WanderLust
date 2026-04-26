const Listing =require("../models/listing.js");
const {listingSchema}=require('../schemaValidation/schema.js');
const review = require("../models/review.js");
//mapbox sdk for forward geocoding
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });
const categories = require("../utils/categories.js");

// index route
module.exports.index = async (req,res,next)=>{
    //filter apply
    const { category , location } = req.query;
 

    const filter ={};
    if(category){
        filter.category= category;
    }
    
    let filterLocation ={};
    if(location){
        filter.location = location;
    }
   
    const allListings=await Listing.find(filter);
    res.render("listings/index.ejs",{allListings,categories});
    
};

// show route
module.exports.show = async(req,res,next)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id)
    .populate({ path:"reviews", populate : { path:"author"}})
    .populate("owner");
    res.render("listings/show.ejs",{listing});
};

// new form route
module.exports.renderNew = (req,res) => {
    res.render("listings/new.ejs");
   
};

//create route
module.exports.create = async(req,res,next)=>{
    
    let newListing=new Listing(req.body.listing);
    let location = newListing.location;
    
    //cordinate find
    let response = await geocodingClient.forwardGeocode({
    query: location,
    limit: 1
    })
  .send()
    newListing.geometry = response.body.features[0].geometry;

    // save owner info
    newListing.owner = req.user._id;

    //cloudinary
    let url = req.file.path;
    let filename = req.file.filename;
    newListing.image = {url , filename};
    console.log(req.file);
    await newListing.save();
    req.flash("success","Listing is Successfully Created!");
    res.redirect("/listings");
    
};

//update form route
module.exports.renderUpdate = async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    let compImg = listing.image.url;
    compImg = compImg.replace("/upload","/upload/h_300,w_250/");
    res.render("listings/edit.ejs",{listing,compImg});
};

// edit route
module.exports.edit = async(req,res,next)=>{
    let {id}=req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(req.file){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    req.flash("success","Listing is Successfully Updated!");
    res.redirect("/listings/"+id);

};

//delete route
module.exports.delete = async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing is Successfully Deleted!");
    res.redirect("/listings");
};


