import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../shared/catchAsync';
import sendResponse from '../shared/sendResponse';
import { academicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result =
      await academicSemesterServices.creatSemester(academicSemesterData);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
    next();
  },
);

export const academicSemesterController = {
  createAcademicSemester,
};
