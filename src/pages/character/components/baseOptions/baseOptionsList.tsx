import { BaseOptionsListWrapper } from './BaseOptionsStyled';
import React from 'react';

export const BaseOptionsList = ({ type, name, point, icon, info }) => {
  return (
    <BaseOptionsListWrapper>
      {info ? <p>{name}</p> : null}
      <img src={icon} alt={type} />
      <p>{point}</p>
    </BaseOptionsListWrapper>
  );
};
