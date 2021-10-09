import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, nexT: NextFunction) => {
    res.status(200).send({ foo : 'Sucesso no carregamento do server'});
} );

app.listen(3000, () => {
    console.log('Rodando na 3000')
});




