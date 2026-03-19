const {Schema,model} = require("mongoose")

const chatSchema = new Schema({
    chat:{
        type:String,

    },
    from:String,
    to:String
})


module.exports = model("chat",chatSchema)