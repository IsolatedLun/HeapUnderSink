import { INF_Config, INF_Input } from "../Forms/types";
import { requiredRule } from "../Forms/validatorRules";

export const answerConfig: INF_Config = {
    inputs: {
        answer: <INF_Input> {
            id: 0,
            name: 'answer',
            value: '',
            validators: [
                requiredRule
            ],
            type: 'textarea',
            generalType: 'textarea',
            descritpion: '(You cannot edit an answer once posted).'
        },
    },

    formObj: {
        answer: '',
        replyingTo: ''
    }
}