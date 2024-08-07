const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const AuthRouter = require('./Routes/AuthRouter')

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MongoDB_URI;

try {
    mongoose.connect(URI, {});
    console.log('Connected to MongoDb');
} catch (error) {
    console.log('Error', error);
}

// API Creation
app.get('/', (req, res) => {
    res.send('Express App is Running');
})

app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Routes
app.use('/auth', AuthRouter);


// Express App Listen
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})