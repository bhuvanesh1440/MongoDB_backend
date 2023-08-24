exports.getapiController = (req, res) => {
    res.send('first Controller');
}
exports.about = (req,res)=>{
    res.send("<h1>About us")
}
exports.contact =(req,res)=>{
        res.send('<h1>welcome to contacts</h1>')
}
exports.user =(req,res)=>{
    res.send('welcome user');
    console.log("post method");
}
