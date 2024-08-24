import React from 'react';
import { FullHeader, Logo, UserActive, LogoText } from './header.styled';
import sprite from '../../image/icons.svg';

const Header = () => {
  return (
    <FullHeader>
      <Logo>
        <svg width="16" height="16">
          <use href={`${sprite}#icon-logosmall`} />{' '}
        </svg>
        <LogoText>PowerPulse</LogoText>
      </Logo>
      <UserActive>  <svg width="16" height="16">
          <use href={`${sprite}#con-user`} />{' '}
        </svg></UserActive>
    </FullHeader>
  );
};

export default Header;
