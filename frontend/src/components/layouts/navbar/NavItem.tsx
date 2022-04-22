import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DropDown from '../../Modules/Dropdowns/DropDown';
import { INF_NavItem } from './types';

const NavItem = (props: INF_NavItem) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='[ nav__item ] [ cursor-pointer ]'>
        <Link className='[ nav__link ]' to={props.to ? props.to : '#'} onClick={() => setIsOpen(!isOpen)}>
          { props.item }
        </Link>
        
        {
            isOpen && !props.to
            ?(
                <div className='[ pos-relative ]' onClick={() => setIsOpen(!isOpen)}>
                  <DropDown>
                      { props.children }
                  </DropDown>
                </div>
             )
            : null
        }
    </div>
  )
}

export default NavItem