import { h, tag, Component } from 'omi';
import { YButtonProps, YButtonEvent } from './types';
import { tailwind } from '../style';
// @ts-ignore
import buttonStyle from './style/button.css?inline';
import clsx from 'clsx';

export interface ButtonProps extends YButtonProps, YButtonEvent {}

@tag('y-button')
export default class YButton extends Component<ButtonProps> {
  static css = [tailwind, buttonStyle];

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
      type: String,
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
    }
  };

  render(props: ButtonProps) {
    const { size, style, className, type, children } = props;

    console.log(props);
    console.log(style);

    return (
      <button style={style} className={clsx(className, ['y-button-base', `y-button-type-${type}`, `y-button-size-${size}`], {})}>
        {children ? <slot></slot> : <span>Button</span>}
      </button>
    );
  }
}
