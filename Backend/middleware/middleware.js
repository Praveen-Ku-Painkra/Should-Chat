exports.errHandler=(err,req,res,next)=>{
    let {status=500,message="Some error"} = err;
    console.log(err)
   next(err)
}