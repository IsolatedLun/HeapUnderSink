import { INF_Rule } from "./types";

export function requiredRule() {
    return <INF_Rule>{
        ruleName: 'required',
        error: 'This field is required.',
        validate: (input) => input.value.length > 0
    }
}

export function minLengthRule(len: number) {
    return <INF_Rule>{
        ruleName: 'minimum length',
        error: `Must contain atleast ${len} characters.`,
        validate: (input) => input.value.length >= len
    }
}

export function maxLengthRule(len: number) {
    return <INF_Rule>{
        ruleName: 'max length',
        error: `Must contain less than ${len} characters.`,
        validate: (input) => input.value.length <= len
    }
}

export function specialCharactersRule(characters: string[]) {
    return <INF_Rule>{
        ruleName: 'special characters',
        error: `Must contain atleast one of these characters. (${characters.join(', ')})`,
        validate: (input) => {
            for(let i = 0; i < input.value.length; i++) {
                if(characters.includes(input.value[i]))
                    return true;
            }

            return false;
        }
    }
}