import React from 'react';
import styled from 'styled-components';
import FightBody from '../../fightBody/fightBody';
import { useSelector } from 'react-redux';

export const AttackOptions = ({ typeList, action, titles }) => {
  return (
    <AttackOptionsWrapper>
      <div>{titles}</div>
      <FightBody action={action} typeList={typeList} />
      <ul>
        {typeList.length > 0
          ? typeList.map(item => {
              return <li key={item.title}>{item.title}</li>;
            })
          : null}
      </ul>
    </AttackOptionsWrapper>
  );
};

export const AttackOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  & button {
    padding: 5px;
    background: ${({ buttonState }) => (buttonState ? 'green' : 'white')};
  }
  & ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    list-style: none;
    & li {
      padding: 5px;
      border: 1px solid black;
    }
  }
`;
