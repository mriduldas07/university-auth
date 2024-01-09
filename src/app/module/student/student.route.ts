import express from 'express';

const router = express.Router();

//rourtes

//get students
router.get('/:id', StudentController.getSingleStudents);
router.get('/:id', StudentController.deleteStudent);
router.get('/', StudentController.getAllStudents);
//upadate student
// router.post(
//   '/create-student',
//   validateRequest(UserValidation.createUserZodSchema),
//   userController.createStudent,
// );

export const studentRoutes = router;
