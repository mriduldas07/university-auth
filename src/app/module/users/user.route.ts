import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userController } from './user.controllers';
import { UserValidation } from './user.validation';

const router = express.Router();

//rourtes
//create-user
router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  userController.createUser,
);

export const userRoutes = router;
