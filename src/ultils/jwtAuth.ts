import * as jwt from 'jsonwebtoken'
import { ILoginUser } from '../interfaces/CreateUserInterface'

const secret = process.env.JWT_SECRET || 'Touka'

const createToken = (data: ILoginUser) =>
  jwt.sign({ ...data }, secret, { algorithm: 'HS256', expiresIn: '07D' })

const verifyToken = (token: string) => jwt.verify(token, secret)

export { createToken, verifyToken }
