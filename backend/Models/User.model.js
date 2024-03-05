import mongoose, { Schema } from "mongoose";

const user = new Schema({
    username : String,
    email : String,
    password : String,
    gamesplayed : Number,
    gameswon : {
        type : Number,
        default : 0,

    }
},{
    timestamps:true
})

export default mongoose.model('users',user)