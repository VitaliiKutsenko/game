import React from 'react';
import { FightWrapper } from './fightStyled';
import { useSelector } from 'react-redux';
import { BattleLog } from '@src/pages/fight/components/battleLog/battleLog';
import { UserFight } from '@src/pages/fight/components/userFight/userFight';
import { FightButton } from '@src/components/buttons/fightButton';
import BotFight from '@src/pages/fight/components/botFight/botFight';
import { AbilitiesField } from '@src/pages/fight/components/abilitiesField/abilitiesField';

const Fight = () => {
  const { attack, defence, ready } = useSelector((store: any) => store.fight.user);

  return (
    <FightWrapper>
      <UserFight attack={attack} defence={defence} />
      <div>
        <AbilitiesField />
        <FightButton attack={attack} defence={defence} />
        <BattleLog />
      </div>
      <BotFight fight={ready} />
    </FightWrapper>
  );
};

export default React.memo(Fight);
