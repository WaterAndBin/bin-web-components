declare module '*.less';
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

declare module '*.scss?inline' {
  const content: string;
  export default content;
}
