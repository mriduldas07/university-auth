import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../shared/catchAsync';
import pick from '../../shared/pick';
import sendResponse from '../../shared/sendResponse';
import { managementDepartmentFilterableFields } from './managementDepartment.constant';
import { IManagementDepartment } from './managementDepartment.interface';
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

const getSingleManagement = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ManagementDepartmentServices.getSingleManagement(id);

  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management Department retrieved successfully',
    data: result,
  });
});

const updateManagement = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const { ...updatedData } = req.body;

  const result = await ManagementDepartmentServices.updateManagement(
    id,
    updatedData,
  );

  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management Department updated successfully',
    data: result,
  });
});

const deleteManagement = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ManagementDepartmentServices.deleteManagement(id);

  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management Department deleted successfully',
    data: result,
  });
});

export const ManagementDepartmentController = {
  createManagement,
  getAllManagement,
  getSingleManagement,
  updateManagement,
  deleteManagement,
};
