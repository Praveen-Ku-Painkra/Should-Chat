const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const User = require("./model/users.js") 

////controller
const {signup, group} = require("./controller/users.js")

main()
.then(res =>console.log("DB connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shouldchat');

}
app.use(cors())

app.get("/api/signup",signup)


app.get("/",(req,res)=>{
    res.send("This is root route")
})

app.get("/api/test",group)

app.listen(8080,()=>{
    console.log("App is listening on port 8080:")
})
