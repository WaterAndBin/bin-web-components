import { type VNode } from 'omi';
import type React from 'react';
import { type SizeEnum } from 'src/common';

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
  children?: React.JSX.Element | React.JSX.Element[] | HTMLDivElement | HTMLDivElement[] | string | VNode<any>;
}

/**
 * 事件
 */
export interface YButtonEvent {
  /**
   * 点击事件
   */
  onClick?: (e: Event) => void;
}
