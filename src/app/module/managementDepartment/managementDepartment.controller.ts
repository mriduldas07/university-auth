import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../shared/catchAsync';
import pick from '../../shared/pick';
import sendResponse from '../../shared/sendResponse';
import { managementDepartmentFilterableFields } from './managementDepartment.constant';
import { ManagementDepartmentServices } from './managementDepartment.services';

const createManagement = catchAsync(async (req: Request, res: Response) => {
  const { ...departmentData } = req.body;
  const result =
    await ManagementDepartmentServices.createManagement(departmentData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Management Department created successfully',
    data: result,
  });
});

const getAllManagement = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, managementDepartmentFilterableFields);
  const paginationOptins = pick(req.query, paginationFields);

  const result = await ManagementDepartmentServices.getAllManagement(
    filter,
    paginationOptins,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management Department retrieved successfully',
    data: result,
  });
});

// const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await AcademicDepartmentServices.getSingleDepartment(id);

//   sendResponse<IAcademicDepartment>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic Department retrieved successfully',
//     data: result,
//   });
// });

// const updateDepartment = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const { ...updatedData } = req.body;

//   const result = await AcademicDepartmentServices.updateDepartment(
//     id,
//     updatedData,
//   );

//   sendResponse<IAcademicDepartment>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic Department updated successfully',
//     data: result,
//   });
// });

// const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await AcademicDepartmentServices.deleteDepartment(id);

//   sendResponse<IAcademicDepartment>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic Department deleted successfully',
//     data: result,
//   });
// });

export const ManagementDepartmentController = {
  createManagement,
  getAllManagement,
};
