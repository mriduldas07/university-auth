import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
// import validateRequest from '../middlewares/validateRequest';

const router = express.Router();

//rourtes

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyZodSchema),
  academicFacultyController.createAcademicFaculty,
);

router.get('/:id', academicFacultyController.getSingelFaculty);
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
  academicFacultyController.updateFaculty,
);
router.delete('/:id', academicFacultyController.deleteFaculty);

router.get('/', academicFacultyController.getAllFaculty);

export const academicFacultyRoutes = router;
