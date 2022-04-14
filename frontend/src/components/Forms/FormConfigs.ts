import { INF_Config, INF_Input, INF_Login } from "./types";
import { isImage, minLengthRule, requiredRule, specialCharactersRule } from "./validatorRules";

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
            id: 2,
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

export const signUpConfig: INF_Config = {
    inputs: {
        username: <INF_Input>{
            id: 0,
            name: 'username',
            generalType: 'text',
            type: 'text',
            value: '',
            validators: [
                requiredRule,
            ],
            onInput: () => null
        },

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
            id: 2,
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
        },

        profile: <INF_Input>{
            id: 3,
            name: 'profile',
            generalType: 'image',
            type: 'file',
            value: null,
            validators: [
                isImage
            ],
            onInput: () => null
        }
    },

    formObj: <INF_Login>{
        email_address: '',
        password: '',
        profile: ''
    }
}