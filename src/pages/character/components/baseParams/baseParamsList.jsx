import { BaseParamsListWrap } from './baseParamsStyled';
import React from 'react';

const BaseParamsList = props => {
  const { type, name, color, icon, toggle, handleClick, id } = props;

  return (
    <BaseParamsListWrap
      id={id}
      className={toggle === id ? 'toggle' : ''}
      color={color}
      onClick={e => {
        handleClick(e, type);
      }}
    >
      <p>{name}</p>
      <div className="image-wrapper">
        <img src={icon} alt={type} />
      </div>
    </BaseParamsListWrap>
  );
};

export default React.memo(BaseParamsList);
