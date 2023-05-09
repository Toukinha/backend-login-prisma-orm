import { User } from '@prisma/client'
import AppError from '../errors/AppErrors'
import { ICreateUser } from '../interfaces/CreateUserInterface'
import { prisma } from '../prisma/client'
import Bcrypt from '../ultils/bcrypt'

export default class CreateUser {
  async execute({ name, email, password }: ICreateUser): Promise<User> {
    const bcrypt = new Bcrypt()
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userAlreadyExists) {
      throw new AppError('User already exists!')
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: await bcrypt.code(password),
      },
    })
    return user
  }
}
