// requiring in the express.js npm to create server
const express = require("express");

// declaring the port variable to allow (in this case heroku) to provide the port if OR use local port 8083
const PORT = process.env.PORT || 8888;

// declaring the use of express in variable named app
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring in and setting Handlebars to this variable.
const exphbs = require("express-handlebars");
// setting the default layout to the main.handlebars file (handlebars knows to look for this file in a directory named 
// 'layouts' within another directory named 'view' at the root. )
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/nyt_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
