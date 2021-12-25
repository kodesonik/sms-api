import express from 'express'
import { routes } from '../routes/views';


const router = express.Router()

export default app => {
    app.set('view engine', 'ejs')
    app.use(express.static(__dirname + '../../../../public'));
    app.use('/', router)
    routes.forEach(route => route(router))
}
