import React from 'react';
import { NavBarWrapper } from './navBarStyled';
import { CustomLink } from '../../../components/customLink/customLink';
import { SaveCharacterParams } from '../../../components/saveToJSON/saveCharacterParams';
import { LoadFromJSON } from '../../../components/loadFromJSON/loadFromJSON';

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <CustomLink to="/" text="Character" />
      <CustomLink to="/fight" text="Fight" />
      <CustomLink to="/map" text="Map" />
      <div className="load-wrapper">
        <SaveCharacterParams />
        <LoadFromJSON />
      </div>
    </NavBarWrapper>
  );
};
