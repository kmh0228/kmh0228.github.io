<template>
  <div v-if="docStore.curDoc" class="docs_content_container">
    <div class="docs_content_title">{{ path }}</div>
    <div ref="scrollContainer" class="docs_content_scroll_box">
      <docs-content-item :data="docStore.curDoc" :level="1"></docs-content-item>
    </div>
  </div>
</template>
<script lang="ts" setup>
import DocsContentItem from '@/views/docs/components/DocsContent/DocsContentItem.vue'
import { useDocStore } from '@/store/docStore.ts'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const docStore = useDocStore()

const scrollContainer = ref<HTMLDivElement | null>(null)

const path = computed(() => {
  return docStore.curShowDoc.map((n) => n.name).join(' > ')
})

const activeMenu = (item: GDocStore.DocItem) => {
  const dom = document.querySelector('[data-id="' + item.id + '"]') as HTMLElement
  if (dom && scrollContainer.value) {
    ;(scrollContainer.value as HTMLElement).scrollTop = dom.offsetTop
  }
}

onMounted(() => {
  // 绑定激活菜单事件
  docStore.on('onActiveMenu', activeMenu)
})

onUnmounted(() => {
  // 解除激活菜单事件
  docStore.on('onActiveMenu', activeMenu)
})
</script>
<style lang="scss" scoped>
.docs_content_container {
  padding: 0 40px;
  height: 100%;
  .docs_content_title {
    height: 40px;
    line-height: 40px;
    color: $descColor;
  }
  .docs_content_scroll_box {
    @include scrollContainer();
    overflow-y: auto;
    height: calc(100% - 60px);
    position: relative;
  }
}
</style>
