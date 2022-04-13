import { useState } from 'react';
import { PASSWORD_HIDE_ICON, PASSWORD_SHOW_ICON } from '../../consts';
import { INF_Input } from '../Forms/types';

const PasswordInput = (props: INF_Input) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='[ input-container ] [ pos-relative flex-grow ]'>
            <input 
                key={props.id}
                id={props.name + '-input'}
                name={props.name}
                type={showPass ? 'text' : props.type} 
                className='[ password-input ] [ input ]'
                data-input-variant='text'
                value={props.value}
                onInput={(e) => {
                const target = e.target as HTMLInputElement;
                props.onInput((prevState: object) => ({ ...prevState, [target.name]: target.value }))
                }}
            />

            <p 
                className='[  ] [ input-icon fa cursor-pointer select-none ]' 
                data-active={showPass}
                onClick={() => setShowPass(!showPass)}>
                {
                    showPass
                    ? PASSWORD_SHOW_ICON
                    : PASSWORD_HIDE_ICON
                }
            </p>
        </div>
  )
}

export default PasswordInput;