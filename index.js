const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const port = "3000";

mongoose.connect(`mongodb+srv://${process.env.MONGOCRED}@database.i7urz.mongodb.net/SunsetApp?retryWrites=true&w=majority&appName=Database`).then(  
    () => {
        console.log("Connected to MongoDB!");
        app.listen(3000, 'localhost', () => {
            console.log(`Server is running on port ${port}`);
        });

})
.catch(() => {
        console.log("Connection unsuccessful!");
});

