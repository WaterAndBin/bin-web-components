import { h, tag, Component, createRef, OmiProps } from 'omi';
import { tailwind } from '../style';
import { styleSheet } from './style/index.js';
import { YInputProps, YInputEvent, InputType } from './types';
import clsx from 'clsx';
import { ClassNamePrefix } from '../utils/clsx';

export interface InputProps extends YInputProps, YInputEvent {}

@tag('y-input')
export default class Input extends Component<InputProps> {
  static css = [tailwind, styleSheet];

  static props = {
    /** 是否清空输入框，默认true */
    allowClear: {
      type: Boolean,
      default: true,
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 宽度，默认220px */
    width: {
      type: String,
      default: '220px',
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 大小 */
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
    /** 提示信息 */
    placeholder: {
      type: String,
      default: '请输入',
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 是否禁用，默认是false  */
    disabled: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 是否是错误的，默认是false */
    error: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 默认值 */
    defaultValue: {
      type: String,
      default: '',
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 最大的数，默认是0，与数字统计一起使用 */
    maxLength: {
      type: Number,
      default: 10,
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 显示数字统计，并且传最大的数 */
    showWordLimit: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 显示字数统计 */
    showWordTotal: {
      type: Boolean,
      default: false,
      changed() {
        if (this instanceof Input) {
          this.update();
        }
      }
    },
    /** 加载中，默认为false */
    loading: {
      type: Boolean,
      default: false,
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
  /** input的值 */
  private inputValue: string = ''; // 初始化输入框的值

  /**
   * 处理MouseEnter
   */
  private handleOnMouseEnter = (e: Event): void => {
    e.stopImmediatePropagation();
    /* 禁用就不调用下面的方法，以此来提高性能 */
    if (this.props.disabled) return;
    this.isEnter = true;
    this.update();
  };

  /**
   * 处理MouseLeave
   */
  private handleOnMouseLeave = (e: Event): void => {
    e.stopImmediatePropagation();
    /* 禁用就不调用下面的方法，以此来提高性能 */
    if (this.props.disabled) return;
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
  private handleInput = (e: Event): void => {
    const { maxLength = 0, showWordLimit } = this.props;
    const target = e.target as HTMLInputElement;
    if (!target) return;
    /* 限制字+字数判断 */
    if (showWordLimit && this.inputValue.length >= maxLength) {
      e.preventDefault(); // 阻止默认输入
      return;
    }
    this.inputValue = target.value;
    this.update();
  };

  /**
   * 图标鼠标弹开
   */
  private iconOnClick = (e: Event): void => {
    e.stopImmediatePropagation();
    if (!this.inputRef.current) return;
    /* 清空 */
    this.inputValue = '';
    /* 模拟光标点击 */
    this.inputRef.current.focus();
    /* 恢复默认 */
    this.isIconClicked = false;
  };

  /**
   * icon是password的时候，进行点击操作
   */
  private iconPasswordClick = (): void => {
    this.isShowPassword = !this.isShowPassword;
    this.update();
  };

  get inputNumber(): number {
    if (!this.inputRef.current) return 0;
    return this.inputRef.current.value.length;
  }

  /**
   * 输入框是否为空
   */
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
   * 处理input类型
   */
  get handleInputType(): InputType | string {
    const { type } = this.props;

    if (type === 'password') {
      return this.isShowPassword ? 'text' : 'password';
    }
    return 'text';
  }

  install = () => {
    this.inputValue = this.props.defaultValue ?? '';
  };

  render(props: OmiProps<InputProps>) {
    const { allowClear, width, type, size, placeholder, disabled, error, maxLength, showWordLimit, showWordTotal, loading, className, style } = props;

    return (
      <div
        className={clsx([
          ClassNamePrefix('input-box'),
          {
            [ClassNamePrefix(`input-focused${error ? '-error' : ''}`)]: this.isFocused,
            [ClassNamePrefix(`input-disabled${error ? '-error' : ''}`)]: disabled,
            [ClassNamePrefix('input-error')]: error,
            [ClassNamePrefix('input-loading')]: loading
          },
          className
        ])}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
        onClick={() => this.inputRef.current?.focus()}
        style={{ width: width, style }}
      >
        {/* 前缀插槽 */}
        <slot name="prefix"></slot>
        <input
          ref={this.inputRef}
          type={this.handleInputType}
          className={clsx([ClassNamePrefix('input-base'), ClassNamePrefix(`input-size-${size}`)])}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onInput={this.handleInput}
          placeholder={placeholder}
          disabled={disabled || loading}
          value={this.inputValue}
          {...(showWordLimit ? { maxLength: maxLength } : {})}
        />
        {/* 清除按钮 */}
        {allowClear && !loading && (
          <span
            className={clsx(ClassNamePrefix('input-icon'))}
            style={{ visibility: this.iconVisibility ? 'visible' : 'hidden' }}
            onClick={this.iconOnClick}
            onMouseEnter={() => (this.isIconClicked = true)}
          >
            x
          </span>
        )}
        {/* 密码的眼睛 */}
        {type === 'password' && !loading && (
          <span className={clsx(ClassNamePrefix('input-icon'))} style={{ visibility: this.iconVisibility ? 'visible' : 'hidden' }}>
            {!this.isShowPassword ? <span onClick={this.iconPasswordClick}>🕶</span> : <span onClick={this.iconPasswordClick}>👀</span>}
          </span>
        )}
        {/* 统计字数 */}
        {showWordTotal && <span className={clsx(ClassNamePrefix('input-total'))}>{this.inputNumber}</span>}
        {/* 字数限制 */}
        {showWordLimit && (
          <span className="input-limit">
            {this.inputNumber}/{maxLength}
          </span>
        )}
        {/* 加载 */}
        {loading && <span className={clsx(ClassNamePrefix('input-icon'))}>⭕</span>}
        {/* 后缀插槽 */}
        <slot name="suffix"></slot>
      </div>
    );
  }
}
