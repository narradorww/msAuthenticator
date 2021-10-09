import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';
import { StatusCodes } from 'http-status-codes'
import statusRoute from './routes/users.route';

const app = express();

//Configurações da Aplicação
//Midleware para ler o JSPN
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);



//Inicialização do Server
app.listen(3000, () => {
    console.log('Rodando na 3000')
});




