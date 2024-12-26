import React, { type ReactNode, type ReactElement } from 'react';

/**
 * 创建react实例对象
 * @param Instance 创建omi的组件返回的实例对象
 * @param props T
 * @returns react实例对象
 */
export const createReactInstance = <T extends object>(
  Instance: (props: T) => JSX.Element,
  props: T // 接受一个 React 组件类型
): ReactElement => {
  const res = Instance(props);
  return React.createElement(res.nodeName as string, { ...res.attributes }, res.children as ReactNode | React.ReactElement);
};
