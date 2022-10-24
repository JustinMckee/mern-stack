const express = require('express');
const connectDB = require('./config/db');
const api = require('./routes/api/portfolio')
const cors = require('cors');


const app = express();

connectDB();

// Cors
app.use(cors({origin: true, credentials: true}));

// Middleware
app.use(express.json({ extended: false }));

app.use('/api/portfolio', api);

app.get('/', (req,res) => res.send('Hello World'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`))
