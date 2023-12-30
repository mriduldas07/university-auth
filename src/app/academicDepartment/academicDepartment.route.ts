import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDeparment.validation';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentController.createDepartment,
);
router.get('/', AcademicDepartmentController.getAllDepartment);

export const academicDepartmentRoutes = router;
