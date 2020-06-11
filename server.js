
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
require('dotenv').config();

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8085;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Requiring in and setting Handlebars to this variable.
const exphbs = require("express-handlebars");
// setting the default layout to the main.handlebars file (handlebars knows to look for this file in a directory named 
// 'layouts' within another directory named 'view' at the root. )
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/articles-api-routes.js")(app);
require("./routes/giphs-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
