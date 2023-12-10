import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { userController } from './user.controllers';

const router = express.Router();

//rourtes
//create-semester
router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.academicSemesterZodSchema),
  userController.createUser,
);

export default router;
