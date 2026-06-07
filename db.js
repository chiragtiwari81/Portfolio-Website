const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chirag",
  database: "portfolio"
});

db.connect((err) => {
  if (err) {
    console.error("Connection Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;