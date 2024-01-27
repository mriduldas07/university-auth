import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  options: Record<string, unknown>,
): string => {
  return jwt.sign(payload, secret, options);
};

const verifiedToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const JwtHelpers = {
  createToken,
  verifiedToken,
};
