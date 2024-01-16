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
const pagination_1 = require("../../../constants/pagination");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const managementDepartment_constant_1 = require("./managementDepartment.constant");
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
const getAllManagement = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pick_1.default)(req.query, managementDepartment_constant_1.managementDepartmentFilterableFields);
    const paginationOptins = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield managementDepartment_services_1.ManagementDepartmentServices.getAllManagement(filter, paginationOptins);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Management Department retrieved successfully',
        data: result,
    });
}));
const getSingleManagement = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield managementDepartment_services_1.ManagementDepartmentServices.getSingleManagement(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Management Department retrieved successfully',
        data: result,
    });
}));
const updateManagement = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = __rest(req.body, []);
    const result = yield managementDepartment_services_1.ManagementDepartmentServices.updateManagement(id, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Management Department updated successfully',
        data: result,
    });
}));
const deleteManagement = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield managementDepartment_services_1.ManagementDepartmentServices.deleteManagement(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Management Department deleted successfully',
        data: result,
    });
}));
exports.ManagementDepartmentController = {
    createManagement,
    getAllManagement,
    getSingleManagement,
    updateManagement,
    deleteManagement,
};
