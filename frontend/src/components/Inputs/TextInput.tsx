import { INF_Input } from '../Forms/types';

const TextInput = (props: INF_Input) => {
    return (
    <input 
        key={props.id}
        id={props.name + '-input'}
        name={props.name}
        type={props.type} 
        className='[ input ]'
        data-input-variant='text'
        value={props.value}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          props.onInput((prevState: object) => ({ ...prevState, [target.name]: target.value }))
        }}
    />
  )
}

export default TextInput;