<script lang="ts" setup>
import { IkCheckbox } from 'ikuiv'
import { ref, getCurrentInstance, watch } from 'vue'
const _global = getCurrentInstance()
let id = 1
const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)
const selected = ref(false)
const selected2 = ref(true)
const val1 = ref('hello')
const selectedList = ref(['选项111', '选项222'])
const fullscreenLoading = ref(false)

const toggle1 = () => {
  loading1.value = !loading1.value
}
const onClick = () => {
  fullscreenLoading.value = !fullscreenLoading.value
  setTimeout(() => {
    fullscreenLoading.value = !fullscreenLoading.value
  }, 2000)
}

const openMessage = () => {
  _global?.appContext.config.globalProperties.$message('哈哈' + id)
  id++
}
const openMessage2 = () => {
  _global?.appContext.config.globalProperties.$message({
    type: 'warning',
    message: 'hahahha',
  })
  id++
}
const openMessage3 = () => {
  _global?.appContext.config.globalProperties.$message.success({
    type: 'warning',
    message: 'hahahha',
  })
  id++
}
const openMessage4 = () => {
  _global?.appContext.config.globalProperties.$message.success('这是成功提示')
  id++
}

watch(selectedList, (value) => {
  console.log(value, 'selectedList')
})
const onInputChange = (e) => {
  console.log(e, 'change')
}
const setCssVar = (prop: string, value: string, dom = document.documentElement): void => {
  dom.style.setProperty(prop, value)
}
const toggleTheme = () => {
  console.log('123')
  setCssVar('--primary-color', 'blue')
  setCssVar('--success-color', 'green')
}
</script>
<template>
  <div>
    <div class="examples-box">
      <h1>按钮</h1>
      <ik-button @click="toggleTheme">切换主题</ik-button>
      <ik-button type="primary">主题按钮</ik-button>
      <ik-button type="success">成功按钮</ik-button>
      <ik-button type="warning">警告按钮</ik-button>
      <ik-button type="danger">危险按钮</ik-button>
      <ik-button type="primary" disabled>禁用状态</ik-button>
      <br />
      <br />
      <ik-button icon="add">按钮</ik-button>
      <ik-button loading>加载中</ik-button>
      <ik-button type="primary" loading>请稍后</ik-button>
      <ik-button>
        <ik-icon name="user" />
        按钮
      </ik-button>
      <ik-button type="primary">
        按钮
        <ik-icon color="#ffffff" name="main" />
      </ik-button>
    </div>

    <div class="examples-box">
      <h1>loading</h1>
      <ik-button type="primary" @click="toggle1">loading1</ik-button>
      <ik-button type="primary" @click="loading2 = !loading2">loading2</ik-button>
      <ik-button type="primary" @click="loading3 = !loading3">loading3</ik-button>
      <ik-button type="primary" @click="onClick">全屏按钮</ik-button>
      <ik-button type="primary">全屏按钮方法调用</ik-button>
      <div v-loading="loading1">这里是loading测试1</div>
      <div v-loading="loading2" class="loading-demo2">
        <p>寒蝉凄切</p>
        <p>对账听完</p>
        <p>骤雨初歇，可降低哦</p>
      </div>
      <div v-loading="loading3" class="loading-demo3">品萨福克垃圾啊康师傅</div>
      <div v-loading.fullscreen="fullscreenLoading" class="loading-demo3"></div>
    </div>
    <div class="examples-box">
      <h1>输入框</h1>
      <ik-input v-model="val1" hasClear @change="onInputChange" />
    </div>
    <div class="examples-box">
      <h1>图标</h1>
      <ik-icon color="red" :size="38" name="star-fill" />
    </div>
    <div class="examples-box">
      <h1>message提示</h1>
      <ik-button @click="openMessage">普通提示</ik-button>
      <ik-button @click="openMessage2">传入对象</ik-button>
      <ik-button @click="openMessage3">点type调用</ik-button>
      <ik-button @click="openMessage4">点type调用</ik-button>
    </div>
    <div class="examples-box">
      <h1>checkbox</h1>
      <div>
        <!-- <ik-checkbox v-model="selected" label="选项一"></ik-checkbox> -->
        <ik-checkbox v-model="selected2" label="测试1"></ik-checkbox>
      </div>
      <div>
        <ik-checkbox-group v-model="selectedList">
          <ik-checkbox label="选项111"></ik-checkbox>
          <ik-checkbox label="选项222"></ik-checkbox>
          <ik-checkbox label="选项333"></ik-checkbox>
        </ik-checkbox-group>
        {{ selectedList }}
      </div>
    </div>
  </div>
</template>
<style>
.examples-box {
  border: 1px solid orange;
  padding: 10px;
  margin: 10px 0;
}
.loading-demo2 {
  width: 300px;
  height: 300px;
  border-radius: 4px;
  margin-top: 20px;
  border: 1px solid saddlebrown;
}
</style>
