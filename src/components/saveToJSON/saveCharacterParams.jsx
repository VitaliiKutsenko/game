import React from 'react';
import { SaveCharacterParamsWrapper } from './SaveCharacterParamsStyled';

export const SaveCharacterParams = () => {
  const exportData = () => {
    const data = JSON.parse(localStorage.getItem('persist:root'));
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
    const link = document.createElement('a');

    link.href = jsonString;
    link.download = 'char.json';

    link.click();
  };

  return (
    <SaveCharacterParamsWrapper>
      <button type="button" onClick={exportData}>
        save
      </button>
    </SaveCharacterParamsWrapper>
  );
};
