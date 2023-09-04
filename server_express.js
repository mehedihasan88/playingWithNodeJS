const express = require("express");
const app = express();
const PORT = 8000;
app.get('/',(req,res)=>{
    res.send("HELLO");
});
app.listen(PORT,()=>{
    console.log("server_express app listening at port ${PORT}");
});