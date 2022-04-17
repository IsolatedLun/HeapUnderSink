import { useEffect, useState } from 'react';
import { INF_Input } from '../Forms/types';
import { TIMES_ICON } from '../../consts'
import { INF_TextTag } from './types';

const TextTag = (props: INF_TextTag) => {
    function deleteTextTag() {
        props.setter((prevState: string[]) => {

            return [...prevState.filter(str => str !== props.name)];
        })
    }

    return (
        <p  onClick={() => deleteTextTag()}
            className="[ tag ] [ flex-align-center gap-025 cursor-pointer ]">
            { props.name }
            <button className='[ tag__cancel ] [ fa ]'>{ TIMES_ICON }</button>
        </p>
    )
}

const TextArrayInput = (props: INF_Input) => {
    const [text, setText] = useState('')
    const [textArray, setTextArray] = useState<string[]>([]);

    useEffect(() => {
        props.onInput((prevState: object) => ({ ...prevState, [props.name]: textArray }));
    }, [textArray])

    return (
        <div className="[ input-array-container ] [ flex flex-col gap-05 ]">
            <input 
                key={props.id}
                id={props.name + '-input'}
                name={props.name}
                type={props.type} 
                className='[ input ]'
                data-input-variant='text'
                value={text}
                onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    const val = target.value;

                    setText(val);
                    
                    if(val[val.length - 1] === ' ' && val.trim().length > 0) {
                        setTextArray(prevState => {
                            // Uses Set datatype to avoid duplicates.
                            return Array.from(new Set([...prevState, val.split(' ')[0]]));
                        });

                        setText('');
                    }
                }}
            />

            <div className="[ text-tag-array ] [ flex flex-items flex-wrap gap-05 ]">
                {
                    textArray.map(text => 
                        <TextTag key={text} name={text} setter={setTextArray} />)
                }
            </div>
        </div>
  )
}

export default TextArrayInput;