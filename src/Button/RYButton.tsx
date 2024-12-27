import { h } from 'omi';
import { type ButtonProps } from './button';

import { createReactInstance } from '../utils/instance';

function Button(props: ButtonProps): JSX.Element {
  return <y-button {...props}></y-button>;
}

/**
 * 创建Button的react实例对象，兼容react可以直接使用YButton
 */
export const YButton = (props: ButtonProps) => {
  return createReactInstance(Button, props);
};
