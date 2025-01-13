import { h, tag, Component } from 'omi';
import { YButtonProps, YButtonEvent } from './types';
import { tailwind } from '../style';
import { styleSheet } from './style/index.js';
import clsx from 'clsx';

export interface ButtonProps extends YButtonProps, YButtonEvent {}

@tag('y-button')
export default class YButton extends Component<ButtonProps> {
  static css = [tailwind, styleSheet];

  static props = {
    /** 按钮大小 */
    size: {
      type: String,
      default: 'default',
      changed() {
        if (this instanceof YButton) {
          this.update();
        }
      }
    },
    /** 按钮类型 */
    type: {
      type: String,
      default: 'primary',
      changed() {
        if (this instanceof YButton) {
          this.update();
        }
      }
    },
    /** 样式 */
    style: {
      type: CSSStyleDeclaration,
      default: '',
      changed() {
        if (this instanceof YButton) {
          this.update();
        }
      }
    },
    /** 类 */
    className: {
      type: String,
      default: '',
      changed() {
        if (this instanceof YButton) {
          this.update();
        }
      }
    },
    /** 禁用 */
    disabled: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof YButton) {
          this.update();
        }
      }
    },
    /** 状态 */
    status: {
      type: String,
      default: 'normal',
      changed() {
        if (this instanceof YButton) {
          this.update();
        }
      }
    }
  };

  render(props: ButtonProps) {
    const { size, style, className, type, children, disabled, status } = props;
    return (
      <button
        style={style}
        className={clsx(className, ['y-button-base', `y-button-type-${type}`, `y-button-size-${size}`], { [`y-button-is-disabled`]: disabled, [`y-button-status-${status}`]: status })}
      >
        {children ? <slot></slot> : <span>Button</span>}
      </button>
    );
  }
}
