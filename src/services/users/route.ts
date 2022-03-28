import { Router } from 'express'
import UsersController from './controller'

function UserRouter() {
  const router = Router()
  const controller = new UsersController()

  router.get('/api/users', controller.get)
  router.get('/api/users/:id', controller.getByID)
  router.post('/api/users/', controller.create)

  return router
}

export default UserRouter
