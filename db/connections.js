const mongoose = require('mongoose');
require('dotenv').config();

const connectionStr = process.env.DEV_DB_URL ;

mongoose.connect(
    connectionStr,
    {},
    () => {
      console.log('Connected to MongoDB');
    }
);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error 😥', error);
});
