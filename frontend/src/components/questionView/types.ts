import { INF_UserPreview } from "../../interfaces";

export type INF_Question = {
    user: INF_UserPreview;
    title: string;
    tags: INF_Tag[];

    votes: number;
    answers: number;
    views: number;
    created_at: Date;
}

interface INF_Tag {
    name: string;
    icon?: string;
}