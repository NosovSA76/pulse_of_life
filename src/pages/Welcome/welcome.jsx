import { Welcome, PngIcon } from './welcome.styled';
import ButtonIn from 'components/unloginComponents/button/button';
import TitleWelcome from 'components/unloginComponents/titleText/titleText'
import StatisticInfo from 'components/unloginComponents/StatisticInfo/StatisticInfo';
import Line from 'image/Line@2x.png';
import FulLogo from 'components/unloginComponents/logo/Logo';
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {
  const navigate = useNavigate(); // Ініціалізуємо навігацію

  return (
    <Welcome>
      <FulLogo></FulLogo>
      <TitleWelcome></TitleWelcome>
      <ButtonIn onClick={() => {navigate('/sign-up');}}>Sign Up</ButtonIn>
      <ButtonIn onClick={() => {navigate('/sign-in');}}>Sign In</ButtonIn>
      <StatisticInfo></StatisticInfo>
      <PngIcon src={Line} alt="decorative icon" />
    </Welcome>
  );
};

export default WelcomePage;
