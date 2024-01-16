import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../shared/catchAsync';
import pick from '../../shared/pick';
import sendResponse from '../../shared/sendResponse';
import { adminFilterableFields } from './admin.constant';
import { IAdmin } from './admin.interface';
import { AdminServices } from './admin.services';

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, adminFilterableFields);

  const paginationOptions = pick(req.query, paginationFields);

  const result = await AdminServices.getAllAdmins(filters, paginationOptions);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admins retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AdminServices.getSingleAdmin(id);

  sendResponse<IAdmin>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin retrieved successfully',
    data: result,
  });
});

// const updatedFaculty = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const updatedData = req.body;

//   const result = await FacultyServices.updatedFaculty(id, updatedData);

//   sendResponse<IFaculty>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Faculty updated successfully',
//     data: result,
//   });
// });

// const deleteStudent = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await StudentServices.deleteStudent(id);

//   sendResponse<IStudent>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Student deleted successfully',
//     data: result,
//   });
// });

export const AdminsController = {
  getAllAdmins,
  getSingleAdmin,
};
