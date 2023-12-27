import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../shared/catchAsync';
import sendResponse from '../shared/sendResponse';
import { userServices } from './user.services';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body;
  const result = await userServices.createUser(user);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const userController = {
  createUser,
};
