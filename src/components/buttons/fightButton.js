import React from 'react';
import styled from 'styled-components';
import { setUserReady } from '@src/store/reducers/fight/userFight/userFightActions';
import { useDispatch } from 'react-redux';

export const FightButton = ({ attack, defence }) => {
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
