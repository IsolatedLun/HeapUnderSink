import { useEffect, useState } from "react";
import ImageInput from "../Inputs/ImageInput";
import PasswordInput from "../Inputs/PasswordInput";
import TextArea from "../Inputs/TextArea";
import TextArrayInput from "../Inputs/TextArrayInput";
import TextInput from "../Inputs/TextInput";
import FormPart from "./FormPart";
import { INF_ValidatorNode, INF_Input } from "./types";
import { cleanUnderscores } from "./utilFuncs";

/**
 * @param configuration - Form configuration
 * @param setter - Sets the state of the form
 * @param form - State of the form
 * @returns [fields, isValidForm]
*/
export function useForm(configuration: any, setter: Function, form: any): [JSX.Element[], boolean] {
    let renderedFields: JSX.Element[] = [];
    let nodes: INF_ValidatorNode[] = [];
    const [isValid, setIsValid] = useState(false);

    for(let field in configuration) {
        const inputObj = configuration[field] as INF_Input;

        const [input, id] = createFormField(configuration[field], form[field], setter); 
        renderedFields.push(input);
        nodes.push({ id, validators: inputObj.validators })
    }

    useEffect(() => {
        if(form)
          setIsValid(validateForm(nodes));
    }, [form])

    return [renderedFields, isValid];
}

/**
 * @param input - Input element
 * @param setter - Sets the state of the form
 * @returns [<FormPart />, id]
*/
function createFormField(input: INF_Input, value: any, setter: Function): [JSX.Element, string] {
    let inputEl: JSX.Element = <></>;

    if(input.generalType === 'text')
        inputEl = <TextInput { ...input } onInput={setter} value={value} />;
    else if(input.generalType === 'password')
        inputEl = <PasswordInput { ...input } onInput={setter} value={value} />
    else if(input.generalType === 'image')
        inputEl = <ImageInput { ...input } onInput={setter} value={value} />
    else if(input.generalType === 'textarea')
        inputEl = <TextArea { ...input } onInput={setter} value={value} />
    else if(input.generalType === 'textArray')
        inputEl = <TextArrayInput { ...input } onInput={setter} value={value} />

    const el = (
        <FormPart>
            <div className="[ flex flex-col gap-025 ]">
                <label htmlFor={input.name}>{ cleanUnderscores(input.name) }</label>
                { input.descritpion && <p className="[ fs-200 text-muted indent-1 ]">{ input.descritpion }</p> }
            </div>

            { inputEl  }
            <ul className="[ list flex-col ]" data-list-variant='error' 
                id={input.name + '-input-list'} ></ul>
        </FormPart>
    )

    return [el, input.name + '-input'];
}

/**
 * @param validatorNodes - Validation nodes 
 * @returns true if the inputs are valid else false 
*/
function validateForm(validatorNodes: INF_ValidatorNode[]): boolean {
    let validInputs: boolean[] = [];

    // Loop through all inputs.
    validatorNodes.forEach(node => {
        const input = document.getElementById(node.id) as HTMLInputElement;
        let errors: string[] = [];

        // Execute all validator functions.
        node.validators.forEach(validator => {
            const { error, validate } = validator();
            
            if(!validate(input))
                errors.push(error);
        })
        
        validInputs.push(!(errors.length > 0));
        displayErrors(node.id, errors);
    })

    return validInputs.every(Boolean);
}

function displayErrors(inputId: string, errors: string[]): void {
    const list = document.getElementById(inputId + '-list')!;
    list.innerHTML = '';

    errors.forEach(error => {
        let li = document.createElement('li');
        li.textContent = error;
        list.appendChild(li);
    })
}