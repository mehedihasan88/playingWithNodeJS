console.log("HELLO");
const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end("Hello World");
});
server.listen(3000);
console.log("listening on port 8000");