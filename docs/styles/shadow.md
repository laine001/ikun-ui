# 阴影

## 四周一致

<div class="animation-box flex-center shadow-demo1">
  <div class="shadow1">四周阴影</div>
</div>

<!-- ## 不同颜色
<div class="animation-box flex-center shadow-demo2">
  <div class="shadow">四周阴影</div>
</div> -->

<style lang="scss">
  .shadow-demo1 {
    /* background-color: #a4abd6; */
    border: none;
  }
  .shadow1 {
    width: 200px;
    height: 160px;
    background-color: orange;
    padding: 14px;
    border-radius: 4px;
    transition: box-shadow .2s;
    box-shadow: -10px 0 10px #0000001f,
                  10px 0 10px #0000001f,
                  0 -10px 10px #0000001f,
                  0 10px 10px #0000001f;
    /* box-shadow: 0 3px 6px -4px #0000001f,
                  0 6px 16px #00000014,
                  0 9px 28px 8px #0000000d; */
  }
  .shadow-demo2 {
    .shadow {
      padding: 15px 30px;
      border-radius: 4px;
      box-shadow: -10px 0 10px #0000001f,
                  10px 0 10px #0000001f,
                  0 -10px 10px #0000001f,
                  0 10px 10px #0000001f;
    }
  }
</style>