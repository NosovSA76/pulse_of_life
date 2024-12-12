import React from 'react';
import { Button } from './button.styled';


const ButtonIn = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonIn;
