import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { ROUTES } from 'src/constants';
import { extractRequestError } from 'src/helpers';
import { useLoginMutation } from 'src/services';
import { showToast } from 'src/store/reducers';

import DefaultButton from '../common/components/DefaultButton';
import FormField from '../common/components/FormField';
import { FormButtons, FormContainer } from '../common/styles';

import { initialValues } from './constants';
import { ILoginForm } from './LoginForm.types';
import { validationSchema } from './utils';

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (values: ILoginForm) => {
      try {
        await login(values).unwrap();
        navigate(ROUTES.HOME, { replace: true });
      } catch (e) {
        const toastData = extractRequestError(e);
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
