import { styled } from 'styled-components';

export const StatisticInfoBlock = styled.div`
  width: 446px;
  height: 669px;
  position: absolute;
  top: 241px;
  left: 77px;
  background-image:
    linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    linear-gradient(168.14deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
    url("https://ik.imagekit.io/g3kknfgcw/backgraund.jpg?updatedAt=1724496892754");
  background-size: cover;
  background-blend-mode: overlay; /* Додає режим змішування для фону і градієнтів */
`;

export const VideoTutorialBlock = styled.div`
  width: 146px;
  height: 66px;
  display:flex;
  position: absolute;
  top: 319px;
  left: 44px;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  box-sizing: border-box;
  background: #303030;
  border-radius: 12px;
`;

export const IconPlay = styled.button`
width: 30px;
height: 30px;
box-sizing: border-box;
border-radius: 50%;
padding: 0;
border: 0;
display: inline-block;
background-color: #EF8964;

 &:hover,
  &:focus {
    background-color: #E6533C};

`;

export const VideoTutorialTextBlock = styled.div`
 box-sizing: border-box;
  background: #303030;
`;

export const NumbersOfVideos = styled.text`
font-family: Roboto;
font-size: 16px;
font-weight: 700;
line-height: 18px;
text-align: left;
color: #EFEDE8A6;
display: inline-block;
`;

export const VideoTutorial = styled.text`
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 16px;
text-align: left;
color: #EFEDE8A6;
opacity:0.65;
display: block;

`;
export const CalorieStatistics = styled.div`
  width: 119px;
  height: 76px;
  // display:flex;
  position: absolute;
  top: 455px;
  left: 159px;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  box-sizing: border-box;
  background: #EF8964;
  border-radius: 12px;
`;

export const CalorieTextBlock = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items: center;
  gap: 8px;
`;
export const CalorieNumber = styled.text`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -1px;
  text-align: left;
  color: white;
  display: block;
`;

export const CalorieText = styled.text`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: white;
  opacity:0.65;
  display: block;
`;
