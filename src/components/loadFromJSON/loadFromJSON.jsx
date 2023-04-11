import React, { useState } from 'react';
import { LoadFromJSONWrapper } from './SaveCharacterParamsStyled';

export const LoadFromJSON = () => {
  const [file, setFile] = useState('');
  const exportData = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function (event) {
      setFile(prev => event.target.result);
    };
  };

  const handleLoadJSON = () => {
    if (file.length > 0) {
      localStorage.setItem('persist:root', file);
    }
  };

  return (
    <LoadFromJSONWrapper>
      <button className="load-file" onClick={e => e.currentTarget.firstElementChild.click()}>
        Load
        <input type="file" onChange={e => exportData(e)} />
      </button>
      {file && (
        <div>
          <button className="load-confirm" onClick={handleLoadJSON}>
            Confirm
          </button>
          <button className="load-cancel" onClick={() => setFile('')}>
            Cancel
          </button>
        </div>
      )}
    </LoadFromJSONWrapper>
  );
};
