import { INF_UserPreview } from "../../interfaces";
import { INF_Tag } from "../Modules/Tags/types";

export type INF_Question = {
    id: number;
    user: INF_UserPreview;
    title: string;
    body: string;
    tags: INF_Tag[];

    votes: number;
    answers: number;
    views: number;

    answered: boolean;

    created_at: Date;
    modified_at: Date;
}

export interface INF_Stat {
    name: string;
    num: number;
}