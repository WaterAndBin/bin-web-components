/**
 * ！！！
 *
 * 该类型声明文件，仅仅只适用于OMI本套框架，打包的时候不会打包 .d.ts 文件
 *
 * 该类型声明文件不适用于vue、react框架
 */
import { type ButtonProps } from './Button';
import { type DividerProps } from './Divider';
import { type InputProps } from './Input';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'y-button': ButtonProps;
      'y-divider': DividerProps;
      'y-input': InputProps;
    }
  }
}
