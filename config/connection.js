import { isNullOrUndefined } from "util";

module.exports = function database (app, path) {

  var mysql = require("mysql");

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return null;
    }
  
    console.log("connected as id " + connection.threadId);
    return connection;
  });
};