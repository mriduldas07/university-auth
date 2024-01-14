"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const academicSemester_validation_1 = require("./academicSemester.validation");
const router = express_1.default.Router();
//rourtes
//create-semester
router.post('/create-semester', (0, validateRequest_1.default)(academicSemester_validation_1.AcademicSemesterValidation.createAcademicSemesterZodSchema), academicSemester_controller_1.academicSemesterController.createAcademicSemester);
router.get('/:id', academicSemester_controller_1.academicSemesterController.getSingleSemester);
router.patch('/:id', (0, validateRequest_1.default)(academicSemester_validation_1.AcademicSemesterValidation.updateAcademicSemesterZodSchema), academicSemester_controller_1.academicSemesterController.updateSemester);
router.delete('/:id', academicSemester_controller_1.academicSemesterController.deleteSemester);
router.get('/', academicSemester_controller_1.academicSemesterController.getAllSemester);
exports.academicSemesterRoutes = router;
