const path = require("path");

const express = require("express");
const app = express();
const port = 8000;

// //* RELATIVE ABSOLUTE
// console.log(__dirname);

//* FINDING PATH
// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");

//* BUILTIN MIDDLEWARE
// app.use(express.static(staticPath));

//* SET VIEW ENGINE
app.set("view engine", "hbs");

//* TEMPLATE WITH VIEW ENGINE
app.get("/", (req, res) => {
  res.render("index");
});

//* ROUTING TO HOME PAGE
// app.get("/", (req, res) => {
//   res.send("Hello World! :) express JS");
// });

// app.get("/about", (req, res) => {
//   res.send("ABOUT PAGE IT IS");
// });

// app.get("/contact", (req, res) => {
//   res.status(200).send("CONTACT PAGE IT IS");
// });

//* CONNECTING TO PORT
app.listen(port, () => {
  console.log(`express server running on port -> ${port}`);
});
