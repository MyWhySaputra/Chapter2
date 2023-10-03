const fs = require("fs");
const option = { encording: "utf-8" };

const callback = (err, data) => {
    console.log("Aku muncul kedua");
    if (err) return console.error("Error", err.message);
    console.log(`Isi File: ${data}`);
};

fs.readFile("contoh.txt", option, callback);

console.log("Aku muncul pertama");