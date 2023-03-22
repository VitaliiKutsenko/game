import React from 'react';
import { FightWrapper } from './fightStyled';
import { FightBody } from './fightBody/fightBody';
import { HeroDisplay } from './heroDisplay/heroDisplay';
import { BotDisplay } from './botDisplay/botDisplay';

export const Fight = () => {
  return (
    <FightWrapper>
      <HeroDisplay />
      <FightBody />
      <BotDisplay />
    </FightWrapper>
  );
};
