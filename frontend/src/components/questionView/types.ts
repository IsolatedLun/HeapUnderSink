import { INF_UserPreview } from "../../interfaces";

export type INF_Question = {
    id: number;
    user: INF_UserPreview;
    title: string;
    tags?: INF_Tag[];

    votes: number;
    answers: number;
    views: number;

    answered: boolean;

    created_at: Date;
}

export interface INF_Tag {
    name: string;
    icon?: string;
}