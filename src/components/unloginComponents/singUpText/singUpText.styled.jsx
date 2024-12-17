import { styled } from 'styled-components';

export const SingUpMain = styled.div`
  width: 335px;
  height: 298px;
  display: flex;
  flex-direction: column;
  gap: 28px;
   z-index: 1;
`
export const TitleTextBlock = styled.div`
  width: 335px;
  height: 96px;
  background-color: black;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  // padding: 20px;
`;

export const SingUpTitleText = styled.h2`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const BodyTextMobil = styled.span`
  width: 335px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #EFEDE84D;
`;
export const InputBlock = styled.form`
  width: 335px;
  height: 174px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const Input = styled.input`
  width: 335px;
  height: 46px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: black;
  font-size: 14px;
  box-sizing: border-box;
  opacity: 0.6;
  color: white;
`;


// export const ErrorMessage = styled.span`
//   color: red;
//   font-size: 12px;
//   margin-top: 5px;
// `;

