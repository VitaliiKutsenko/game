import React from 'react';
import { BaseOptions } from './components/baseOptions/baseOptions';
import { CharacterWrapper } from './characterStyled';
import { CharacterInfo } from './components/characterInfo/characterInfo';
import { Outlet } from 'react-router-dom';

export const Character = () => {
  return (
    <CharacterWrapper>
      <CharacterInfo />
      <BaseOptions />
    </CharacterWrapper>
  );
};
