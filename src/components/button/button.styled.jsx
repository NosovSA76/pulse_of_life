import { styled } from 'styled-components';

export const Button = styled.button`
  width: 136px;
  height: 42px;
  // top: 20px;
  // left: 20px;
  padding: 12px 40px;
  gap: 10px;
  border-radius: 12px;
  opacity: 0px;
 background-color: ${(props) => props.primaryColor || 'black'};
  color: white;
  position: relative;
  z-index: 1;

  &:hover,
  &:focus {
    background-color: ${(props) => props.secondaryColor || 'rgba(230, 83, 60, 1)'};
`;
