import { IAcademicSemester } from '../academicSemister/academicSemester.interface';
import { User } from './user.model';

// last student id
const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id.substring(4) : undefined;
};

// last faculty id
const findLastFacultyId = async () => {
  const lastFaculty = await User.findOne(
    {
      role: 'faculty',
    },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

// generate student id with last two digit of year + code + 5 digit string
export const genarateStudentId = async (
  academicSemester: IAcademicSemester | null,
) => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0'); //00000 or database id
  // increment by 1
  let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementalId = `${academicSemester!.year.substring(2)}${
    academicSemester!.code
  }${incrementalId}`;

  return incrementalId;
};

// generate faculty id with "F" and 5 digit string
export const genarateFacultyId = async () => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');

  let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementalId = `F-${incrementalId}`;

  return incrementalId;
};
