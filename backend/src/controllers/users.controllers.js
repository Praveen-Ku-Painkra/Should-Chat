const User = require("../models/usersModel");
const {status} = require("http-status")
const bcrypt = require('bcrypt');
const wrapAsync = require("../utils/wrapAsync.js")
const expressError = require("../utils/expressError.js")
const {v4} = require("uuid")


const login = async (req,res,next)=>{
    const {username,password} = req.body;
    if(!username || !password){
        throw new expressError(status.NOT_FOUND,{message:"username and password required"})
    }


    try {
        const user =await  User.findOne({username})
        console.log(user)
        if(!user){
            throw new expressError(status.NOT_FOUND,{message:"user not registered"})
        }

        if(bcrypt.compare(password,user.password)){
            let token = v4()
            user.token = token
            let log = await user.save()
            return res.status(status.OK).json({token:token})
        }
    } catch (error) {
        return res.status(500).json({message:"login failed"})
    }
}




const register =async (req,res)=>{
    const {name,username,password} = req.body;
    try {
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(status.FOUND).json({message:"User already exists"})
        }

        let hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name:name,
            username:username,
            password:hashedPassword
        })

        await newUser.save();

        res.status(status.CREATED).json({messsage:"User registered"})
    } catch (error) {
        console.log(err)
    }
}

module.exports = {login,register}