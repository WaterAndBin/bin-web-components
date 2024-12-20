import { VNode } from "omi";
import React from "react";
import { SizeEnum } from "src/common";
import YButton from './button';
export interface YButtonProps {
    size: SizeEnum;
    className?: string;
    style?: CSSStyleDeclaration;
    children?: React.JSX.Element | React.JSX.Element[] | HTMLDivElement | HTMLDivElement[] | string | VNode<any>;
}
export interface YButtonEvent {
    onClick?: (e: MouseEvent) => void;
}
export type ButtonInstance = InstanceType<typeof YButton>;
