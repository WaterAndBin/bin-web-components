import { type ButtonProps } from './Button';
import { type DividerProps } from './Divider';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'y-button': ButtonProps;
      'y-divider': DividerProps;
    }
  }
}
