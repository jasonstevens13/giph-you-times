var db = require("../models");

module.exports = function (app) {
  app.get("/api/articles", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Giphs
    db.Articles.findAll({
      include: [db.Giphs]
    }).then(function (dbArticles) {
      res.json(dbArticles);
    });
  });

  app.get("/api/articles/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Giphs
    db.Articles.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Giphs]
    }).then(function (dbArticles) {
      res.json(dbArticles);
    });
  });

  app.post("/api/articles", function (req, res) {
    db.Articles.create(req.body).then(function (dbArticles) {
      res.json(dbArticles);
    });
  });

  app.delete("/api/articles/:id", function (req, res) {
    db.Articles.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbArticles) {
      res.json(dbArticles);
    });
  });

};
