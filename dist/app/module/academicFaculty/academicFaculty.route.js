"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const academicFaculty_validation_1 = require("./academicFaculty.validation");
// import validateRequest from '../middlewares/validateRequest';
const router = express_1.default.Router();
//rourtes
router.post('/create-faculty', (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.createAcademicFacultyZodSchema), academicFaculty_controller_1.academicFacultyController.createAcademicFaculty);
router.get('/:id', academicFaculty_controller_1.academicFacultyController.getSingelFaculty);
router.patch('/:id', (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.updateAcademicFacultyZodSchema), academicFaculty_controller_1.academicFacultyController.updateFaculty);
router.delete('/:id', academicFaculty_controller_1.academicFacultyController.deleteFaculty);
router.get('/', academicFaculty_controller_1.academicFacultyController.getAllFaculty);
exports.academicFacultyRoutes = router;
