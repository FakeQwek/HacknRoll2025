import routes from './src/routes.js';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/", routes);
const port = "3200";

mongoose.connect(`mongodb+srv://${process.env.MONGOCRED}@database.i7urz.mongodb.net/SunsetApp?retryWrites=true&w=majority&appName=Database`).then(  
    () => {
        console.log("Connected to MongoDB!");
        app.listen(port, 'localhost', () => {
            console.log(`Server is running on port ${port}`);
        });

})
.catch((error) => {
        console.log("Connection unsuccessful!", error);
});

