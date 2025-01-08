import { type ButtonProps } from './Button';
import { type DividerProps } from './Divider';
import { type TagProps } from './Tag';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'y-button': ButtonProps;
      'y-divider': DividerProps;
      'y-tag': TagProps;
    }
  }
}
