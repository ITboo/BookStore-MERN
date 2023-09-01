import express from 'express';
import { PORT } from './config.js';

const app = express();
app.get('/', (request, response)=>{
console.log(request);
return response.status(200).send('Hello!');
});
app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
})