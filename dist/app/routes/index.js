"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const academicDepartment_route_1 = require("../module/academicDepartment/academicDepartment.route");
const academicFaculty_route_1 = require("../module/academicFaculty/academicFaculty.route");
const academicSemester_route_1 = require("../module/academicSemister/academicSemester.route");
const faculty_route_1 = require("../module/faculty/faculty.route");
const student_route_1 = require("../module/student/student.route");
const user_route_1 = require("../module/users/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.userRoutes,
    },
    {
        path: '/academic-semester',
        route: academicSemester_route_1.academicSemesterRoutes,
    },
    {
        path: '/academic-faculty',
        route: academicFaculty_route_1.academicFacultyRoutes,
    },
    {
        path: '/academic-department',
        route: academicDepartment_route_1.academicDepartmentRoutes,
    },
    {
        path: '/students',
        route: student_route_1.studentRoutes,
    },
    {
        path: '/faculties',
        route: faculty_route_1.facultyRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
