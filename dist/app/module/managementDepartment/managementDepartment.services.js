"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementDepartmentServices = void 0;
const managementDepartment_model_1 = require("./managementDepartment.model");
const createManagement = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield managementDepartment_model_1.ManagementDepartment.create(payload);
    return result;
});
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
exports.ManagementDepartmentServices = {
    createManagement,
};
