<script lang="ts" setup>
  import { IkButton, IkInput, IkIcon } from '../packages/ikui-components';
  import IkLoading from '../packages/ikui-components/loading/src/mask.vue'
  import { ref } from 'vue'

  const loading1 = ref(false)
  const loading2 = ref(false)
  const loading3 = ref(false)
  const fullscreenLoading = ref(false)

  const toggle1 = () => {
    loading1.value = !loading1.value
    console.log(loading1.value)
  }
  const onClick = () => {
    fullscreenLoading.value = !fullscreenLoading.value
  }
</script>
<template>
  <div>
    <div>
      <ik-button>普通按钮</ik-button>
      <ik-button type="primary" @click="toggle1">主题按钮</ik-button>
      <ik-button type="success" @click="loading2 = !loading2">成功按钮</ik-button>
      <ik-button type="warning" @click="loading3 = !loading3">警告按钮</ik-button>
      <ik-button type="danger" @click="onClick">危险按钮</ik-button>
      <ik-button type="primary">禁用状态</ik-button>
      <!-- <ik-loading :visible="fullscreenLoading"></ik-loading> -->
    </div>
    <div>
      <ik-button>普通按钮</ik-button>
      <ik-button type="primary">主要按钮</ik-button>
      <ik-button type="info">信息按钮</ik-button>
      <ik-button type="success">成功按钮</ik-button>
      <ik-button type="warning">警告按钮</ik-button>
      <ik-button type="danger">危险按钮</ik-button>
      <ik-button type="primary" disabled>主要按钮禁用</ik-button>
    </div>
    <IkInput />
    <div>
      <ik-button>普通按钮</ik-button>
      <ik-button type="primary">主要按钮</ik-button>
      <ik-button type="info">信息按钮</ik-button>
      <ik-button type="success">成功按钮</ik-button>
      <ik-button type="warning">警告按钮</ik-button>
      <ik-button type="danger">危险按钮</ik-button>
      <ik-button type="primary" disabled>主要按钮禁用</ik-button>
    </div>
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
    <div v-loading="loading1">
      这里是loading测试1
    </div>
    <div v-loading="loading2" class="loading-demo2">
      <p>寒蝉凄切</p>
      <p>对账听完</p>
      <p>骤雨初歇，可降低哦</p>
    </div>
    <div v-loading="loading3" class="loading-demo3">
      品萨福克垃圾啊康师傅
    </div>
    <ik-icon color="red" size="38" name="star-fill" />
  </div>
</template>
<style>
  .loading-demo2 {
    width: 300px;
    height: 300px;
    border-radius: 4px;
    margin-top: 20px;
    border: 1px solid saddlebrown;
  }
</style>
