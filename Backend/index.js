const express =require("express")
const app =express();
const cors =require("cors")
const Usermodel =require("./databse");
const PORT =3000

app.use(express.json());
app.use(cors());


// data send to data base
app.post("/post",async(req,res)=>{
    try {
        const user = new Usermodel(req.body);
        const postdata =await user.save();
        res.send(postdata);
    } catch (error) {
        console.log(error);
    }


})

// data get from data base

app.get("/get",async (req,res)=>{
    try {
        const data = await Usermodel.find({});
        res.send(data);
    } catch (error) {
        console.log(error);
    }
    
})

// data update from databse

app.put("/put/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        const data = await Usermodel.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.send(data);
        
    } catch (error) {
        console.log(error);
    }




})

// delete data from database

app.delete("/delete/:id",async (req,res)=>{
    try {
        
        const deletedata =await Usermodel.findByIdAndDelete(req.params.id);
        res.send(deletedata);
    
    } catch (error) {
        console.log(error);
    }

})



app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})