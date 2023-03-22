import React, { useState } from 'react';
import { BaseParams } from './components/baseParams/baseParams';
import { Skills } from './components/skills/skills';
import { BaseOptions } from './components/baseOptions/baseOptions';
import { CharacterWrapper } from './characterStyled';
import { CharacterInfo } from './components/characterInfo/characterInfo';

export const Character = () => {
  return (
    <CharacterWrapper>
      <CharacterInfo />
      <BaseOptions />
      <BaseParams />
      <Skills />
    </CharacterWrapper>
  );
};
