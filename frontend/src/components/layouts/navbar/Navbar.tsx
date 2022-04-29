import { Link, useLocation } from 'react-router-dom';
import { BAR_ICON, LOGOUT_ICON, PROFILE_ICON } from '../../../consts';
import { toggleElement } from '../../../utilFuncs/utils';
import IconButton from '../../Modules/Buttons/IconButton';
import DropDownItem from '../../Modules/Dropdowns/DropDownItem';
import AuthNavButtons from './AuthNavButtons';
import NavUser from './NavUser';
import SideNavbar from './SideNavbar';
import { useAppDispatch } from '../../../../hooks';
import { useAuth } from '../../../hooks/useAuth';
import { loggedOutAction } from '../../../features/user-slice';
import { useEffect, useState } from 'react';
import DropDownContainer from '../../Modules/Dropdowns/DropDownContainer';
import UserNotifications from '../../Notifications/UserNotifications';
import { createSocket } from '../../../hooks/useSocket';
import { INF_Notification } from '../../Notifications/types';

let notificationInterval: any = -1;
const Navbar = () => {
  const [user, isLogged] = useAuth();

  const [notifications, setNotifications] = useState<INF_Notification[]>([]);
  const [hasRead, setHasRead] = useState<boolean>(false);
  const [urlIndex, setUrlIndex] = useState(0);

  const dispatch = useAppDispatch();
  
  const location = useLocation();
  const socket = createSocket('notifications/');

  useEffect(() => {
    if(urlIndex === 0) {
      window.history.pushState({ prevUrl: location.pathname }, '');
      setUrlIndex(1);
    }

    else {
      setUrlIndex(0);
    }
      
  }, [location])

  useEffect(() => {
    socket.onmessage = (e) => { 
      const data: INF_Notification[] = JSON.parse(e.data);
      setNotifications(data);
    }

    return () => clearInterval(notificationInterval);
  }, [socket, user])

  useEffect(() => {
    if(user)
      notificationInterval = setInterval(() => {
        if(socket.readyState === 1)
          socket.send(JSON.stringify({ user_id: user.id, read: hasRead }))
      }, 1000)
  }, [socket, user])

  return (
    <>
        <nav role='Primary navigation' className='[ primary-nav ] [ flex-between ]'>
            <Link to='/'><h1 className='[ fw-normal ]'>HeapUndersink</h1></Link>

            <input className='[ input margin-r-auto flex-grow ]' type="text" 
              placeholder='Search...' data-desktop />

            <ul className="[ list ] [  ]" data-list-type='link' data-desktop>
              <li className="list__item"><Link to="/">Home</Link></li>
              <li className="list__item"><Link to="/news">News</Link></li>
            </ul>

            <div aria-hidden data-desktop className="line-break"></div>

            <div className='[ flex flex-items ]'>
              {
                isLogged
                ? (
                    <div className='[ flex-items flex-align-center ]'>
                      <DropDownContainer item={<NavUser />} alignment='navbar'>
                        <DropDownItem leftIcon={PROFILE_ICON} to={`/me/${user.id}`}>
                          Your profile
                        </DropDownItem>
                        <DropDownItem leftIcon={LOGOUT_ICON} variant='red' 
                          onClick={() => dispatch(loggedOutAction())}>
                          Log out
                        </DropDownItem>
                      </DropDownContainer>

                      <UserNotifications notifications={notifications} 
                        setHasRead={setHasRead} />
                    </div>
                  )
                : <AuthNavButtons isDesktop={true} />
              }

              <IconButton
                ariaLabel='Toggle sidenav button' rest={{ 'data-mobile': true }}
                onClick={() => toggleElement('side-nav')}>
                
                { BAR_ICON }
              </IconButton>
            </div>
        </nav>

        <SideNavbar />
    </>
  )
}

export default Navbar