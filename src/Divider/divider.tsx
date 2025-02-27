import { h, tag, Component } from 'omi';
import clsx from 'clsx';
import { tailwind } from '../style';
import { styleSheet } from './style/index.js';
import { YDividerProps } from './types';
import { ClassNamePrefix } from '../utils/clsx';

export type DividerProps = YDividerProps;

@tag('y-divider')
export default class Divider extends Component<DividerProps> {
  static css = [tailwind, styleSheet];

  static props = {
    /** 边框的宽度，默认是1px */
    width: {
      type: String,
      default: '1px',
      changed() {
        if (this instanceof Divider) {
          this.update();
        }
      }
    },
    /** Border的样式，是虚线还是实线等等 */
    type: {
      type: String,
      default: 'solid',
      changed() {
        if (this instanceof Divider) {
          this.update();
        }
      }
    },
    /** 分割文字位置 */
    orientation: {
      type: String,
      default: 'center',
      changed() {
        if (this instanceof Divider) {
          this.update();
        }
      }
    },
    /** 排序，水平：horizontal，竖：vertical */
    direction: {
      type: String,
      default: 'horizontal',
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
    const { width, type, direction, orientation, style, className } = props;
    const { children } = this;

    return (
      <div
        className={clsx(className, [ClassNamePrefix('divider-base'), ClassNamePrefix(`divider-${direction}`)])}
        style={{ '--divider-border-style': type, '--divider-border-width': width, style }}
      >
        {children ? (
          <span className={clsx([ClassNamePrefix('divider-text')], { [ClassNamePrefix(`divider-text-${orientation}`)]: direction !== 'vertical' })}>
            <slot></slot>
          </span>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
