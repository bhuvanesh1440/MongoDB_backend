const express=require('express');
const router=express.Router();
const app=express();

router.get('/student',function (req,res){
    res.send("Hello Students");
});
//login
router.get('/student/login',function(req,res){
    res.send("<h1>Login Successfull</h1>");
});

module.exports=router;