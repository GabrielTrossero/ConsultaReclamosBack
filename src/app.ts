//Archivo de configuración del servidor
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'; //para que los servidores se comuniquen (back y front)

import redmine from './routes/redmine.routes';

const app = express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); //para que pueda entender los datos json cuando vienen como petición
app.use(express.urlencoded({extended: false})); //para que pueda entender los campos que vienen en un form

app.use(redmine);

export default app;