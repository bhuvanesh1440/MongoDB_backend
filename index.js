const express = require('express');
require('dotenv').config();
const connectDB = require("./config/db"); // Import the connectDB function

const PORT = process.env.PORT;

const app = express();

// Routes Section
var routes1 = require('./Routes/api_routes');
var routes2 = require('./Routes/student');
var routes3 = require('./Routes/Teacher');

app.use('/home', routes1);
app.use(routes2);
app.use(routes3);

// Call the connectDB function 
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
