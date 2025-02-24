import { VNode } from 'omi';
import type { SizeEnum } from '../common';

export interface YSwitchProps {
  defaultChecked?: boolean;
  /** 宽度，默认是10px */
  width?: string;
  /** 尺寸 */
  size?: SizeEnum;
  /** 禁用，默认是false */
  disabled?: boolean;
  /** 选中时的开关颜色 */
  checkedColor?: string;
  /** 未选中时的开关颜色 */
  uncheckedColor?: string;
  /** 是否加载，默认为false */
  loading?: boolean;
  children?: VNode | VNode[] | string;
}

export interface YSwitchEvent {
  /** 函数返回值用于判断是否阻止切换 */
  beforeChange?: () => boolean | Promise<boolean>;
  onChange?: (isChecked: boolean) => void;
}

/**
 * YSwitch实例对象
 */
export interface YSwitchInstance {
  /** 改变按钮状态，会去调用before-change方法 */
  changeIsChecked: () => Promise<void>;
}
