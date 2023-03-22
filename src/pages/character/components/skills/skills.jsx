import React, { useCallback, useMemo } from 'react';
import { SkillsWrapper } from './skillsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { skillsSelector } from '../../../../store/reducers/skills/skillsSelector';

import { addSkillPoint, removeSkillPoint } from '../../../../store/reducers/skills/skillsActions';
import SkillsList from './skillsList/skillsList';

export const Skills = () => {
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
    <SkillsWrapper color={skill.color}>
      <h3>Список скилов</h3>
      <ul>{renderSkills()}</ul>
    </SkillsWrapper>
  );
};
