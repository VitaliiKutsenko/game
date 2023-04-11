import React from 'react';
import styled from 'styled-components';
import FightBody from '../../fightBody/fightBody';

export const AttackOptions = ({ typeList, action, titles, bodySchema, type }) => {
  return (
    <AttackOptionsWrapper action={action} type={type}>
      <div>{titles}</div>
      <div className="fight_flex-wrapper">
        <FightBody bodySchema={bodySchema} titles={titles} action={action} typeList={typeList} />
        <ul>
          {typeList.length > 0
            ? typeList.map(item => {
                return <li key={item.title}>{item.title}</li>;
              })
            : null}
        </ul>
      </div>
    </AttackOptionsWrapper>
  );
};

export const AttackOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //width: 100%;
  justify-content: flex-start;
  margin: 10px;
  & .fight_flex-wrapper {
    display: flex;
    flex-direction: ${({ type }) => (type === 'enemy' ? 'row-reverse' : 'row')};
    & ul {
      left: 100%;
      width: 110px;
      margin: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      list-style: none;
      & li {
        border-radius: 6px;
        padding: 5px;
        border: 1px solid black;
      }
    }
  }
`;
