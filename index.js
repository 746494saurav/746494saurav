import expres from 'express';
const app=expres();

app.get('/',(req,resp)=>{
    resp.send("Hello");
})

app.listen(4000,(res,resp)=>{
    console.log("Server start on port :4000")
})