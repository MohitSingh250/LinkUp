require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {userRouter} = require("./routes/users.routes.js")

app.use(express.json())

app.use('/api/v1/users',userRouter)

async function main(){
    
    await mongoose.connect(process.env.mongoUrl)
    app.listen(3000)
}
main()