import { NextFunction, Request, Response } from 'express'

export default class LoginMiddleware {
  handle = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    const pattern = /[\w-.]+@[\w]+.com/

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' })
    }
    if (!pattern.test(email)) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    if (password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
    return next()
  }
}
