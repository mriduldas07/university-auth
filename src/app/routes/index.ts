import express from 'express';
import { academicDepartmentRoutes } from '../module/academicDepartment/academicDepartment.route';
import { academicFacultyRoutes } from '../module/academicFaculty/academicFaculty.route';
import { academicSemesterRoutes } from '../module/academicSemister/academicSemester.route';
import { adminRoutes } from '../module/admin/admin.route';
import { facultyRoutes } from '../module/faculty/faculty.route';
import { managementDepartmentRoutes } from '../module/managementDepartment/managementDepartment.route';
import { studentRoutes } from '../module/student/student.route';
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
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/faculties',
    route: facultyRoutes,
  },
  {
    path: '/admins',
    route: adminRoutes,
  },
  {
    path: '/management-departments',
    route: managementDepartmentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
