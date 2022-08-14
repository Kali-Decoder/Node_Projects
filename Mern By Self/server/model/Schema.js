const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:'String',
        required:'true'
    },
    subscribe:{
        type:'Number',
        required:'true'
    },
    instafollower:{
        type:'Number',
        required:'true'
    },
    githubfollower:{
        type:'Number',
        required:'true'
    },
    gender:{
        type:'String',
        required:'true'
    }

});

const User=mongoose.model('student',userSchema);
module.exports=User;