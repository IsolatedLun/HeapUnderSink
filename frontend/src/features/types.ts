import { INF_Question } from "../components/Questions/types";

export interface INF_User {
    id: number;
    username: string;
    reputation: number;
    profile: string;

    questions: INF_Question[];

    is_superuser: boolean;
    is_staff: boolean;
}

export interface INF_UserState {
    isLogged: boolean;
    user: INF_User;
}