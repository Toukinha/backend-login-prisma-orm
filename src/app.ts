import 'express-async-errors'
import express from 'express'
import userRoute from './routes/User.routes'
import CustomError from './middlewares/error.middleware'
import loginRouter from './routes/Login.routes'

const customError = new CustomError()

const app = express()

app.use(express.json())

app.use('/register', userRoute)
app.use('/login', loginRouter)

app.use(customError.handle)

export default app
