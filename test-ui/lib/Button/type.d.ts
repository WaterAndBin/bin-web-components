import { VNode } from "omi";
import React from "react";
export interface TButtonProps {
    msg: string;
    class?: string;
    children?: React.JSX.Element | React.JSX.Element[] | HTMLDivElement | HTMLDivElement[] | string | VNode<any>;
}
export interface TButtonEvent {
    onClick?: (e: MouseEvent) => void;
}
