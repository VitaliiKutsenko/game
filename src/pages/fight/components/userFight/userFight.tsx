import React from 'react';
import { UserFightWrapper } from '@src/pages/fight/components/userFight/userFightStyled';
import { FightOptions } from '@src/pages/fight/components/fightOptions/fightOptions';
import { Character } from '@src/pages/character/character';

export const UserFight = ({ attack, defence }) => {
  return (
    <UserFightWrapper>
      <Character />
      <FightOptions attack={attack} defence={defence} />
    </UserFightWrapper>
  );
};
