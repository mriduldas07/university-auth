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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementDepartmentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const managementDepartment_services_1 = require("./managementDepartment.services");
const createManagement = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const departmentData = __rest(req.body, []);
    const result = yield managementDepartment_services_1.ManagementDepartmentServices.createManagement(departmentData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Management Department created successfully',
        data: result,
    });
}));
// const getAllDepartment = catchAsync(async (req: Request, res: Response) => {
//   const filter = pick(req.query, academicDepartmentFilterableFields);
//   const paginationOptins = pick(req.query, paginationFields);
//   const result = await AcademicDepartmentServices.getAllDepartment(
//     filter,
//     paginationOptins,
//   );
//   sendResponse(res, {
//     statusCode: httpStatus.CREATED,
//     success: true,
//     message: 'Academic Department retrieved successfully',
//     data: result,
//   });
// });
// const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await AcademicDepartmentServices.getSingleDepartment(id);
//   sendResponse<IAcademicDepartment>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic Department retrieved successfully',
//     data: result,
//   });
// });
// const updateDepartment = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const { ...updatedData } = req.body;
//   const result = await AcademicDepartmentServices.updateDepartment(
//     id,
//     updatedData,
//   );
//   sendResponse<IAcademicDepartment>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic Department updated successfully',
//     data: result,
//   });
// });
// const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await AcademicDepartmentServices.deleteDepartment(id);
//   sendResponse<IAcademicDepartment>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic Department deleted successfully',
//     data: result,
//   });
// });
exports.ManagementDepartmentController = {
    createManagement,
};
