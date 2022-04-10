import { Link } from 'react-router-dom';
import { BAR_ICON, CARET_DOWN_ICON, TIMES_ICON } from '../../../consts';
import { toggleElement } from '../../../utilFuncs/utils';
import IconButton from '../../Modules/Buttons/IconButton';
import LinkButton from '../../Modules/Buttons/LinkButton';
import ContextMenu from '../../Modules/ContextMenu';
import Profile from '../../Modules/Profiles/Profile';
import AuthNavButtons from './AuthNavButtons';
import NavContextItems from './NavContextItems';
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
                    <ContextMenu listItems={<NavContextItems />}>
                      <div className='[ flex flex-align-center flex-items ]'>
                        <Profile profile={{ url: '/media/profiles/def.png', alt: '' }} />
                        <i className='fa'>{ CARET_DOWN_ICON }</i>
                      </div>
                    </ContextMenu>
                  )
                : <AuthNavButtons isDesktop={true} />
              }

              <IconButton props={{ 
                ariaLabel: 'Toggle sidenav button', rest: { 'data-mobile': true },
                onClick: () => toggleElement('side-nav')}}
                >
                { BAR_ICON }
              </IconButton>
            </div>
        </nav>

        <SideNavbar />
    </>
  )
}

export default Navbar