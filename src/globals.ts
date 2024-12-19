import { ButtonProps } from "./Button";

/* 避免模块化 */
export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "y-button": ButtonProps;
    }
  }
}
