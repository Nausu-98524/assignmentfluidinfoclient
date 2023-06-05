const mongoose = require("mongoose");

const DB = "mongodb+srv://fluid3infotech:fluid3infotech123@cluster0.mwmlskz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB)
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log("Failed...");
})


const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    contact:{
        type : String,
        required : true
    }
})

const collection = mongoose.model("collection", userSchema);
module.exports = collection;

