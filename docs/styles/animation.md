# 纯css动画

## 抖动

<div class="animation-box flex-center box1">
  <span class="text">自由早晚乱余生</span>
</div>

::: details 点击查看代码
```html
<div class="animation-box flex-center box1">
  <span class="text">自由早晚乱余生</span>
</div>
<style>
  .box1 {
    .text {
      background: orange;
      color: white;
      margin: auto;
      padding: .3em 1em .5em;
      border-radius: 3px;
      box-shadow: 0 0 .5em orange;
      animation: shake-baidu 2s ease 0s infinite;
      cursor: pointer;
      user-select: none;
    }
    @keyframes shake-baidu {
      from    { transform: rotate(0deg); }
      4%      { transform: rotate(5deg); }
      12.5%   { transform: rotate(-5deg); }
      21%     { transform: rotate(5deg); }
      29%     { transform: rotate(-5deg); }
      37.5%   { transform: rotate(5deg); }
      46%     { transform: rotate(-5deg); }
      50%,to  { transform: rotate(0deg); }
    }
  }
</style>
```
:::

## 只因你

<div class="animation-box flex-center box2">
  <div class="bounce-top">🏀</div>
</div>

::: details 点击查看代码
```html
<div class="animation-box flex-center box1">
  <span class="text">自由早晚乱余生</span>
</div>
<style>
  .box2 {
    .bounce-top {
      margin-top: 40px;
      width: 160px;
      height: 42px;
      border-radius: 4px;
      animation: bounce-top .9s both infinite;
      animation-delay: 5s;
      font-size: 60px;
      text-align: center;
      line-height: 42px;
      @keyframes bounce-top {
        0%{transform:translateY(-45px);animation-timing-function:ease-in;opacity:1}
        24%{opacity:1}
        40%{transform:translateY(-24px);animation-timing-function:ease-in}
        65%{transform:translateY(-12px);animation-timing-function:ease-in}
        82%{transform:translateY(-6px);animation-timing-function:ease-in}
        93%{transform:translateY(-4px);animation-timing-function:ease-in}
        25%,55%,75%,87%{transform:translateY(0);animation-timing-function:ease-out}
        100%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}
      }
    }
  }
</style>
```
:::


## 崩~崩崩

<div class="animation-box flex-center box3">
  <ik-icon name="heart-fill" color="red" :size="86" />
</div>

::: details 点击查看代码
```html
<div class="animation-box flex-center box3">
  <ik-icon name="heart-fill" color="red" :size="86" />
</div>
<style>
.box3 {
  .ik-icon {
    animation:heartbeat 1.5s ease-in-out infinite both;
  }
  @keyframes heartbeat {
    from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out}
    10%{transform:scale(.88);animation-timing-function:ease-in}
    17%{transform:scale(.95);animation-timing-function:ease-out}
    33%{transform:scale(.84);animation-timing-function:ease-in}
    45%{transform:scale(1);animation-timing-function:ease-out}
  }
}
</style>

```
:::

<!-- 下面真实代码 -->
<style lang="scss">
  .box1 {
    .text {
      background: orange;
      color: white;
      margin: auto;
      padding: .3em 1em .5em;
      border-radius: 3px;
      box-shadow: 0 0 .5em orange;
      animation: shake-baidu 2s ease 0s infinite;
      /* animation-play-state: paused; */
      /* animation-play-state: running; */
      cursor: pointer;
      user-select: none;
    }
    @keyframes shake-baidu {
      from    { transform: rotate(0deg); }
      4%      { transform: rotate(5deg); }
      12.5%   { transform: rotate(-5deg); }
      21%     { transform: rotate(5deg); }
      29%     { transform: rotate(-5deg); }
      37.5%   { transform: rotate(5deg); }
      46%     { transform: rotate(-5deg); }
      50%,to  { transform: rotate(0deg); }
    }
  }
  
  .box2 {
    .bounce-top {
      margin-top: 40px;
      width: 160px;
      height: 42px;
      border-radius: 4px;
      animation: bounce-top .9s both infinite;
      /* animation-delay: 5s; */
      font-size: 60px;
      text-align: center;
      line-height: 42px;
      @keyframes bounce-top {
        0%{transform:translateY(-45px);animation-timing-function:ease-in;opacity:1}
        24%{opacity:1}
        40%{transform:translateY(-24px);animation-timing-function:ease-in}
        65%{transform:translateY(-12px);animation-timing-function:ease-in}
        82%{transform:translateY(-6px);animation-timing-function:ease-in}
        93%{transform:translateY(-4px);animation-timing-function:ease-in}
        25%,55%,75%,87%{transform:translateY(0);animation-timing-function:ease-out}
        100%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}
      }
    }
  }
  .box3 {
    .ik-icon {
      animation:heartbeat 1.5s ease-in-out infinite both;
    }
    @keyframes heartbeat {
      from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out}
      10%{transform:scale(.88);animation-timing-function:ease-in}
      17%{transform:scale(.95);animation-timing-function:ease-out}
      33%{transform:scale(.84);animation-timing-function:ease-in}
      45%{transform:scale(1);animation-timing-function:ease-out}
    }
  }
</style>