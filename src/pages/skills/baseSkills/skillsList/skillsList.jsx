import React from 'react';
import Minus from '@public/svg/other/minus.svg';
import Plus from '@public/svg/other/plus.svg';
import { SkillsListWrapper } from './skillsListStyled';

const SkillsList = ({ handleRemovePoint, handleAddPoint, ...props }) => {
  const { type, title, icon, skillPoint, info, skillsLevel } = props;

  return (
    <SkillsListWrapper key={type} range={skillPoint} levelColor={skillsLevel.color}>
      <p>{title}</p>
      <div className="point-wrapper">
        <button onClick={() => handleRemovePoint(type)}>
          <Minus />
        </button>
        <img src={icon} alt={type} />
        <button onClick={() => handleAddPoint(type)}>
          <Plus />
        </button>
      </div>
      <div className="info">{info}</div>
      <div className="skill-level">
        <span>{skillPoint}</span>
        <span>{skillsLevel.level}</span>
      </div>
    </SkillsListWrapper>
  );
};

export default React.memo(SkillsList);
