import React from 'react';
import { BotDisplayWrapper } from './botDisplayStyled';
import { CharacterInfo } from '../../character/components/characterInfo/characterInfo';
import { BaseOptions } from '../../character/components/baseOptions/baseOptions';

export const BotDisplay = () => {
  return (
    <BotDisplayWrapper>
      <CharacterInfo />
      <BaseOptions />
    </BotDisplayWrapper>
  );
};
