const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 11;

const Register = require("../models/userRegisterModel");
const userLoginGet = (req,res)=>{
    res.send("User Login Page");
}

const userLoginPost = (req,res)=>{
    Register.findOne({where : {email: req.body.email}})
    .then(async (result) =>{
        if(result){
            bcrypt.compare(req.body.password, result.password,(err, result) =>{
                if(result)
                {
                    const secretKey = "qwertyuiop";
                    const token =jwt.sign({_id : req.body.email},secretKey);
                    // res.header('auth-token',token).send(`Asssigned token is ${token}`)
                    res.header('Authorization', 'Bearer ' + token).send(`Asssigned token is ${token}`)
                    
                }
                else{
                    res.send("Invalid Credentials")
                }
            });
        }
        else{
            return res.send("Email Not found");
        }

        
    })
    .catch(err =>{
        res.send(`err2 : ${err}`)
    })
}

module.exports = {
    userLoginGet : userLoginGet,
    userLoginPost : userLoginPost
}