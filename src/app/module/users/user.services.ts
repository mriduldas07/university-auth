import config from '../../../config';
import { AcademicSemester } from '../academicSemister/academicSemesterModel';
import { IStudent } from '../student/student.interface';
import { User } from './user.model';
import { genarateStudentId } from './user.utils';
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

  // genarate student id
  const id = await genarateStudentId(academicSemester);
  const createUser = await User.create(user);
  if (!createUser) {
    throw new Error('Failed to create user');
  }
  return createUser;
};

export const userServices = {
  createStudent,
};
