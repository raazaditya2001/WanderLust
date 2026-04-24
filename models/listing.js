const mongoose = require('mongoose');
const Review =require("./review.js");
const Schema=mongoose.Schema;
const categories = require("../utils/categories.js");

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{

        url : String,
         filename : String,   
        
    },
    price:{
        type:Number,
        default:0,
    },
    location:String,
    country:String,
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"review",
    }],
    // user Schema
    owner : {
        type:Schema.Types.ObjectId,
        ref:"user",
    },

    // for coordinate
    geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
  },
  category:{
    type:String,
    enum:categories.map( c=> c.name),
    required:true
  },

});

//if listing delete reviews belong to that listing will also  delete
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
         await Review.deleteMany({_id:{$in: listing.reviews}});
    }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;