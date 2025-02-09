开发指南

# 开发注意事项

## Omi如何开发？

按照Omi文档即可，但是需要对Vue与React如何进行兼容才是令人头大的事情！

## Omi如何进行响应式更新？

以下是在Omi编写的过程中去兼容Vue与React的响应式问题。

- 需要用到静态的 `static props`
- 需要用到 `this.update()`

```tsx
export default class YSwitch extends Component<SwitchProps> {
  static props = {
    /** 宽度，默认是40px */
    width: {
      type: String,
      default: '2.5rem',
      /* 这里可以接收到传进来的新值 */
      changed(newValue: string) {
        /* 这里需要这么写，不然出现this指向报错问题 */
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    }
  };
}
```

## 避免private与props命名相同

若出现了private与props命名相同的话，就会导致props对应的参数失效。

```tsx
export default class YSwitch extends Component<SwitchProps> {
  static props = {
    /** 若private出现与props一样，则会导致width没用了 */
    /* vue传进来的width在omi当中是检测不到的 */
    width: {
      type: String,
      default: '2.5rem',
      changed() {
        /* 这里需要这么写，不然出现this指向报错问题 */
        if (this instanceof YSwitch) {
          this.update();
        }
      }
    }
  };

  /* 不允许出现private与props一样 */
  private width: string;
}
```

## 如何调用组件内方法？

在Vue当中使用组件库的时候，想在Vue内部去调用组件库内部的方法，则需要用到`@bind`。

```tsx
export default class YSwitch extends Component<SwitchProps> {
  @bind
  test() {
    console.log('===被调用了===');
  }
}
```

Vue去调用组件库的方法。

```vue
<script setup lang="ts">
import { ref } from 'vue';

const switchRef = ref();
</script>

<template>
  <y-switch ref="switchRef"></y-switch>
  <button @click="switchRef.test()">点击了组件库内部方法</button>
</template>
```

## 在组件库中接收传进来的方法？

最简单快捷的方式就直接定义`private 方法名`，千万不能写在`props`里面，写在里面也识别不到。

- 例如想接收`before-change`方法
- 方法要调用的话直接写`this['before-change']()`

```tsx
export default class YSwitch extends Component<SwitchProps> {
  /* 直接这么定义，不要写进props里面 */
  private 'before-change': () => boolean | Promise<boolean>;

  @bind
  test() {
    const res = this['before-change']();
    console.log(res);
  }
}
```
