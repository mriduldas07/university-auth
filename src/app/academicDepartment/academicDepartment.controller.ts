import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../shared/catchAsync';
import sendResponse from '../shared/sendResponse';
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

export const AcademicDepartmentController = {
  createDepartment,
};
