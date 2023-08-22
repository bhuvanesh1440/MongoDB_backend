
const express=require('express');
const router=express.Router();
const app=express();
router.get('/',function (req,res){
    res.send("Hello World");
})
//about
router.get('/about',function(req,res){
    res.send("<h1>About us")
})
//contact
router.get('/contact',function (req,res){
 res.send('<h1>welcome to contacts</h1>')
});

router.post('/user', (req,res)=>{
    res.send('welcome user');
    console.log("post method");
})

router.put('/add',(req,res)=>{
    res.sendStatus(201);
})

router.delete('/delete',(req,res)=>{
    res.send('deleted');
})
 module.exports=router;