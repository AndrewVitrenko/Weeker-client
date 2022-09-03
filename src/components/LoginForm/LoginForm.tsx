import React, { FC, useCallback } from 'react';
import { Formik } from 'formik';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import FormField from '../common/components/FormField';
import { FormButtons, FormContainer } from '../common/styles';
import { initialValues } from './constants';
import { ILoginForm } from './LoginForm.types';
import DefaultButton from '../common/components/DefaultButton';
import { validationSchema } from './utils';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services';
import { setToken, showToast } from '../../store/reducers';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { extractRequestError } from 'src/helpers';

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (values: ILoginForm) => {
      try {
        const { token } = await login(values).unwrap();
        dispatch(setToken(token));
        navigate(ROUTES.HOME, { replace: true });
      } catch (e) {
        const toastData = extractRequestError(e as FetchBaseQueryError);
        dispatch(showToast(toastData));
      }
    },
    [dispatch, login, navigate],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
      validateOnChange
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormField required name="email" label="Email" type="email" />
          <FormField
            required
            name="password"
            label="Password"
            type="password"
          />
          <FormButtons>
            <DefaultButton
              type="submit"
              text="login"
              endIcon="send"
              loading={isLoading}
              disabled={isLoading}
            />
          </FormButtons>
        </FormContainer>
      )}
    </Formik>
  );
};
