import { INF_User } from '../../features/types'
import { useAuth } from '../../hooks/useAuth';
import { isSameUser } from '../../utilFuncs/utils';
import Button from '../Modules/Buttons/Button';
import LogOutButton from '../Modules/Buttons/LogOutButton';
import Profile from '../Modules/Profiles/Profile'

const MeHeader = (props: INF_User) => {
  const [user, isLogged] = useAuth();

  return (
    <header className='[ flex-between ] [ margin-block-1 ]'>
        <div className='[ flex-items ]'>
          <Profile url={props.profile} size='large' alt={`${props.username}'s profile`} />
          <div className='[ flex-even flex-col ]'>
            <p className='[ fs-600 ]'>{ props.username}</p>
            <p className='[ text-muted ]'>{ props.reputation } reputation</p>
          </div>
        </div>

        <div className="[ button-group ]">
          { isSameUser(user, props) && <LogOutButton /> }
        </div>
    </header>
  )
}

export default MeHeader;