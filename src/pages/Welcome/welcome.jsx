import React from 'react';
import { Welcome } from './welcome.styled';
import ButtonIn from '../../components/button/button';
import Header from '../../components/header/header';

const WelcomePage = () => {
  return (
    <Welcome>
      <Header></Header>
      <ButtonIn></ButtonIn>;
    </Welcome>
  );
};

export default WelcomePage;
