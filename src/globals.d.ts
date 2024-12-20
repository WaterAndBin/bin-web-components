import { type ButtonProps } from './Button';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'y-button': ButtonProps;
    }
  }
}
