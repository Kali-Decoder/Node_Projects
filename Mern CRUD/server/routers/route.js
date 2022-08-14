const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
require('../db/conn');
const User=require('../Schema/schema');

// Adding in data base 
router.post('/confess',async (req,res)=>{
    const confession=req.body.confession;

    try {

    if( !confession )
    {
        return res.json({"error":'In Valid Details !'});
    }
    else{

        try {

            const userExist= await User.findOne({rollno:rollno});
            if(userExist)
            {
                console.log("User Already  Exit !");
            }   
            else{
                
                // new user found 
                let user= new User({confession});
                await user.save();
                res.status(201).json({message:"Registered Successfully."});
            }

        } catch (error) {
            console.log("Error hai second vale try catch "+error);
        }

    }

    } catch (error) {
        console.log("Error from route js " +error);
    }
});


// register page 
router.post('/register',async (req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.json({"error":'Fill All Details Properly !'});
    }
    else{
        try {
            const userExist= await User.findOne({email:email});
            if(userExist)
            {
                console.log("User Exist Already");
            }
            else{

                if(password!=cpassword)
                   {
                    return res.status(442).json({error:" password and cpaasword are not same ! !"});
                   } 
                   let user=new User({name,email,phone,work,password,cpassword});
                   await user.save();
                   res.status(201).json({message:"Registered Successfully."});
            }
        } catch (error) {
            console.log("Error in register route :" + error);
        }
    }
})
module.exports=router;