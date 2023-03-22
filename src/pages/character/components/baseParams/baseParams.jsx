import React, { useCallback, useState } from 'react';
import { BaseParamsWrapper } from './baseParamsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setSkill } from '../../../../store/reducers/skills/skillsActions';
import { baseParamsSelector } from '../../../../store/reducers/baseParams/baseParamsSelector';
import BaseParamsList from './baseParamsList';

export const BaseParams = () => {
  const { baseParameters, chosenSkill } = useSelector(baseParamsSelector) || [];

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(chosenSkill);

  const handleClick = useCallback(
    (e, type) => {
      dispatch(setSkill(type));
      setToggle(type);
    },
    [setToggle]
  );

  const renderSkills = () => {
    return baseParameters?.map(skill => {
      const { type } = skill;

      return (
        <BaseParamsList key={type} id={type} toggle={toggle} handleClick={handleClick} {...skill} />
      );
    });
  };

  return (
    <BaseParamsWrapper>
      <h3>Базовые параметры</h3>
      <ul>{renderSkills()}</ul>
    </BaseParamsWrapper>
  );
};
