import React, { useMemo } from 'react';
import { BodyWrapper, FightBodyWrapper } from './fightBodyStyled';

import { useDispatch, useSelector } from 'react-redux';
import {
  removeAttack,
  removeDefence,
  setAttack,
  setDefence,
} from '@src/store/reducers/fight/userFight/userFightActions';
import FightBodyList from './fightBodyList';

const FightBody = ({ action, typeList }) => {
  const dispatch = useDispatch();
  const { bodySchema } = useSelector(store => store.fightBody);

  const handleClick = (title, toggle, setToggle) => {
    switch (action) {
      case 'attack':
        if (typeList.some(item => item.title === title) || typeList.length <= 1) {
          toggle ? dispatch(setAttack({ title })) : dispatch(removeAttack({ title }));
          setToggle(prev => !prev);
        }

        break;

      case 'defence':
        if (typeList.some(item => item.title === title) || typeList.length <= 2) {
          toggle ? dispatch(setDefence({ title })) : dispatch(removeDefence({ title }));
          setToggle(prev => !prev);
        }

        break;
    }
  };

  const renderBodyParts = () => {
    return bodySchema.map(item => (
      <FightBodyList
        key={item.type}
        {...item}
        typeList={typeList}
        action={action}
        handleClick={handleClick}
      />
    ));
  };

  return (
    <BodyWrapper>
      <FightBodyWrapper action={action}>{renderBodyParts()}</FightBodyWrapper>
    </BodyWrapper>
  );
};

export default FightBody;
