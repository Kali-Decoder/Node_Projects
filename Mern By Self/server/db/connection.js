const mongo=require('mongoose');
const DB=process.env.DB;

mongo.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successfull !");
}).catch((error)=>{
    console.log("MongoDatabase Not Connected ! : "+ error)
})