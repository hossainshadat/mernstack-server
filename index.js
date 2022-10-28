const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Courses API Running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "07") {
    res.send(courses);
  } else {
    const category_courses = courses.filter((n) => n.category_id === id);
    res.send(category_courses);
  }
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find((n) => n._id === id);
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log("Mern Development Server is running on Port:", port);
});

module.exports = app;
