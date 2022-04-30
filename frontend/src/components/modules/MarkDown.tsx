import { marked } from 'marked'
import React from 'react'
import { INF_MarkDown } from './types';

const MarkDown = (props: INF_MarkDown) => {
  return (
    <div 
      data-show-background={props.showBackground}
      className='[ markdown ] [ margin-block-1 fs-300 ]' 
      dangerouslySetInnerHTML={{ __html: marked.parse(props.text) }}>

    </div>
  )
}

export default MarkDown;