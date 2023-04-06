import React from 'react';
import styled from 'styled-components';
import { AttackOptions } from './components/attackOptions';
import { useSelector } from 'react-redux';

export const FightOptions = () => {
  const { attack, defence } = useSelector(store => store.fight);

  return (
    <FightOptionsWrapper>
      <AttackOptions typeList={attack} titles="Атака" action="attack" />
      <AttackOptions typeList={defence} titles="Защита" action="defence" />
    </FightOptionsWrapper>
  );
};

export const FightOptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
