import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginForm } from '../components/LoginForm/LoginForm.types';
import { ISignupForm } from '../components/SignupForm/SignupForm.types';

interface IAuthResponse {
  token: string;
}

type SignupRequest = Omit<ISignupForm, 'confirmPassword'>;

export const authApi = createApi({
  reducerPath: 'auth/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: builder => ({
    login: builder.mutation<IAuthResponse, ILoginForm>({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    sigunp: builder.mutation<IAuthResponse, SignupRequest>({
      query: credentials => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useSigunpMutation } = authApi;
