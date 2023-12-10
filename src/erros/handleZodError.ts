import { ZodError, ZodIssue } from 'zod';
import { IGenericErorMessages } from '../app/interfaces/error';

export default function handleZodError(error: ZodError) {
  const errors: IGenericErorMessages[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
}
