import { Model, Types } from 'mongoose';
import { IAdmin } from '../admin/admin.interface';
import { IFaculty } from '../faculty/faculty.interface';
import { IStudent } from '../student/student.interface';

export type IUser = {
  id: string;
  role: string;
  password: string;
  needPasswordChange: true | false;
  student?: Types.ObjectId | IStudent;
  faculty?: Types.ObjectId | IFaculty;
  admin?: Types.ObjectId | IAdmin;
};

// export type IUserMethods = {
//   isUserExists(id: string): Promise<Partial<IUser | null>>;
//   isPasswordMatched(givenPass: string, savedPass: string): Promise<boolean>;
// };

export type UserModel = {
  isUserExists(
    id: string,
  ): Promise<Pick<IUser, 'id' | 'password' | 'needPasswordChange' | 'role'>>;
  isPasswordMatched(givenPass: string, savedPass: string): Promise<boolean>;
} & Model<IUser>;

// export type UserModel = Model<IUser, object, IUserMethods>;
