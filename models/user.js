const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
});

userSchema.plugin(passportLocalMongoose);

// schema.plugin(passportLocalMongoose);  // it include username and password with salting and hashing

module.exports = mongoose.model("user",userSchema);