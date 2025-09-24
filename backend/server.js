const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(bodyParser.json());

// Static data
let users = []

app.get('/', (req, res) => {
    res.json({message: "we are in a web development workshop!"});
});

app.get('/users', (req, res) => {
    res.json(users);
})
app.post('/signup', (req, res) => {
    const {username, email} = req.body; 
    users.push({username, email});
    res.json(users);
});

app.put('/update', (req, res) => {
    let {oldusername, newusername} = req.body;
    if(!oldusername || !newusername) {
        return res.json(users);
    }
    const user = users.find(u => u.username === oldusername);
    if(user) {
        user.username = newusername;
        res.json(users);
    }
    else {
        res.json("User not found!");
    }
})

app.delete('/users/:username', (req, res) => {
    const {username} = req.params;
    users = users.filter(u => u.username !== username);
    res.json(users);
})

app.listen(port, () => {
    console.log(`app listening on port ${port} | server address: http://localhost:${port}`);
})