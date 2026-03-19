module.exports = (err,req,res,next)=>{
     let {status=500,message={message:"Some error"}} = err;
   
    // res.status(status||505).send(message||"Some error");
    res.status(status).json(message);
}