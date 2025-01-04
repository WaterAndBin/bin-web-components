import { h, tag, Component } from 'omi';
import clsx from 'clsx';
import { tailwind } from '../style';
import { styleSheet } from './style/index.js';
import { YDividerProps } from './types.js';

export type DividerProps = YDividerProps;

@tag('y-divider')
export default class Divider extends Component<DividerProps> {
  static css = [tailwind, styleSheet];

  static props = {
    /** 样式 */
    style: {
      type: String,
      default: '',
      changed() {
        if (this instanceof Divider) {
          this.update();
        }
      }
    },
    /** 类 */
    className: {
      type: String,
      default: '',
      changed() {
        if (this instanceof Divider) {
          this.update();
        }
      }
    }
  };

  render(props: DividerProps) {
    const { className } = props;

    return (
      <div>
        <div className={clsx(className, ['y-divider-base'])}></div>
        <p>这是一根分割线</p>
      </div>
    );
  }
}
