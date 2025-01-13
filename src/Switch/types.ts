import type { SizeEnum } from '../common';

export interface YSwitchProps {
  /** 尺寸 */
  size?: SizeEnum;
  isChecked?: boolean;
}

export interface YSwitchEvent {
  onClick: () => void;
}
