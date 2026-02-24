const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const User = require("./models/users.js") 
const middleware = require("./middleware/middleware.js")

////controller
const {signup} = require("./controller/users.js");
const {show} = require("./controller/chats.js");
const ExpressError = require('./utils/ExpressError.js');
const wrapAsync = require('./utils/wrapAsync.js');

app.use(express.json());

main()
.then(res =>console.log("DB connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shouldchat');

}
app.use(cors())

app.post("/api/signup",wrapAsync(signup))

app.get("/api/chat/:id", wrapAsync(show))


app.get("/api/signup",(req,res,next)=>{
    throw next(new ExpressError(202,"new error"))
})


app.use(middleware.errHandler)

app.listen(8080,()=>{
    console.log("App is listening on port 8080:")
})
