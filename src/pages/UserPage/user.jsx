import { UserBody} from './user.styled';
import Header from 'components/header/header';
import UserIconFull from 'components/userComponents/UserIcon/userIcon';
import TitleUser from '../../components/userComponents/userTitle/userTitle';
import spriteduo from '../../image/iconsduo.svg';

// import FulLogo from 'components/logo/Logo';
import { useNavigate } from 'react-router-dom';


const UserPage = () => {
  const navigate = useNavigate(); // Ініціалізуємо навігацію

  return (
  <UserBody>
    <Header></Header>
    <TitleUser></TitleUser>
    <UserIconFull></UserIconFull>


  </UserBody>

  );
};

export default UserPage;
