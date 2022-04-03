import { Link } from 'react-router-dom';
import { BAR_ICON, TIMES_ICON } from '../../consts';
import { toggleElement } from '../../utilFuncs/utils';
import IconButton from '../modules/buttons/IconButton';
import LinkButton from '../modules/buttons/LinkButton';

const Navbar = () => {
  return (
    <>
        <nav role='Primary navigation' className='[ primary-nav ] [ flex-between ]'>
            <h1 className='[ fw-normal ]'>HeapUndersink</h1>

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

            <IconButton props={{ ariaLabel: 'Toggle sidenav button', rest: { 'data-mobile': true },
              onClick: () => toggleElement('side-nav')}}>
              { BAR_ICON }
            </IconButton>
        </nav>

        <nav role='Side mobile navigation' id='side-nav' className="[ side-nav ] [ flex-items flex-col flex-align-center ]" 
          data-state='off'>

          <IconButton props={{ ariaLabel: 'Toggle sidenav button', onClick: () => toggleElement('side-nav')}}>
            { TIMES_ICON }
          </IconButton>
          <ul className="[ list ] [ flex-col ]" data-list-type='link'>
            <li className="list__item"><Link to="/">Home</Link></li>
            <li className="list__item"><Link to="/news">News</Link></li>
          </ul>

          <LinkButton props={{ to: '/auth/login' }}>
            Log in
          </LinkButton>
          <LinkButton props={{ to: '/auth/signup', variant: 'action' }}>
            Sign up
          </LinkButton>
        </nav>
    </>
  )
}

export default Navbar