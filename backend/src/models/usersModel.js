const { Schema,model } = require("mongoose")

const userSchema = new Schema ({
    name :{
        type:String,
        retuired:true,
    },
    username :{
        type:String,
        retuired:true,
        unique:true,
    },
    password :{
        type:String,
        retuired:true,
    },
    token :{
        type:String,
        
    }
    
})

module.exports = model("user",userSchema);