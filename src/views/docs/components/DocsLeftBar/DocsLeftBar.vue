<template>
  <div class="doc_left_bar_container">
    <div
      v-for="(menuItem, menuItemIndex) in docStore.curMenuDoc"
      :key="menuItem.id"
      class="menu_list_box"
      :style="{ width: docStore.leftBarWidth + 'px' }"
      :class="{
        hasRightBorder: menuItemIndex < docStore.curMenuDoc.length - 1
      }"
    >
      <div class="menu_list_container" :class="'menu_list_container_lv' + menuItemIndex">
        <div
          v-for="menuListItem in menuItem.children || []"
          :key="menuListItem.id"
          class="menu_item"
          :class="{
            active: menuListItem.id === docStore.curShowDoc[menuItemIndex + 1]?.id
          }"
          @click="docStore.activeMenu(menuListItem)"
        >
          <div
            class="title"
            :style="{
              width:
                menuListItem.children && menuListItem.children.length
                  ? 'width: calc(100% - 16px)'
                  : '100%'
            }"
          >
            {{ menuListItem.name }}
          </div>
          <div
            v-if="menuListItem.children && menuListItem.children.length"
            class="arrow_icon"
            @click.stop="docStore.openMenu(menuListItem)"
          >
            <n-icon size="14" :component="ChevronForward" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDocStore } from '@/store/docStore.ts'
import { ChevronForward } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'

const docStore = useDocStore()
</script>
<style lang="scss" scoped>
.doc_left_bar_container {
  height: 100%;
  background-color: $background;
  box-shadow: $rightShadow;
  position: relative;
  z-index: 2;
  display: flex;
  .menu_list_box {
    height: 100%;
    padding-top: 8px;
    box-sizing: border-box;
    .menu_list_container {
      @include scrollContainer();
      height: 100%;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      font-size: 12px;
      &.menu_list_container_lv0 {
        font-size: 13px;
      }
      .menu_item {
        @include flexBetween();
        width: calc(100% - 16px);
        margin-left: 8px;
        margin-bottom: 8px;
        border-radius: 8px;
        padding: 11px 8px;
        box-sizing: border-box;
        cursor: pointer;
        .title {
          /* @include ellipsis(); */
        }
        .arrow_icon {
          width: 16px;
          height: 16px;
          &:hover {
            .n-icon {
              color: $activeColor;
            }
          }
        }
        &:hover {
          background: $hoverBackground;
        }
        &.active {
          color: $activeColor;
          background: $activeBackground;
        }
      }
    }
    &.hasRightBorder {
      border-right: 1px solid $borderColor;
    }
  }
}
</style>
