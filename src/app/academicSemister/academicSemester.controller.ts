import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../constants/pagination';
import catchAsync from '../shared/catchAsync';
import pick from '../shared/pick';
import sendResponse from '../shared/sendResponse';
import { academicSemesterFilterableFields } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
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
    const filters = pick(req.query, academicSemesterFilterableFields);

    const paginationOptions = pick(req.query, paginationFields);

    const result = await academicSemesterServices.getAllSemesters(
      filters,
      paginationOptions,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semesters retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  },
);

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await academicSemesterServices.getSingleSemester(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrieved successfully',
      data: result,
    });
    next();
  },
);

const updateSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const academicSemesterController = {
  createAcademicSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
};
