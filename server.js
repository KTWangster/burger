// Dependencies
// =====================================
var express = require("express");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Sets Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Imports routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Starts server. Listening on PORT.
app.listen(PORT, function(err) {
    if (err) throw err
    console.log("server listening on: http://localhost: " + PORT)
});