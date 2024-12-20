import { h, tag, Component } from 'omi';
import { YButtonProps, YButtonEvent } from './type';
import { tailwind } from '../style';
import buttonStyle from './style/button.css';
import clsx from 'clsx';

export interface ButtonProps extends YButtonProps, YButtonEvent {}

@tag('y-button')
export default class YButton extends Component<{ size: string }> {
  static css = [tailwind, buttonStyle];
  static instance: YButton; // 存储组件实例的静态变量

  changeUpdate() {
    this.update();
    YButton.instance = this; // 初始化时保存当前实例
  }

  static props = {
    size: {
      type: String,
      changed() {
        if (this instanceof YButton) {
          this.update();
        }
      }
    },
    className: {
      type: String,
      default: ''
    },
    style: {
      type: CSSStyleDeclaration,
      default: ''
    }
  };

  render(props: ButtonProps) {
    const { size, style, className } = props;

    return (
      <button style={style} className={clsx(className, 'bg-red-200')}>
        hallo,{size}
        <slot></slot>
      </button>
    );
  }
}
