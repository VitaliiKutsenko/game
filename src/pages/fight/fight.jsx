import React from 'react';
import { FightWrapper } from './fightStyled';
import FightBody from './components/fightBody/fightBody';
import { HeroDisplay } from './components/heroDisplay/heroDisplay';
import { BotDisplay } from './components/botDisplay/botDisplay';
import { FightOptions } from './components/fightOptions/fightOptions';

export const Fight = () => {
  return (
    <FightWrapper>
      <HeroDisplay />
      <FightOptions />
      <BotDisplay />
    </FightWrapper>
  );
};
