import { VNode } from 'omi';
import React from 'react';

export interface YDividerProps {
  className?: string;
  style?: CSSStyleDeclaration;
  /**
   * slot插槽专用
   */
  children?: React.JSX.Element | React.JSX.Element[] | HTMLDivElement | HTMLDivElement[] | string | VNode<any>;
}
