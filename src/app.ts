import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import userRouter from './app/users/user.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//global error handler
app.use(globalErrorHandler)

export default app
