const express = require('express');
const router =express.Router();

const app=express();

router.get('/teachers',(req,res)=> {
    res.send("Hello Teachers!");
})

router.get('/teachers',(req,res) => {
    res.send("Teacher Login...");
})

module.exports=router;