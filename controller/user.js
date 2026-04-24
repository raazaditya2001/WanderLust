const User =require("../models/user.js");


module.exports.renderSignup = (req,res)=>{
    res.render("user/signup.ejs")
   
};

module.exports.createUser = async(req,res)=>{
   
    try{
    let { email, username ,password}=req.body.user;
    console.log(email,username,password);
    
    let user = new User({email,username}); 
    let registeredUser = await User.register(user, password);
    console.log(registeredUser);

    //login after signup
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
    req.flash("success","Registration Successful");
    res.redirect('/listings');
    });

    }catch(e){
        req.flash("error", e.message);
        res.redirect("/user/signup");
    }
        
};

module.exports.renderLogin = (req,res)=>{
    res.render("user/login.ejs")
   
};

module.exports.login = async (req, res)=>{
    req.flash("success","Welcome back to Wonderlust");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    console.log(redirectUrl);
    res.redirect(redirectUrl);
};

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Logout Successfully");
        res.redirect("/listings");
    })
}