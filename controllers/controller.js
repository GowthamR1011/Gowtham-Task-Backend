// Methods to be executed on routes 
const stringLength = (req, res)=>{ 
    res.send("This will check the string length"); 
} 
  
const loginReq = (req, res)=>{ 
    res.send("Hello, This was a post Request"); 
} 
  
// Export of all methods as object 
module.exports = { 
    stringLength, 
    loginReq 
}