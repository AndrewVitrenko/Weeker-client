import React, { FC, useCallback } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormField from '../common/components/FormField';
import DefaultButton from '../common/components/DefaultButton';
import { FormContainer, FormButtons } from '../common/styles';
import { ISignupForm } from './SignupForm.types';
import * as Styled from './SignupForm.styled';
import { initialValues } from './constants';
import { validationSchema } from './utils';
import { useRegisterMutation } from 'src/services';
import { showToast } from 'src/store/reducers';
import { ROUTES } from 'src/constants';
import { extractRequestError } from 'src/helpers';

export const SignupForm: FC = () => {
  const dispatch = useDispatch();
  const [signup, { isLoading }] = useRegisterMutation();
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
        navigate(ROUTES.LOGIN, { replace: true });
      } catch (e) {
        const toastData = extractRequestError(e);
        dispatch(showToast(toastData));
      }
    },
    [signup, dispatch, navigate],
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
              loading={isLoading}
              disabled={isLoading}
            />
          </FormButtons>
        </FormContainer>
      )}
    </Formik>
  );
};
