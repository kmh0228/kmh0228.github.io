<template>
  <div class="common-dialog__mask">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.common-dialog__mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: $dialogZIndex;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
