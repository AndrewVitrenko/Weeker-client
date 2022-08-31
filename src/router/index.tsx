import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScreenSkeleton from '../components/common/components/ScreenSkeleton';
import Toast from 'src/components/common/components/Toast';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { ROUTES } from '../constants';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Toast />
      <Header />
      <ScreenSkeleton>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<Signup />} />
        </Routes>
      </ScreenSkeleton>
    </BrowserRouter>
  );
};
