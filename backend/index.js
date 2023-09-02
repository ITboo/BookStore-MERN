import express from 'express';
import mongoose, { connect } from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import booksRoute from './routes/booksRoute.js';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Hello!');
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App successfully connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })