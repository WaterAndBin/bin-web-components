import { VNode } from "omi";
import React from "react";

/**
 * 传参
 */
export interface TButtonProps {
  msg: string;
  /**
   * 类
   */
  class?: string;
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
export interface TButtonEvent {
  /**
   * 点击事件
   * @param e Event
   */
  onClick?: (e: MouseEvent) => void;
}
