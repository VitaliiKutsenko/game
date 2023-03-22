import React from 'react';
import { zone } from '../../../../schemas/zoneSchema';
import { CountryInfo } from '../countryInfo/countryInfo';

export const CountryList = () => {
  const renderCountry = () => {
    return zone.map(region => {
      return <CountryInfo key={region.id} {...region} />;
    });
  };

  return <ul>{renderCountry()}</ul>;
};
