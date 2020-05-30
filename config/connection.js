// require in mysql npm
const mysql = require("mysql");

// require in dotenv npm to mask personal mysql password
require('dotenv').config();


let connection;

// if/else statement needed to make declar which connection variable to use
// Use virtual db jawsdb via heroku; or the standard local way if not available
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "burgers_db"
    });
}

// making connection here
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;


