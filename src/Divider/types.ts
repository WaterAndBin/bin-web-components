import { VNode } from 'omi';
import React from 'react';

export type SortTypes = 'horizontal' | 'vertical';
export type OrientationTypes = 'left' | 'right' | 'center';

export interface YDividerProps {
  width?: number;
  className?: string;
  style?: CSSStyleDeclaration;
  /** 排序，水平：horizontal，竖：vertical */
  type?: SortTypes;
  orientation?: OrientationTypes;
  /**
   * slot插槽专用
   */
  children?: React.JSX.Element | React.JSX.Element[] | HTMLDivElement | HTMLDivElement[] | string | VNode<any>;
}
