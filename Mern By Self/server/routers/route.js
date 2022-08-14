const express=require('express');
const router=express.Router();

const Student=require('../model/Schema');
router.post('/students',async (req,res)=>{
    
    const {name,subscribe,instafollower,githubfollower,gender}=req.body;
    try {
           
            if(!name|| !subscribe|| !instafollower|| !githubfollower || !gender)
            {
                return res.status(400).send("Not Valid responses");
            }
            else 
            {
                const postData= new Student({name,subscribe,instafollower,githubfollower,gender});
                const inSave=await postData.save();
                if(inSave)
                {   
                    console.log("Data Is ADDED !");
                }   else{
                    console.log("Data Is Not Added !");
                }             
            }
    } catch (error) {
        console.log("Error from the post request of students :" + error);
    }
})
router.get('/studentsurprize',async (req,res)=>{
    try {
            const getData=await Student.find();
            res.send(getData);
            
            if(getData)
            {
                console.log("Data is send !");
            }
            else{
                console.log("Data is not send !");
            }
    } catch (error) {
        console.log("Error from the get router of students :" +error);
    }

});
module.exports=router;
