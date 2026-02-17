const Group = require("../models/groups")
const User = require("../models/users")
const ExpressError = require("../utils/ExpressError")

module.exports.signup = async (req,res)=>{
    res.json({"msg":"Hello world!"})
}

module.exports.group = async (req,res)=>{
    let user = await User.find({email:"pk.painkra5@gmail.com"})
    let userArray = user.map(el => el._id)
    let group = new Group({name:"Praveen"})
    // try {
    //     let newData = new Group({name:"MY group",members:"699451427512e9994ab44e60",created_By:"699451427512e9994ab44e60",chats:"699451427512e9994ab44e60"})
    //     let responce = await newData.save()
    //     console.log(responce)
    // } catch (error) {
    //    console.log(error)
    // }
    try {
        let group = await Group.findById("699472ce99c9a37cecd54312")
        group.members.push("699472ce99c9a37cecd54111")
        let responce = await group.save()
        console.log(responce)
    } catch (error) {
       console.log(error)
    }
    // let result = await Group.findByIdAndUpdate("699451427512e9994ab44e60",{name:"Bhayankar",members:(userArray.push())},{returnDocument:"after"});

    //  res.json({"name":result._id})
}

module.exports.test = (req,res,next)=>{
    try {
        abc =abc
    } catch (error) {
        return next(new ExpressError(402,"Acces"))
    }
}