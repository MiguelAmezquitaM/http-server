import { Request, Response } from 'express'
import userRepository from './repository'

export default class UsersController {
  public async get(req: Request, res: Response) {
    const users = await userRepository.getUsers()
    res.send(users)
  }

  public async getByID(req: Request, res: Response) {
    const id = req.params.id
    const user = await userRepository.getUserById(id)

    if (!user)
      return res
        .status(404)
        .send({ message: `No existe un usuario con id ${id}` })
    res.send({ user })
  }

  public async create(req: Request, res: Response) {
    const body = req.body
    let newUser

    const repeatedEmail = await userRepository.getUserWhereEmail(body.email)

    if (repeatedEmail)
      return res.status(400).send({ message: 'The email is already in use' })

    try {
      newUser = await userRepository.createUser(body)
    } catch (err: any) {
      return res.status(400).send(err.message)
    }

    res.send(newUser)
  }
}
