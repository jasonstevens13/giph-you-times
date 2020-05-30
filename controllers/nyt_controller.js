// require in express.js npm to create server
const express = require("express");

// declaring router variable to create api routes
const router = express.Router();

// Import the model (nyt.js) to use its mysql database orm functions.
// The model represents the only table in the database "nyts"
const nyt = require("../models/nyt.js");

// api route at the root which does a selectAll to grab all table data
router.get("/", function (req, res) {
    nyt.selectAll(function (data) {
        let hbsObject = {
            nyts: data
        };
        console.log(hbsObject);

        // the table results are rendered/sent to the index.handlebars file in the views directory
        // the handlebars file take the data and displays it therein
        res.render("index", hbsObject);
    });
});


// the insert one record route does just that; the request requires the new nyt name and the devoured status (table column names)
// router.post("/api/nyts", function (req, res) {
//     nyt.insertOne([
//         "nyt_name", "devoured"
//     ], [
//         req.body.nyt_name, req.body.devoured
//     ], function (result) {
//         // Sends back the ID of the new quote
//         res.json({ id: result.insertId });
//     });
// });


// api route that updates one row/record in the table
router.put("/api/nyts/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    nyt.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



// Export routes for server.js to use.
module.exports = router;
