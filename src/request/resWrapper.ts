import { CommonRes } from './common';

const RES_WRAPPER = <T>(data: T, msg: string, code: number): CommonRes<T> => ({
  data,
  msg,
  code,
});

export const SUCCESS_RES = <T>(data: T, msg = 'success') => {
  return RES_WRAPPER(data, msg, 200);
};

export const ERROR_RES = (msg: string, code = 400, data?: any) => {
  return RES_WRAPPER(data, msg, code);
};
