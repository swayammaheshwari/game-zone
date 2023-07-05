require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const superheroes = require("superheroes");
const supervillains = require("supervillains");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true });

var Hero = superheroes.random();
var Villian = supervillains.random();

app.get("/", function (req, res) {
  res.render("Home");
});
app.get("/hero-vs-villian", function (req, res) {
  res.render("heroVsVillian", { Hero, Villian });
});

app.get("/drum-kit", function (req, res) {
  res.render("drumKit");
});

app.post("/", function (req, res) {
  if (req.body.newHERO === "hh") {
    Hero = req.body.newHERO;
    Hero = superheroes.random();
  } else {
    Villian = req.body.newVILLIAN;
    Villian = supervillains.random();
  }
  res.redirect("/");
});

app.listen(process.env.PORT, function () {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
