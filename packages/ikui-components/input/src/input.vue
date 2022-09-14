<script lang="ts" setup name="IkInput">
// import { computed } from 'vue';
</script>
<template>
  <div class="ik-input-wrapper">
    <input class="ik-input" placeholder="请输入" type="text">
  </div>
</template>

<style lang="scss">
  @import '../../../ikui-theme/src/var.scss';

  .ik-input-wrapper {
    .ik-input {
      outline: none;
      border: 1px solid rgb(134, 130, 123);
      padding: 6px 12px;
      border-radius: 4px;
      transition: all .2s;
      &:hover {
      border-color: #999999;
      }
      &:focus {
        border-color: $primary;
      }
    }
  }
</style>
