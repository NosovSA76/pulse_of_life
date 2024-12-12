import { Welcome, PngIcon } from './welcome.styled';
import ButtonIn from 'components/button/button';
import TitleWelcome from 'components/titleText/titleText'
import StatisticInfo from 'components/StatisticInfo/StatisticInfo';
import Line from 'image/Line@2x.png';
import FulLogo from 'components/logo/Logo';
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {
  const navigate = useNavigate(); // Ініціалізуємо навігацію

  return (
    <Welcome>
      <FulLogo></FulLogo>
      <TitleWelcome></TitleWelcome>
      <ButtonIn onClick={() => {navigate('/sign-up');}}>Sign Up</ButtonIn>
      <ButtonIn>Sign In</ButtonIn>
      <StatisticInfo></StatisticInfo>
      <PngIcon src={Line} alt="decorative icon" />
    </Welcome>
  );
};

export default WelcomePage;
