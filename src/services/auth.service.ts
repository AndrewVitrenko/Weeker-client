import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginForm } from '../components/LoginForm/LoginForm.types';

interface LoginResponse {
  token: string;
}

export const authApi = createApi({
  reducerPath: 'auth/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, ILoginForm>({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
