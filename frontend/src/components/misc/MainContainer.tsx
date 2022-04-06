import React from 'react'
import Miscellaneuos from '../layouts/Miscellaneuos'

const MainContainer = ({ children } : { children: any }) => {
  return (
    <main className="[ main-container ] [ grid-2fr-1fr ]" id="main-container" data-reset-grid-colums-mobile>
        { children }
        <Miscellaneuos />
    </main>
  )
}

export default MainContainer