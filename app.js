const express = require("express");

const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();
//Sets the app to render the ejs file using the view engine
const items = [];

const workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.getDate();
  //response.render is used to render the ejs file that is to send the input to html file
  res.render("list", {
    workTitle: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {
  const item = req.body.newItem;
  if (req.body.list === 'Work') {

    workItems.push(item);

    res.redirect("/work");
  } else {

    items.push(item);

    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    workTitle: "Work",
    newListItems: workItems
  });
});
app.listen(process.env.PORT || 3000, function() {
  console.log("server statred at port 3000");
});
