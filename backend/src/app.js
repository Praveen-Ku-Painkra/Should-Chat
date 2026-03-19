require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {createServer} = require("node:http")
const cors = require('cors')
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
/////////////////////////////////////////////////////////
const connectToSocket = require("./controllers/socketManager.js")
const server = createServer(app)
const io = connectToSocket(server)
////////////////////////////////////////////////////////

const userRouters = require("./routes/usersRoutes.js")
const errorHandler = require("./middlewares/errorHandler.js")
//////////////////////////////////////////////////////////

app.set("port",(process.env.PORT||8080));
app.use(cors())
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb",extended:true}))



app.use("/api/v1/users/",userRouters)

app.use(errorHandler) 

const start = async () => {
    try {
        let connectDB = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected with host : ",connectDB.connection.host);
        server.listen(app.get("port"), () => { 
            console.log(`Server started on port ${app.get("port")}`); 
        });

    } catch (err) { 
        console.log("DB Error:", err);
    }
};

start();