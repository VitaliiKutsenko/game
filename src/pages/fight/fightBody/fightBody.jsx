import React from 'react';
import { BodyWrapper, FightBodyWrapper } from './fightBodyStyled';
import Head from '../../../../public/svg/fight/humanBody/head.svg';
import Chest from '../../../../public/svg/fight/humanBody/cheast.svg';
import Hands from '../../../../public/svg/fight/humanBody/hands.svg';
import Legs from '../../../../public/svg/fight/humanBody/legs.svg';
import Shoulder from '../../../../public/svg/fight/humanBody/shoulder.svg';
import Arm from '../../../../public/svg/fight/humanBody/arm.svg';
import Stomach from '../../../../public/svg/fight/humanBody/stomach.svg';

export const FightBody = () => {
  return (
    <BodyWrapper>
      <FightBodyWrapper onClick={e => console.log(e.target.closest('svg').dataset.position)}>
        <Head />
        <Shoulder />

        <div className="human-body">
          <Chest />
          <Stomach />
        </div>

        <div className="human-hands">
          <Arm />
          <Hands />
        </div>
        <Legs />
      </FightBodyWrapper>
    </BodyWrapper>
  );
};
