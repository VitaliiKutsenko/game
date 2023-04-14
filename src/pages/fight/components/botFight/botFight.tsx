import React, { useEffect } from 'react';
import { BotFightWrapper } from '@src/pages/fight/components/botFight/botFightStyled';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEnemyAttack,
  setEnemyDefence,
  setEnemyReady,
} from '@src/store/reducers/fight/enemyFight/enemyFightActions';
import { random } from '@src/services/botServices';
import { FightOptions } from '@src/pages/fight/components/fightOptions/fightOptions';
import { Character } from '@src/pages/character/character';

const randomItem = (schema, parts = 2) => {
  const arr = [];
  const randoms = () => {
    if (arr.length === parts) {
      return null;
    } else {
      const { svg, ...args } = schema[random(0, schema.length - 1)];

      if (!arr.some(item => item.type === args.type)) {
        arr.push(args);
      }

      randoms();
    }
  };

  randoms();

  return arr;
};

const BotFight = ({ fight }) => {
  const botDispatch = useDispatch();
  const { bodySchema } = useSelector((store: any) => store.fightBody);
  const attack = randomItem(bodySchema, 2);
  const defence = randomItem(bodySchema, 3);

  useEffect(() => {
    if (fight) {
      botDispatch(setEnemyAttack(attack));
      botDispatch(setEnemyDefence(defence));
      botDispatch(setEnemyReady(true));
    }
  }, [fight]);

  return (
    <BotFightWrapper>
      <Character />
      <FightOptions attack={attack} defence={defence} type="enemy" />
    </BotFightWrapper>
  );
};

export default React.memo(BotFight);
