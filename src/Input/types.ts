import { SizeEnum } from 'src/common';

export interface YInputProps {
  /** 大小 */
  size: SizeEnum;
  /** 提示信息 */
  placeholder: string;
  className: string;
  style: CSSStyleDeclaration;
}

export interface YInputEvent {
  /**
   * 点击事件
   * @param e Event
   */
  onClick?: (e: MouseEvent) => void;
}
