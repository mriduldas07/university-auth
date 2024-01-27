import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../../config';
import ApiError from '../../../erros/ApiError';
import { AcademicSemester } from '../academicSemister/academicSemesterModel';
import { IAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';
import { IFaculty } from '../faculty/faculty.interface';
import { Faculty } from '../faculty/faculty.model';
import { IStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { User } from './user.model';
import {
  genarateAdminId,
  genarateFacultyId,
  genarateStudentId,
} from './user.utils';
import { IUser } from './users.interface';

const createStudent = async (
  student: IStudent,
  user: IUser,
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  // set role
  user.role = 'student';

  // find academic semester
  const academicSemester = await AcademicSemester.findById(
    student.academicSemester,
  );

  // user populated data for return
  let newUserAllData = null;
  // session for transaction
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // genarate student id
    const id = await genarateStudentId(academicSemester);
    user.id = id;
    student.id = id;

    // array of newStudent
    const newStudent = await Student.create([student], { session });

    if (!newStudent.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    // set student _id into user
    user.student = newStudent[0]._id;
    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = await newUser[0];
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'student',
      populate: [
        {
          path: 'academicSemester',
        },
        {
          path: 'academicDepartment',
        },
        {
          path: 'academicFaculty',
        },
      ],
    });
  }

  return newUserAllData;
};
const createFaculty = async (
  faculty: IFaculty,
  user: IUser,
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.default_faculty_pass as string;
  }

  // set role
  user.role = 'faculty';

  // user populated data for return
  let newUserAllData = null;
  // session for transaction
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // genarate faculty id
    const id = await genarateFacultyId();

    user.id = id;
    faculty.id = id;

    // array of new Faculty
    const newFaculty = await Faculty.create([faculty], { session });

    if (!newFaculty.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create faculty');
    }

    // set faculty _id into user
    user.faculty = newFaculty[0]._id;
    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = await newUser[0];
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'faculty',
      populate: [
        {
          path: 'academicDepartment',
        },
        {
          path: 'academicFaculty',
        },
      ],
    });
  }

  return newUserAllData;
};
const createAdmin = async (
  admin: IAdmin,
  user: IUser,
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.default_admin_pass as string;
  }

  // set role
  user.role = 'admin';

  // user populated data for return
  let newUserAllData = null;
  // session for transaction
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // genarate admin id
    const id = await genarateAdminId();

    user.id = id;
    admin.id = id;

    // array of new Admin
    const newAdmin = await Admin.create([admin], { session });

    if (!newAdmin.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    // set admin _id into user
    user.admin = newAdmin[0]._id;
    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    newUserAllData = await newUser[0];
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'admin',
      populate: [
        {
          path: 'managementDepartment',
        },
      ],
    });
  }

  return newUserAllData;
};

export const userServices = {
  createStudent,
  createFaculty,
  createAdmin,
};
