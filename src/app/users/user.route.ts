import express from 'express'
import { userController } from './user.controllers'

const router = express.Router()

//rourtes
//create-user
router.post('/create-user', userController.createUser)

export default router
