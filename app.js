var express = require('express');
var gv =require('gmail-validation');
var app = new express();
console.log(__dirname);

var path = require('path');
app.get("/",function(req,res){
res.sendFile(path.join(__dirname+'/index.html'));

});


var server = app.listen(8080,function(){
var port = server.address().port;
console.log("Running on host: 127.0.0.1 and port: "+port);
});
