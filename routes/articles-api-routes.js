var db = require("../models");

module.exports = function (app) {


  app.get("/giphs", function (req, res) {

    db.Articles.findAll({
    }).then(function (dbArticles) {

      let hbsObject = {
        articles: dbArticles
      };

      res.render("giphs", hbsObject);
    });
  });


  app.post("/api/articles", function (req, res) {
    db.Articles.create(req.body).then(function (dbArticles) {
      res.render("giphs", dbArticles);
    });
  });

};
