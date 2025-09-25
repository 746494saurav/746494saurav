import expres from 'express';
const app=expres();
app.use(expres.json());
app.set('view engine','ejs');
app.get('/',(req,resp)=>{
    resp.render("index");   
})
app.post('/about',(req,resp)=>{
    const {name, email, password}= req.body;
    
    resp.json(
        {name, email, password}
    )
})
app.listen(4000,(res,resp)=>{
    console.log("Server start on port :4000")
})