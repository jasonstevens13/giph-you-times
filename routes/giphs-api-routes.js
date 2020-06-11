// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/api/giphs", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Giphs
    db.Giphs.findAll({
      include: [db.Articles]
    }).then(function (dbArticles) {
      res.render("giphs", dbArticles);
    });
  });

};
