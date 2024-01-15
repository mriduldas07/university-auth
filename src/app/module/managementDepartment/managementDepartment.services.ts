import { IManagementDepartment } from './managementDepartment.interface';
import { ManagementDepartment } from './managementDepartment.model';

const createManagement = async (
  payload: IManagementDepartment,
): Promise<IManagementDepartment> => {
  const result = await ManagementDepartment.create(payload);
  return result;
};

// const getAllDepartment = async (
//   filters: IAcademicDepartmentFilters,
//   paginationOptins: IPaginationOptions,
// ): Promise<IGenericResponse<IAcademicDepartment[]>> => {
//   const { limit, page, skip, sortBy, sortOrder } =
//     paginationHelpers.calculatePagination(paginationOptins);

//   const { searchTerm, ...filtersData } = filters;

//   const andConditions = [];

//   if (searchTerm) {
//     andConditions.push({
//       $or: academicDepartmentSearchableFields.map(field => ({
//         [field]: {
//           $regex: searchTerm,
//           $options: 'i',
//         },
//       })),
//     });
//   }

//   if (Object.keys(filtersData).length) {
//     andConditions.push({
//       $and: Object.entries(filtersData).map(([field, value]) => ({
//         [field]: value,
//       })),
//     });
//   }

//   const sortConditions: {
//     [key: string]: SortOrder;
//   } = {};
//   if (sortBy && sortOrder) {
//     sortConditions[sortBy] = sortOrder;
//   }

//   const whereConditions =
//     andConditions.length > 0 ? { $and: andConditions } : {};

//   const result = await AcademicDepartment.find(whereConditions)
//     .populate('academicFaculty')
//     .sort(sortConditions)
//     .skip(skip)
//     .limit(limit);
//   const total = await AcademicDepartment.countDocuments();
//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };

// const getSingleDepartment = async (
//   id: string,
// ): Promise<IAcademicDepartment | null> => {
//   const result =
//     await AcademicDepartment.findById(id).populate('academicFaculty');
//   return result;
// };

// const updateDepartment = async (
//   id: string,
//   payload: Partial<IAcademicDepartment>,
// ): Promise<IAcademicDepartment | null> => {
//   const result = await AcademicDepartment.findOneAndUpdate(
//     { _id: id },
//     payload,
//     {
//       new: true,
//     },
//   ).populate('academicFaculty');
//   return result;
// };

// const deleteDepartment = async (
//   id: string,
// ): Promise<IAcademicDepartment | null> => {
//   const result =
//     await AcademicDepartment.findByIdAndDelete(id).populate('academicFaculty');
//   return result;
// };

export const ManagementDepartmentServices = {
  createManagement,
};
