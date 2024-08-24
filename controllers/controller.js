const users = require("../database/data.json");


// Methods to be executed on routes 
const stringLength = (req, res)=>{ 
    // console.log(req)
    text = req.body.text;
    res.json({message:text.length}); 
    res.end();
} 
  
const loginReq = (req, res)=>{ 
    userName = req.body.userName;
    password = req.body.password;
    
    // console.log(users)
    for (const user of users.users){
        if (user.username == userName && user.password == password){
            res.send({message:"Login Successful",averageLength:user.averagelength,code:200})
            return
        }
    }
    res.send({message:"Wrong Credentials",code:-1})
   
} 
  
// Export of all methods as object 
module.exports = { 
    stringLength, 
    loginReq 
}