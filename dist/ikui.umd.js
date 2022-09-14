(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.IkUI = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const buttonTypes = [
    "default",
    "primary",
    "success",
    "warning",
    "danger"
  ];
  const buttonProps = {
    type: {
      type: String,
      values: buttonTypes,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  };
  const __default__$1 = vue.defineComponent({
    name: "IkButton"
  });
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    ...__default__$1,
    props: buttonProps,
    emits: ["click"],
    setup(__props, { expose, emit: emits }) {
      const props = __props;
      const computedCls = vue.computed(() => {
        const {
          type,
          disabled
        } = props;
        return [
          "ik-button",
          `ik-button-${type}`,
          {
            "ik-button-disabled": disabled
          }
        ];
      });
      const onClick = () => {
        emits("click");
      };
      expose({
        type: props.type
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: vue.normalizeClass(vue.unref(computedCls)),
          onClick
        }, [
          vue.createElementVNode("span", null, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ], 2);
      };
    }
  });
  const button_vue_vue_type_style_index_0_lang = "";
  const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$2
  }, Symbol.toStringTag, { value: "Module" }));
  const _hoisted_1$1 = { class: "ik-input-wrapper" };
  const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode("input", {
    class: "ik-input",
    placeholder: "\u8BF7\u8F93\u5165",
    type: "text"
  }, null, -1);
  const _hoisted_3$1 = [
    _hoisted_2$1
  ];
  const __default__ = vue.defineComponent({
    name: "IkInput"
  });
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, _hoisted_3$1);
      };
    }
  });
  const input_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1 = {
    key: 0,
    class: "es-loading-mask"
  };
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("div", { class: "loading-box" }, [
    /* @__PURE__ */ vue.createElementVNode("div", { class: "loader-08" })
  ], -1);
  const _hoisted_3 = [
    _hoisted_2
  ];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "mask",
    props: {
      visible: {
        type: Boolean
      }
    },
    setup(__props) {
      const props = __props;
      const show = vue.ref(false);
      vue.watch(
        () => props.visible,
        (value) => {
          show.value = value;
          if (value) {
            setTimeout(() => {
              show.value = false;
            }, 2e3);
          }
        }
      );
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, { name: "es-loading-fade" }, {
          default: vue.withCtx(() => [
            show.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, _hoisted_3)) : vue.createCommentVNode("", true)
          ]),
          _: 1
        });
      };
    }
  });
  const mask_vue_vue_type_style_index_0_lang = "";
  const insertDom = (el, binding) => {
    if (el.originPosition !== "absolute" && el.originPosition !== "fixed") {
      el.style.position = "relative";
    }
    const loading = vue.createApp(_sfc_main);
    const loadingIns = loading.mount(document.createElement("div"));
    el.loadingIns = loadingIns;
    el.appendChild(loadingIns.$el);
  };
  const vLoading = {
    mounted(el, binding) {
      const originPosition = window.getComputedStyle(el)["position"];
      el.originPosition = originPosition;
      if (binding.value) {
        insertDom(el);
      }
    },
    updated(el, binding) {
      if (binding.value !== binding.oldValue) {
        if (!binding.value) {
          el.style.position = el.originPosition;
          el.removeChild(el.loadingIns.$el);
        } else {
          insertDom(el);
        }
      }
    }
  };
  const index = {
    install(app) {
      app.component(_sfc_main$2.name || "IkButton", _sfc_main$2);
      app.component(_sfc_main$1.name || "IkInput", _sfc_main$1);
      app.directive("loading", vLoading);
    }
  };
  exports2.IkButton = _sfc_main$2;
  exports2.IkInput = _sfc_main$1;
  exports2.default = index;
  exports2.types = index$1;
  exports2.vLoading = vLoading;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
