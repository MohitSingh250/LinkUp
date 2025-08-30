const httpStatus = require("http-status")
const {userModel} = require("../models/user.model.js")
const {meetingModel} = require("../models/meeting.model.js")
const jwt = require("jsonwebtoken")
const {jwt_secret_key}  = require("../config.js")


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

const login = async (req,res)=>{
    const {username,password} = req.body
     
    if (!username || !password) {
        return res.status(400).json({ message: "Please Provide" })
    }
    try{
        const existingUser = await userModel.findOne({
        username,
        password
        })

    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        },jwt_secret_key)

        res.json({
        token
        })
        return 
        }
    res.status(httpStatus.UNAUTHORIZED).json({
        message: "Error while logging in"
    })
    }catch(e){
        return res.status(500).json({ message: `Something went wrong ${e}` })
    }

}

const addToHistory = async (req,res)=>{
    const {meetingCode} = req.body
    try{
    const meeting = await meetingModel.create({
        user_id: req.userId,
        meetingCode
    })
    res.status(httpStatus.CREATED).json({ message: "Added code to history" })
    }catch(e){
        res.json({ message: `Something went wrong ${e}` })
    }

    
}

const getUserHistory = async(req,res)=>{
    try {
        const meetings = await meetingModel.find({ user_id: req.userId })
        res.json(meetings)
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` })
    }
}

module.exports = {
    register,
    login,
    addToHistory,
    getUserHistory
}