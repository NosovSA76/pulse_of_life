import { styled } from 'styled-components';

export const SingIn = styled.div`
  width: 375px;
  height: 812px;
  background-color: black;
  background-size: cover;
  overflow: hidden;
  position: relative;
  padding: 20px;
`;

export const SingInMain = styled.div`
width: 335px;
height: 282px;
margin-top: 90px;
display: flex;
flex-direction: column;
gap: 28px;
opacity: 0px;
position: relative;
z-index: 1;
`;

export const FooterText = styled.div`
margin-top: 14px;
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 18px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
position: relative;
color: #EFEDE84D;
z-index: 2;


  span {
    color: white;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    cursor: pointer;
  &:hover {
      text-decoration: underline; // Ефект при наведенні
    }
  }
`;
