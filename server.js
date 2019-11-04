const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Inite Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Character Generator API' })
);

// Define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/characters', require('./routes/characters'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
