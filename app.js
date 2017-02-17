const express = require("express");
const hbs = require("express-handlebars");

const app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", (req, res) => res.render("home"))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("listening on PORT: ", PORT));