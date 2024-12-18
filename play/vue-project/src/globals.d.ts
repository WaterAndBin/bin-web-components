// import { defineComponent } from 'vue'
// import { YButton } from 'test-ui'

// export default defineComponent({
//   components: {
//     YButton
//   }
//   // ... 其他选项
// })

declare namespace JSX {
  interface IntrinsicElements {
    'y-button': any // 这里你可以根据需要为 y-button 自定义 props 类型
  }
}
