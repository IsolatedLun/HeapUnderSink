import { Link } from 'react-router-dom';
import { BAR_ICON, LOGOUT_ICON, PROFILE_ICON } from '../../../consts';
import { toggleElement } from '../../../utilFuncs/utils';
import IconButton from '../../Modules/Buttons/IconButton';
import DropDownItem from '../../Modules/Dropdowns/DropDownItem';
import AuthNavButtons from './AuthNavButtons';
import NavItem from './NavItem';
import NavUser from './NavUser';
import SideNavbar from './SideNavbar';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { useAuth } from '../../../hooks/useAuth';
import { loggedOutAction } from '../../../features/user-slice';

const Navbar = () => {
  const [user, isLogged] = useAuth();
  const dispatch = useAppDispatch();

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
                    <NavItem item={<NavUser />}>
                      <DropDownItem leftIcon={PROFILE_ICON} to='/me'>
                        Your profile
                      </DropDownItem>
                      <DropDownItem leftIcon={LOGOUT_ICON} variant='red' 
                        onClick={() => dispatch(loggedOutAction())}>
                        Log out
                      </DropDownItem>
                    </NavItem>
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