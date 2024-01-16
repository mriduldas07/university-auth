import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AdminsController } from './admin.controller';
import { AdminValidation } from './admin.validation';

const router = express.Router();

//rourtes

//get single admins
router.get('/:id', AdminsController.getSingleAdmin);
router.get('/:id');

//upadate admins
router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdminZodSchema),
  AdminsController.updatedAdmin,
);
// get admins
router.get('/', AdminsController.getAllAdmins);

export const adminRoutes = router;
