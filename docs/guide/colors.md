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
    <div class="title shangeng">
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

<div class="colors-7-box-view">
<div class="brand-colors-box">
  <div class="color-box brand-color-l7"></div>
  <div class="color-box brand-color-l6"></div>
  <div class="color-box brand-color-l5"></div>
  <div class="color-box brand-color-l4"></div>
  <div class="color-box brand-color-l3"></div>
  <div class="color-box brand-color-l2"></div>
  <div class="color-box brand-color-l1"></div>
</div>
<!-- <div class="success-colors-box">
  <div class="color-box success-color-l7"></div>
  <div class="color-box success-color-l6"></div>
  <div class="color-box success-color-l5"></div>
  <div class="color-box success-color-l4"></div>
  <div class="color-box success-color-l3"></div>
  <div class="color-box success-color-l2"></div>
  <div class="color-box success-color-l1"></div>
</div> -->
<div class="red-colors-box">
  <div class="color-box red-color-l7"></div>
  <div class="color-box red-color-l6"></div>
  <div class="color-box red-color-l5"></div>
  <div class="color-box red-color-l4"></div>
  <div class="color-box red-color-l3"></div>
  <div class="color-box red-color-l2"></div>
  <div class="color-box red-color-l1"></div>
</div>
</div>

<style lang="scss">
  @import '../../packages/ikui-theme/mixins/config.scss';
  .colors-list {
    display: flex;
  }
  .colors-7-box-view {
    display: flex;
    gap: 40px;
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
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
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
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
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
  .red-colors-box {
    width: 120px;
    height: 260px;
    display: flex;
    gap: 1px;
    flex-direction: column;
    border-radius: var(--default-radius);
    .color-box {
      height: 40px;
      width: 100%;
      transition: all .2s;
      &:hover {
        width: 120%;
      }
      &.red-color-l7 {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: var(--danger-color-lighter-7);
      }
      &.red-color-l6 {
        background: var(--danger-color-lighter-6);
      }
      &.red-color-l5 {
        background: var(--danger-color-lighter-5);
      }
      &.red-color-l4 {
        background: var(--danger-color-lighter-4);
      }
      &.red-color-l3 {
        background: var(--danger-color-lighter-3);
      }
      &.red-color-l2 {
        background: var(--danger-color-lighter-2);
      }
      &.red-color-l1 {
        background: var(--danger-color);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
  .success-colors-box {
    width: 120px;
    height: 260px;
    display: flex;
    gap: 1px;
    flex-direction: column;
    .color-box {
      height: 40px;
      width: 100%;
      transition: ease-in 0.24s;
      &:hover {
        width: 120%;
      }
      &.success-color-l7 {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: var(--success-color-lighter-7);
      }
      &.success-color-l6 {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: var(--success-color-lighter-6);
      }
      &.success-color-l5 {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: var(--success-color-lighter-5);
      }
      &.success-color-l4 {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: var(--success-color-lighter-4);
      }
      &.success-color-l3 {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: var(--success-color-lighter-3);
      }
      &.success-color-l2 {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: var(--success-color-lighter-2);
      }
      &.success-color-l1 {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: var(--success-color-lighter-1);
      }
    }
  }
  .brand-colors-box {
    width: 120px;
    height: 260px;
    display: flex;
    gap: 1px;
    flex-direction: column;
    border-radius: var(--default-radius);
      .color-box {
        height: 40px;
        width: 100%;
        transition: all 0.2s;
        &:hover {
          width: 120%;
        }
        &.brand-color-l7 {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          background: var(--primary-color-lighter-7);
        }
        &.brand-color-l6 {
          background: var(--primary-color-lighter-6);
        }
        &.brand-color-l5 {
          background: var(--primary-color-lighter-5);
        }
        &.brand-color-l4 {
          background: var(--primary-color-lighter-4);
        }
        &.brand-color-l3 {
          background: var(--primary-color-lighter-3);
        }
        &.brand-color-l2 {
          background: var(--primary-color-lighter-2);
        }
        &.brand-color-l1 {
          background: var(--primary-color);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
</style>
