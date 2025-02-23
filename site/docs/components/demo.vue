<template>
  <div>
    <div class="demo_tip" v-html="tip"></div>
    <div class="demo_preview">
      <div class="preview_box">
        <component :is="fileComponent" />
      </div>
      <div class="code_box">
        <div class="code" :class="{ show_code: showCode }">
          <div class="code__reference">
            <div class="switch">
              <span class="switch_lang" v-for="(items, index) in languageArrs" :key="index" :class="{ switch_lang_active: index === clickedLang }" @click="clickedLang = index">
                {{ items }}
              </span>
            </div>
            <div class="code_content">
              <!-- <highlightjs language="javascript" :code="fileVueContent" /> -->
              <div v-show="clickedLang === 0">
                <span class="language">-vue</span>
                <pre><code class="language-javascript">{{ fileVueContent }}</code></pre>
              </div>
              <div v-show="clickedLang === 1">
                <span class="language">-react</span>
                <pre><code class="language-javascript">{{ fileVueContent }}</code></pre>
              </div>
            </div>
          </div>
        </div>
        <div class="operate_btn" @click="() => (showCode = !showCode)">{{ showCode ? '隐藏' : '显示' }}代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, markRaw, ref, nextTick, onBeforeUpdate } from 'vue';
import hljs from 'highlight.js'; // 引入 highlight.js
import markdownit from 'markdown-it';
const md = markdownit();

const props = defineProps({
  title: String,
  content: String,
  type: String,
  name: String
});

const languageArrs = ['Vue', 'React'];
const clickedLang = ref<number>(0);

const showCode = ref<boolean>(false);
/**
 * Vue源码
 */
const fileVueContent = ref('');
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
  const baseUrl = await import(`../../../play/vue-project/src/pages/${props.content}/${props.type}.vue?raw`);
  fileVueContent.value = baseUrl.default;
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
  z-index: 100;
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
</style>
