import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav role='Primary navigation' className='[ primary-nav ] [ flex-between ]'>
            <h1 className='[ fw-normal ]'>HeapUndersink</h1>

            <div className='[ flex-items ]'>
                <button className='[ button ]'>Log in</button>
                <button className='[ button ]'>Sign up</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar