import { h, tag, Component } from 'omi';
import { tailwind } from '../style';
import { styleSheet } from './style/index.js';
import { YInputProps, YInputEvent } from './types';
import clsx from 'clsx';

export interface InputProps extends YInputProps, YInputEvent {}

@tag('y-input')
export default class Divider extends Component<InputProps> {
  static css = [tailwind, styleSheet];

  static props = {
    /** 边框的宽度，默认是1px */
    placeholder: {
      type: String,
      default: '请输入内容',
      changed() {
        if (this instanceof Divider) {
          this.update();
        }
      }
    }
  };

  render(props: InputProps) {
    const { placeholder } = props;

    return (
      <div>
        <input className={clsx(['y-input-base'])} placeholder={placeholder} />
      </div>
    );
  }
}
