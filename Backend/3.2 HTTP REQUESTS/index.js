import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1> ")
});
app.get("/about", (req, res) => {
    res.send("<h1>about Page</h1> <p>Helloo my name is shihab</p>")
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact :- Page</h1> <p>97 45 80 2826</p>")
});

app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
});