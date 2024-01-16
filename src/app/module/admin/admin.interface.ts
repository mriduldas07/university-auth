import { Model, Types } from 'mongoose';
import { IManagementDepartment } from '../managementDepartment/managementDepartment.interface';

type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type IAdmin = {
  id: string;
  name: UserName;
  dateOfBirth: string;
  gender: 'male' | 'female';
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  designation: string;
  profileImage?: string;
  managementDepartment: Types.ObjectId | IManagementDepartment;
};

export type AdminModel = Model<IAdmin, object>;

export type IAdminFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};
