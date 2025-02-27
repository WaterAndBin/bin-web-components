<template>
  <div style="z-index: -1;">
    <div class="demo_tip" v-html="tip"></div>
    <div class="demo_preview">
      <div class="preview_box">
        <component :is="fileComponent" />
      </div>
      <div class="code_box">
        <div class="code" :class="{ show_code: showCode }">
          <div class="code__reference">
            <div>
              <div class="switch">
                <div>
                  <span class="switch_lang" v-for="(items, index) in languageArrs" :key="index"
                    :class="{ switch_lang_active: index === clickedLang }" @click="clickedLang = index">
                    {{ items }}
                  </span>
                </div>
                <button class="switch_btn" @click="handleCopyCode" type="button"></button>
              </div>
            </div>
            <div class="code_content" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
              <!-- <highlightjs language="javascript" :code="fileVueContent" /> -->
              <div v-show="clickedLang === 0">
                <span class="language">-vue</span>
                <pre><code class="language-javascript">{{ fileVueContent }}</code></pre>
              </div>
              <div v-show="clickedLang === 1">
                <span class="language">-react</span>
                <pre><code class="language-javascript">{{ fileReactContent }}</code></pre>
              </div>
              <button class="copy-code-btn" @click="handleCopyCode" type="button" :style="{
                opacity: showCopy ? 1 : 0
              }"></button>
            </div>
          </div>
        </div>
        <div class="operate_btn" @click="() => (showCode = !showCode)">{{ showCode ? '隐藏' : '显示' }}代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, markRaw, ref, nextTick, computed } from 'vue';
import hljs from 'highlight.js'; // 引入 highlight.js
import markdownit from 'markdown-it';

const md = markdownit();
const props = defineProps({
  title: String,
  content: String,
  type: String,
  name: String
});

/**
 * 语言数组
 */
const languageArrs = ['Vue', 'React'];
/**
 * 具体点击了什么语言
 */
const clickedLang = ref<number>(0);

/**
 * 代码展示
 */
const showCode = ref<boolean>(true);
/**
 * 复制展示
 */
const showCopy = ref<boolean>(false);
/**
 * 复制状态
 */
const copied = ref<boolean>(false);
/**
 * Vue源码
 */
const fileVueContent = ref<string>('');
/**
 * react源码
 */
const fileReactContent = ref<string>('');
/**
 * Vue组件
 */
const fileComponent = ref(null);
/**
 * 提示
 */
const tip = ref<string>('');

/**
 * 获取源代码
 */
const getContent = async (): Promise<void> => {
  try {
    const vueContent = await import(`../../../play/vue-project/src/pages/${props.content}/${props.type}.vue?raw`);
    fileVueContent.value = vueContent.default;
  } catch {
    fileVueContent.value = '未获取到源代码，开发中。。'
  }
  try {
    const reactContent = await import(`../../../play/react-project/src/pages/${props.content}/${props.type}.tsx?raw`);
    fileReactContent.value = reactContent.default
  } catch {
    fileReactContent.value = '未获取到源代码，开发中。。'
  }
};

const handleMouseEnter = () => {
  showCopy.value = true;
};

const handleMouseLeave = () => {
  showCopy.value = false;
};

const computedUrl = computed(() => {
  return copied.value ? `var(--vp-icon-copied)` : `var(--vp-icon-copy)`;
});

const handleCopyCode = async () => {
  copied.value = true;
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(clickedLang.value === 0 ? fileVueContent.value : fileReactContent.value);
    }
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error(err)
  }
};

/* 热更新没用。。?raw不会热加载，不再属于vue文件，不会再去监听了 */
// import.meta.hot?.on('vite:beforeUpdate', () => {
//   getContent();
// });

onMounted(async () => {
  getContent();
  /* 获取组件 */
  const loadedComponent = await import(`../../../play/vue-project/src/pages/${props.content}/${props.type}.vue`);
  fileComponent.value = markRaw(loadedComponent.default);
  const result = md.render(props.title as string);
  tip.value = result.replace(/\。/g, '。<br>'); // 在句号后插入 <br> 标签

  hljs.configure({
    ignoreUnescapedHTML: true // 禁用未转义 HTML 的检查
  });

  // 使用 highlight.js 高亮代码
  nextTick(() => {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block: any) => {
      delete block.dataset.highlighted; // 移除 highlighted 属性
      hljs.highlightBlock(block as HTMLElement); // 高亮代码
    });
  });
});
</script>

<style scoped>
.demo_preview {
  margin: 20px 0;
  border: 1px solid #efefef;
  border-radius: 6px;
}

.preview_box {
  padding: 20px;
}

.operate_btn {
  position: relative;
  height: 46px;
  line-height: 46px;
  color: #666;
  text-align: center;
  background: #f3f3f3;
  cursor: pointer;
  z-index: 1;
}

.operate_btn:hover {
  background: #e9e8e8;
}

.code {
  border-top: 1px solid #efefef;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.code .code__reference {
  overflow: hidden;
}

.show_code {
  grid-template-rows: 1fr;
}

pre {
  margin-top: -14px;
  margin-bottom: 14px;
  margin-left: 10px;
}

.language {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  color: #666;
  font-size: 13px;
}

.code,
.language-javascript {
  background-color: rgb(247, 248, 250);
}

.switch {
  padding: 10px;
  border-bottom: 2px solid #e9e8e8;
  display: flex;
  justify-content: space-between;
}

.switch_lang {
  cursor: pointer;
  display: inline-block;
  min-width: 40px;
  margin: 0 10px;
  text-align: center;
  color: #666;
}

.switch_lang_active {
  color: #3451b2;
}

.code_content {
  position: relative;
}

.copy-code-btn {
  direction: ltr;
  position: absolute;
  top: 20px;
  right: 8px;
  z-index: 3;
  border: 1px solid var(--vp-code-copy-code-border-color);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: var(--vp-code-copy-code-bg);
  opacity: 0;
  background-image: v-bind(computedUrl);
  transition:
    border-color 0.25s,
    background-color 0.25s,
    opacity 0.25s;
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  cursor: pointer;
}

.switch_btn {
  direction: ltr;
  width: 20px;
  height: 20px;
  background-color: var(--vp-code-copy-code-bg);
  background-image: v-bind(computedUrl);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
