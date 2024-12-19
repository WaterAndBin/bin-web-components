import { VNode } from "omi";
import React from "react";
import { SizeEnum } from "src/common";
export interface YButtonProps {
    size: SizeEnum;
    className?: string;
    style?: CSSStyleDeclaration;
    children?: React.JSX.Element | React.JSX.Element[] | HTMLDivElement | HTMLDivElement[] | string | VNode<any>;
}
export interface YButtonEvent {
    onClick?: (e: MouseEvent) => void;
}
