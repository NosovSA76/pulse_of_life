import { styled } from 'styled-components';

export const FullHeader = styled.header`
  width: 375px;
  height: 61px;
  background-color: black;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 126px;
  height: 13px;
  gap: 8px;
  display: flex;
`;

export const LogoText = styled.span`
  font-size: 12px;
  color: white;
`;

export const UserActive = styled.div`
  width: 103px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserIcon = styled.button`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid #E6533C;
  display: flex;
  align-items: center;
  justify-content: center;
   background-color: black;
`
export const AseIcon = styled.button`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
   background-color: black;
`
