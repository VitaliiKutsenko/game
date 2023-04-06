import React, { useCallback, useContext, useState } from 'react';
import { BodyWrapper, FightBodyListWrapper, FightBodyWrapper } from './fightBodyStyled';

import { useDispatch, useSelector } from 'react-redux';
import {
  removeAttack,
  removeDefence,
  setAttack,
  setDefence,
} from '../../../../store/reducers/fight/fightActions';
import FightBodyList from './fightBodyList';

const FightBody = ({ action, typeList }) => {
  const dispatch = useDispatch();
  const { bodySchema } = useSelector(store => store.fightBody);

  const handleClick = (title, toggle) => {
    switch (action) {
      case 'attack':
        if (toggle) {
          dispatch(setAttack({ title }));
        } else {
          dispatch(removeAttack({ title }));
        }

        break;

      case 'defence':
        toggle
          ? dispatch(
              setDefence({
                title,
                defenceActive: true,
              })
            )
          : dispatch(removeDefence({ title }));

        break;
    }
  };

  return (
    <BodyWrapper>
      <FightBodyWrapper>
        {bodySchema.map(item => (
          <FightBodyList
            key={item.type}
            {...item}
            typeList={typeList}
            action={action}
            handleClick={handleClick}
          />
        ))}
      </FightBodyWrapper>
    </BodyWrapper>
  );
};

export default React.memo(FightBody);
