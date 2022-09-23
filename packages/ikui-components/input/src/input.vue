<script lang="ts" setup name="IkInput">

</script>
<template>
  <div class="ik-input-wrapper">
    <div v-if="false">前缀</div>
    <div class="ik-input__inner" tabindex="1">
      <input class="ik-input" placeholder="请输入" type="text">
    </div>
    <div v-if="false">后缀</div>
  </div>
</template>

<style lang="scss">
  @import '../../../ikui-theme/src/var.scss';

  .ik-input-wrapper {
    .ik-input__inner {
      .ik-input {
        box-sizing: border-box;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 7px 12px;
        outline: none;
        width: 100%;
        height: 100%;
        &:focus {
          border: 1px solid $primary;
        }
      }
    }
  }
</style>
