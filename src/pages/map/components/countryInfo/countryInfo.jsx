import React from 'react';
import { zone } from '../../../../schemas/zoneSchema';

export const CountryInfo = props => {
  const { id, title, ...info } = props;

  const renderInfo = () => {
    return [...Object.entries(info)].map((item, index) => {
      const [keys, values] = item;

      return (
        <li key={keys}>
          <h5>{keys}</h5>
          <span>{values}</span>
        </li>
      );
    });
  };

  return (
    <li>
      {title}

      <ul>{renderInfo()}</ul>
    </li>
  );
};
