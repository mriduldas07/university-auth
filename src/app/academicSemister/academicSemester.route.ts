import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

//rourtes
//create-semester
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createAcademicSemester,
);

router.get('/:id', academicSemesterController.getSingleSemester);

router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterController.updateSemester,
);
router.delete('/:id', academicSemesterController.deleteSemester);
router.get('/', academicSemesterController.getAllSemester);

export const academicSemesterRoutes = router;
