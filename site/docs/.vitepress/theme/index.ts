import DefaultTheme from 'vitepress/theme';
import 'test-ui';
import 'test-ui/lib/style/index.css';
import './index.css';
import glob from '../../utils/glob';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    glob(app);
  }
};
