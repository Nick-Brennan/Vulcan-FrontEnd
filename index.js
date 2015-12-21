var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var views = path.join(process.cwd(), "views/");

var Dota2Api = require("dota2-api");
var da = Dota2Api.create('2FC16A6C2E1FBCC31324284E5AC772B6');

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

var matchHistory = {};

var searchParams = {matches_requested: 25};

da.getMatchHistory(searchParams,function(err, res){
	matchHistory = res;
});

app.get('/', function(req, res){
	res.sendFile(views + "index.html");
});

app.get('/matches', function(req, res){
	res.send(matchHistory);
});

app.get('/search', function(req, res){
	console.log("search get hit");
	console.log(req.query);
	req.query.matches_requested = 25;
	da.getMatchHistory(req.query, function(err, matches){
		res.send(matches);
	});
});

//Server initialization////////////////////////////////////////////////////////
app.listen(process.env.PORT || 3000, function(){
	console.log("Dota History is running on port: " + (process.env.PORT || 3000));
});