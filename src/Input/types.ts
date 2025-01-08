import { SizeEnum } from 'src/common';

export type InputType = 'text' | 'password';

export interface YInputProps {
  /** 是否清空输入框，默认true */
  allowClear?: boolean;
  /** 宽度，默认350px */
  width?: string;
  /** 大小 */
  size?: SizeEnum;
  /** 类型 默认text */
  type?: InputType;
  /** 提示信息 */
  placeholder?: string;
  className?: string;
  style?: CSSStyleDeclaration;
  children?: Element;
}

export interface YInputEvent {
  /**
   * 点击事件
   * @param e Event
   */
  onClick?: (e: MouseEvent) => void;
}
