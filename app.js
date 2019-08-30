const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.set("view engine", "ejs");
server.use(bodyParser.urlencoded({
    extended: true
}));



server.post('/',function(req,res){
   var fname = req.body.fname;
console.log(fname);
   var femail = req.body.fname;
    var fformData = {fname: fname, femail: femail};
    res.render("landing", {fformData: fformData});

 });


server.post('/showdata',function(req,res){
   var name = req.body.name;
   var email = req.body.name;
    var formData = {name: name, email: email};
    res.render("showdata", {formData: formData});

 });
server.get('/receipt',function(req,res){
 res.render("receipt")
 });



server.listen(3000, function(){
    console.log("Server Started");
})
