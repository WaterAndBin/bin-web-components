import DefaultTheme from 'vitepress/theme';
import 'test-ui';
import 'test-ui/lib/style/index.css';
import './index.css';
import glob from '../../utils/glob';
import 'highlight.js/styles/github.css'; // 主题
import hljsVuePlugin from '@highlightjs/vue-plugin';
// import 'highlight.js/styles/default.css'; // 或者你可以选择其他样式

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    glob(app);
    app.use(hljsVuePlugin);
  }
};
