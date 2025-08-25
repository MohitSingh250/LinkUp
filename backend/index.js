const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

const {userRouter} = require("./routes/user.js")

async function main(){
    
    await mongoose.connect("mongodb+srv://mscrick01:achievemongodb@cluster0.ovfkuhl.mongodb.net/")
    app.listen(3000)
}
main()