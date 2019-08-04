const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //we need this so the front-end can                                      fetch from the localhost

const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = [
    {
        id: '1',
        name: 'Maria',
        email: 'maria@gmail.com',
        password: '123',
        dateJoined: new Date ()
    },
    {
        id: '2',
        name: 'boo',
        email: 'spoo@gmail.com',
        password: 'boop',
        dateJoined: new Date()
    }
];

app.get('/', (req,res) => {
    res.send(users)
})

app.post('/signin', (req,res) => {
    const { email, password } = req.body;
    if(email === users[0].email && password === users[0].password){
        res.json(users[0])
    } else {
        res.status(400).json('could not log in')
    }
})

app.post('/register', (req,res) => {
    const { name, email, password } = req.body;
    users.push({
        id: '6',
        name: name,
        email: email,
        password: password,
        dateJoined: new Date()
    })
    res.json(users[users.length-1]);
})

app.listen(3005, () => {
    console.log('app is running');
})