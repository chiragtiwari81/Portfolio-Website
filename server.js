console.log("Server starting...");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");
console.log("DB Object:", db);
console.log("Query Function:", typeof db.query);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio API Running");
});

app.get("/projects", (req, res) => {

    db.query(
        "SELECT * FROM projects",
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);
        }
    );
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
console.log("End of file reached");