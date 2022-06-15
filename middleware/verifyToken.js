const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    const authHeader = req.header('Authorization');
    if(authHeader){
        if (authHeader.startsWith("Bearer ")){
            token = authHeader.substring(7, authHeader.length);
            if(!token){
                return res.send("Acess Denied Please Login ")
            }
            try{
                const secretKey = "qwertyuiop";
                const verify = jwt.verify(token,secretKey);
                req.user = verify;
                next();
            }
            catch{
                res.status(404).send("Provide token ");
            }
        }
        else{
            res.status(404).send("Invalid token ");
        }
    }
    else{
        res.status(404).send("Please Provide token ");
    }
    
}