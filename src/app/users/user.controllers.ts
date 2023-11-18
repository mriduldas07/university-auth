import { RequestHandler } from 'express'
import { userServices } from './user.services'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await userServices.createUser(user)
    res.status(201).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  createUser,
}
