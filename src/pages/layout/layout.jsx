import React, { useEffect } from 'react';
import { MainWrapper, OutletWrapper } from './layoutStyled';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './header/header';

export const Layout = () => {
  return (
    <MainWrapper>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </MainWrapper>
  );
};
