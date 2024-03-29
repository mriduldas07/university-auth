import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../erros/ApiError';
import { JwtHelpers } from '../../helpers/jwtHelper';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }

      // verfiy token
      let verifiedUser = null;

      verifiedUser = JwtHelpers.verifiedToken(
        token,
        config.jwt.secret as Secret,
      );

      if (!verifiedUser) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Invalid token');
      }

      req.user = verifiedUser;

      // role based authorization
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
