import { h, tag, Component, computed } from 'omi';
import { TagProps } from './types';
import clsx from 'clsx';
import { styleSheet } from './style/index.js';
import { CSSProperties } from '../common.ts';

@tag('y-tag')
export default class YTag extends Component<TagProps> {
  static css = [styleSheet];

  static props = {
    /** 按钮类型 */
    color: {
      default: '',
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    },
    size: {
      default: 'default',
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    },
    style: {
      default: '',
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    },
    className: {
      default: '',
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    },
    status: {
      default: 'normal',
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    }
  };

  render(props: TagProps) {
    const { style, children, className, size, color } = props;
    console.log(styleSheet);
    const tagStyle = computed<CSSProperties>(() => {
      let formatStyle = {};
      if (style === '') {
        formatStyle = {};
      } else if (typeof style === 'string') {
        formatStyle = JSON.parse(style);
      } else {
        formatStyle = style as CSSProperties;
      }

      const colorStyle = {
        color,
        backgroundColor: ''
      } as CSSProperties;

      return Object.assign(colorStyle, formatStyle);
    });

    return (
      <>
        <span style={tagStyle.value} className={clsx(className, ['y-tag-base', `y-tag-size-${size}`])}>
          {children ? <slot></slot> : <template></template>}
        </span>
      </>
    );
  }
}
