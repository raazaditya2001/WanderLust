const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const expressError=require("../utils/expressError.js")
const Passport = require('passport');
const {saveRedirectUrl} = require('../middleware/user_auth.js')

const userController = require('../controller/user.js');


router.route("/signup")
.get(userController.renderSignup)
.post(wrapAsync(userController.createUser));

router.route("/login")
.get(userController.renderLogin )
.post(saveRedirectUrl, Passport.authenticate('local',{failureRedirect: '/user/login', failureFlash:true}), userController.login
);

router.get("/logout",userController.logout)



module.exports=router;