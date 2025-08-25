const {Schema,default:mongoose} = require('mongoose')

const userSchema = new Schema({
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
})
const userModel = mongoose.model("userModel",userSchema)

module.exports={
    userModel
}