import React from "react";

export interface ButtonProps {
    variant?: string;
    rest?: React.ButtonHTMLAttributes<any> | any;
    children: any;
}

export interface ActionButtonProps extends ButtonProps {
    onClick: () => void;
}

export interface LinkButtonProps extends ButtonProps {
    to: string;
}

export interface IconButtonProps extends ActionButtonProps {
    ariaLabel: string;
}