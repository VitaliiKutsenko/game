import React, { FC } from 'react';
import { SkillsWrapper } from '@src/pages/skills/skillsStyled';
import { BaseParams } from '@src/pages/skills/baseParams/baseParams';
import { BaseSkills } from '@src/pages/skills/baseSkills/baseSkills';

export const Skills: FC = () => {
  return (
    <SkillsWrapper>
      <BaseParams />
      <BaseSkills />
    </SkillsWrapper>
  );
};
