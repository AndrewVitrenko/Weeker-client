import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScreenSkeleton from 'src/components/common/components/ScreenSkeleton';
import Toast from 'src/components/common/components/Toast';
import Header from 'src/components/Header';
import { ROUTES } from 'src/constants';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import Signup from 'src/pages/Signup';

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
