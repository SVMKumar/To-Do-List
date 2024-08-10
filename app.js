const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var newListItem = [];

app.get("/", function (req, res){
    let date = new Date();
    let options = {
        day : "numeric",
        weekday : "long",
        month : "long"
    };
    date = date.toLocaleDateString("en-US", options);
    res.render("list",{date: date, newListItem: newListItem});
});

app.post("/", function (req, res){
    newListItem.push(req.body.newListItem);
    res.redirect("/");
});

app.listen(3000, function (){
    console.log("Server is running!!");
});