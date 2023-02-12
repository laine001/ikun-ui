<script lang="ts" setup>
import { ref } from 'vue'
const selectValue = ref('hello')
const selectOption = ref(['hello', 'ok', 'jntm'])
</script>
<template>
  <ik-container>
    <ik-aside>aside</ik-aside>
    <ik-container direction="ver">
      <ik-header class="my-header">
        <div class="header-left"><ik-icon name="toggle-left" color="#ffffff" /></div>
        <div class="header-right">
          <ik-avatar square url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
        </div>
      </ik-header>
      <ik-main class="demo1-main">
        <ik-button type="success">阿斯弗</ik-button>
        <ik-select v-model="selectValue" :option="selectOption"></ik-select>
      </ik-main>
    </ik-container>
  </ik-container>
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
}
html,
body {
  height: 100%;
}
#app {
  width: 100vw;
  height: 100%;
  min-height: 100vh;
}

.my-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left {
    height: 100%;
    padding: 0 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .header-right {
    display: flex;
    justify-content: space-between;
    padding: 0 2px;

    .avatar {
      width: 28px;
      height: 28px;
      background-color: #fff;
      border-radius: 100%;
    }
  }
}
.demo1-main {
  background-color: #dedede !important;
}
.ik-avatar {
  // margin-top: 2px;
}
</style>
