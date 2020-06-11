// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

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



  // GET route for getting all of the posts
  // app.get("/api/giphs", function (req, res) {
  //   var query = {};
  //   if (req.query.article_id) {
  //     query.AuthorId = req.query.author_id;
  //   }
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Giphs.findAll({
  //     where: query,
  //     include: [db.Author]
  //   }).then(function (dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // // Get route for retrieving a single post
  // // app.get("/api/giphs/:id", function (req, res) {
  // //   // Here we add an "include" property to our options in our findOne query
  // //   // We set the value to an array of the models we want to include in a left outer join
  // //   // In this case, just db.Author
  // //   db.Post.findOne({
  // //     where: {
  // //       id: req.params.id
  // //     },
  // //     include: [db.Author]
  // //   }).then(function (dbPost) {
  // //     res.json(dbPost);
  // //   });
  // // });

  // // POST route for saving a new post
  // app.post("/api/giphs", function (req, res) {
  //   db.Giphs.create(req.body).then(function (dbGiphs) {
  //     res.json(dbGiphs);
  //   });
  // });

  // // DELETE route for deleting posts
  // app.delete("/api/giphs/:id", function (req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // PUT route for updating posts
  // app.put("/api/giphs", function (req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function (dbPost) {
  //       res.json(dbPost);
  //     });
  // });
};
