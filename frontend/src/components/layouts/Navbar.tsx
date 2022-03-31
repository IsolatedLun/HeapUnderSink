import { TIMES_ICON } from '../../consts';

function toggleElement(id: string) {
  const el = document.getElementById('side-nav') as HTMLElement;

  if(el.getAttribute('data-state') === 'off') 
    el.setAttribute('data-state', 'on')

  else
    el.setAttribute('data-state', 'off')
}

const Navbar = () => {
  return (
    <>
        <nav role='Primary navigation' className='[ primary-nav ] [ flex-between ]'>
            <h1 className='[ fw-normal ]'>HeapUndersink</h1>

            <input className='[ input margin-r-auto flex-grow ]' type="text" 
              placeholder='Search...' data-desktop />

            <ul className="[ list ] [  ]" data-list-type='link' data-desktop>
              <li className="list__item"><a href="">Home</a></li>
              <li className="list__item"><a href="">News</a></li>
            </ul>

            <div aria-hidden data-desktop className="line-break"></div>

            <div className='[ flex-items ]'>
                <button className='[ button ]' data-desktop>Log in</button>
                <button className='[ button ]' data-variant='action' data-desktop>Sign up</button>
            </div>

            <button className='[ button ]' onClick={() => toggleElement('side-nav')}
              data-mobile data-content='icon'>{ TIMES_ICON }</button>
        </nav>

        <nav role='Side mobile navigation' id='side-nav' className="[ side-nav ] [ flex-items flex-col text-center ]" 
          data-state='off'>
          
          <button className='[ button ]' onClick={() => toggleElement('side-nav')}
            data-mobile data-content='icon'>{ TIMES_ICON }</button>
          
          <ul className="[ list ] [ flex-col ]" data-list-type='link'>
            <li className="list__item"><a href="">Home</a></li>
            <li className="list__item"><a href="">News</a></li>
          </ul>

          <button className='[ button ]'>Log in</button>
          <button className='[ button ]' data-variant='action'>Sign up</button>
        </nav>
    </>
  )
}

export default Navbar