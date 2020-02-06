const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(cors());
app.use(express.json());

const register = require('./controllers/Register');
const signin = require('./controllers/Signin');
const profile = require('./controllers/Profile');
const image = require('./controllers/Image');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'erodr9821',
    database: 'smart-brain'
  }
});

app.get('/', (req, res) => { res.send(database.users) })
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
})