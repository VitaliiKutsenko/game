import React, { useState } from 'react';
import { FightBodyListWrapper } from './fightBodyStyled';

const FightBodyList = ({
  svg,
  title,
  handleClick,
  typeList,
  action,
  attackActive,
  defenceActive,
}) => {
  const [toggle, setToggle] = useState(false);

  console.log(attackActive, defenceActive);
  const handleTestClick = e => {
    switch (action) {
      case 'attack':
        if (typeList.some(item => item.title === title) || typeList.length <= 1) {
          handleClick(title, !toggle);
          setToggle(prev => !prev);
        }

        break;

      case 'defence':
        if (typeList.length <= 2) {
          // if (typeList.some(item => item.title === title)) {
          handleClick(title, !toggle);
          setToggle(prev => !prev);
          // }
        }

        break;
    }
  };

  return (
    <FightBodyListWrapper toggle={toggle} onClick={handleTestClick}>
      {React.createElement(svg)}
    </FightBodyListWrapper>
  );
};

export default FightBodyList;
