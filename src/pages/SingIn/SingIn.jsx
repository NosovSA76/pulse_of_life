import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { SingIn, SingInMain, FooterText} from './SingIn.styled';
import ButtonIn from 'components/unloginComponents/button/button';
import StatisticInfo from 'components/unloginComponents/StatisticInfo/StatisticInfo';
import FulLogo from 'components/unloginComponents/logo/Logo';
import SingInText from 'components/unloginComponents/singInText/singInText';
import SingInForm from 'components/unloginComponents/singInForm/singInForm';

const SingInPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    const userData = { email, password };
    console.log('User data:', userData);
  };

  return (
    <SingIn>
      <FulLogo />
      <SingInMain>
        <SingInText></SingInText>
        <SingInForm>
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}

        </SingInForm>
        <ButtonIn onClick={handleSubmit}>Sign In</ButtonIn>
      </SingInMain>
            <FooterText>
            Don’t have an account?{' '}
              <span onClick={() => navigate('/sign-up')}>Sign Up</span>
            </FooterText>
      <StatisticInfo />
    </SingIn>
  );
};

export default SingInPage;


