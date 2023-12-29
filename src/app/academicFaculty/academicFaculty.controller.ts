import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../constants/pagination';
import catchAsync from '../shared/catchAsync';
import pick from '../shared/pick';
import sendResponse from '../shared/sendResponse';
import { academicFacultyFilterableFields } from './academicFaculty.constant';
import { IAcademicFaculty } from './academicFaculty.interface';
import { academicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicFacultyData } = req.body;
    const result =
      await academicFacultyServices.createFaculty(academicFacultyData);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Academic faculty created successfully',
      data: result,
    });
  },
);

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await academicFacultyServices.getAllFaculties(
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
});

const getSingelFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await academicFacultyServices.getSingleFaculty(id);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty retrieved successfully',
    data: result,
  });
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const updatedData = req.body;

  const result = await academicFacultyServices.updatedFaculty(id, updatedData);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester updated successfully',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await academicFacultyServices.deleteFaculty(id);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty deleted successfully',
    data: result,
  });
});

export const academicFacultyController = {
  createAcademicFaculty,
  getAllFaculty,
  getSingelFaculty,
  updateFaculty,
  deleteFaculty,
};
