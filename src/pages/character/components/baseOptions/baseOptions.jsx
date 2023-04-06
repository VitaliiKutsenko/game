import React from 'react';
import { BaseOptionsWrapper } from './BaseOptionsStyled';
import { useSelector } from 'react-redux';
import { baseOptionsSelector } from '../../../../store/reducers/baseOptions/baseOptionsSelector';
import { BaseOptionsList } from './baseOptionsList';

export const BaseOptions = ({ info = true }) => {
  const champParam = useSelector(baseOptionsSelector);

  return (
    <BaseOptionsWrapper className="base-options">
      {info ? <h3>Базовые навыки</h3> : null}
      <ul>
        {champParam.map(param => (
          <BaseOptionsList key={param.type} {...param} info={info} />
        ))}
      </ul>
    </BaseOptionsWrapper>
  );
};
