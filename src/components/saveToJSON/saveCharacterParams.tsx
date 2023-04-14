import React, { FC } from 'react';
import { SaveCharacterParamsWrapper } from './SaveCharacterParamsStyled';

export const SaveCharacterParams: FC = () => {
  const exportData = () => {
    const storageItem = localStorage.getItem('persist:root');
    const data = storageItem ? JSON.parse(storageItem) : null;
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
