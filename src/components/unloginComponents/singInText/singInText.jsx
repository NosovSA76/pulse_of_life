import React from 'react';
import { SingInTextBlock, SingInTitleText, BodyTextMobil } from './singInText.styled';

const SingInText = () => {

  return (
    <SingInTextBlock>
      <SingInTitleText>Sign In</SingInTitleText>
      <BodyTextMobil>
      Welcome! Please enter your credentials to login to the platform:
      </BodyTextMobil>
    </SingInTextBlock>
  );
};

export default SingInText;
