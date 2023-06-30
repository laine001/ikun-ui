<script lang="ts" setup>
import { ref } from 'vue'
const selectValue = ref('hello')
const selectOption = ref(['hello', 'ok', 'jntm'])
const menuList = [
  {
    label: '首页',
    icon: 'home',
    path: '/dashboard',
  },
  {
    label: '组件管理',
    icon: 'files',
    children: [
      {
        label: '设置',
        path: '/setting',
      },
      {
        label: '内容',
      },
    ],
  },
]
</script>
<template>
  <ik-container>
    <ik-aside class="my-aside">
      <div class="logo">ikui-admin-template</div>
      <ik-menu :items="menuList" />
    </ik-aside>
    <ik-container direction="ver">
      <ik-header class="my-header">
        <div class="header-left"><ik-icon name="toggle-left" color="#ffffff" /></div>
        <div class="header-right">
          <a class="header-github" href="https://github.com/LAINE001/ik-ui" target="_blank" rel="noopener"
            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              ></path>
            </svg>
          </a>
          <ik-avatar square url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
        </div>
      </ik-header>
      <ik-main class="demo1-main">
        <router-view></router-view>
        <!-- <ik-button type="success">阿斯弗</ik-button>
        <ik-select filterOn v-model="selectValue" :option="selectOption"></ik-select>
        <ik-switch />
        <ik-tooltip placement="top">
          <template #content>
            <div>123123</div>
          </template>
          <ik-button>左中</ik-button>
        </ik-tooltip>
        <br />
        <br />
        <br />
        <ik-space>
          <ik-switch />
          <ik-switch />
          <span>123213</span>
          hellow
          <div style="border: 1px solid">
            123
            <p>哈哈哈哈</p>
          </div>
        </ik-space>
        <ik-space size="small" wrap>
          <ik-button>按 钮</ik-button>
          <ik-button>按 钮2</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
          <ik-button>按钮3</ik-button>
        </ik-space> -->
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
.logo {
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  height: 32px;
  background-color: var(--default-color-lighter-2);
  border-radius: var(--default-radius);
}
.my-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff !important;
  .header-left {
    height: 100%;
    padding: 0 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .header-github {
    width: 32px;
    height: 32px;
    margin-top: 8px;
    margin-right: 10px;
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
.my-aside {
  background-color: #fff !important;
}
.demo1-main {
  background-color: #f4f5f6 !important;
}
</style>
