import React from 'react';
import  {Logo, PPIcon} from './Logo.styled';
import sprite from '../../../image/icons.svg';
import PowerPulse from '../../../image/PowerPulse.png';



const FulLogo = () => {

  return (

      <Logo>
        <svg width="36" height="13">
          <use href={`${sprite}#icon-logosmall`} />{' '}
        </svg>
        <PPIcon src={PowerPulse} alt="decorative icon" />
      </Logo>


  );
};

export default  FulLogo;
