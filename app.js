const express=require("express");
const app=express();
const mongoose=require('mongoose');
const Listing =require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const expressError=require("./utils/expressError.js");
const {listingSchema}=require('./schemaValidation/schema.js');
const Review =require("./models/review.js");
const {reviewSchema} = require("./schemaValidation/reviewSchema.js");
const session =require("express-session");
// mongo storage for production level storage
const MongoStore = require('connect-mongo').default;
const flash=require('connect-flash');
// passport
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js')

// dot env
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}


//routes
const listing=require('./routes/listing.js');
const reviews=require('./routes/review.js');
const user = require('./routes/user.js');



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('ejs',ejsMate);


// const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
//atlas db
const dbUrl=process.env.ATLASDB_URL;

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(dbUrl);
}

// mongo store
const store = MongoStore.create({
    mongoUrl : dbUrl,
    crypto:{
        secret:process.env.SECRET
    },
    touchAfter:24 * 3600,
        
    });

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE",error);
});

const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge:7 * 24 * 60 * 60 * 1000,
        httpOnly:true
    }
};

app.use(session(sessionOptions));
app.use(flash());

//passport 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//flash
app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    res.locals.currUser=req.user;
    next();
});


//argument handler
app.use("/listings",listing);
app.use("/listings/:id/reviews",reviews);
app.use("/user",user);


app.use((req,res,next)=>{
     next(new expressError(404,"Not Found"));
});

app.use((err,req,res,next)=>{
    let {status=500,message="something went wrong"}=err;
    res.status(status).render("listings/error.ejs",{message,status});
});



app.listen(8080,()=>{
    console.log("server is listening");
});