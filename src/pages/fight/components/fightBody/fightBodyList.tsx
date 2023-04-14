import React, { useMemo, useState } from 'react';
import { FightBodyWrapper } from './fightBodyStyled';

const FightBodyList = ({ svg, title, handleClick, action }) => {
  const [toggle, setToggle] = useState(false);

  const handleTestClick = e => {
    handleClick(title, !toggle, setToggle);
  };

  const memoRender = useMemo(() => {
    return React.createElement(svg);
  }, [svg]);

  return (
    <FightBodyWrapper toggle={toggle} action={action} onClick={handleTestClick}>
      {memoRender}
    </FightBodyWrapper>
  );
};

export default FightBodyList;
