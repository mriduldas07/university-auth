import express from 'express';
import { AdminsController } from './admin.controller';

const router = express.Router();

//rourtes

//get single admins
router.get('/:id', AdminsController.getSingleAdmin);
router.get('/:id');

//upadate admins
router.patch('/:id');
// get admins
router.get('/', AdminsController.getAllAdmins);

export const adminRoutes = router;
