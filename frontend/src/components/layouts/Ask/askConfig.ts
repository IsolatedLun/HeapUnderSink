import { INF_Config, INF_Input } from "../../Forms/types";
import { minLengthRule, requiredRule } from "../../Forms/validatorRules";
import { INF_Ask } from "./types";

export const askConfig: INF_Config = {
    inputs: {
        title: <INF_Input>{
            id: 0,
            type: 'text',
            generalType: 'text',
            name: 'title',
            value: '',
            validators: [
                requiredRule,
                () => minLengthRule(7)
            ],
            descritpion: 'A concise title that clearly explains your question.'
        },

        body: <INF_Input>{
            id: 0,
            type: 'textarea',
            generalType: 'markdown',
            name: 'body',
            value: '',
            validators: [
                requiredRule,
            ]
        },

        tags: <INF_Input>{
            id: 0,
            type: 'text',
            generalType: 'textArray',
            name: 'tags',
            value: '',
            validators: [],
            descritpion: 'Tags that your question is correlated to.'
        }
    },

    formObj: <INF_Ask>{
        title: '',
        body: '',
        tags: []
    }
}