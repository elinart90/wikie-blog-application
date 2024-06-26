const mongoose = require('mongoose');
const dotenv = require('dotenv');
const insertSampleData = require('./Sample')

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected')

        await insertSampleData();
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}


module.exports = connectDB