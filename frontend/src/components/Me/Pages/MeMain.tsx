import React from 'react'
import CubeGraph from '../../Graphs/CubeGraph/CubeGraph'
import MeAbout from '../MeAbout'
import { INF_MeMain } from '../types'
const arr: any[] = [
  { 
      quasar_radius: '10^^^^^^1002',
      quasar_name: 'EXT-90',
      created_at: new Date() 
  }
]

const MeMain = (props: INF_MeMain) => {
  return (
    <div className="[ me-main ] [ flex-between flex-align-start flex-grow ]" data-flex-column-mobile>
        <MeAbout { ...props.user } />
        <CubeGraph data={props.user.questions} dateKey={'created_at'} />
        

    <CubeGraph data={arr} dateKey='created_at' />
    </div>
  )
}

export default MeMain