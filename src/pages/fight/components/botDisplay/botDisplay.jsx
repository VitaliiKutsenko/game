import React from 'react';
import { BotDisplayWrapper } from './botDisplayStyled';
import { CharacterInfo } from '../../../character/components/characterInfo/characterInfo';
import { BaseOptions } from '../../../character/components/baseOptions/baseOptions';
import { FightOptions } from '../fightOptions/fightOptions';

export const BotDisplay = () => {
  return (
    <BotDisplayWrapper>
      <CharacterInfo info={false} />
      <BaseOptions info={false} />
      {/*<FightOptions />*/}
    </BotDisplayWrapper>
  );
};
