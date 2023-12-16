import express from 'express';
import { academicSemesterRoutes } from '../academicSemister/academicSemester.route';
import { userRoutes } from '../users/user.route';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
