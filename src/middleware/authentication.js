const jwt = require('jsonwebtoken');
require('dotenv').config();
const config = process.env;


const authentication =(req,res,next)=>{
    try {
        const token = req.headers['authorization'];

        if(!token){
            res.send('access token is required');

        }
        try {
            const decode=jwt.verify(token,config.TOKEN_KEY);
            req.user= decode;
        } catch (error) {
            res.send('invalid token')  
        }
        return next();
    
        
    } catch (error) {
        res.send(error)
        
    }
}
module.exports=authentication;