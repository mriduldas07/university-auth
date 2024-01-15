import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmentController } from './managementDepartment.controller';
import { ManagementDepartmentValidation } from './managementDepartment.validation';

const router = express.Router();
// create management
router.post(
  '/create-management',
  validateRequest(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema,
  ),
  ManagementDepartmentController.createManagement,
);
// upadate management
router.patch(
  '/:id',
  validateRequest(
    ManagementDepartmentValidation.updateManagementDepartmentZodSchema,
  ),
  ManagementDepartmentController.updateManagement,
);
// delete management
router.delete('/:id', ManagementDepartmentController.deleteManagement);
// get single management
router.get('/:id', ManagementDepartmentController.getSingleManagement);
// get all management
router.get('/', ManagementDepartmentController.getAllManagement);

export const managementDepartmentRoutes = router;
