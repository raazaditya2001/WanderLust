const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const expressError=require("../utils/expressError.js");
const {isLoggedIn,isAuthorize} = require("../middleware/user_auth.js");
const {listingValidSchema} = require ("../middleware/validate.js");

const listingController = require('../controller/listing.js');

//multer
const multer  = require('multer'); // for parse
const { Storage } = require("../cloudConfig.js"); // upload to cloudinary storage

const upload = multer({ storage : Storage });

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),listingValidSchema,wrapAsync(listingController.create));



//new form
router.get("/new",isLoggedIn,listingController.renderNew);

router.route("/:id")
.get(wrapAsync(listingController.show))
.put(isLoggedIn,isAuthorize,upload.single('listing[image]'),listingValidSchema,wrapAsync(listingController.edit))
.delete(isLoggedIn,isAuthorize,wrapAsync(listingController.delete));

//edit route
router.get("/:id/edit",isLoggedIn,isAuthorize,listingValidSchema,wrapAsync(listingController.renderUpdate)
);



module.exports=router;