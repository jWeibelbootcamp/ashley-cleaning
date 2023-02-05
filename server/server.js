const express = require('express');
const dotev = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use('/api/service', require('./routes/serviceRoutes'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
