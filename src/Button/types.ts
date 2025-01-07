import { VNode } from 'omi';
import React from 'react';
import type { SizeEnum, StatusEnum, StyleValue, TypeEnum } from 'src/common';

export interface YButtonProps {
  /**
   * 尺寸
   */
  size?: SizeEnum;
  /**
   * 类型
   */
  type?: TypeEnum;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 状态
   */
  status?: StatusEnum;
  className?: string;
  style?: StyleValue;
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
