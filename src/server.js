import 'dotenv/config';
import express from 'express';

import UserController from "./app/controllers/UserController";

const app = express();

app.use(express.json()); //para o servidor aceitar requisições em json 

app.post('/users', UserController.store);

app.listen(process.env.PORT, () => {
    console.log(`Server running on the port ${process.env.PORT}`)
});