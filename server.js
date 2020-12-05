
const express = require('express');

const app = express();
const port = 3000;

// "/" means homeroot:
app.get("/", function(req, res) {
    res.send("<h1>Hello world</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: erez@g.com");
});

app.get("/about", function(req,res) {
    res.send("My name is Erez.");
});

app.get("/hobbies", function(req,res) {
    res.send("Moshiach Now!");
});

app.listen(port, function() {
    console.log(`server started on port ${port}`)
});