// console.log("Hello World");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // name of folder generally called "public" or "static"
app.use(express.json());
app.use

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
// Create
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


//put
//patch 
//delete

app.get("/api/temp"), req, res => {
    console.log ("query params", req.query);
    console.log("Body", req.body);
    console.log("Params", req.params);
    console.log("Headers", req.headers);

    const { name, email } = req.body;
    console.log(name, email);
    res.send("Hello World");

}

app.put("/api/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));

    //validations
    if (!user) {
        return res.status(404).send("User not found");
    }
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }

    //update user
    user.name = name;
    user.email = email;
    res.json(user);
}
)
app.patch("/api/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));

    //validations
    if (!user) {
        return res.status(404).send("User not found");
    }
    const { name, email } = req.body;
    if (!name && !email) {
        return res.status(400).send("Name or email is required");
    }

    //update user
    if (name) {
        user.name = name;
    }
    if (email) {
        user.email = email;
    }
    res.json(user);
}
)

app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));

    //validations
    if (!user) {
        return res.status(404).send("User not found");
    }

    //delete user
    users = users.filter((user) => user.id !== parseInt(id));
    res.json(user);
}
)


app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
})