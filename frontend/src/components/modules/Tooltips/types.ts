import { INF_ChildrenProps } from "../../../interfaces";

export interface INF_Tooltip extends INF_ChildrenProps {
    variant?: string;
 };

export interface INF_IconTooltip extends INF_ChildrenProps {
    icon: string;
    color: string;
    variant?: string;
}