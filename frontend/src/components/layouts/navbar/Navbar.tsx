import { Link } from 'react-router-dom';
import { BAR_ICON, TIMES_ICON } from '../../../consts';
import { toggleElement } from '../../../utilFuncs/utils';
import IconButton from '../../modules/buttons/IconButton';
import LinkButton from '../../modules/buttons/LinkButton';
import SideNavbar from './SideNavbar';

const Navbar = () => {
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

            <div className='[ flex-items ]'>
                <LinkButton props={{ to: '/auth/login', rest: {'data-desktop': true} }}>
                  Log in
                </LinkButton>
                <LinkButton props={{ to: '/auth/signup', variant: 'action', rest: {'data-desktop': true} }}>
                  Sign up
                </LinkButton>
            </div>

            <IconButton props={{ 
              ariaLabel: 'Toggle sidenav button', rest: { 'data-mobile': true },
              onClick: () => toggleElement('side-nav')}}
              >
              { BAR_ICON }
            </IconButton>
        </nav>

        <SideNavbar />
    </>
  )
}

export default Navbar