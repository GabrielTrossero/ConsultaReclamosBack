//Archivo de inicialización del servidor
import app from './app';

app.set('port', process.env.port || 4000); //para que agarre un puerto disponible, o el 3000

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})