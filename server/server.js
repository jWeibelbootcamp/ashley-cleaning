const express = require('express');
const colors = require('colors');
const dotev = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/service', require('./routes/serviceRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

// overrides default express error handler with custom
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));