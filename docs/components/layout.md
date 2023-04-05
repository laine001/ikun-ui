# 布局容器 Layout

## 常见页面布局

<div class="container-demo">
  <ik-container class="container-column">
    <ik-header class="demo1-header">header</ik-header>
    <ik-main class="demo1-main">main</ik-main>
  </ik-container>
</div>

<br />
<div class="container-demo">
  <ik-container>
    <ik-aside>aside</ik-aside>
    <ik-container direction="ver">
      <ik-header class="demo1-header">header</ik-header>
      <ik-main class="demo1-main">main</ik-main>
    </ik-container>
  </ik-container>
</div>

<br />
<div class="container-demo">
  <ik-container>
    <ik-aside>aside</ik-aside>
    <ik-main class="demo1-main">main</ik-main>
  </ik-container>
</div>

::: details 点击展开

```html
<ik-container>
  <ik-header>header</ik-header>
  <ik-main>main</ik-main>
</ik-container>

<ik-container>
  <ik-aside>aside</ik-aside>
  <ik-container direction="ver">
    <ik-header>header</ik-header>
    <ik-main>main</ik-main>
  </ik-container>
</ik-container>

<ik-container>
  <ik-aside>aside</ik-aside>
  <ik-main>main</ik-main>
</ik-container>
```

:::

<style>
  .container-demo {
    width: 100%;
    height: 300px;
    border-radius: var(--default-radius);
    /* border: 1px solid var(--primary-color); */
    overflow: hidden;
  }
  .container-column {
    flex-direction: column;
  }
</style>
