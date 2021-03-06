var express = require("express");
var router = express.Router();

// Import model (burger.js) to use database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.add(["burger_name"], [req.body.burger_name],
        function(result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});
//---------------!!!!!!lookatthis
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.redirect("/").end();
        });
});

// Export routes for server.js to use.
module.exports = router;