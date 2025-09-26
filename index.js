import expres from 'express';
// import basices from './controller/basic.js'
const app=expres();
app.use(expres.json());
app.set('view engine','ejs');
app.get('/',(req,resp)=>{
    
})

app.post('/about',(req,resp)=>{
    const {name, email, password}= req.body;
    
    resp.json(
        {name, email, password}
    )
})
app.use((req,res)=>{
    res.send(" page Not found");
});
app.listen(4000,(res,resp)=>{
    console.log("Server start on port :4000")
})