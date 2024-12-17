import { UserIcon,  CheckMarkIkon} from './userIcon.styled';
import sprite from '../../../image/icons.svg';
import spriteduo from '../../../image/iconsduo.svg';

const UserIconFull = () => {
  return (
     <UserIcon>
            <svg width="61" height="62">
              <use href={`${spriteduo}#icon-gridicons_user`} />{' '}
            </svg>
            <CheckMarkIkon>
             <svg width="24" height="24">
              <use href={`${sprite}#icon-check-mark`} />{' '}
            </svg>
            </CheckMarkIkon>
    </UserIcon>

  );
};

export default UserIconFull;
