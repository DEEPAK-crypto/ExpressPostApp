var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");

});
app.get("/friends", function(req, res) {
    var friends = ["Shantanu", 'Rohan', 'Surya', 'Agrim', 'Dev'];
    res.render("friends", { friends: friends });

});

app.post("/addfriend", function(req, res) {
    console.log(req.body);
    res.send("You have reached the post route")
})
app.listen(3000);