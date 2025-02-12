import { VNode } from 'omi';
import React from 'react';
import type { SizeEnum, StatusEnum } from 'src/common';
import { StyleValue } from '../common';

export interface YTagProps {
  /**
   * 尺寸
   */
  size?: SizeEnum;
  /**
   * 颜色
   */
  color?: string;
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
  closable?: boolean;
  bordered?: boolean;
  loading?: boolean;
}

export interface YTagEvent {
  /**
   * 点击事件
   * @param e Event
   */
  onClick?: (e: MouseEvent) => void;
}

export interface TagProps extends YTagProps, YTagEvent {}
