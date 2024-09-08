import React from 'react';
import { FullHeader, Logo, UserActive, LogoText, UserIcon, AseIcon } from './header.styled';
import sprite from '../../image/icons.svg';
import spriteduo from '../../image/iconsduo.svg';

const Header = () => {
  return (
    <FullHeader>
      <Logo>
        <svg width="36" height="13">
          <use href={`${sprite}#icon-logosmall`} />{' '}
        </svg>
        <LogoText>PowerPulse</LogoText>
      </Logo>
      <UserActive>
      <AseIcon>
        <svg width="24" height="24">
          <use href={`${sprite}#icon-settings-01`} />{' '}
        </svg>
        </AseIcon>

        <UserIcon>
        <svg width="21" height="21">
          <use href={`${spriteduo}#icon-gridicons_user`} />{' '}
        </svg>
        </UserIcon>

        <AseIcon>
        <svg width="24" height="24">
          <use href={`${spriteduo}#icon-menu-02`} />{' '}
        </svg>
        </AseIcon>
        </UserActive>
    </FullHeader>
  );
};

export default Header;
