const express=require('express');
const bcrypt = require("bcryptjs")

const router=express.Router();
require('../db/conn');
const authenticate=require('../middleware/authenticate');
const User=require('../model/schema');
router.get('/',(req,res)=>{
    res.send("Hello From Home !");
});

// router.post('/register',(req,res)=>{
//     const {name,email,phone,work,password,cpassword}=req.body;
//     if(!name|| !email|| !phone|| !work|| !password|| !cpassword)
//     {return res.status(442).json({error:" Please Fill All Details !"})};

//     User.findOne({email:email}).then(userExist=>{
//         if(userExist)
//         {
//             return res.status(442).json({error:" User Already Exist !"});
//         }

//         const user=new User({name,email,phone,work,password,cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"Registered Successfully."});
//         }).catch(()=>{
//             res.status(500).json({error:" Not Register !"})
//         });
//     }).catch((e)=>console.log(e))
//     res.send("Hello from Register !");
// })

// async await use 
// register request 
router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;

    if(!name|| !email|| !phone|| !work|| !password|| !cpassword)
    {
        return res.status(442).json({error:" Please Fill All Details !"})
    }
    else
    {
        try {
            let userExist=await User.findOne({email:email})
                if(userExist)
                {
                    return res.status(442).json({error:" User Already Exist !"});
                }else{
                   if(password!=cpassword)
                   {
                    return res.status(442).json({error:" password and cpaasword are not same ! !"});
                   } 
                   let user=new User({name,email,phone,work,password,cpassword});
                   await user.save();
                   res.status(201).json({message:"Registered Successfully."});
                }
        
                
        
            } catch (error) {
                console.log(error);
                res.send("Hello from Register !");
            }
    }
    
});
// contact messege router 
router.post('/contact',authenticate,async (req,res)=>{
    const message=req.body.message;
    if(!message)
    {
        return res.status(442).json({error:"Message Not Recieve !"})
    }
    else{
        const userContact= await User.findOne({_id:req.userID})
        if(userContact)
        {
            const userMessage= await userContact.addMessage(message);
            await userContact.save();
            res.status(201).json({message:"User Message Recieved"});
        }
    }


})

// signin request 

router.post('/signin',async (req,res)=>{
    try {
       const {email , password}=req.body;
       if(!email || !password)
       {
        
           return res.status(400).json({error:"Cumpolsary to fill"}); 

       } 
       const userLogin=await User.findOne({email:email});
       if(userLogin)
       {
           const isMatch=await bcrypt.compare(password,userLogin.password);
           let token=await userLogin.generateAuthToken();
           res.cookie("mernCookies",token,{
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        });
           
           if(!isMatch)
           {
            return res.status(400).json({error:"Invalid Credentials not matched !"}); 
           }
           else{
            return res.status(201).json({message:"Login Succesfully  !"}); 
           }
       }
       else{
        return res.status(400).json({error:"User not found !"}); 
       }
    } catch (error) {
        console.log(error);
    }
})

router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootUser);

});
// logout page 
router.get("/logout",(req,res)=>{
    console.log("Hello from Logout page");
    res.clearCookie('mernCookies',{path:"/"});
    res.status(200).send('User Logout');
})

module.exports=router;