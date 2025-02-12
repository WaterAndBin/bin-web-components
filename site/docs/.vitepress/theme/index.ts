import DefaultTheme from 'vitepress/theme';
import 'test-ui';
import 'test-ui/lib/style/index.css';
import './index.css';
import glob from '../../utils/glob';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    glob(app);
  }
};
