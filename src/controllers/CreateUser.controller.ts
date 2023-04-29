import { Request, Response } from 'express'
import CreateUserService from '../services/CreateUser.service'
export default class CreateUser {
  constructor(private createUserService = new CreateUserService()) {}

  handle = async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    const response = await this.createUserService.execute({
      name,
      email,
      password,
    })

    return res.status(201).json(response)
  }
}
