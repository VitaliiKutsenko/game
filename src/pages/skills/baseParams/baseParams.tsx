import React, { useCallback } from 'react';
import { BaseParamsWrapper } from './baseParamsStyled';
import { useDispatch } from 'react-redux';
import { setSkill } from '@src/store/reducers/capabilities/baseSkills/skillsActions';
import BaseParamsList from './baseParamsList';
import { useTypedSelector } from '@src/hooks/useTypedSelector';

export const BaseParams = () => {
  const { baseParams } = useTypedSelector(store => store.capabilities.baseParams);

  const dispatch = useDispatch();

  const handleClick = useCallback(
    (e, type) => {
      dispatch(setSkill(type));
      setToggle(type);
    },
    [setToggle]
  );

  const renderSkills = () => {
    return baseParams?.map(skill => {
      const { type } = skill;

      return <BaseParamsList key={type} handleClick={handleClick} {...skill} />;
    });
  };

  return (
    <BaseParamsWrapper>
      <h3>Базовые параметры</h3>
      <ul>{renderSkills()}</ul>
    </BaseParamsWrapper>
  );
};
