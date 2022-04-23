import React from 'react'
import CubeGraph from '../../Graphs/CubeGraph/CubeGraph'
import MeAbout from '../MeAbout'
import { INF_MeMain } from '../types'

const MeMain = (props: INF_MeMain) => {
  return (
    <div className="[ me-main ] [ flex-between flex-align-start flex-grow ]" data-flex-column-mobile>
        <MeAbout />
        <CubeGraph data={props.user.questions} dateKey={'created_at'} />
    </div>
  )
}

export default MeMain