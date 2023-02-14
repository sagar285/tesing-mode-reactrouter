const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://sagargupta:merncrud@cluster0.4bnn03f.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connection succesfull");
}).catch((e)=>{
    console.log(`error :${e}`);
})

const Schema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    } 
})

const Usermodel =mongoose.model("User",Schema);

module.exports =Usermodel;