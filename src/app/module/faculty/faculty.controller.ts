import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../shared/catchAsync';
import pick from '../../shared/pick';
import sendResponse from '../../shared/sendResponse';
import { facultyFilterableFields } from './faculty.constant';
import { IFaculty } from './faculty.interface';
import { FacultyServices } from './faculty.services';

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, facultyFilterableFields);

  const paginationOptions = pick(req.query, paginationFields);

  const result = await FacultyServices.getAllFaculties(
    filters,
    paginationOptions,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await FacultyServices.getSingleFaculty(id);

  sendResponse<IFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty retrieved successfully',
    data: result,
  });
});

// const updateStudent = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const updatedData = req.body;

//   const result = await StudentServices.updatedStudent(id, updatedData);

//   sendResponse<IStudent>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Student updated successfully',
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

export const FacultiesController = {
  getAllFaculties,
  getSingleFaculty,
};
