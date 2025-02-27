import { h, tag, Component, createRef, bind } from 'omi';
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
    /** 默认checked */
    defaultChecked: {
      type: Boolean,
      default: false,
      changed(newValue: boolean) {
        if (this instanceof YSwitch) {
          this.isChecked = newValue;
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
    /** 尺寸 */
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
      changed(newValue: boolean) {
        if (this instanceof YSwitch) {
          this.switchLoading = newValue;
          this.update();
        }
      }
    }
  };

  /* beforeChange调用方法，vue传进来都是before-change */
  private beforeChange: (() => boolean | Promise<boolean>) | undefined;
  private 'before-change': () => boolean | Promise<boolean>;

  /** 默认false，表示关 */
  private isChecked: boolean = false;
  private switchLoading: boolean = false;

  /* dom */
  ballRef = createRef<HTMLElement>();

  @bind
  async changeIsChecked(): Promise<void> {
    if (this.beforeChange || this['before-change']) {
      this.switchLoading = true;
      this.update();

      // 判断使用beforeChange还是before-change
      const beforeChangeFn = this.beforeChange || this['before-change'];
      // 运行函数，判断是否可用为true
      const canChange = await beforeChangeFn();

      if (canChange) {
        this.switchLoading = false;
      } else {
        return;
      }
    }
    this.isChecked = !this.isChecked;

    /* 兼容react事件，可能有onChange */
    if (this.props.onChange) {
      this.props.onChange(this.isChecked);
    } else {
      /* 兼容 vue 事件 */
      this.fire('change', this.isChecked);
      this.fire('update', this.isChecked);
    }

    this.update();
  }

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
    const { checkedColor, uncheckedColor } = this.props;
    const { switchLoading } = this;
    const { isChecked } = this;
    if (switchLoading) {
      return isChecked && checkedColor ? { stroke: checkedColor } : !isChecked && uncheckedColor ? { stroke: uncheckedColor } : {};
    }
    return {};
  }

  installed(): void {
    // 初始化loading默认值
    this.switchLoading = this.props.loading ?? false;
    this.isChecked = this.props.defaultChecked ?? false;

    this.update();
  }

  render(props: SwitchProps) {
    const { width, size, disabled, uncheckedColor } = props;
    const { isChecked, checkedClass, getIconColor, switchLoading } = this;

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
          [ClassNamePrefix('switch-loading')]: switchLoading
        })}
        style={{ '--switch-ball-width': this.getBallWidth + 'px', minWidth: width, ...buttonStyle, ...checkedClass }}
        onClick={this.changeIsChecked}
        disabled={disabled || switchLoading}
      >
        <span ref={this.ballRef} className={clsx(ClassNamePrefix('switch-ball'))}>
          {switchLoading ? (
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
