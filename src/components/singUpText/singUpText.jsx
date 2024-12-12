import React from 'react';
import { TitleTextBlock, SingUpTitleText, BodyTextMobil, Input } from './singUpText.styled';

const SingUpText = ({ name, email, password, setName, setEmail, setPassword }) => {
  return (
    <TitleTextBlock>
      <SingUpTitleText>Sign Up</SingUpTitleText>
      <BodyTextMobil>
        Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.
      </BodyTextMobil>

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
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </TitleTextBlock>
  );
};

export default SingUpText;
