import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { ROUTES } from 'src/constants';
import { extractRequestError } from 'src/helpers';
import { useLoginMutation, useRegisterMutation } from 'src/services';
import { showToast } from 'src/store/reducers';

import DefaultButton from '../common/components/DefaultButton';
import FormField from '../common/components/FormField';
import { FormButtons, FormContainer } from '../common/styles';

import { initialValues } from './constants';
import * as Styled from './SignupForm.styled';
import { ISignupForm } from './SignupForm.types';
import { validationSchema } from './utils';

export const SignupForm: FC = () => {
  const dispatch = useDispatch();
  const [signup, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async ({ email, firstName, password, lastName, phone }: ISignupForm) => {
      try {
        await signup({
          email,
          firstName,
          lastName,
          password,
          phone: phone || null,
        }).unwrap();
        await login({ email, password }).unwrap();
        navigate(ROUTES.HOME, { replace: true });
      } catch (e) {
        const toastData = extractRequestError(e);
        dispatch(showToast(toastData));
      }
    },
    [signup, dispatch, navigate, login],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      validateOnChange
    >
      {({ handleSubmit }) => (
        <FormContainer onSubmit={handleSubmit}>
          <Styled.InputWrapper>
            <FormField required name="firstName" label="First name" />
            <FormField required name="lastName" label="Last name" />
          </Styled.InputWrapper>
          <FormField required name="email" type="email" label="Email" />
          <FormField
            required
            name="password"
            type="password"
            label="Password"
          />
          <FormField
            required
            name="confirmPassword"
            type="password"
            label="Confirm Password"
          />
          <FormField name="phone" label="Phone" />

          <FormButtons>
            <DefaultButton
              type="submit"
              text="signup"
              endIcon="send"
              loading={isLoginLoading || isRegisterLoading}
              disabled={isLoginLoading || isRegisterLoading}
            />
          </FormButtons>
        </FormContainer>
      )}
    </Formik>
  );
};
