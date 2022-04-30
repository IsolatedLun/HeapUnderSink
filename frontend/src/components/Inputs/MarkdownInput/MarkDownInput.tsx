import { marked } from 'marked';
import React, { useState } from 'react'
import { INF_Input } from '../../Forms/types';
import IconButton from '../../Modules/Buttons/IconButton';
import MarkDown from '../../Modules/MarkDown';
import MarkDownControls from './MarkDownControls';

const MarkDownInput = (props: INF_Input) => {
    const [val, setVal] = useState('<p class="[ card ] [ padding-1 ]">You can use html too :).</p>');

    return (
        <div className='[ flex-col ]'>
            <MarkDownControls setVal={setVal} />
            <textarea 
            key={props.id}
            id={props.name + '-input'}
            name={props.name}
            className='[ textarea-input markdown-input input ] [ width-min-100 border-radius-0 resize-vertical ]'
            data-input-variant='textarea'
            value={val}
            spellCheck='false'
            onInput={(e) => {
                const target = e.target as HTMLInputElement;
                setVal(target.value);

                props.onInput((prevState: object) => ({ ...prevState, [target.name]: marked.parse(val) }))
            }}></textarea>

            <MarkDown text={val} />
        </div>
    )
}

export default MarkDownInput