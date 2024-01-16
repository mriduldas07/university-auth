/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../interfaces/common';
import { IPaginationOptions } from '../../interfaces/pagination';
import { adminSearchableFields } from './admin.constant';
import { IAdmin, IAdminFilters } from './admin.interface';
import { Admin } from './admin.model';

const getAllAdmins = async (
  filters: IAdminFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IAdmin[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: adminSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }
  const sortConditions: {
    [key: string]: SortOrder;
  } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Admin.find(whereConditions)
    .populate('managementDepartment')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Admin.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// const getSingleFaculty = async (id: string): Promise<IFaculty | null> => {
//   const result = await Faculty.findById(id)
//     .populate('academicFaculty')
//     .populate('academicDepartment');
//   return result;
// };
// const updatedFaculty = async (
//   id: string,
//   payload: Partial<IFaculty>,
// ): Promise<IFaculty | null> => {
//   const isExists = await Faculty.findOne({ id });

//   if (!isExists) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Faculty not found');
//   }

//   const { name, ...facultyData } = payload;

//   const updatedFacultyData: Partial<IFaculty> = { ...facultyData };

//   if (name && Object.keys(name).length > 0) {
//     Object.keys(name).forEach(key => {
//       const nameKey = `name.${key}`;

//       (updatedFacultyData as any)[nameKey] = name[key as keyof typeof name];
//     });
//   }

//   const result = await Faculty.findOneAndUpdate({ id }, updatedFacultyData, {
//     new: true,
//   });
//   return result;
// };

// const deleteStudent = async (id: string): Promise<IStudent | null> => {
//   const result = await Student.findByIdAndDelete(id)
//     .populate('academicFaculty')
//     .populate('academicDepartment')
//     .populate('academicSemester');
//   return result;
// };

export const AdminServices = {
  getAllAdmins,
};
