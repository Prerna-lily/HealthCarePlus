// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const app = express()
// const port = 3001
// const db = require('./queries');
// app.use(bodyParser.json())
// app.use(cors());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )
// app.get('/', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
//   })

//   app.get('/users', db.getUsers);
//   app.post('/users', db.createUser);
 
//   app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
//   })

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('./queries');

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Routes
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

// Patient routes
app.get('/users', db.getUsers);
app.post('/users', db.createUser);
app.post('/loginUser', db.loginUser);

// Healthcare provider routes
app.post('/providers', db.createProvider);
app.post('/loginProvider', db.loginProvider);

// Start server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
