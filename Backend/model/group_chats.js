const mongoose = require("mongoose")
const {Schema,model} = mongoose

const groupChatSchema = new Schema({
    chatFrom:{
        type:mongoose.objectId, //groupId
        required:true
    },
    msg:{
        type:String,
        required:true,
        default:""
    },
    from:{
        type:mongoose.objectId, //msg writter
        required:true
    },
    sendAt:{
        type:Date,
        default:new Date(),
        required:true
    },
})

const GroupChat = model("chat",groupChatSchema)

module.exports = GroupChat