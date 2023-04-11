import React, { useCallback } from 'react';
import { BaseSkillsWrapper } from './skillsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { skillsSelector } from '@src/store/reducers/capabilities/skills/skillsSelector';

import {
  addSkillPoint,
  removeSkillPoint,
} from '@src/store/reducers/capabilities/skills/skillsActions';
import SkillsList from './skillsList/skillsList';

export const BaseSkills = () => {
  const skill = useSelector(skillsSelector);

  const { skills, baseType } = skill;
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
