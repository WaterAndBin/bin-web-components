# 该文档还在开发中。。。

## 在Vue中如何使用?

- 在`main.ts`文件导入组件库

```ts
import { createApp } from 'vue'

/* 导入这两个主要文件 */
import 'test-ui'
import 'test-ui/lib/style/index.css'

import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

- vite.config.ts设置自定义元素标签

```ts
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有带短横线的标签名都视为自定义元素
          isCustomElement: (tag) => tag.startsWith('y-')
        }
      }
    }),
  ],
})
```

- tsconfig.json类型导入

```json
{
    "include": [
        ...
        "node_modules/test-ui/lib/types/vue-shims.d.ts"
    ]
}
```