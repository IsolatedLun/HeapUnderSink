import { INF_Input } from '../Forms/types';

const TextInput = ({ input } : { input: INF_Input }) => {
    return (
    <input 
        key={input.id}
        id={input.name + '-input'}
        name={input.name}
        type={input.type} 
        className='[ input ]'
        data-input-variant='text'
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          input.onInput((prevState: object) => ({ ...prevState, [target.name]: target.value }))
        }}
    />
  )
}

export default TextInput