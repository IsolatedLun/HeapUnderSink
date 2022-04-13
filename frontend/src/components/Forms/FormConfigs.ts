import { INF_Config, INF_Input, INF_Login } from "./types";
import { minLengthRule, requiredRule, specialCharactersRule } from "./validatorRules";

export const loginConfig: INF_Config = {
    inputs: {
        email_address: <INF_Input>{
            id: 1,
            name: 'email_address',
            generalType: 'text',
            type: 'email',
            value: '',
            validators: [
                requiredRule,
            ],
            onInput: () => null
        },

        password: <INF_Input>{
            id: 1,
            name: 'password',
            generalType: 'password',
            type: 'password',
            value: '',
            validators: [
                requiredRule,
                () => minLengthRule(7),
                () => specialCharactersRule(['#', '$', '&'])
            ],
            onInput: () => null
        }
    },

    formObj: <INF_Login>{
        email_address: '',
        password: ''
    }
}