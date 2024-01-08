import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userController } from './user.controllers';
import { UserValidation } from './user.validation';

const router = express.Router();

//rourtes
//create-user
router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  userController.createStudent,
);

export const userRoutes = router;
