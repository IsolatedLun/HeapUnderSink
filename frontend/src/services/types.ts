import { INF_User } from "../features/types";

export interface INF_Response {
    data?: any;
    detail?: any;
    status: number;
}

export interface INF_ResponseActions {
    redirectTo?: string;
    popup?: {
        text: string;
        type: string;
    };
}

export interface INF_Tokens {
    refresh: string;
    access: string;
}

export interface INF_LoginResponse {
    tokens: INF_Tokens;
    user: INF_User;
}