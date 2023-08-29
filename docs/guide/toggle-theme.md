# 主题

支持主题切换，内部通过计算取得其色阶值

<div class="t-c-box">
  <span class="t-b t-b1" @click="() => toggleTheme('#1677ff')">蓝</span>
  <span class="t-b t-b2" @click="() => toggleTheme('#673ab7')">紫</span>
  <span class="t-b t-b3" @click="() => toggleTheme('#eb920e')">黄</span>
  <span class="t-b t-b4" @click="() => toggleTheme('#7185f7')">坤</span>
  <span class="t-b t-b5" @click="() => toggleTheme('#ff6723')">橙</span>
  <!-- <span class="t-b t-b6" @click="() => toggleTheme('#333333')">6</span> -->
</div>

<!-- <input type="color" /> -->

<div style="margin-top: 15px">
  <ik-button type="primary" @click="toggleRadius">点击切换圆角</ik-button>
  <br />
  <br />
  <ik-input />
  <br />

  <ik-checkbox-group v-model="checkedList1">
    <ik-checkbox label="选项一"></ik-checkbox>
    <ik-checkbox label="选项二"></ik-checkbox>
    <ik-checkbox label="选项三"></ik-checkbox>
  </ik-checkbox-group>
  <br />
  <ik-tab type="segmented">
    <ik-tab-item label="选项卡一"></ik-tab-item>
    <ik-tab-item label="选项卡二"></ik-tab-item>
    <ik-tab-item label="选项卡第三个"></ik-tab-item>
  </ik-tab>
  <br />

  <div v-loading="true">
    雨霖铃<br />
    寒蝉凄切<br />
    对长亭晚<br />
    骤雨初歇
  </div>

  <br />

<ik-switch :defaultValue="true"></ik-switch>
<br />

</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  const checkedList1 = ref(['选项一', '选项二'])
  const radiusList = ref(['2px', '4px', '6px', '8px', '10px'])
  const radiusTag = ref(0)
  const setCssVar = (prop, value, node = document.documentElement) => {
    node.style.setProperty(prop, value)
  }
  const calcColor = (hex, lum = 0) => {
    hex = String(hex).replace(/[^0-9a-f]/gi, '')
    if (hex.length < 6) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }
    let rgb = '#'
    let c, i

    for (let i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16)
      c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
      rgb += ('00' + c).substr(c.length)
    }
    return rgb
  }
const toggleTheme = (brandColor) => {
  const brandColor1 = calcColor(brandColor, 0.1)
  const brandColor2 = calcColor(brandColor, -0.2)
  const brandColor3 = calcColor(brandColor, 0.1)
  console.log(brandColor1, brandColor2, brandColor3)
  setCssVar('--primary-color', brandColor)
  setCssVar('--primary-color-lighter-1', brandColor1)
  setCssVar('--primary-color-darker-1', brandColor2)
  setCssVar('--primary-color-hover', brandColor3 + '3b')
}
const toggleRadius = () => {
  const r = radiusList.value[radiusTag.value]
  setCssVar('--default-radius', r)
  radiusTag.value >= 4 ? radiusTag.value = 0 : radiusTag.value++
}
</script>
<style>
  .t-c-box {
    display: flex;
  }
  .t-b {
    width: 32px;
    height: 32px;
    margin: 0 5px;
    border-radius: var(--default-radius);
    color: #fff;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    user-select: none;
  }
  .t-b1 {
    background: #1677ff !important;
    margin-left: 0 !important;
  }
  .t-b2 {
    background: #673ab7 !important;
  }
  .t-b3 {
    background: #eb920e !important;
  }
  .t-b4 {
    background: #7185f7 !important;
  }
  .t-b5 {
    background: #ff6723;
  }
  .t-b6 {
    background: #333;
  }
</style>

::: tip
文档完善中...
:::
