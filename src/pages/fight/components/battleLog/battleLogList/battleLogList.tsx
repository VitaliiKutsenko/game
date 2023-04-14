import React, { FC } from 'react';

import { BattleLogListWrapper } from '@src/pages/fight/components/battleLog/battleLogList/battleLogListStyled';

interface BattleLogListProps {
  attackLog: any;
  blockLog: any;
  type: string | null;
}
export const BattleLogList: FC<BattleLogListProps> = ({ attackLog, blockLog, type }) => {
  const logCreator = log => {
    console.log(log);

    if (log.length === 1) {
      return log;
    }

    if (log.length >= 1) {
      return log.join(' и ');
    }

    return `Не нанёс урон по `;
  };

  return (
    <BattleLogListWrapper type={type ? type : null}>
      <li>Урон: {logCreator(attackLog)}</li>
      <li>Блок: {logCreator(blockLog)}</li>
    </BattleLogListWrapper>
  );
};
