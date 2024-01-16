"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.managementDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const managementDepartment_controller_1 = require("./managementDepartment.controller");
const managementDepartment_validation_1 = require("./managementDepartment.validation");
const router = express_1.default.Router();
// create management
router.post('/create-management', (0, validateRequest_1.default)(managementDepartment_validation_1.ManagementDepartmentValidation.createManagementDepartmentZodSchema), managementDepartment_controller_1.ManagementDepartmentController.createManagement);
// upadate management
router.patch('/:id', (0, validateRequest_1.default)(managementDepartment_validation_1.ManagementDepartmentValidation.updateManagementDepartmentZodSchema), managementDepartment_controller_1.ManagementDepartmentController.updateManagement);
// delete management
router.delete('/:id', managementDepartment_controller_1.ManagementDepartmentController.deleteManagement);
// get single management
router.get('/:id', managementDepartment_controller_1.ManagementDepartmentController.getSingleManagement);
// get all management
router.get('/', managementDepartment_controller_1.ManagementDepartmentController.getAllManagement);
exports.managementDepartmentRoutes = router;
