var exp=require('express')
var rt=exp.Router()
var path=require('path');
var usr=require('../model/schem');
var mg=require('mongoose');
const passport = require('passport');

rt.get('/logi',function(req,res){
    res.render('log',{msgs:req.flash('msgs')})
})
rt.post('/login',function(req,res){
    
        email1=req.body.t1;
        pwd1=req.body.t2;
    
    
    usr.findOne({email:email1,pwd:pwd1},function(err,user){
        if(!user){
            req.flash('msgs','INVALID USER ID OR PASSWORD !! ')
            res.redirect("/users/logi")
            //res.send("data invalid")
        }
        else{
            res.render('wlcm')
            
        }
    })

})

rt.get('/logi',function(req,res){
    res.render('log',{msg:req.flash('msg')})
});

rt.post('/register',function(req,res){
    const usr1= new usr({
        _id:new mg.Types.ObjectId,
        name:req.body.t1,
        email:req.body.t2,
        pwd:req.body.t3,
    })
    usr1.save().then(result=>{
        
        req.flash('msg','data saved')
        res.redirect("/users/list")
        //res.render('suc',{msg:"data inserted"})
    })
    .catch(err=>{
        console.log(" "+err)
    })
})

rt.get('/list',(req,res)=>{
    usr.find().then((result)=>{
        res.render('list',{data:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

rt.get('/edit',function(req,res){
    usr.find({_id:req.query.id}).then((result)=>{
        res.render('detail',{data:result})
    })
    .catch(err=>{
        console.log(err)
    })
})
rt.post('/update',function(req,res){
    var myquery={ _id:req.body.t10 };
    var newvalues= {$set: {name:req.body.t1,email:req.body.t2,pwd:req.body.t3}};
    usr.updateOne(myquery,newvalues)

    .then( res.redirect("/users/list"))
    .catch(err=>{
        console.log(" ",+err)
    })
})
rt.get("/del",function(req,res){
    usr.deleteOne({_id:req.query.id}).then((result)=>{
        res.redirect("/users/list")
    })
    .catch(err=>{
        console.log(err)
    })
})

rt.get('/google',passport.authenticate('google',{scope:['profile']}));
rt.get('/google/auth/callback',function(req,res){
    res.render('wlcm')
})


rt.get('/git',passport.authenticate('github',{scope:['profile']}));
rt.get('/github/auth/callback',function(req,res){
    res.render('wlcm')
})
module.exports=rt