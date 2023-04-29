import { User } from '@prisma/client'
import AppError from '../errors/AppErrors'
import { ILoginUser } from '../interfaces/CreateUserInterface'
import { prisma } from '../prisma/client'
import Bcrypt from '../ultils/bcrypt'

export default class LoginService {
  async login(userData: ILoginUser): Promise<User> {
    const bcrypt = new Bcrypt()
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    })
    if (!user) {
      throw new AppError('Invalid email or password', 401)
    }
    if (!bcrypt.compare(userData.password, user.password)) {
      throw new AppError('Invalid email or password', 401)
    }
    return user
  }
}
