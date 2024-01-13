import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultiesController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

//rourtes

//get single faculties
router.get('/:id', FacultiesController.getSingleFaculty);
router.get('/:id');

//upadate faculties
router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFacultyZodSchema),
  FacultiesController.updatedFaculty,
);
// get faculties
router.get('/', FacultiesController.getAllFaculties);

export const facultyRoutes = router;
