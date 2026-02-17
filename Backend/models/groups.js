const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const groupSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name must needed"]
    },
    members:{
        type:[mongoose.ObjectId],
        default:undefined,
        required:true
    },
    proImg:{
        type:String,
        default:""
    },
    created_By:{
        type:mongoose.ObjectId,
        required:true
    },
    created_At:{
        type:Date,
        default:new Date()
    },
    chats:{
        type:[mongoose.ObjectId]
    }
})

const Group = model("group",groupSchema);

module.exports = Group