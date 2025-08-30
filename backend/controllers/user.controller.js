const httpStatus = require("http-status")
const {userModel} = require("../models/user.model.js")
const jwt = require("json-web-token")

const register = async (req,res)=>{
    const {name,username,password} = req.body

    try{
        const existingUser = await  userModel.findOne({username})

        if(existingUser){
            return res.status(httpStatus.FOUND).json({
                message: "User already exists"
            })
        }
        const user = await userModel.create({
            name,
            username,
            password    
        })
        res.status(httpStatus.CREATED).json({ message: "User Registered" })

    }catch(e){
        res.json({ message: `Something went wrong ${e}` })
    }

}



module.exports = {
    register,
}