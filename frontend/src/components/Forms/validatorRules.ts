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
