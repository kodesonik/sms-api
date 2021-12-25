import express from 'express'
import { routes } from '../routes/api'

const router = express.Router()

export default app => {
  app.use('/api', router)
  routes.forEach(route => route(router))
}
