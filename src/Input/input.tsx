import { h, tag, Component, createRef, OmiProps } from 'omi';
import { tailwind } from '../style';
import { styleSheet } from './style/index.js';
import { YInputProps, YInputEvent, InputType } from './types';
import clsx from 'clsx';

export interface InputProps extends YInputProps, YInputEvent {}

@tag('y-input')
export default class Input extends Component<InputProps> {
  static css = [tailwind, styleSheet];

  static props = {
    allowClear: {
      type: Boolean,
      default: true,
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    width: {
      type: String,
      default: '220px',
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 边框的宽度，默认是1px */
    size: {
      type: String,
      default: 'default',
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 类型 */
    type: {
      type: String,
      default: 'text',
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 边框的宽度，默认是1px */
    placeholder: {
      type: String,
      default: '请输入内容',
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 类 */
    className: {
      type: String,
      default: '',
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 样式 */
    style: {
      type: CSSStyleDeclaration,
      default: '',
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    }
  };

  /* dom */
  inputRef = createRef<HTMLInputElement>();

  /** 是否点击了输入框 */
  private isFocused: boolean = false;
  /** 是否进入了输入框 */
  private isEnter: boolean = false;
  /** 是否点击了图标 */
  private isIconClicked: boolean = false;
  /** 是否点击了图标 */
  private isShowPassword: boolean = false;

  /**
   * 处理MouseEnter
   */
  private handleOnMouseEnter = (e: Event): void => {
    e.stopImmediatePropagation();
    this.isEnter = true;
    this.update();
  };

  /**
   * 处理MouseLeave
   */
  private handleOnMouseLeave = (e: Event): void => {
    e.stopImmediatePropagation();
    this.isEnter = false;
    /* 判断用户是不是按下了icon，但是又不去松手的那种 */
    if (this.isIconClicked && !this.isEnter) {
      if (!this.inputRef.current) return;
      /* 继续模拟光标点击input */
      this.inputRef.current.focus();
      /* 恢复默认 */
      this.isIconClicked = false;
    }
    this.update();
  };

  /**
   * 处理focus
   */
  private handleOnFocus = (e: Event): void => {
    e.stopImmediatePropagation();
    this.isFocused = true;
    this.update();
  };

  /**
   * 处理blur
   */
  private handleOnBlur = (e: Event): void => {
    e.stopImmediatePropagation();

    /* 一般失去焦点都是既离开了输入框，又离开了icon图标，就直接恢复默认 */
    if (!this.isIconClicked && !this.isEnter) {
      this.isFocused = false;
      this.update();
    }
  };

  /**
   * 处理input
   */
  private handleInput = (): void => {
    this.update();
  };

  /** 输入框是否为空 */
  get isEmpty(): boolean {
    return !!this.inputRef.current?.value;
  }

  /**
   * 处理icon的visibility
   */
  get iconVisibility(): boolean {
    const { isFocused, isEnter, isEmpty } = this;
    /* 如果是点击了输入框，就直接判断是否没空 */
    if (isFocused) {
      return this.props.allowClear! && isEmpty;
    }
    return this.props.allowClear! && isEnter && isEmpty;
  }

  /**
   * 图标鼠标弹开
   */
  private iconOnClick = (e: Event): void => {
    e.stopImmediatePropagation();
    if (!this.inputRef.current) return;
    /* 清空 */
    this.inputRef.current.value = '';
    /* 模拟光标点击 */
    this.inputRef.current.focus();
    /* 恢复默认 */
    this.isIconClicked = false;
  };

  get handleInputType(): InputType | string {
    const { type } = this.props;

    if (type === 'password') {
      return this.isShowPassword ? 'text' : 'password';
    }
    return 'text';
  }

  render(props: OmiProps<InputProps>) {
    const { allowClear, width, type, size, placeholder, className, style } = props;

    return (
      <div
        className={clsx(['y-input-box', { 'y-input-box-focused': this.isFocused }, className])}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
        onClick={() => this.inputRef.current?.focus()}
        style={{ width: width, style }}
      >
        <slot name="prefix"></slot>
        <input
          ref={this.inputRef}
          type={this.handleInputType}
          className={clsx(['y-input-base', `y-input-size-${size}`])}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onInput={this.handleInput}
          placeholder={placeholder}
        />
        {allowClear && (
          <span className="y-input-icon" style={{ visibility: this.iconVisibility ? 'visible' : 'hidden' }} onClick={this.iconOnClick} onMouseEnter={() => (this.isIconClicked = true)}>
            x
          </span>
        )}
        {type === 'password' && (
          <span className="y-input-icon" style={{ visibility: this.iconVisibility ? 'visible' : 'hidden' }}>
            {!this.isShowPassword && (
              <span
                onClick={() => {
                  this.isShowPassword = true;
                  this.update();
                }}
              >
                🕶
              </span>
            )}
            {this.isShowPassword && (
              <span
                onClick={() => {
                  this.isShowPassword = false;
                  this.update();
                }}
              >
                👀
              </span>
            )}
          </span>
        )}
      </div>
    );
  }
}
