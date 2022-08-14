const express=require('express');
const cookieParser=require('cookie-parser');
const dotenv=require('dotenv');
dotenv.config({path:"./config.env"});
const app=express();
const port=process.env.PORT || 5000 ;
const path=require('path');
require("./db/conn");
app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth'));
// const User=require('./model/schema');

// app.get('/',(req,res)=>{
//     res.send("Hello World !");

// });


// app.get('/contact',(req,res)=>{
//     res.send("Hello World ! COntact");

// });
app.get('/signin',(req,res)=>{
    res.send("Hello World ! Login");

});

app.get('/signup',(req,res)=>{
    res.send("Hello World ! Logout");

});
//  for productions 
if(process.env.NODE_ENV==='production')
{
    app.use(express.static(path.join('client/build')));
    app.get('*',(req,res)=>{
        path.resolve(__dirname,'client','build','index.html')
    })
}

app.listen(port,()=>{
    console.log("Server Is listen on port :" + port);
    
});


