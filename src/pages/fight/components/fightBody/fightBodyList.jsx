import React, { useMemo, useState } from 'react';
import { FightBodyListWrapper } from './fightBodyStyled';

const FightBodyList = ({ svg, title, handleClick, action }) => {
  const [toggle, setToggle] = useState(false);

  const handleTestClick = e => {
    handleClick(title, !toggle, setToggle);
  };

  const memoRender = useMemo(() => {
    return React.createElement(svg);
  }, [svg]);

  return (
    <FightBodyListWrapper toggle={toggle} action={action} onClick={handleTestClick}>
      {memoRender}
    </FightBodyListWrapper>
  );
};

export default FightBodyList;
