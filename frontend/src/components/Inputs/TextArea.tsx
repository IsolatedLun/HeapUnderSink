import { INF_Input } from "../Forms/types";

const TextArea = (props: INF_Input) => {
  return (
   <textarea 
        key={props.id}
        id={props.name + '-input'}
        name={props.name}
        className='[ textarea-input input ]'
        data-input-variant='textarea'
        value={props.value}
        spellCheck='false'
        onInput={(e) => {
            const target = e.target as HTMLInputElement;
            props.onInput((prevState: object) => ({ ...prevState, [target.name]: target.value }))
    }}></textarea>
  )
}

export default TextArea;