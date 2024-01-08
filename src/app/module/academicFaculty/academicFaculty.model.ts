import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../../../erros/ApiError';
import {
  AcademicFacultyModel,
  IAcademicFaculty,
} from './academicFaculty.interface';

const academicFacaltySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

academicFacaltySchema.pre('save', async function (next) {
  const isExist = await AcademicFaculty.findOne({
    title: this.title,
  });

  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Fsculty already exists!!',
    );
  }
  next();
});

export const AcademicFaculty = model<IAcademicFaculty, AcademicFacultyModel>(
  'AcademicFaculty',
  academicFacaltySchema,
);
