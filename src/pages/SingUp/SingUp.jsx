import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SingUp, SingUpMain, FooterText } from './SingUp.styled';
import ButtonIn from 'components/unloginComponents/button/button';
import StatisticInfo from 'components/unloginComponents/StatisticInfo/StatisticInfo';
import FulLogo from 'components/unloginComponents/logo/Logo';
import SingUpText from 'components/unloginComponents/singUpText/singUpText';

const SingUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    const userData = { name, email, password };
    console.log('User data:', userData);
  };

  return (
    <SingUp>
      <FulLogo />
      <SingUpMain>

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
      <FooterText>
        Already have an account?{' '}
        <span onClick={() => navigate('/sign-in')}>Sign In</span>
      </FooterText>
      <StatisticInfo />
    </SingUp>
  );
};

export default SingUpPage;


