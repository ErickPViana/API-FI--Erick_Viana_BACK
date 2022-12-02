import { Router, Request, Response } from 'express'
import { getUsrEP, getEP, saveEP, updateEP, removeEP } from './controller/UserController'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Td certo' })
})

routes.get('/EP', getUsrEP)
routes.get('/EP/:id', getEP)
routes.post('/EP', saveEP)
routes.put('/EP/:id', updateEP)
routes.delete('/EP/:id', removeEP)

export default routes