import React from 'react'

const MeSideNavbar = () => {
  return (
    <nav aria-label="User side navigation">
        <div className="list-container">
            <h3 className="[ text-muted ]">Public</h3>
            <ul className="[ list ]" data-list-type='block'>
                <li className="list__item"><a href="/">Questions</a></li>
                <li className="list__item"><a href="/news">Answers</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default MeSideNavbar