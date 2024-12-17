import React, { useEffect } from 'react';
import { InputBlock, SingUpMain, TitleTextBlock, SingUpTitleText, BodyTextMobil, Input } from './singUpText.styled';

const SingUpText = ({ name, email, password, setName, setEmail, setPassword }) => {

  // useEffect(() => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // }, [setName, setEmail, setPassword]);

  return (
    <SingUpMain>
    <TitleTextBlock>
      <SingUpTitleText>Sign Up</SingUpTitleText>
      <BodyTextMobil>
        Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.
      </BodyTextMobil>
    </TitleTextBlock>

    <InputBlock>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)
        }
        autoComplete="new-password"
      />
    </InputBlock>
    </SingUpMain>
  );
};

export default SingUpText;
