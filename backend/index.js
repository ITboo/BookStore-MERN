import express from 'express';
import mongoose, { connect } from 'mongoose';
import { PORT, mongoDBURL } from './config.js';

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Hello!');
});

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