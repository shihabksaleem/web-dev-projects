import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const d = new Date();
let day = d.getDay();
let dayToPass = "Weekend";
let quote = "Its time to have fun";

app.get("/", (req, res) => {



    // 0- sunday
    //7 - saturday 
    if (day == 0 || day == 7) {
        dayToPass = "Weekend";
        quote = "Its time to have fun";

    } else {

        dayToPass = "Weekday";
        quote = "Its time to work Hard";

    }

    res.render(__dirname + "/views/index.ejs",
        { day: dayToPass, quote: quote }
    );


});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
