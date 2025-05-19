// console.log("Hello World");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // name of folder generally called "public" or "static"

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
}

app.use(loggerMiddleware);

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Page 3</h1>");
})


app.get("/portfolio", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/portfolio.html");
})

app.get("/api/users", (req, res) => {
    res.json();
})

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
})