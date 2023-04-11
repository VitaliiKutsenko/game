import React, { useEffect } from 'react';
import { BattleLogWrapper } from '@src/pages/fight/components/battleLog/battleLogStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLog } from '@src/store/reducers/battleLog/battleLogActions';
import { clearUserFightState } from '@src/store/reducers/fight/userFight/userFightActions';
import { clearEnemyFightStore } from '@src/store/reducers/fight/enemyFight/enemyFightActions';
import { BattleLogList } from '@src/pages/fight/components/battleLog/battleLogList/battleLogList';

export const BattleLog = ({ fight }) => {
  const battleLog = useSelector(store => store.battleLog || []);
  const fights = useSelector(store => store.fight || []);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fights.enemy.ready && fights.user.ready) {
      dispatch(setUserLog(fights));
      dispatch(clearUserFightState());
      dispatch(clearEnemyFightStore());
    }
  }, [fights.enemy.ready, fights.user.ready]);

  return (
    <BattleLogWrapper>
      {battleLog.log.map((item, index) => {
        return (
          <div className="log-wrapper" key={index}>
            <p>{`Fight №${index + 1}`}</p>
            <BattleLogList attackLog={item.user.damage} blockLog={item.user.block} type="user" />
            <BattleLogList attackLog={item.enemy.damage} blockLog={item.enemy.block} type="enemy" />
          </div>
        );
      })}
    </BattleLogWrapper>
  );
};
