import React, { FC, useCallback } from 'react';
import { Formik } from 'formik';
import FormField from '../common/components/FormField';
import * as Styled from './LoginForm.styled';
import { initialValues } from './constants';
import { ILoginForm } from './LoginForm.types';
import DefaultButton from '../common/components/DefaultButton';
import { validationSchema } from './utils';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services';
import { setToken } from '../../store/reducers';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (values: ILoginForm) => {
      try {
        const { token } = await login(values).unwrap();
        dispatch(setToken(token));
        navigate(ROUTES.HOME, { replace: true });
      } catch (e) {}
    },
    [dispatch, login],
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
        <Styled.FormContainer onSubmit={handleSubmit}>
          <FormField required name="email" label="Email" type="email" />
          <FormField
            required
            name="password"
            label="Password"
            type="password"
          />
          <Styled.ButtonWrapper>
            <DefaultButton type="submit" text="login" endIcon="send" />
          </Styled.ButtonWrapper>
        </Styled.FormContainer>
      )}
    </Formik>
  );
};
