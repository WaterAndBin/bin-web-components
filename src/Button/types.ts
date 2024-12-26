import { VNode } from 'omi';
import React from 'react';
import { SizeEnum, TypeEnum } from 'src/common';

export interface YButtonProps {
  /**
   * 尺寸
   */
  size?: SizeEnum;
  /**
   * 类型
   */
  type?: TypeEnum;
  className?: string;
  style?: CSSStyleDeclaration;
  /**
   * slot插槽专用
   */
  children?: React.JSX.Element | React.JSX.Element[] | HTMLDivElement | HTMLDivElement[] | string | VNode<any>;
}

export interface YButtonEvent {
  /**
   * 点击事件
   * @param e Event
   */
  onClick?: (e: MouseEvent) => void;
}
