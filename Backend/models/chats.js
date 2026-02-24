const mongoose = require("mongoose")
const {Schema,model} = mongoose

const chatsSchema = new Schema({
    from:{
        type:mongoose.ObjectId,
        ref:"user",
        required:true
    },
    to:{
        type:mongoose.ObjectId,
        ref:"user",
        required:true
    },
    msg:{
        type:String,
        default:"",
        required:true
    },
    sendAt:{
        type:Date,
        default:new Date(),
        required:true
    },
})
 
module.exports = model("chat",chatsSchema)
