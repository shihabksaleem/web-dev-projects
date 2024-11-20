const fs = require("fs");

fs.writeFile('message.txt', "helloooo there  we already have a file", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 