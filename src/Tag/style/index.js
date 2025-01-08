import { css, globalCSS } from 'omi';

import style from '../../style/tag/_index.scss?inline';

export const styleSheet = css`
  ${style}
`;

globalCSS(styleSheet);
