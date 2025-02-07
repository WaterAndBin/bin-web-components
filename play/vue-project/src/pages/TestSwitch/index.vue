<script setup lang="ts">
const changeLoading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return true
}
</script>

<template>
  <div class="flex justify-center items-center flex-col">
    <div class="flex justify-center items-center flex-col">
      <div class="flex justify-center items-center">
        <span>基础的开关：</span>
        <y-switch value="text" />
      </div>
      <div class="flex justify-center items-center">
        <span>尺寸不同的开关：</span>
        <y-switch size="small" />
        <y-switch />
        <y-switch size="large" />
      </div>
      <div class="flex justify-center items-center">
        <span>默认打开的开关：</span>
        <y-switch size="small" :default-checked="true" />
        <y-switch default-checked="true" />
        <y-switch size="large" :default-checked="true" />
      </div>
      <div class="flex justify-center items-center">
        <span>禁用的开关：</span>
        <y-switch disabled size="small" />
        <y-switch disabled :default-checked="true" size="small" />
        <y-switch disabled />
        <y-switch disabled :default-checked="true" />
        <y-switch disabled size="large" />
        <y-switch disabled :default-checked="true" size="large" />
      </div>
      <div class="flex justify-center items-center">
        <span>自定义颜色：</span>
        <y-switch checked-color="#F53F3F" unchecked-color="green" />
      </div>
      <div class="flex justify-center items-center">
        <span> 自定义开关的打开/关闭状态的文字：</span>
        <y-switch>
          <span slot="checked">OFF</span>
          <span slot="unchecked">ON</span>
        </y-switch>
      </div>
      <div class="flex justify-center items-center">
        <span> 自定义开关按钮上显示的图标：</span>
        <y-switch>
          <span slot="checkedIcon">X</span>
          <span slot="uncheckedIcon">√</span>
        </y-switch>
      </div>
      <div class="flex justify-center items-center">
        <span> 加载中的开关</span>
        <y-switch loading />
        <y-switch loading default-checked="true" />
        <y-switch loading checked-color="#F53F3F" unchecked-color="green" />
        <y-switch loading checked-color="#F53F3F" unchecked-color="green" defaultChecked="true" />
      </div>
      <div class="flex justify-center items-center">
        <span> 设置 beforeChange 函数，函数的返回值将用于判断是否阻止切换：</span>
        <y-switch :before-change="changeLoading"></y-switch>
        <y-switch :before-change="changeLoading" checked-color="#F53F3F" unchecked-color="green" />
      </div>
    </div>
  </div>
</template>
