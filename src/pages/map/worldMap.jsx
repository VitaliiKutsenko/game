import React, { useState } from 'react';
import Map from './../../../public/svg/usaHigh.svg';
import { WorldMapWrapper } from './wordMapStyled';
import { CountryList } from './components/countryList/countryList';

export const WorldMap = () => {
  const [focusMap, setFocusMap] = useState(false);

  const handleMap = e => {
    if (e.target.style.fill) {
      e.target.style.fill = null;
    } else {
      e.target.style.fill = 'tomato';
      e.target.style.strokeWidth = '2';
    }
  };

  return (
    <WorldMapWrapper>
      <div className="mapWrapper">
        <Map onClick={handleMap} width="100%" height="100%" viewBox="200 -50 1000 1000" />
      </div>
      <CountryList />
    </WorldMapWrapper>
  );
};
