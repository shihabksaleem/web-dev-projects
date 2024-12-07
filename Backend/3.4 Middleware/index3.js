import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  // Attach a listener to the response to log the status code after response is sent
  res.on('finish', () => {
    console.log(`Response Status: ${res.statusCode}`);
  });

  // Proceed to the next middleware or route handler
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
