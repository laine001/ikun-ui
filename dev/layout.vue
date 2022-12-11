<script lang="ts" setup></script>
<template>
  <ik-container>
    <ik-aside>aside</ik-aside>
    <ik-container direction="ver">
      <ik-header class="my-header">
        <div class="header-left"><ik-icon name="toggle-left" color="#ffffff" /></div>
        <div class="header-right">
          <span class="avatar"></span>
        </div>
      </ik-header>
      <ik-main class="demo1-main">main</ik-main>
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

.avatar {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 100%;
}
</style>
