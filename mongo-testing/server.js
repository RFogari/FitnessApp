var express = require ("express");
var mongojs = require("mongojs");

var app = express();

var databaseUrl = "fitnessTest";
var collections = ["user32"];


app.use(express.static("public"));


var db = mongojs(databaseUrl, collections);




db.on("error", function(error) {
    console.log("Database Error:", error);
});



app.get("/", function(req,res) {
    res.send("Home Page");

});




app.get("/user2", function (req,res){
    db.user32.find({}, function(err, found) {
        if (err) {
            console.log(err);
        }
        else{

            res.json(found);
            console.log("found:")
            console.log(found);
            var string =JSON.stringify(found);
            console.log("string:")
            console.log(string);
            return(found);
        }
    });
});

app.get("/user1", function (req,res) {
    db.user56.find({}, function(err, found) {
        if (err){
            console.log(err);
        }
        else {
            res.json(found);
            console.log(found);
        }
    });
});


app.get("/user1a", function (req,res) {
    db.user56.find({}, function(err, found) {
        if (err){
            console.log(err);
        }
        else {
            res.json(found);
        }
    });
});



app.listen(3000,function() {
    console.log("App running on port 3000!");
});