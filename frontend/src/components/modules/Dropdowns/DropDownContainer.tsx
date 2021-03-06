import { useState } from 'react'
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import { INF_DropDownContainer } from './types';

const DropDownContainer = (props: INF_DropDownContainer) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div tabIndex={0} className='[ dropdown-container ] [ cursor-pointer ]' data-alignment={props.alignment}>
        {
          props.to
          ? (
            <Link aria-label='Dropdown button' aria-hidden
              className='[ button ] [ select-none ]' to={props.to} onClick={() => setIsOpen(!isOpen)}>
              { props.item }
            </Link>
            )
          : (
              <div aria-label='Dropdown button'  aria-hidden
                className="[ button ] [ select-none ]" data-variant='default' onClick={() => setIsOpen(!isOpen)}>
                { props.item }
              </div>
            )
        }
        
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

export default DropDownContainer;