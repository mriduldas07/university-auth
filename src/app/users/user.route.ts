import express from 'express';
import { userController } from './user.controllers';
import validateRequest from '../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

//rourtes
//create-user
router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  userController.createUser,
);

export default router;
