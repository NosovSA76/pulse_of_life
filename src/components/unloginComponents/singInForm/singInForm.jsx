import React, { useEffect } from 'react';
import { InputBlock, SingInMain, TitleTextBlock, SingInTitleText, BodyTextMobil, Input } from './singInForm.styled';

const SingInForm = ({ name, email, password, setName, setEmail, setPassword }) => {

  // useEffect(() => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // }, [setName, setEmail, setPassword]);

  return (

    <InputBlock>
      {/* <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}

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
  );
};

export default SingInForm;
