import { Link } from 'react-router-dom'
import { TIMES_ICON } from '../../../consts'
import { toggleElement } from '../../../utilFuncs/utils'
import IconButton from '../../Modules/Buttons/IconButton'
import LinkButton from '../../Modules/Buttons/LinkButton'
import AuthNavButtons from './AuthNavButtons'

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

        <AuthNavButtons isDesktop={false} />
    </nav>
  )
}

export default SideNavbar;