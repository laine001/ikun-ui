<script lang="ts" setup>
import { watch, ref } from 'vue';
const show = ref(false)

const props = defineProps({
  visible: {
    type: Boolean,
  }
})

watch(
  () => props.visible,
  (value) => {
    show.value = value
    if (value) {
      setTimeout(() => {
        show.value = false
      }, 2000);
    }
  }
)

</script>
<template>
  <transition name="es-loading-fade">
    <div v-if="show" class="es-loading-mask">
      <div class="loading-box">
        <div class="loader-08"></div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss">
.es-loading-mask {
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-box {
  display: inline-block;
  border-radius: 3px;
  font-size: 30px;
  width: 40px;
  height: 40px;
  color: blue;
  transition: 0.3s color, 0.3s border;
  .loading-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    color: blue;
    vertical-align: middle;
    pointer-events: none;
    border: 1px solid blue;
    border-radius: 50%;
    animation: 1s loader-04 linear infinite;
    position: relative;
    @keyframes loader-04 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    &:before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      top: -0.2em;
      left: 50%;
      border: 0.2em solid currentcolor;
      border-radius: 50%;
    }
  }
}
.loader-08 {
  position: relative;
  width: 100%;
  height: 100%;
}
.loader-08::before,
.loader-08::after {
  content: "";
  width: inherit;
  height: inherit;
  border-radius: 50%;
  background-color: blue;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: loader-08 2s infinite ease-in-out;
}
.loader-08::after {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
@keyframes loader-08 {
  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.es-loading-fade-enter-active,
.es-loading-fade-active {
  transition: opacity 0.5s;
}
.es-loading-fade-enter,
.es-loading-fade-leave-to {
  opacity: 0;
}
</style>