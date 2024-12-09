import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const d = new Date();
let day = d.getDay()

app.get("/", (req, res) => {


    if (day == 6 || day == 7) {
        res.render(__dirname + "/views/index.ejs",
            { day: `Weekend`, quote: `Its time to have fun` }
        );
    } else {
        res.render(__dirname + "/views/index.ejs",
            { day: `Weekday`, quote: `Its time to work Hard` }
        );
    }


});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
