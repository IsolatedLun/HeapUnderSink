import React from 'react'
import Miscellaneuos from '../Layouts/Miscellaneuos'

const MainContainer = ({ children, containMisc=true } : { children: any, containMisc: boolean }) => {
  if(containMisc)
    return (
      <main className="[ main-container ] [ grid-2fr-1fr ]" id="main-container" 
      data-reset-grid-colums-mobile data-contains-misc>
          { children }
          <Miscellaneuos />
      </main>
    )
  else
    return (
      <main className="[ main-container ]" id="main-container">
          { children }
      </main>
    )
}

export default MainContainer