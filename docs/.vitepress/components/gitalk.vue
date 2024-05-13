<script setup>
import { onMounted } from 'vue'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
onMounted(() => {
  const config = {
    clientID: '23159cfb3679d024812f',
    clientSecret: '923ba2f1928e54f36b052c0bcbbf301d3eb893c8',
    repo: 'blog-comment',
    owner: 'LAINE001',
    admin: ['LAINE001'],
    id: location.pathname,
    labels: ['GitTalk'],
    proxy: 'https://vercel.prohibitorum.top/github_access_token',
    distractionFreeMode: false,
  }
  const gitalk = new Gitalk(config)
  gitalk.render('gitalk-container')
})
</script>
<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<style>
.gt-container .gt-header-textarea {
  color: #000;
  border-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
}
.gt-container .gt-header-textarea:hover {
  border-color: var(--primary-color);
}
.gt-comment-content,
.gt-comment-avatar img,
.gt-header-textarea {
  border-radius: 8px !important;
}

.gt-container .gt-btn-preview,
.gt-container .gt-btn-login {
  border-radius: 8px;
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
}
.gt-container .gt-btn-preview:hover,
.gt-container .gt-btn-login:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.gt-container .gt-svg svg {
  fill: var(--primary-color);
}
.gt-ico-text,
.gt-container .gt-comment-username {
  color: var(--primary-color);
}
</style>
