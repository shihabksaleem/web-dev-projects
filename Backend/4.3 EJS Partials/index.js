import express from "express";

const app = express();
const port = 3000;

/* Write your code here:
Step 1: Render the home page "/" index.ejs

Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

<<<<<<< HEAD

app.use(express.static("public")); // Step 2
=======
app.use(express.static("public"));
>>>>>>> ece06b1e752803fbbaf13d2a370bad02b4bdeb39

//
app.get("/", (req, res) => {
  res.render("index.ejs",);
});

app.get("/about", (req, res) => {
  res.render("about.ejs",);
});

<<<<<<< HEAD
=======
app.get("/contact", (req, res) => {
  res.render("contact.ejs",);
});

>>>>>>> ece06b1e752803fbbaf13d2a370bad02b4bdeb39
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
