import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';
import { StatusCodes } from 'http-status-codes'
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error-handling.middleware';

const app = express();

//Configurações da Aplicação
//Midleware para ler o JSPN
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

//Configuração dos Handlers de Erro
app.use(errorHandler)


//Inicialização do Server
app.listen(3000, () => {
    console.log('Rodando na 3000')
});




