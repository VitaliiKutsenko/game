import { BaseOptionsListWrapper } from './BaseOptionsStyled';
import React from 'react';

export const BaseOptionsList = ({ type, name, point, icon }) => {
  return (
    <BaseOptionsListWrapper>
      <p>{name}</p>
      <img src={icon} alt={type} />
      <p>{point}</p>
    </BaseOptionsListWrapper>
  );
};
