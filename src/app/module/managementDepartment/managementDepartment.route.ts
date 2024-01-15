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

router.patch('/:id');
router.delete('/:id');
// get single management
router.get('/:id', ManagementDepartmentController.getSingleManagement);
// get all management
router.get('/', ManagementDepartmentController.getAllManagement);

export const managementDepartmentRoutes = router;
