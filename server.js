var express=require('express');
var bodyParser=require('body-parser');
const layout1 = require('express-ejs-layouts');
var cors=require('cors');
var path=require('path');

var app=express();

app.use(bodyParser());
app.use(cors());
app.use(layout1);
app.use(express.static(path.join(__dirname,'')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',function(request,response) { 
    response.render('index');
  });
  app.get('/filttter',function(request,response) { 
   response.render('filter');
 });

 app.listen(8000,function() {
    console.log("heard on 8000");
 });