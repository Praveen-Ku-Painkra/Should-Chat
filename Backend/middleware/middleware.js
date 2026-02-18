exports.errHandler=(err,req,res,next)=>{
    let {status=500,message="Some error"} = err;
    res.status(status).send({message:message})
}