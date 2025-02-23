import { App, Component } from 'vue';

interface FileType {
  [key: string]: Component;
}

// 全量引入所需文件
// const modules: Record<string, FileType> = import.meta.glob('../../../play/vue-project/src/pages/**/*.vue', { eager: true });
import demo from '../components/demo.vue';

export default (app: App): void => {
  app.component('Demo', demo);

  // // 遍历注册
  // Object.keys(modules).forEach((c: string) => {
  //   const component = modules[c]?.default;
  //   // 挂载全局控件
  //   app.component(component.name as string, component);
  // });
};
