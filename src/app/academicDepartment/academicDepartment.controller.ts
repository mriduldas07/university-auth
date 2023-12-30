import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../constants/pagination';
import catchAsync from '../shared/catchAsync';
import pick from '../shared/pick';
import sendResponse from '../shared/sendResponse';
import { academicDepartmentFilterableFields } from './academicDepartment.constant';
import { AcademicDepartmentServices } from './academicDepartment.services';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...departmentData } = req.body;
  const result =
    await AcademicDepartmentServices.createDepartment(departmentData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Academic Department created successfully',
    data: result,
  });
});

const getAllDepartment = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, academicDepartmentFilterableFields);
  const paginationOptins = pick(req.query, paginationFields);

  const result = await AcademicDepartmentServices.getAllDepartment(
    filter,
    paginationOptins,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Academic Department retrieved successfully',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartment,
};
