import { Request, Response } from 'express'
import { ILoginUser } from '../interfaces/CreateUserInterface'
import LoginService from '../services/Login.service'
import { createToken } from '../ultils/jwtAuth'

export default class Login {
  constructor(private loginService = new LoginService()) {}
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const loginData: ILoginUser = { email, password }
    const response = await this.loginService.login(loginData)

    const token = createToken({
      email: response.email,
      password: response.password,
    })

    return res.status(200).json({ token })
  }
}
