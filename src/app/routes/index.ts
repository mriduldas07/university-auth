import express from 'express';
import { academicDepartmentRoutes } from '../module/academicDepartment/academicDepartment.route';
import { academicFacultyRoutes } from '../module/academicFaculty/academicFaculty.route';
import { academicSemesterRoutes } from '../module/academicSemister/academicSemester.route';
import { userRoutes } from '../module/users/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semester',
    route: academicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: academicDepartmentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
