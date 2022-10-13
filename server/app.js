const express = require('express');
const connectDB = require('./config/db');
const api = require('./routes/api/books')


const app = express();

connectDB();

app.use('/', api);

app.get('/', (req,res) => res.send('Hello World'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`))
