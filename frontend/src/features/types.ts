import { INF_Question } from "../components/Questions/types";

export interface INF_User {
    id: number;
    username: string;
    reputation: number;
    profile: string;

    questions: INF_Question[];

    is_superuser: boolean;
    is_staff: boolean;

    joined_at: string;
}

export interface INF_UserState {
    isLogged: boolean;
    user: INF_User;
}

export interface INF_QuestionState {
    questions: INF_Question[];
    currQuestion: INF_Question | undefined;
}