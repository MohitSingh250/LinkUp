const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {userRouter} = require("./routes/user.js")

app.use(express.json())

app.use('/api/v1/users',userRouter)

async function main(){
    
    await mongoose.connect("mongodb+srv://mscrick01:achievemongodb@cluster0.ovfkuhl.mongodb.net/LinkUp")
    app.listen(3000)
}
main()