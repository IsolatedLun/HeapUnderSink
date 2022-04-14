import React from 'react';
import { CAMERA_ICON } from '../../consts';
import { INF_Input, INF_SignUp } from '../Forms/types';
import { previewImage } from './funcs';

const ImageInput = (props: INF_Input) => {
  const previewRef = React.createRef<HTMLImageElement>();

  function handleInput(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
  
    props.onInput((prevState: INF_SignUp) => {
      const file = target.files![0];
      previewImage(file, previewRef.current!)
  
      return { ...prevState, [target.name]: file };
    });
  }

  return (
    <label htmlFor={props.name + '-input'} className='[ fa input pos-relative ]' data-input-variant='image'>
        <input  
            key={props.id}
            id={props.name + '-input'}
            name={props.name}
            type='file'
            hidden
            onInput={(e) => handleInput(e)} />

        <img 
          className='[ preview ] [ pos-absolute ]'
          src="" 
          id={props.name + '-input-preview'} 
          ref={previewRef} />

          { CAMERA_ICON }
    </label>
  )
}

export default ImageInput