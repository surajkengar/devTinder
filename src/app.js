const express = require('express');

const app = express();

app.use("/test/123", (req,res)=>{
    res.send("test test test");
})

app.use("/test",(req,res)=>{
    res.send("test is done successfully");
})



app.use("/index",(req,res)=>{
    res.send("go to index page");
})
app.use("/home" , (req,res)=>{
    res.send("go to home page");
})
app.use("/read",(req,res)=>{
    res.send("read the all docunment succcessfully");
})
app.use("/",(req,res)=>{
    res.send("hello hello hello");
})
app.use((req,res)=>{
    res.send("server is started successfully");
})
app.listen(3000,()=>{
    console.log("server starred successfully");
} );