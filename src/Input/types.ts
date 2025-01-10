import { VNode } from 'omi';
import { SizeEnum, StyleValue } from 'src/common';

export type InputType = 'text' | 'password';

export interface YInputProps {
  /** 是否清空输入框，默认true */
  allowClear?: boolean;
  /** 宽度，默认220px */
  width?: string;
  /** 大小 */
  size?: SizeEnum;
  /** 类型 默认text */
  type?: InputType;
  /** 提示信息 */
  placeholder?: string;
  /** 是否禁用，默认是false */
  disabled?: boolean;
  /** 是否是错误的，默认是false */
  error?: boolean;
  /** 默认值 */
  defaultValue?: string;
  /** 最大的数，默认是0，与数字统计一起使用 */
  maxLength?: number;
  /** 显示数字统计，并且传最大的数 */
  showWordLimit?: boolean;
  /** 显示字数统计 */
  showWordTotal?: boolean;
  /** 加载中，默认为false */
  loading?: boolean;
  className?: string;
  style?: StyleValue;
  children?: VNode | VNode[];
}

export interface YInputEvent {
  /**
   * 点击事件
   * @param e Event
   */
  onClick?: (e: Event) => void;
}
