import React from 'react';
import { HeroDisplayWrapper } from './heroDisplayStyled';
import { CharacterInfo } from '../../../character/components/characterInfo/characterInfo';
import { BaseOptions } from '../../../character/components/baseOptions/baseOptions';
import { FightOptions } from '../fightOptions/fightOptions';

export const HeroDisplay = () => {
  return (
    <HeroDisplayWrapper>
      <BaseOptions info={false} />
      <CharacterInfo info={false} />
    </HeroDisplayWrapper>
  );
};
