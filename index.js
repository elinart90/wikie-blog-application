const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db.js')


// Load config
dotenv.config({path: './env'});

connectDB();

const app = express();

//Mdiddleware and routes
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/index'))



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})