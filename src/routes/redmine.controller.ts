import {RequestHandler} from 'express';

const fetch = require('node-fetch'); //llamo al módulo fetch (para las peticiones a otros servicios desde node)

export const getRequerimiento: RequestHandler = async (req, res) => {
    await fetch(``, { //set url (http://url/{$req.params.id}.json)
        method:'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Redmine-API-Key': '' //set api key
        }
    })
        .then((res: { json: () => any; }) => res.json()) /*Luego de enviar, la api me da responde y lo convierto a json*/
        .then((data: any) => { /*luego con los datos en formato json hago lo siguiente*/
            res.json(data); /*envío el contenido al cliente*/
        })
        .catch((err: any) => console.error(err));
}