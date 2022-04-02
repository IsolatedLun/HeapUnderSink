import { Link } from 'react-router-dom';
import { BAR_ICON, TIMES_ICON } from '../../consts';
import { toggleElement } from '../../utilFuncs/utils';

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
                <Link to='/auth/login' className='[ button ]' data-desktop>Log in</Link>
                <Link to='/auth/signup' className='[ button ]' data-variant='action' data-desktop>Sign up</Link>
            </div>

            <button className='[ button fa ]' onClick={() => toggleElement('side-nav')}
              data-mobile data-content='icon' aria-label='Toggle sidenav button' aria-hidden>{ BAR_ICON }</button>
        </nav>

        <nav role='Side mobile navigation' id='side-nav' className="[ side-nav ] [ flex-items flex-col flex-align-center ]" 
          data-state='off'>
          
          <button className='[ button fa ]' onClick={() => toggleElement('side-nav')}
            data-mobile data-content='icon' aria-label='Toggle sidenav button' aria-hidden>{ TIMES_ICON }</button>
          
          <ul className="[ list ] [ flex-col ]" data-list-type='link'>
            <li className="list__item"><Link to="/">Home</Link></li>
            <li className="list__item"><Link to="/news">News</Link></li>
          </ul>

          <Link to='/auth/login' className='[ button ]'>Log in</Link>
          <Link to='/auth/signup' className='[ button ]' data-variant='action'>Sign up</Link>
        </nav>
    </>
  )
}

export default Navbar