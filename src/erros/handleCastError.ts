import mongoose from 'mongoose';
import { IGenericErorMessages } from '../app/interfaces/error';

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErorMessages[] = [
    {
      path: error.path,
      message: 'Invalid Id',
    },
  ];

  return {
    statusCode: 400,
    message: 'Cast Error',
    errorMessages: errors,
  };
};

export default handleCastError;
