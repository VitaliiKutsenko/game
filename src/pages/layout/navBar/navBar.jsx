import React from 'react';
import { NavBarWrapper } from './navBarStyled';
import { CustomLink } from '@src/components/customLink/customLink';
import { SaveCharacterParams } from '@src/components/saveToJSON/saveCharacterParams';
import { LoadFromJSON } from '@src/components/loadFromJSON/loadFromJSON';

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <CustomLink to="/" text="Character" />
      <CustomLink to="/fight" text="Fight" />
      <div className="load-wrapper">
        <SaveCharacterParams />
        <LoadFromJSON />
      </div>
    </NavBarWrapper>
  );
};
