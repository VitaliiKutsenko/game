import React from 'react';
import { CharacterInfoWrapper } from './characterInfoStyled';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../../store/reducers/user/userSelector';

export const CharacterInfo = ({ info = true }) => {
  const { name, icon, level } = useSelector(userSelector);

  return (
    <CharacterInfoWrapper className="character-info">
      {info ? <span>{level}</span> : null}
      {React.createElement(icon)}
      <h2>{name}</h2>
    </CharacterInfoWrapper>
  );
};
