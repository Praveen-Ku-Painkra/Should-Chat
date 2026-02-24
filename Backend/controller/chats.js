const chats = require("../models/chats.js")

module.exports.show = async (req, res) => {
    let {id}= req.params
    try {
        let chatData = await chats.find({$or:[{from:id},{to:id}]}).populate(["to","from"]);
        if(chatData){
            res.json(chatData);
        }else{
            res.status(200).json({msg:"Data not found"})
        }
    } catch (error) {
        console.error("Error fetching chats:", error);
        res.status(500).json({ error: "Failed to fetch chats" });
    }
};