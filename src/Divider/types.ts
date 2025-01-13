import { VNode } from 'omi';
import { StyleValue } from '../common';

export type SortTypes = 'horizontal' | 'vertical';
export type OrientationTypes = 'left' | 'right' | 'center';
export type BorderTypes = 'solid' | 'dashed' | 'dotted' | 'double';

export interface YDividerProps {
  /** 边框的宽度，默认是1px */
  width?: string;
  /** Border的样式，是虚线还是实线等等 */
  type?: BorderTypes;
  /** 排序，水平：horizontal，竖：vertical */
  direction?: SortTypes;
  /** 分割文字位置 */
  orientation?: OrientationTypes;
  className?: string;
  style?: StyleValue;
  /**
   * slot插槽专用
   */
  children?: VNode | VNode<any>;
}
