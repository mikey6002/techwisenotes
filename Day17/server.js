// console.log("Hello World");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // name of folder generally called "public" or "static"
app.use(express.json());

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
    // console.log(__dirname);
    res.sendFile(__dirname + "/public/portfolio.html");
})

// =============================
// CRUD - for data operation...
// Create - Post
// Read
// Update
// Delete
// =============================

// faker - for generating fake data
// const faker = require("faker");

let users = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com"
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@gmail.com"
    },
]

app.get("/api/users", (req, res) => {
    res.json(users);
})

app.get("/api/users/:id", (req, res) => {
    
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return res.status(404).send("User not found");
    }
    res.json(user);
})

// app.use(express.json());

app.post("/api/users", (req, res) => {
    // console.log(name, email);
    console.log(req.body)
    const { name, email } = req.body;
    console.log(name, email);
    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }
    const user = {
        id: users.length + 1,
        name: name,
        email: email
    }
    users.push(user);
    // res.send("User created successfully");
    res.status(201).json(user);
})

// put, patch, delete



app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
})



