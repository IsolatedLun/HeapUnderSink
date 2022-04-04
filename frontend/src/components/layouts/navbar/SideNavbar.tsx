import { Link } from 'react-router-dom'
import { TIMES_ICON } from '../../../consts'
import { toggleElement } from '../../../utilFuncs/utils'
import IconButton from '../../modules/buttons/IconButton'
import LinkButton from '../../modules/buttons/LinkButton'

const SideNavbar = () => {
  return (
    <nav role='Side mobile navigation' id='side-nav' 
        className="[ side-nav ] [ flex-items flex-col flex-align-center ]" 
        data-state='off'>

        <IconButton props={{ 
            ariaLabel: 'Toggle sidenav button', 
            onClick: () => toggleElement('side-nav')}}
        >
        { TIMES_ICON }
        </IconButton>

        <ul className="[ list ] [ flex-col ]" data-list-type='link'>
            <li className="list__item"><Link to="/">Home</Link></li>
            <li className="list__item"><Link to="/news">News</Link></li>
        </ul>

        <LinkButton props={{ to: '/auth/login' }}>Log in</LinkButton>
        <LinkButton props={{ to: '/auth/signup', variant: 'action' }}>Sign up</LinkButton>
    </nav>
  )
}

export default SideNavbar;