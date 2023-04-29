import { Router } from 'express'
import LoginUser from '../controllers/LoginUser.controller'
import LoginMiddleware from '../middlewares/login.middleware'

const loginRouter = Router()
const loginUser = new LoginUser()

loginRouter.post('/', new LoginMiddleware().handle, loginUser.login)

export default loginRouter
