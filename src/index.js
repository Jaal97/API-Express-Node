const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/user'); 

const app = express();
const port = process.env.PORT || 9000;

//midleware
app.use(express.json());
app.use('/api', userRoutes);


// routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

//mongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado satisfactoriamente a MongoDB Atlas'))
    .catch((err) => console.error(err));

app.listen(port, () => console.log('server listening on port', port));

