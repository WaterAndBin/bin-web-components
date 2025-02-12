import { h, tag, Component } from 'omi';
import { TagProps } from './types';
import clsx from 'clsx';
import { styleSheet } from './style/index.js';
import { CSSProperties } from '../common';
import '../Icon';

@tag('y-tag')
export default class YTag extends Component<TagProps> {
  static css = [styleSheet];

  static props = {
    color: {
      type: String,
      default: '',
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    },
    size: {
      type: String,
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
      type: String,
      default: '',
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    },
    closable: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    },
    bordered: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    },
    loading: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof YTag) {
          this.update();
        }
      }
    }
  };

  private close: null | undefined;
  private 'before-change': null | undefined;

  private visible: boolean = true;
  private presetColor: Array<string> = ['red', 'orange', 'green', 'cyan', 'blue', 'purple'];

  private handleClick = () => {
    this.visible = false;
    this.update();
  };

  get colorClass(): string {
    if (this.props.color === '') return ''; // 未设置color属性则返回
    return this.presetColor.includes(this.props.color!) ? `y-tag-${this.props.color}` : `y-tag-custom-color`;
  }

  get tagStyle(): CSSProperties {
    // 将外部传入的不同类型样式进行处理
    let formatStyle = {} as CSSProperties;
    if (this.props.style === '') {
      formatStyle = {};
    } else if (typeof this.props.style === 'string') {
      formatStyle = JSON.parse(this.props.style);
    } else {
      formatStyle = this.props.style as CSSProperties;
    }

    // 自定义颜色
    let colorStyle = {} as CSSProperties;
    if (this.colorClass === 'y-tag-custom-color') {
      colorStyle = {
        color: 'white',
        backgroundColor: this.props.color
      };
    }

    return Object.assign(colorStyle, formatStyle);
  }

  render(props: TagProps) {
    const { className, size, closable, bordered, loading } = props;

    this.fire('change', { size: props.size, children: props.children });
    return (
      <>
        {this.visible && (
          <span style={this.tagStyle} className={clsx(className, ['y-tag-base', `y-tag-size-${size}`, this.colorClass], { [`y-tag-bordered`]: bordered })}>
            {this.children ? <slot></slot> : <template></template>}
            {closable && (
              <span className="y-tag-close" onClick={this.handleClick}>
                <y-icon name="times" size="16px" />
              </span>
            )}
            {loading && <y-icon name="loading" size="16px" style={{ marginLeft: '3px' }} />}
          </span>
        )}
      </>
    );
  }
}
