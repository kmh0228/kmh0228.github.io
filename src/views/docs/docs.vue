<template>
  <div class="docs_container">
    <docs-header></docs-header>
    <div class="docs_body_container">
      <docs-left-bar></docs-left-bar>
      <div class="docs_body_content">
        <docs-content></docs-content>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DocsHeader from '@/views/docs/components/DocsHeader/DocsHeader.vue'
import DocsLeftBar from '@/views/docs/components/DocsLeftBar/DocsLeftBar.vue'
import DocsContent from '@/views/docs/components/DocsContent/DocsContent.vue'
</script>
<style lang="scss" scoped>
.docs_container {
  height: 100%;
  .docs_body_container {
    @include flexLeft();
    position: relative;
    z-index: 3;
    height: calc(100% - 56px);
    .docs_body_content {
      height: 100%;
      overflow: hidden;
      flex: 1;
    }
  }
}
</style>
