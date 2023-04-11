import React, { useState } from 'react';
import styled from 'styled-components';
import { AttackOptions } from './components/attackOptions';

const attackTitle = `Выберите часть тела, куда нанести удар `;
const defenceTitle = `Выберите часть тела, которую хотите защитить `;

export const FightOptions = ({ attack, defence, bodySchema, type }) => {
  return (
    <FightOptionsWrapper>
      <AttackOptions
        bodySchema={bodySchema}
        typeList={attack}
        titles={attackTitle}
        action="attack"
        type={type}
      />
      <AttackOptions
        bodySchema={bodySchema}
        typeList={defence}
        titles={defenceTitle}
        action="defence"
        type={type}
      />
    </FightOptionsWrapper>
  );
};

export const FightOptionsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
`;
