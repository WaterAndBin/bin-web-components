import React, { type ReactNode, type ReactElement } from 'react';

export const newInstance = <T extends object>(
  Instance: (props: T) => JSX.Element,
  props: T // 接受一个 React 组件类型
): ReactElement => {
  const res = Instance(props);
  return React.createElement(res.nodeName as string, { ...res.attributes }, res.children as ReactNode | React.ReactElement);
};
