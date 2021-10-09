import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';
import { StatusCodes } from 'http-status-codes'

const app = express();

//Configurações da Aplicação
//Midleware para ler o JSPN
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// Configurações de Rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, nexT: NextFunction) => {
    res.status(StatusCodes.OK).send({ foo : 'Sucesso no carregamento do server'});
} );
//Inicialização do Server
app.listen(3000, () => {
    console.log('Rodando na 3000')
});




