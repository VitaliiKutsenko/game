import React from 'react';
import { NavLinksWrapper } from './customLinkStyled';
import { NavLink } from 'react-router-dom';

export const CustomLink = ({ children, to, text, ...props }) => {
  return (
    <NavLinksWrapper {...props}>
      <NavLink to={to} {...props}>
        {children || text}
      </NavLink>
    </NavLinksWrapper>
  );
};
