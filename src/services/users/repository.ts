import { User } from './model'

/* Mongo DB */
class UserRepository {
  public async getUsers() {
    try {
      const users = await User.findAll()
      return users
    } catch (err) {
      console.log(err)
    }
  }

  public async getUserById(id: string) {
    const user = await User.findByPk(id)

    return user
  }

  public async createUser(user: {}) {
    const newUser = await User.create(user)

    await newUser.save()
    return newUser
  }

  public async getUserWhereEmail(email: string) {
    const user = await User.findOne({
      where: {
        email,
      },
    })

    return user
  }

  public deleteUserById(id: string) {}
}

const userRepository = new UserRepository()

export default userRepository
