import { VNode } from "omi";
import React from "react";
import { SizeEnum } from "src/common";
export interface TButtonProps {
    size: SizeEnum;
    class?: string;
    children?: React.JSX.Element | React.JSX.Element[] | HTMLDivElement | HTMLDivElement[] | string | VNode<any>;
}
export interface TButtonEvent {
    onClick?: (e: MouseEvent) => void;
}
