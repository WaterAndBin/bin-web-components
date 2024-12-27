import _YButton from './button';

export type { ButtonProps } from './button';
export const YButton = _YButton;
export default YButton;

export type ButtonInstance = InstanceType<typeof YButton>;
export * from './RYButton';
export type * from './types';
