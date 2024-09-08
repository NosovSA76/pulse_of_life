import React, { useState }  from 'react';
import { Welcome } from './welcome.styled';
import ButtonIn from '../../components/button/button';
import Header from '../../components/header/header';
import TitleWelcome from '../../components/titleText/titleText'
import StatisticInfo from '../../components/StatisticInfo/StatisticInfo';

const WelcomePage = () => {
  const [activeButton, setActiveButton] = useState('singIn');

  const handleMouseEnter = (button) => {
    setActiveButton(button);
  };
  return (
    <Welcome>
      <Header></Header>
      <TitleWelcome></TitleWelcome>
      <ButtonIn
        primaryColor={activeButton === 'singIn' ? 'rgba(230, 83, 60, 1)' : 'black'}
        secondaryColor={activeButton === 'singIn' ? 'black' : 'rgba(230, 83, 60, 1)'}
        onMouseEnter={() => handleMouseEnter('singIn')}
      >
        Sing In
      </ButtonIn>
      <ButtonIn
        primaryColor={activeButton === 'singUp' ? 'rgba(230, 83, 60, 1)' : 'black'}
        secondaryColor={activeButton === 'singUp' ? 'black' : 'rgba(230, 83, 60, 1)'}
        onMouseEnter={() => handleMouseEnter('singUp')}
      >
        Sing Up
      </ButtonIn>
      <StatisticInfo></StatisticInfo>
    </Welcome>
  );
};

export default WelcomePage;
