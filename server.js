const express = require("express");
const app = express();

const server = app.listen(3000, () => {
    console.log("Start server");


})

app.set("views",__dirname + "/views");
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile)


app.get("/",function(req,res) {
    res.render("index.html");
})

app.get("/hi",function(req,res) {
    res.render("hi.html");
})