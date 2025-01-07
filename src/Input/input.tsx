import { h, tag, Component, createRef } from 'omi';
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

  /* dom */
  inputRef = createRef<HTMLInputElement>();

  /** 是否点击了输入框 */
  private isFocused: boolean = false;
  /** 是否进入了输入框 */
  private isEnter: boolean = false;
  /** 输入框是否为空 */
  private isEmpty: boolean = true;

  /**
   * 处理MouseEnter
   */
  private handleOnMouseEnter = (e: Event): void => {
    e.stopImmediatePropagation();
    this.isEnter = true;
    this.handleInputEmpty();
    this.update();
  };

  /**
   * 处理MouseLeave
   */
  private handleOnMouseLeave = (e: Event): void => {
    e.stopImmediatePropagation();
    this.isEnter = false;
    this.handleInputEmpty();
    this.update();
  };

  /**
   * 处理input内是否为空
   */
  private handleInputEmpty = () => {
    if (!this.inputRef.current) return;
    /* 判断输入框内是否为空 */
    if (this.inputRef.current.value) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  };

  /**
   * 处理focus
   */
  private handleOnFocus = (e: Event): void => {
    e.stopImmediatePropagation();
    this.isFocused = true;
    this.update();
    console.log('f');
  };

  /**
   * 处理blur
   */
  private handleOnBlur = (e: Event): void => {
    console.log(e.currentTarget);
    // e.stopImmediatePropagation();
    this.isFocused = false;
    this.update();
  };

  /**
   * 处理input
   */
  private handleInput = (): void => {
    this.handleInputEmpty();
    this.update();
  };

  /**
   * 处理icon的visibility
   */
  get iconVisibility(): boolean {
    const { isFocused, isEnter, isEmpty } = this;
    /* 如果是点击了输入框，就直接判断是否没空 */
    if (isFocused) {
      return !isEmpty;
    }
    /* 没点击输入框，就判断是否鼠标移入与空 */
    return isEnter && !isEmpty;
  }

  private clearInputValue = (e: Event): void => {
    // e.stopPropagation();
    e.stopImmediatePropagation();

    if (!this.inputRef.current) return;
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
  };

  render(props: InputProps) {
    const { placeholder } = props;

    return (
      <div
        className={clsx(['y-input-box', { 'y-input-box-focused': this.isFocused }])}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
        // onClick={() => this.inputRef.current?.focus()}
      >
        <input
          ref={this.inputRef}
          className={clsx(['y-input-base'])}
          onFocus={this.handleOnFocus}
          onBlur={(e) => {
            this.handleOnBlur(e);
          }}
          onInput={this.handleInput}
          placeholder={placeholder}
        />
        <span
          className="y-input-icon"
          style={{ visibility: this.iconVisibility ? 'visible' : 'hidden' }}
          onClick={(e) => {
            this.clearInputValue(e);
          }}
        >
          x
        </span>
      </div>
    );
  }
}
