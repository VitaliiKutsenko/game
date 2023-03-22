import React from 'react';
import { CharacterInfoWrapper } from './characterInfoStyled';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../../store/reducers/user/userSelector';

export const CharacterInfo = () => {
  const { name, icon, level } = useSelector(userSelector);

  return (
    <CharacterInfoWrapper className="character-info">
      <span>{level}</span>
      {React.createElement(icon)}
      <h2>{name}</h2>
    </CharacterInfoWrapper>
  );
};
