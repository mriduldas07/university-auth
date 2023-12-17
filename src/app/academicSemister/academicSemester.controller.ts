import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../constants/pagination';
import catchAsync from '../shared/catchAsync';
import pick from '../shared/pick';
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

const getAllSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const paginationOptions = {
    //   page: Number(req.query.page),
    //   limit: Number(req.query.limit),
    //   sortBy: req.query.sortBy,
    //   sortOrder: req.query.sortOrder,
    // };

    const paginationOptions = pick(req.query, paginationFields);

    const result =
      await academicSemesterServices.getAllSemesters(paginationOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retirieved successfully',
      data: result,
    });
    next();
  },
);

export const academicSemesterController = {
  createAcademicSemester,
  getAllSemester,
};
