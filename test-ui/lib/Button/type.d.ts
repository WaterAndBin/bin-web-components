import { VNode } from "omi";
import React from "react";
export interface TButtonProps {
    msg: string;
    children?: React.JSX.Element | React.JSX.Element[] | HTMLDivElement | HTMLDivElement[] | string | VNode<any>;
    onClick?: (e: MouseEvent) => void;
}
