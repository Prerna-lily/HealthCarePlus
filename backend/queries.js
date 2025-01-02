// const Pool = require('pg').Pool;
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Hospital',
//   password: 'Homi@12345',
//   port: 5432,
// });


// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM Patients ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const createUser = (request, response) => {
//     const { name, email ,phone, password} = request.body;
  
//     pool.query(
//       'INSERT INTO Patients (name, email, phone, password) VALUES ($1, $2,$3, $4) RETURNING *',
//       [name, email, phone, password],
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
//         response.status(201).send(`User added with ID: ${results.rows[0].name}`);
//       }
//     );
//   };

// module.exports = {
//     getUsers,
//     createUser
//   };

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Hospital',
  password: 'Homi@12345',
  port: 5432,
});

// Fetch all patients
const getUsers = (request, response) => {
  pool.query('SELECT * FROM Patients ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Add a new patient
const createUser = (request, response) => {
  const { name, email, phone, password } = request.body;

  pool.query(
    'INSERT INTO Patients (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, email, phone, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with name: ${results.rows[0].name}`);
    }
  );
};

// Patient login
const loginUser = (request, response) => {
  const { email, password } = request.body;

  pool.query('SELECT * FROM Patients WHERE email = $1', [email], (error, results) => {
    if (error) {
      throw error;
    }
    if (results.rows.length === 0) {
      return response.status(404).json({ message: 'Patient not found.' });
    }
    if (results.rows[0].password !== password) {
      return response.status(401).json({ message: 'Incorrect password.' });
    }
    response.status(200).json({ message: 'Login successful!', user: results.rows[0] });
  });
};

// Add a new healthcare provider
const createProvider = (request, response) => {
  const { name, email, phone, password } = request.body;

  pool.query(
    'INSERT INTO Providers (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, email, phone, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Provider added with name: ${results.rows[0].name}`);
    }
  );
};

// Healthcare provider login
const loginProvider = (request, response) => {
  const { email, password } = request.body;

  pool.query('SELECT * FROM Providers WHERE email = $1', [email], (error, results) => {
    if (error) {
      throw error;
    }
    if (results.rows.length === 0) {
      return response.status(404).json({ message: 'Healthcare provider not found.' });
    }
    if (results.rows[0].password !== password) {
      return response.status(401).json({ message: 'Incorrect password.' });
    }
    response.status(200).json({ message: 'Login successful!', provider: results.rows[0] });
  });
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
  createProvider,
  loginProvider,
};
