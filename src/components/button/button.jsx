import React from 'react';
import { Button } from './button.styled';

const ButtonIn = ({ children, primaryColor, secondaryColor, onMouseEnter }) => {
  return <Button
  primaryColor={primaryColor}
  secondaryColor={secondaryColor}
  onMouseEnter={onMouseEnter}>
    { children }
    </Button>;
};

export default ButtonIn;
