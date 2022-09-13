const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

// setup view
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public")));

//  routes
app.use("/", (req, res, next) => {
    res.render("pages/home");
    // next()
});

// start application
app.listen(3000, console.log("app started on http://localhost:3000 port"));
