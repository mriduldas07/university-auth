"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controllers_1 = require("./user.controllers");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
//rourtes
//create-student
router.post('/create-student', (0, validateRequest_1.default)(user_validation_1.UserValidation.createStudentZodSchema), user_controllers_1.userController.createStudent);
//create faculty
router.post('/create-faculty', (0, validateRequest_1.default)(user_validation_1.UserValidation.createFacultyZodSchema), user_controllers_1.userController.createFaculty);
// create admin
router.post('/create-admin', (0, validateRequest_1.default)(user_validation_1.UserValidation.createAdminZodSchema), user_controllers_1.userController.createAdmin);
exports.userRoutes = router;
