var exp=require('express')
var app=exp()
var usr=require('./api/rot/users');
var path=require('path')
var bp=require('body-parser')
var mg=require('mongoose');
var session=require('express-session')
var flsh=require('connect-flash')
var ps=require('./config/passport_set')

app.use(exp.static(path.join(__dirname,'views')))

app.use(session({
    secret:'secret',
    cookie:{maxAge:6000},
    resave:false,
    saveUninitialized:false
}))

app.use(flsh())

mg.connect('mongodb+srv://test:Runjhun123@db1.q91ca.mongodb.net/test?retryWrites=true&w=majority')
mg.connection.on('error',err=>{
    console.log("data error"+err)
})

mg.connection.on('connected',function(connected){
    console.log("data has been connected")
}) 

app.use(bp.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(exp.static(path.join(__dirname,'views')));
app.use('/users',usr);


module.exports=app;