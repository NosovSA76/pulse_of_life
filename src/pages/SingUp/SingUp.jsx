import React, { useState } from 'react';
import { SingUp, SingUpMain } from './SingUp.styled';
import ButtonIn from 'components/button/button';
import StatisticInfo from 'components/StatisticInfo/StatisticInfo';
import FulLogo from 'components/logo/Logo';
import SingUpText from 'components/singUpText/singUpText';

const SingUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const userData = { name, email, password };
    console.log('User data:', userData);
  };

  return (
    <SingUp>
      <FulLogo />
      <SingUpMain>
        {/* Передаємо стейти і функції для оновлення до SingUpText */}
        <SingUpText
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <ButtonIn onClick={handleSubmit}>Sign Up</ButtonIn>
      </SingUpMain>
      <StatisticInfo />
    </SingUp>
  );
};

export default SingUpPage;


