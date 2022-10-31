//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser")
const superheroes = require('superheroes');
const supervillains = require('supervillains');
const app = express();
var Hero = superheroes.random();
var Villian = supervillains.random();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));



app.get("/",function(req,res){
    res.render("list", {newNameHero : Hero, newNameVillian: Villian});  
});

app.post("/",function(req,res){
    if(req.body.newHERO === "hh"){
        Hero = req.body.newHERO;
        Hero = superheroes.random();
    }else{
        Villian = req.body.newVILLIAN;
        Villian = supervillains.random();
    }
    res.redirect("/")
})

app.listen(3000,function(){
    console.log("server started at 3000 port");
})