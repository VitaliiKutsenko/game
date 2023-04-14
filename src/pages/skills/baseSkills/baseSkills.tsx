import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addSkillPoint,
  removeSkillPoint,
} from '@src/store/reducers/capabilities/baseSkills/skillsActions';
import SkillsList from './skillsList';
import { BaseSkillsWrapper } from '@src/pages/skills/baseSkills/skillsStyled';
import { useTypedSelector } from '@src/hooks/useTypedSelector';

export const BaseSkills: FC = () => {
  const { defaultSkill, ...skill } = useTypedSelector(store => store.capabilities.baseSkills);

  const dispatch = useDispatch();

  const handleAddPoint = useCallback(
    type => {
      dispatch(
        addSkillPoint({
          baseType,
          type,
        })
      );
    },
    [dispatch, baseType]
  );

  const handleRemovePoint = useCallback(
    type => {
      dispatch(
        removeSkillPoint({
          baseType,
          type,
        })
      );
    },
    [dispatch, baseType]
  );

  const renderSkills = () => {
    return skills?.map(skill => {
      return (
        <SkillsList
          key={skill.type}
          {...skill}
          handleRemovePoint={handleRemovePoint}
          handleAddPoint={handleAddPoint}
        />
      );
    });
  };

  return (
    <BaseSkillsWrapper color={skill.color}>
      <h3>Список скилов</h3>
      <ul>{renderSkills()}</ul>
    </BaseSkillsWrapper>
  );
};
