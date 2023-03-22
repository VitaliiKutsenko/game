import React from 'react';
import { HeroDisplayWrapper } from './heroDisplayStyled';
import { CharacterInfo } from '../../character/components/characterInfo/characterInfo';
import { BaseOptions } from '../../character/components/baseOptions/baseOptions';

export const HeroDisplay = () => {
  return (
    <HeroDisplayWrapper>
      <BaseOptions />
      <CharacterInfo />
    </HeroDisplayWrapper>
  );
};
