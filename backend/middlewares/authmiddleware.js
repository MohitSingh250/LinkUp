const jwt = require("jsonwebtoken")
const jwt_secret_key = require("../config.js")

const authMiddleWare = async(req,res,next)=>{
    const token = req.header.token
    const decoded = jwt.verify(token,jwt_secret_key)
if (decoded){
        req.userId = decoded.id
        next()
        
    }else{
        res.status(403).json({
            message: "you are not signed in"
        })
    }
}

module.exports = {
    authMiddleWare
}