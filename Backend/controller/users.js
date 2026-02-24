const Group = require("../models/groups")
const User = require("../models/users")
const ExpressError = require("../utils/ExpressError")

module.exports.signup = async (req,res,next)=>{
    let newUser = req.body
    let userEmail = await User.findOne({email:newUser.email})
    let userNumber = await User.findOne({number:newUser.number})

   if(userEmail){
    throw next(new ExpressError(302,"Email already registered."))
   }
   if(userNumber){
    throw next(new ExpressError(302,"Number already registered."))
   }
    try {
        let user = new User({...req.body})  
        await user.save()
        res.status(200).json({message:"User Signup successfuly"})
    } catch (error) {
        next(error)
    }
    
   
    
}

