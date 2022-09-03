import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { REQUEST_ERRORS } from 'src/constants';
import { IErrorData, IToastStore } from 'src/interfaces';

export const extractRequestError = (
  error: FetchBaseQueryError,
): Omit<IToastStore, 'open'> => {
  const { status, data } = error;

  if (status === 'FETCH_ERROR') {
    return {
      message: REQUEST_ERRORS.NETWORK_ERROR,
      status: 'error',
    };
  } else {
    const { message } = data as IErrorData;
    return { message, status: 'error' };
  }
};
