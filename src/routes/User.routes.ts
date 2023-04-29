import { Router } from 'express'
import CreateUser from '../controllers/CreateUser.controller'

const userRoute = Router()
const createUser = new CreateUser()

userRoute.post('/', createUser.handle)

export default userRoute
