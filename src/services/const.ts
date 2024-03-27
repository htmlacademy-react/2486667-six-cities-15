import {StatusCodes} from 'http-status-codes';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const NOT_LOGGED = 'You are not logged in';
const AUTH_ERROR = 'Invalid username or password';

export {StatusCodeMapping, NOT_LOGGED, AUTH_ERROR};
