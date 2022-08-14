const mongoose=require('mongoose');
const DB=process.env.DB;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(()=>{
    console.log("Database Successfully Connect !")
}).catch((e)=>{
    console.log("Error In Data Base Connection :" +e);
});
