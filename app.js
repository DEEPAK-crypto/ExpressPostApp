var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");

});
app.get("/friends", function(req, res) {
    var friends = ["Shantanu", 'Rohan', 'Surya', 'Agrim', 'Dev'];
    res.render("friends", { friends: friends });

});
app.listen(3000);