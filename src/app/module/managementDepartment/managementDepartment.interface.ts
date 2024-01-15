import { Model } from 'mongoose';

export type IManagementDepartment = {
  title: string;
};

export type IManagementDepartmentModel = Model<IManagementDepartment, object>;
