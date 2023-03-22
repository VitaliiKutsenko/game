import React, { useCallback, useEffect, useState } from 'react';

import { UserHeroMenuWrapper, UserHeroWrapper } from './userHeroStyled';
import { useSelector } from 'react-redux';

export const UserHero = ({ setValue, getValues }) => {
  const [char, setChar] = useState(false);
  const [showAvatar, setShowAvatar] = useState('');
  const { heroes } = useSelector(store => store.heroes) || [];

  useEffect(() => {
    if (!char) {
      setShowAvatar(getValues('avatar'));
    }
  }, [char, getValues]);

  const toggleModal = e => {
    e.preventDefault();
    setChar(prev => !prev);
  };

  const renderPrevAvatar = useCallback(
    showAvatar => {
      const { type, icon } = heroes.find(item => item.type === showAvatar);

      return (
        <div className="avatar-wrapper">
          {React.createElement(icon)}
          <p>{type}</p>
        </div>
      );
    },
    [heroes]
  );

  return (
    <UserHeroWrapper>
      <div>
        <button onClick={toggleModal}>+</button>
      </div>
      {showAvatar ? renderPrevAvatar(showAvatar) : null}
      {char ? <UserHeroMenu heroes={heroes} setChar={setChar} setValue={setValue} /> : null}
    </UserHeroWrapper>
  );
};

export const UserHeroMenu = ({ setChar, setValue, heroes }) => {
  const renderHeroMenu = () => {
    return heroes.map(item => (
      <li
        key={item.type}
        onClick={() => {
          setValue('avatar', item.type);
          setChar();
        }}
      >
        {React.createElement(item.icon)}
        <p>{item.type}</p>
      </li>
    ));
  };

  return (
    <UserHeroMenuWrapper>
      <ul>
        <button onClick={() => setChar(false)}>X</button>
        {renderHeroMenu()}
      </ul>
    </UserHeroMenuWrapper>
  );
};
