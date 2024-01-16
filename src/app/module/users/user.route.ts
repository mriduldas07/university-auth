import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userController } from './user.controllers';
import { UserValidation } from './user.validation';

const router = express.Router();

//rourtes
//create-student
router.post(
  '/create-student',
  validateRequest(UserValidation.createStudentZodSchema),
  userController.createStudent,
);

//create faculty
router.post(
  '/create-faculty',
  validateRequest(UserValidation.createFacultyZodSchema),
  userController.createFaculty,
);
// create admin
router.post(
  '/create-admin',
  validateRequest(UserValidation.createAdminZodSchema),
  userController.createAdmin,
);

export const userRoutes = router;
