import React, { FC, useState } from 'react';
import { LoadFromJSONWrapper } from './SaveCharacterParamsStyled';

export const LoadFromJSON: FC = () => {
  const [file, setFile] = useState<string | ArrayBuffer | null>(null);
  const exportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function (event) {
        setFile(event.target ? event.target.result : null);
      };
    }
  };

  const handleLoadJSON = () => {
    if (typeof file === 'string') {
      localStorage.setItem('persist:root', file);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const elem = e.currentTarget.firstElementChild as HTMLInputElement;

    if (elem) {
      elem.click();
    }
  };

  return (
    <LoadFromJSONWrapper>
      <button className="load-file" onClick={handleClick}>
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
