import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';

const router = express.Router();

//rourtes

//get students
router.get('/:id', StudentController.getSingleStudent);
router.get('/:id', StudentController.deleteStudent);

//upadate student
router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudent,
);
router.get('/', StudentController.getAllStudents);

export const studentRoutes = router;
