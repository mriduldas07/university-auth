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
exports.genarateAdminId = exports.genarateFacultyId = exports.genarateStudentId = void 0;
const user_model_1 = require("./user.model");
// last student id
const findLastStudentId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudent = yield user_model_1.User.findOne({
        role: 'student',
    }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id) ? lastStudent.id.substring(4) : undefined;
});
// last faculty id
const findLastFacultyId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastFaculty = yield user_model_1.User.findOne({
        role: 'faculty',
    }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastFaculty === null || lastFaculty === void 0 ? void 0 : lastFaculty.id) ? lastFaculty.id.substring(2) : undefined;
});
// last admin id
const findLastAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastFaculty = yield user_model_1.User.findOne({
        role: 'admin',
    }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastFaculty === null || lastFaculty === void 0 ? void 0 : lastFaculty.id) ? lastFaculty.id.substring(2) : undefined;
});
// generate student id with last two digit of year + code + 5 digit string
const genarateStudentId = (academicSemester) => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield findLastStudentId()) || (0).toString().padStart(5, '0'); //00000 or database id
    // increment by 1
    let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrementalId = `${academicSemester.year.substring(2)}${academicSemester.code}${incrementalId}`;
    return incrementalId;
});
exports.genarateStudentId = genarateStudentId;
// generate faculty id with "F" and 5 digit string
const genarateFacultyId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield findLastFacultyId()) || (0).toString().padStart(5, '0');
    let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrementalId = `F-${incrementalId}`;
    return incrementalId;
});
exports.genarateFacultyId = genarateFacultyId;
// generate admin id with "A" and 5 digit string
const genarateAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield findLastAdminId()) || (0).toString().padStart(5, '0');
    let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrementalId = `A-${incrementalId}`;
    return incrementalId;
});
exports.genarateAdminId = genarateAdminId;
