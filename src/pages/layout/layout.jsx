import React, { useEffect } from 'react';
import { MainWrapper, OutletWrapper } from './layoutStyled';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavBar } from './navigation/navBar';
import Header from './header/header';

export const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // navigate('/users');
  }, []);

  return (
    <MainWrapper>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </MainWrapper>
  );
};
