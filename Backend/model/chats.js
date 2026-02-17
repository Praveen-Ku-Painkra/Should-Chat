const mongoose = require("mongoose")
const {Schema,model} = mongoose

const chatsSchema = new Schema({
    from:{
        type:mongoose.objectId,
        required:true
    },
    to:{
        type:mongoose.objectId,
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

const Chat = model("chat",chatsSchema)

module.exports = Chat