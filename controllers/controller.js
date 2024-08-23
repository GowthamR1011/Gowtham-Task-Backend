// Methods to be executed on routes 
const stringLength = (req, res)=>{ 
    // console.log(req)
    text = req.body.text;
    res.json({message:text.length}); 
    res.end();
} 
  
const loginReq = (req, res)=>{ 
    jsonBody = req.body.text;
    res.json({message:"jsonBody"}); 
} 
  
// Export of all methods as object 
module.exports = { 
    stringLength, 
    loginReq 
}