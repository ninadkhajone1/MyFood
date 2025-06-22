const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');
mongoDB();

app.use(express.json());

// ✅ Manual CORS headers (instead of using cors package)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Routes
app.use('/api/auth', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api/auth', require('./Routes/OrderData'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
