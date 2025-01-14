import { h, tag, Component, OmiProps, createRef } from 'omi';
import { YSwitchProps, YSwitchEvent } from './types';
import { tailwind } from '../style/index.js';
import { styleSheet } from './style/index.js';
import clsx from 'clsx';
import { ClassNamePrefix } from '../utils/clsx';
import '../Icon';

export interface SwitchProps extends YSwitchProps, YSwitchEvent {}

@tag('y-switch')
export default class YSwitch extends Component<SwitchProps> {
  static css = [tailwind, styleSheet];

  static props = {
    value: {
      type: Boolean,
      default: null,
      changed() {
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    },
    /** 宽度，默认是40px */
    width: {
      type: String,
      default: '2.5rem',
      changed() {
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    },
    /** 禁用 */
    size: {
      type: String,
      default: 'default',
      changed() {
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    },
    /** 禁用 */
    disabled: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    },
    /** 选中时的开关颜色 */
    checkedColor: {
      type: String,
      default: '',
      changed() {
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    },
    /** 未选中时的开关颜色 */
    uncheckedColor: {
      type: String,
      default: '',
      changed() {
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    },
    /** 是否加载，默认为false */
    loading: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    },
    /** 函数返回值用于判断是否阻止切换 */
    beforeChange: {
      type: () => Boolean,
      default: null,
      changed() {
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    }
  };

  /** 默认false，表示关 */
  private isChecked: boolean = false;

  /* dom */
  ballRef = createRef<HTMLElement>();

  changeIsChecked = async (): Promise<void> => {
    const { beforeChange } = this.props;

    if (beforeChange) {
      this.props.loading = true;
      this.update();

      /* 运行函数，判断是否可用为true */
      const canChange = await beforeChange();

      if (canChange) {
        this.props.loading = false;
        this.isChecked = !this.isChecked;
        this.update();
      }
    } else {
      this.isChecked = !this.isChecked;
      this.update();
    }

    /* 更新传进来的参数 */
    // @ts-ignore
    this.props.value.value = this.isChecked;
  };

  /**
   * 获取 switch-ball 的宽
   */
  get getBallWidth(): number {
    if (this.ballRef.current) {
      const ballRect = this.ballRef.current.getBoundingClientRect();
      return ballRect.width; // 返回直径（宽度或高度，通常是一样的）
    }
    return 0;
  }

  /**
   * 如果传入了 checkedColor，就设置 switch-checked 的背景颜色
   */
  get checkedClass(): { [key: string]: string } {
    const { checkedColor } = this.props;
    const { isChecked } = this;
    return isChecked && checkedColor ? { backgroundColor: checkedColor } : {};
  }

  /**
   *  如果是自定义的icon，让loading图标也跟着自定义的颜色走
   */
  get getIconColor(): { [key: string]: string } {
    const { checkedColor, uncheckedColor, loading } = this.props;
    const { isChecked } = this;
    if (loading) {
      return isChecked && checkedColor ? { stroke: checkedColor } : !isChecked && uncheckedColor ? { stroke: uncheckedColor } : {};
    }
    return {};
  }

  installed(): void {
    // @ts-ignore
    this.isChecked = this.props.value.value ?? false;
    this.update();
  }

  render(props: OmiProps<SwitchProps>) {
    const { width, size, disabled, uncheckedColor, loading } = props;
    const { isChecked, checkedClass, getIconColor } = this;

    console.log(props);

    const buttonStyle: { [key: string]: string } = {};

    // 如果传入了 uncheckedColor，就设置 button 的背景颜色
    if (uncheckedColor) {
      buttonStyle.backgroundColor = uncheckedColor;
    }

    return (
      <button
        className={clsx(ClassNamePrefix(`switch`), ClassNamePrefix(`switch-size-${size}`), {
          [ClassNamePrefix('switch-checked')]: isChecked,
          [ClassNamePrefix('switch-disabled')]: disabled,
          [ClassNamePrefix('switch-loading')]: loading
        })}
        style={{ '--switch-ball-width': this.getBallWidth + 'px', minWidth: width, ...buttonStyle, ...checkedClass }}
        onClick={this.changeIsChecked}
        onChange={() => this.fire('onChange', isChecked)}
        disabled={disabled || loading}
      >
        <span ref={this.ballRef} className={clsx(ClassNamePrefix('switch-ball'))}>
          {loading ? (
            <span className={clsx(ClassNamePrefix('loading'))} style={{ ...getIconColor }}>
              <y-icon name="loading"></y-icon>
            </span>
          ) : (
            <>
              {!isChecked && <slot name="checkedIcon"></slot>}
              {isChecked && <slot name="uncheckedIcon"></slot>}
            </>
          )}
        </span>
        {!isChecked && <slot name="checked"></slot>}
        {isChecked && <slot name="unchecked"></slot>}
      </button>
    );
  }
}
