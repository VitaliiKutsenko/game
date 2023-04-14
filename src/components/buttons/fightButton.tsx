import React, { FC } from 'react';
import { setUserReady } from '@src/store/reducers/fight/userFight/userFightActions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

interface FightButtonProps {
  attack: string;
  defence: string;
}
export const FightButton: FC<FightButtonProps> = ({ attack, defence }) => {
  const fightDispatch = useDispatch();

  return (
    <FightButtonWrapper
      onClick={() => {
        fightDispatch(setUserReady(true));
      }}
      disabled={!(attack.length === 2 && defence.length === 3)}
    >
      Fight
    </FightButtonWrapper>
  );
};

export const FightButtonWrapper = styled.button``;
