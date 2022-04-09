export interface INF_Input {
    id: number | string;
    name: string;
    type: string;
    generalType: string;
    onInput: Function;
    validators: [ () => INF_Rule ] | any;
}

export interface INF_FormPart {
    label: string;
}

export interface INF_ValidatorNode {
    id: string;
    validators: [() => INF_Rule];
}

export interface INF_Rule {
    ruleName: string;
    error: string;
    validate: (input: HTMLInputElement) => boolean;
}

export interface INF_Config {
    inputs: object;
    formObj: object;
}
