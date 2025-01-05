import { h, tag, Component } from 'omi';
import clsx from 'clsx';
import { tailwind } from '../style';
import { styleSheet } from './style/index.js';
import { YDividerProps } from './types';

export type DividerProps = YDividerProps;

@tag('y-divider')
export default class Divider extends Component<DividerProps> {
  static css = [tailwind, styleSheet];

  static props = {
    /** 宽度，单位是px */
    width: {
      type: Number,
      default: 0,
      changed() {
        if (this instanceof Divider) {
          this.update();
        }
      }
    },
    /** 排序，水平：horizontal，竖：vertical */
    type: {
      type: String,
      default: 'horizontal',
      changed() {
        if (this instanceof Divider) {
          this.update();
        }
      }
    },
    orientation: {
      type: String,
      default: 'center',
      changed() {
        if (this instanceof Divider) {
          this.update();
        }
      }
    },
    /** 样式 */
    style: {
      type: CSSStyleDeclaration,
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
    const { width, type, orientation, style, className, children } = props;

    const borderProperty = type === 'vertical' ? 'borderLeftWidth' : 'borderBottomWidth';

    console.log('=====');
    console.log(props.children);

    return (
      <div className={clsx(className, ['y-divider-base', `y-divider-${type}`])} style={{ [borderProperty]: `${width}px`, style }}>
        {children ? (
          <span className={clsx(['y-divider-text'], { [`y-divider-text-${orientation}`]: type !== 'vertical' })}>
            <slot></slot>
          </span>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
