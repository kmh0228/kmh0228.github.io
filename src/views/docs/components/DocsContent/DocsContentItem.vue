<template>
  <div class="docs_content_item_container" :data-id="props.data.id">
    <div class="content" :class="'content_' + props.level">
      <div class="title">{{ props.data.name }}</div>
      <div class="desc" v-html="props.data.desc"></div>
      <div v-if="props.data.code" class="code">
        <n-scrollbar style="max-height: 120px">
          <pre>{{ props.data.code }}</pre>
        </n-scrollbar>
        <n-button size="tiny" secondary strong class="copy_btn" @click="copyCode"> 复制 </n-button>
      </div>
    </div>
    <div v-if="props.data.children" class="children">
      <docs-content-item
        v-for="dataItem in props.data.children"
        :key="dataItem.id"
        :data="dataItem"
        :level="props.level + 1"
      ></docs-content-item>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NButton, NScrollbar } from 'naive-ui'
import { copy } from '@/utils'

const props = defineProps<{ data: GDocStore.DocItem; level: number }>()

// 复制代码
const copyCode = () => {
  copy(props.data.code || '')
}

defineOptions({
  name: 'DocsContentItem'
})
</script>
<style lang="scss" scoped>
.docs_content_item_container {
  .content {
    .title {
      font-size: 26px;
      padding: 8px 0;
      border-bottom: 1px solid $borderColor;
    }
    .desc {
      padding: 8px;
    }
    .code {
      position: relative;
      border: 1px solid $borderColor;
      padding: 8px;
      border-radius: 8px;
      .copy_btn {
        display: none;
        position: absolute;
        top: 8px;
        right: 24px;
      }
      &:hover {
        .copy_btn {
          display: block;
        }
      }
    }
  }
}
</style>
