import { INF_Config, INF_Input } from "./types";
import { minLengthRule, requiredRule, specialCharactersRule } from "./validatorRules";

export const loginConfig: INF_Config = {
    inputs: {
        email: <INF_Input>{
            id: 1,
            name: 'email_address',
            generalType: 'text',
            type: 'email',
            validators: [
                requiredRule,
            ],
            onInput: () => null
        },

        password: <INF_Input>{
            id: 1,
            name: 'password',
            generalType: 'text',
            type: 'password',
            validators: [
                requiredRule,
                () => minLengthRule(12),
                () => specialCharactersRule(['#', '$', '&'])
            ],
            onInput: () => null
        }
    },

    formObj: {
        email_address: '',
        password: ''
    }
}