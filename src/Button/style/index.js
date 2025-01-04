import { css, globalCSS } from 'omi';

// @ts-ignore
import style from '../../style/button/_index.scss?inline';

export const styleSheet = css`
  ${style}
`;

globalCSS(styleSheet);
