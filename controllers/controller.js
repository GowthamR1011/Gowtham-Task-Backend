const users = require("../database/data.json");


// Methods to be executed on routes 
const stringLength = (req, res)=>{ 
    // console.log(req)
    text = req.body.text;
    res.json({message:text.length}); 
    res.end();
} 
  
const loginReq = (req, res)=>{ 
    username = req.body.username;
    password = req.body.password;
    
    // console.log(users)
    for (const user of users.users){
        if (user.username == username && user.password == password){
            res.send({message:"Login Successful",averageLength:user.averagelength,code:200})
            return
        }
    }
    res.send({message:"Wrong Credentials",code:-1})
   
} 

const stringLengthWithLogin = async (req,res) =>{

    text = req.body.text;

    if(req.body.username){

        username = req.body.username;
        


        const result = await fetch('http://localhost:9000/users/?username='+username)
        if (!result.ok) {
            return null;
        }

        const data = await result.json();
        // console.log(data)
        currentAverageLenth = data[0].averagelength;
        currentNoOfWords = data[0].noofwords;

        currentTotal = currentAverageLenth * currentNoOfWords;

        newTotal = currentTotal + text.length;

        newAverage = parseInt(newTotal /(currentNoOfWords + 1))




        console.log('http://localhost:9000/users/'+data[0].id)
        const postResult = await fetch('http://localhost:9000/users/'+data[0].id,{
            method:'PATCH',
            body:JSON.stringify({averagelength:newAverage,noofwords:(currentNoOfWords + 1)})
        })

        
        if(postResult.ok){
            res.send({message:text.length,userAverage:newAverage})

        }
        else{
            console.log(postResult)
            res.send({message:text.length,userAverage:newAverage,errMsg:"Database not updated"})
        }
        


    }
else{
    res.send({message:text.length})
}
    

}
// Export of all methods as object 
module.exports = { 
    stringLength, 
    loginReq,
    stringLengthWithLogin
}