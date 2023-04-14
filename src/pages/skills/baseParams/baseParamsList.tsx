import React from 'react';
import { BaseParamsListWrap } from '@src/pages/skills/baseParams/baseParamsStyled';
import { baseParamSchema } from '@src/schemas/baseParamsSchema';

const BaseParamsList = props => {
  const { type, handleClick } = props;

  return (
    <BaseParamsListWrap
      color={baseParamSchema[type].color}
      onClick={e => {
        handleClick(e, type);
      }}
    >
      <div className="image-wrapper">{<img src={baseParamSchema[type].icon} alt={type} />}</div>
      <p>{baseParamSchema[type].name}</p>
    </BaseParamsListWrap>
  );
};

export default BaseParamsList;
