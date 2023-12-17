import httpStatus from 'http-status';
import ApiError from '../../erros/ApiError';
import { IPaginationOptions } from '../interfaces/pagination';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemesterModel';

const creatSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllSemesters = (paginationOptions: IPaginationOptions) => {};

export const academicSemesterServices = {
  creatSemester,
  getAllSemesters,
};
