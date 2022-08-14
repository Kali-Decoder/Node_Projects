const express =require('express');
const dotenv=require('dotenv');
const cors=require('cors');// CrOSS SHARING RESOURCE SHARING
dotenv.config({path:"./config.env"});
const port =process.env.PORT;
const app=express();

require('./db/conn');

app.use(express.json());
app.use(cors());
app.use(require('./routers/route'));

app.listen(port,()=>{
    console.log("Site Is Avail On Port :" +port);
});