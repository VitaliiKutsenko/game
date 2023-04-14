import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinksWrapper } from '@src/components/customLink/customLinkStyled';

interface CustomLinkProps {
  children?: ReactNode;
  to: string;
  text: string;
}
export const CustomLink: FC<CustomLinkProps> = ({ children, to, text }) => {
  return (
    <NavLinksWrapper>
      <NavLink to={to}>{children || text}</NavLink>
    </NavLinksWrapper>
  );
};
