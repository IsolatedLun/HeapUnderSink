import { INF_UserPreview } from "../../interfaces";
import { INF_Tag } from "../Modules/Tags/types";
import { INF_Answer } from "../ViewQuestion/types";

export type INF_Question = {
    id: number;
    user: INF_UserPreview;
    title: string;
    body: string;
    tags: INF_Tag[];
    answers: INF_Answer[] | number;

    rate_type: string;

    votes: number;
    views: number;
    reports: number;

    answered: boolean;

    created_at: string;
    modified_at: string;
}

export interface INF_Stat {
    name: string;
    num: number;
    bool?: boolean;
}

export interface INF_QuestionUserPreview extends INF_UserPreview {
    isVertical?: boolean;
    isQuestioner?: boolean;
}