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
app.use('/reg', require('./routes/reg'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
