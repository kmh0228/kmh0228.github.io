<template>
  <div class="docs_header_container">
    <!-- 菜单 -->
    <div class="menu_container">
      <a
        v-for="menu in docStore.docData || []"
        :key="menu.id"
        class="menu_item"
        :class="{ active: menu === docStore.curDoc }"
        @click="docStore.initCurDoc(menu)"
      >
        {{ menu.name }}
      </a>
    </div>
    <div class="operation_content">
      <n-input class="operation_item" round placeholder="搜索">
        <template #suffix>
          <n-icon :component="SearchOutline" />
        </template>
      </n-input>
      <n-button class="operation_item" type="info" @click="exportDocContent">导出</n-button>
      <n-button class="operation_item" type="info" @click="importDocContent">导入</n-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDocStore } from '@/store/docStore.ts'
import { NButton, NInput, NIcon } from 'naive-ui'
import { exportTextAsFile, importFile, readTxtFile } from '@/utils'
import { SearchOutline } from '@vicons/ionicons5'

const docStore = useDocStore()

// 导出文档
const exportDocContent = () => {
  exportTextAsFile(JSON.stringify(docStore.getDocData()), 'export_docs')
}

// 导入文档
const importDocContent = () => {
  importFile({ acceptType: ['txt'], multiple: false }).then((data) => {
    readTxtFile(data[0]).then((content) => {
      docStore.setDocData(JSON.parse(content))
    })
  })
}
// 测试
</script>
<style lang="scss" scoped>
.docs_header_container {
  @include flexBetween();
  height: 56px;
  background: $background;
  box-shadow: $bottomShadow;
  padding: 0 24px;
  position: relative;
  z-index: 4;
  /* 菜单容器 */
  .menu_container {
    @include flexCenter();
    /* 菜单 */
    .menu_item {
      @include flexCenter();
      height: 32px;
      margin-right: 6px;
      border-radius: 8px;
      padding: 0 12px;
      &:hover {
        background: $hoverBackground;
      }
      &.active {
        color: $activeColor;
        background: $activeBackground;
      }
    }
  }

  /* 按钮容器 */
  .operation_content {
    display: flex;
    align-content: center;
    .operation_item {
      margin-left: 12px;
    }
    .n-button {
      min-width: 80px;
    }
  }
}
</style>
