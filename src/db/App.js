const express = require("express");
const app = express();

const cors = require('cors')
require('./connection')

const UserInfo = require('./UserSchema');
const Review = require('./contact_schema')
const  Register_course= require('./regschema')
const Connect_Admin = require('./connect_admin');

const sendemail = require("./sendMail");


app.use(express.json())
app.use(cors())

app.post("/Contectus",async(req,res)=>{
    try
    {
        // console.log(req.body);
        const data = new Review(req.body);
        const result = await data.save();
    }catch(e)
    {
        console.log(e);
    }
})

app.post("/regschema",async(req,res)=>{
     try
    {
        console.log(req.body);
        const data = new Register_course(req.body);
        const result = await data.save();
        res.send(result);
    }catch(e)
    {
            console.log(e);
     }
})

app.post('/login',async(req,res)=>{
    // res.send("login page")
    try{
        if(req.body.username && req.body.pass)
        {
            const data = {
                username:req.body.username,
                pass:req.body.pass
            }
    const result = await UserInfo.findOne(data).select('-pass');
    if(result)
    {
        console.log(result);
        res.send(result);
    }
    else
    {
        req.body.setErr("No data found..!!")
        console.log("no data found..!!")
    }
}
else
{
    res.send(req.body.setErr("Enter proper values"))
    console.log("no proper credentials")
}
}
catch(e)
{
    res.send(e);
}
})

app.post('/login_admin',async(req,res)=>{
    const data = {
        username:req.body.username,
        pass:req.body.pass
    }
    const result = await Connect_Admin.findOne(data)
    if(result)  
    {
        res.send(result);
    }
    else
    res.send(JSON.stringify("no data found"));
})
 
app.post('/getData',async(req,res)=>{
    // res.send("user data")\
    const result = await Register_course.find();
    if(result)
    {
        console.log(result)
        res.send(result)
    }
    else
    res.send(JSON.stringify("No data are there..!!"))
})

app.post("/register",async(req,res)=>{
    try{
    const email_add = req.body.email;
    console.log(req.body.otp)
    const sent = await sendemail(email_add,req.body.otp)
    if(sent)
    {
    res.send(req.body);
    const data = {
        username:req.body.username,
        email:req.body.email,  
        pass:req.body.pass
    }
    const user = new UserInfo(data)
    const result = await user.save();
}
    else{ 
        res.send("error")
    }
}catch(err){console.log(err,"has been occured yuvraj")}


})


app.get("/",(req,res)=>{
    res.send("Home page..!!"); 
})

app.listen(8000,()=>{
    console.log("Server is running at port number 8000")
})