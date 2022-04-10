import React from 'react'
import { Link } from 'react-router-dom'

const Miscellaneuos = () => {
  return (
    <section data-desktop
        className='[ miscellaneous ] [ flex flex-justify-center padding-block-1 flex-items height-max ]'>
        <div className="[ card innertext-small flex-items flex-col ]" data-card-variant='yellow'>
            <p className='[ width-25ch text-center ]'>
                HeapUndersink is a place where you can ask any question and get any answer.
            </p> 
            <Link to="/ask" data-default='dark' data-link-variant='dotted'>Ask question</Link>
        </div>
    </section>
  )
}

export default Miscellaneuos