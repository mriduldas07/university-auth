import express from 'express';
import { FacultiesController } from './faculty.controller';

const router = express.Router();

//rourtes

//get single faculties
router.get('/:id');
router.get('/:id');

//upadate faculties
router.patch('/:id');
// get faculties
router.get('/', FacultiesController.getAllFaculties);

export const facultyRoutes = router;
