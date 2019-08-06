const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //we need this so the front-end can                                      fetch from the localhost
const knex = require('knex');
const bcrypt = require('bcrypt');

const postgres = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'aA123adata',
      database : 'loginpractice'
    }
  });
postgres.select('*').from('users').then(data => console.log(data))
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
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    postgres.transaction( trx => {
        trx.insert({
                email: email,
                hash: hash
            })
            .into('login')
            .returning('email')
            .then( loginEmail => {
                return trx('users')
                        .insert({
                            name: name,
                            email: loginEmail[0],//loginEmail gets returned as an array so we need to use [0]
                            joined: new Date()
                        })
                        .returning('*')
            })
            .then( user => {
                //the promise return an array with just one element so we need to grab user[0] to access the user who just registered
                res.json(user[0])
            })
            .then(trx.commit)
            .catch(err => res.status(400).json('1unable to register'))
        .catch(err => res.status(400).json('2unable to register'))
            
    })
})

app.listen(3005, () => {
    console.log('app is running');
})