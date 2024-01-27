import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../erros/ApiError';
import { JwtHelpers } from '../../../helpers/jwtHelper';
import { User } from '../users/user.model';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { id, password } = payload;

  //check user exists
  // const user = new User();
  // const isUserExists = await user.isUserExists(id);

  const isUserExists = await User.isUserExists(id);

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // match password with bcrypt hashed
  if (
    isUserExists.password &&
    !(await User.isPasswordMatched(password, isUserExists.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  // create access token and refresh token
  // const accessToken = Jwt.sign(
  //   {
  //     id: isUserExists.id,
  //     role: isUserExists.role,
  //   },
  //   config.jwt.secret as Secret,
  //   {
  //     expiresIn: config.jwt.exp_in,
  //   },
  // );

  const { id: userId, needPasswordChange, role } = isUserExists;

  const accessToken = JwtHelpers.createToken(
    {
      id: userId,
      role: role,
    },
    config.jwt.secret as Secret,
    {
      expiresIn: config.jwt.exp_in,
    },
  );
  const refreshToken = JwtHelpers.createToken(
    {
      id: userId,
      role: role,
    },
    config.jwt.refresh_secret as Secret,
    {
      expiresIn: config.jwt.exp_refresh_in,
    },
  );
  // const refreshToken = Jwt.sign(
  //   {
  //     id: isUserExists.id,
  //     role: isUserExists.role,
  //   },
  //   config.jwt.refresh_secret as Secret,
  //   {
  //     expiresIn: config.jwt.exp_refresh_in,
  //   },
  // );

  return {
    accessToken,
    refreshToken,
    needPasswordChange,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = JwtHelpers.verifiedToken(
      token,
      config.jwt.refresh_secret as Secret,
    );
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid refresh token');
  }

  const { id } = verifiedToken;

  const isUserExists = await User.isUserExists(id);

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');
  }

  // genarate new token
  const newAccessToken = JwtHelpers.createToken(
    {
      id: isUserExists.id,
      role: isUserExists.role,
    },
    config.jwt.secret as Secret,
    {
      expiresIn: config.jwt.exp_in,
    },
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthServices = {
  loginUser,
  refreshToken,
};
