//jshint esversion:6
const express = require("express");
const ejs = require('ejs');
const superheroes = require('superheroes');
const supervillains = require('supervillains');

const app = express();
var Hero = superheroes.random();
var Villian = supervillains.random();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));



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
    console.log("server started at http://localhost:3000");
})