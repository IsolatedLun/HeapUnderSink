import { INF_User } from "../../features/types";

export interface INF_Input {
    id: number | string;
    name: string;
    type: string;
    generalType: string;
    onInput: Function;
    value: any;
    validators: [ () => INF_Rule ] | any;

    descritpion?: string;
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
    formObj: any;
}

// Forms
export interface INF_Login {
    email_address: string;
    password: string;
}

export interface INF_SignUp extends INF_Login {
    profile: File | null;
}