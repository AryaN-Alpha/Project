const express = require('express');
const cors = require('cors');
const connectToMongoose = require('./db');

connectToMongoose();
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

app.use('/api', require('./routes/auth'));
<<<<<<< HEAD
app.use('/reg', require('./routes/reg'));
=======
app.use('/registration', require('./routes/registration'));
>>>>>>> 9dd821d667dba30e3a0cba96695fc1f8794dc664
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
