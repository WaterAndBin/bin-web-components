import _YTag from './tag';

export type { TagProps } from './types';
export const YTag = _YTag;
export default YTag;

export type TagInstance = InstanceType<typeof YTag>;
export * from './types';
