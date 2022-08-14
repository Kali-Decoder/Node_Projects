const jwt=require('jsonwebtoken');
const User=require('../model/schema');
const Authenticate=async (req,res,next) =>{
    try {
        
        let token=req.cookies.mernCookies;
        
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

        const rootUser=await User.findOne({_id: verifyToken._id,"tokens.token": token});
        if(!rootUser)
        {
            console.log("Not Exist !");
        }
        req.token=token;
        req.rootUser=rootUser;

        req.userID=rootUser._id;

        next();

    } catch (error) {
        console.log(error);
        res.status(401).send("Unauthorised !")
    }


}

module.exports=Authenticate;
