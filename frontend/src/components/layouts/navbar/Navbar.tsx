import { Link } from 'react-router-dom';
import { BAR_ICON, CARET_DOWN_ICON, PROFILE_ICON } from '../../../consts';
import { toggleElement } from '../../../utilFuncs/utils';
import IconButton from '../../Modules/Buttons/IconButton';
import LinkButton from '../../Modules/Buttons/LinkButton';
import DropDown from '../../Modules/Dropdowns/DropDown';
import DropDownItem from '../../Modules/Dropdowns/DropDownItem';
import Profile from '../../Modules/Profiles/Profile';
import AuthNavButtons from './AuthNavButtons';
import NavItem from './NavItem';
import NavUser from './NavUser';
import SideNavbar from './SideNavbar';

const Navbar = () => {
  const isLogged = true;

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
                      <DropDownItem leftIcon={PROFILE_ICON}>
                        Your profile
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