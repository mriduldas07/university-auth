import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

//rourtes
//create-semester
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.academicSemesterZodSchema),
  academicSemesterController.createAcademicSemester,
);

router.get('/:id', academicSemesterController.getSingleSemester);

router.get('/', academicSemesterController.getAllSemester);
router.patch('/', academicSemesterController.updateSemester);

export const academicSemesterRoutes = router;
