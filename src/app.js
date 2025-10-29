const express = require('express');

const app = express();

app.use("/test", (req,res)=>{
    res.send("test test test");
})

app.get(/a/ , (req,res) =>{
    res.send("get method used");
})

app.get(/.*fly$/, (req,res)=>{
    res.send("get method used second time");
})

app.post("/user1",(req,res)=>{
    res.send("post method used ");
})


app.delete("/user2",(req,res)=>{
    res.send("delete method used");
})

app.patch("/user3",(req,res)=>{
    res.send("patch method is used");
})

app.put("/user4",(req,res)=>{
    res.send("put method is used");
})
// app.use("/test",(req,res)=>{
//     res.send("test is done successfully");
// })



// app.use("/index",(req,res)=>{
//     res.send("go to index page");
// })
// app.use("/home" , (req,res)=>{
//     res.send("go to home page");
// })
// app.use("/read",(req,res)=>{
//     res.send("read the all docunment succcessfully");
// })
// app.use("/",(req,res)=>{
//     res.send("hello hello hello");
// })
// app.use((req,res)=>{
//     res.send("server is started successfully");
// })
app.listen(3000,()=>{
    console.log("server starred successfully");
} );