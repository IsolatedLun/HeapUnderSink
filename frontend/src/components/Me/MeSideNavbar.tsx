import React from 'react'
import { Link } from 'react-router-dom'

const MeSideNavbar = () => {
  return (
    <nav aria-label="User side navigation">
        <div className="list-container">
            <h3 className="[ text-muted ]">Public</h3>
            <ul className="[ list ]" data-list-type='block'>
              <li className="list__item"><Link to="">Main</Link></li>
              <li className="list__item"><Link to="questions">Questions</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default MeSideNavbar