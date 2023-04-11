import React from 'react';
import { CharacterInfoWrapper } from './characterInfoStyled';
import { useSelector } from 'react-redux';
import { userSelector } from '@src/store/reducers/user/userSelector';

export const CharacterInfo = ({ info = true }) => {
  const { name, icon, level } = useSelector(userSelector);

  return (
    <CharacterInfoWrapper className="character-info">
      <h2>{name}</h2>
      {React.createElement(icon)}
      {info ? <span>{level}</span> : null}
    </CharacterInfoWrapper>
  );
};
