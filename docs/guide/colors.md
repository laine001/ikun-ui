# 色彩

## 主色

整体色彩采用中国传统古色，取色来自 b 站`@设计师IORI`

其颜色分别作为`默认` `主题` `成功` `警告` `信息` `危险`这些行为的主色

<div class="colors-list">
  <div class="colors-box">
    <div class="title qianyun">
      浅云
      <span class="detail">hex eaecf1</span>
    </div>
  </div>
  <div class="colors-box">
    <div class="title">
      山梗
      <span class="detail">hex cd8025</span>
    </div>
  </div>
  <div class="colors-box">
    <div class="title tianshuibi">
      天水碧
      <span class="detail">hex 5aa4ae</span>
    </div>
  </div>
  <div class="colors-box">
    <div class="title zhuyantuo">
      朱颜酡
      <span class="detail">hex f29a76</span>
    </div>
  </div>
  <div class="colors-box">
    <div class="title mushanzi">
      暮山紫
      <span class="detail">hex a4abd6</span>
    </div>
  </div>
  <div class="colors-box">
    <div class="title shiliuqun">
      石榴裙
      <span class="detail">hex b13b2e</span>
    </div>
  </div>
</div>

## 衍生

根据各主色深浅各衍生其他几个颜色，且多数为由主色向其加深或变浅 2~4 介生成

<style lang="scss">
  @import '../../packages/ikui-theme/mixins/config.scss';
  .colors-list {
    display: flex;
  }
  .colors-box {
    width: 120px;
    height: 260px;
    overflow: hidden;
    display: flex;
    position: relative;
    
    .title {
      width: 100%;
      padding: 14px;
      font-size: 26px;
      color: #fff;
      background-color: $primary;
      font-weight: bold;
      font-family: '宋体';
      writing-mode: vertical-rl;
      letter-spacing: .2em;
      margin-right: 2px;
      &.qianyun {
        background-color: $qianyun;
        color: #8ba3c7;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &.tianshuibi {
        background-color: $tianshuibi;
        color: #f5f2e9;
      }
      &.zhuyantuo {
        background-color: $zhuyantuo;
        color: #edf1bb;
      }
      &.mushanzi {
        background-color: $mushanzi;
        color: #eeead9;
      }
      &.shiliuqun {
        background-color: $shiliuqun;
        color: #f5f2e9;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      .detail {
        font-size: 12px;
        font-weight: normal;
        font-family: '微软雅黑';
        letter-spacing: 1px;
        writing-mode: lr-tb;
        position: absolute;
        bottom: 0px;
        right: 0px;
        transform: scale(.82);
      }
    }
    /* .lighter {
      height: 40px;
      background-color: $button-lighter--primary;
    }
    .darker {
      height: 40px;
      background-color: $button-darker--primary;
    } */
  }
</style>
