import React from 'react'
import Questions from '../questionView/Questions'

const Home = () => {
  return (
    <main className="[ main-container ] [ grid-2fr-1fr ]" id="main-container" 
      data-reset-grid-colums-mobile>
        <Questions questions={[]} />
        <section data-desktop
          className='[ miscellaneous ] [ flex flex-justify-center padding-block-1 flex-items height-max ]'>
            <div className="[ card innertext-small flex-items flex-col ]" data-card-variant='yellow'>
                <p className='[ width-25ch text-center ]'>
                  HeapUndersink is a place where you can ask any question and get any answer.
                </p> 
                <a href="" data-default='dark' data-link-variant='dotted'>Ask question</a>
            </div>
        </section>
    </main>
  )
}

export default Home