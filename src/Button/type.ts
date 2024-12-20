import { VNode } from "omi";
import React from "react";
import { SizeEnum } from "src/common";
import YButton from './button'
/**
 * 传参
 */
export interface YButtonProps {
  /**
   * 尺寸
   */
  size: SizeEnum;
  className?: string;
  style?: CSSStyleDeclaration;
  /**
   * slot插槽专用
   */
  children?:
    | React.JSX.Element
    | React.JSX.Element[]
    | HTMLDivElement
    | HTMLDivElement[]
    | string
    | VNode<any>;
}

/**
 * 事件
 */
export interface YButtonEvent {
  /**
   * 点击事件
   * @param e Event
   */
  onClick?: (e: MouseEvent) => void;
}


export type ButtonInstance = InstanceType<typeof YButton>
