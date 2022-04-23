export interface INF_DropDownItem {
    leftIcon?: string;
    rightIcon?: string;
    variant?: string;
    children: any;

    to?: string;
    onClick?: Function;
}

export interface INF_DropDownContainer {
    item: any;
    children: any;
    to?: string;
    alignment?: string;
}