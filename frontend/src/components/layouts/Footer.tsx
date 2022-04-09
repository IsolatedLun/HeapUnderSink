import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='[ footer ]'>
        <div className='[ flex-between ]'>
          <div className="[ footer__part ] [ text-center ]">
            <h2 className='[ footer__header ]'>Main</h2>
            <ul className="[ list flex-col ]" data-list-type='link' data-list-muted data-list-vertical>
              <li className='list__item'><Link to='/'>Home</Link></li>
              <li className='list__item'><Link to='/news'>News</Link></li>
            </ul>
          </div>

          <div className="[ footer__part ] [ text-center ]">
            <h2 className='[ footer__header ]'>Shortcuts</h2>
            <ul className="[ list flex-col ]" data-list-type='link' data-list-muted data-list-vertical>
              <li className='list__item'><Link to='/'>Questions</Link></li>
              <li className='list__item'><Link to='/users'>Users</Link></li>
              <li className='list__item'><Link to='/tags'>Tags</Link></li>
            </ul>
          </div>

          <div className="[ footer__part ] [ text-center ]">
            <h2 className='[ footer__header ]'>Actions</h2>
            <ul className="[ list flex-col ]" data-list-type='link' data-list-muted data-list-vertical>
              <li className='list__item'><Link to='/ask'>Ask question</Link></li>
              <li className='list__item'><Link to='/auth/login'>Log in</Link></li>
              <li className='list__item'><Link to='/auth/signup'>Sign up</Link></li>
            </ul>
          </div>

          <div className="[ footer__part ] [ text-center ]">
            <h2 className='[ footer__header ]'>About</h2>
            <ul className="[ list flex-col ]" data-list-type='link' data-list-muted data-list-vertical>
              <li className='list__item'><a href='https://github.com/IsolatedLun/HeapUnderSink'>Source code</a></li>
              <li className='list__item'><Link to='/contact'>Contact us</Link></li>
            </ul>
          </div>
        </div>

        <div className='[ flex-between ]'>
          <address className='[ text-muted fs-200 padding-block-1 ]'>
            Copyright of @Isolated-2022. All rights reserved.
          </address>

          <div className="[ footer__socials ] [ flex-items ]">
            <a href="https://github.com/IsolatedLun/HeapUnderSink" 
              className='fab' aria-label="HeapUndersink's github">&#xf09b;</a>
            <a href="https://www.youtube.com/channel/UCb3kc0iA0uucEOT9A25fUuA" 
              className='fab' aria-label="HeapUndersink's youtube">&#xf167;</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer