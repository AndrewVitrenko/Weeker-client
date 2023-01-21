import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginForm } from 'src/components/LoginForm/LoginForm.types';
import { ISignupForm } from 'src/components/SignupForm/SignupForm.types';

interface IAuthResponse {
  access_token: string;
}

type SignupRequest = Omit<ISignupForm, 'confirmPassword'>;

export const authApi = createApi({
  reducerPath: 'auth/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_DEV_API_URL}/auth`,
  }),
  endpoints: builder => ({
    login: builder.mutation<IAuthResponse, ILoginForm>({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<IAuthResponse, SignupRequest>({
      query: credentials => ({
        url: 'register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
