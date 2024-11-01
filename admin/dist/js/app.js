/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wp-content/plugins/nano-insurance/admin/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=template&id=779f6888

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Spinner = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("Spinner");

  var _component_router_view = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("router-view");

  return Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])(vue_runtime_esm_bundler["a" /* Fragment */], null, [Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_Spinner), Object(vue_runtime_esm_bundler["i" /* createVNode */])(_component_router_view)], 64);
}
// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=779f6888

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Spinner.vue?vue&type=template&id=2e3dd064

var _hoisted_1 = {
  key: 0,
  class: "nano_loading nano_active"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", {
  class: "bt-spinner"
})], -1);

var _hoisted_3 = [_hoisted_2];
function Spinnervue_type_template_id_2e3dd064_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.showSpinner === true ? (Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])("div", _hoisted_1, _hoisted_3)) : Object(vue_runtime_esm_bundler["e" /* createCommentVNode */])("", true);
}
// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=template&id=2e3dd064

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-browser.js
var vuex_esm_browser = __webpack_require__("5502");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Spinner.vue?vue&type=script&lang=js

/* harmony default export */ var Spinnervue_type_script_lang_js = ({
  computed: Object(vuex_esm_browser["d" /* mapState */])(["showSpinner"])
});
// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Spinner.vue?vue&type=style&index=0&id=2e3dd064&lang=css
var Spinnervue_type_style_index_0_id_2e3dd064_lang_css = __webpack_require__("ee81");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/Spinner.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(Spinnervue_type_script_lang_js, [['render',Spinnervue_type_template_id_2e3dd064_render]])

/* harmony default export */ var Spinner = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=script&lang=js



/* harmony default export */ var Appvue_type_script_lang_js = ({
  computed: Object(vuex_esm_browser["d" /* mapState */])(["showSpinner"]),
  components: {
    Spinner: Spinner
  },
  methods: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm_browser["c" /* mapMutations */])(["setErrors"]))
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=779f6888&lang=css
var Appvue_type_style_index_0_id_779f6888_lang_css = __webpack_require__("d73c");

// CONCATENATED MODULE: ./src/App.vue







const App_exports_ = /*#__PURE__*/exportHelper_default()(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var App = (App_exports_);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__("6c02");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/ConnectToWooCommerce.vue?vue&type=template&id=0d382231

var ConnectToWooCommercevue_type_template_id_0d382231_hoisted_1 = {
  style: {
    "padding": "20px",
    "max-width": "700px",
    "margin": "16px 20px",
    "background-color": "#fff",
    "border-radius": "10px"
  }
};
var ConnectToWooCommercevue_type_template_id_0d382231_hoisted_2 = ["src"];

var ConnectToWooCommercevue_type_template_id_0d382231_hoisted_3 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", {
  style: {
    "clear": "both",
    "float": "none"
  }
}, " ", -1);

var _hoisted_4 = {
  style: {
    "margin": "40px 0 0"
  }
};

var _hoisted_5 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("h2", null, "👋 Hi there!", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("p", null, " Thank you for installing Ship-Safely. Giving you a peace of mind by empowering your customers with access to buyer protection that covers items Damaged, Lost or Stolen throughout the shipping process. ", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("p", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])(" Please contact us at "), /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("a", {
  href: "mailto:support@ship-safely.com",
  style: {
    "color": "#337ab7"
  }
}, "support@ship-safely.com"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])(" if you have any issue, drama or hassle. Not sure how this works? Read up more on our website "), /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("a", {
  href: "https://ship-safely.com/terms",
  style: {
    "color": "#337ab7"
  }
}, "here"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createTextVNode */])(". ")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("br", null, null, -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("h3", {
  style: {
    "font-weight": "bold",
    "font-size": "1.2em"
  }
}, "Let's get you set-up in two steps.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("br", null, null, -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("p", null, "You'll get a green tick when you've completed each of the steps, when the two steps are completed, please click on the activation tab above to add the plugin to your shop. Remember that if there is any issue at any time, you can always come back here to reconfigure the plugins again using the two buttons below.", -1);

var _hoisted_12 = {
  style: {
    "display": "flex",
    "justify-content": "space-between",
    "flex-wrap": "wrap",
    "align-items": "flex-start",
    "margin": "40px 0 0"
  }
};
var _hoisted_13 = {
  style: {
    "width": "100%",
    "background": "rgba(0,0,0,0.05)",
    "border-radius": "15px",
    "padding": "20px",
    "margin": "0 0 4%"
  }
};

var _hoisted_14 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("h3", {
  style: {
    "margin": "0 0 5px",
    "font-size": "18px",
    "line-height": "1.2em",
    "padding": "0"
  }
}, " First step. ", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("p", {
  style: {
    "font-size": "0.9em"
  }
}, " Let's connect your shop to our ecosystem so we can create policies. ", -1);

var _hoisted_16 = {
  style: {
    "display": "flex",
    "flex-direction": "row",
    "align-items": "center"
  }
};
var _hoisted_17 = {
  style: {
    "width": "100%",
    "background": "rgba(0,0,0,0.05)",
    "border-radius": "15px",
    "padding": "20px",
    "margin": "0 0 4%"
  }
};

var _hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("h3", {
  style: {
    "margin": "0 0 5px",
    "font-size": "18px",
    "line-height": "1.2em",
    "padding": "0"
  }
}, " Second step. ", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("p", {
  style: {
    "font-size": "0.9em"
  }
}, " Get our insurance product configured in your shop. ", -1);

var _hoisted_20 = {
  style: {
    "display": "flex",
    "flex-direction": "row",
    "align-items": "center"
  }
};
var _hoisted_21 = {
  style: {
    "width": "100%",
    "background": "rgba(0,0,0,0.05)",
    "border-radius": "15px",
    "padding": "20px",
    "margin": "0 0 4%"
  }
};

var _hoisted_22 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("h3", {
  style: {
    "margin": "0 0 5px",
    "font-size": "18px",
    "line-height": "1.2em",
    "padding": "0"
  }
}, " Last step. ", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("p", {
  style: {
    "font-size": "0.9em"
  }
}, " Create an account with us so we can track policies (and give you commissions for each policy sold). ", -1);

var _hoisted_24 = {
  style: {
    "display": "flex",
    "flex-direction": "row",
    "align-items": "center"
  }
};
var _hoisted_25 = {
  key: 3
};
var _hoisted_26 = {
  key: 0,
  style: {
    "color": "#dc3545"
  }
};
function ConnectToWooCommercevue_type_template_id_0d382231_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Tick = Object(vue_runtime_esm_bundler["w" /* resolveComponent */])("Tick");

  return Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])("div", ConnectToWooCommercevue_type_template_id_0d382231_hoisted_1, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("img", {
    src: $data.logoUrl,
    style: {
      "width": "100%",
      "max-width": "320px",
      "display": "block",
      "margin": "0 0 20px"
    }
  }, null, 8, ConnectToWooCommercevue_type_template_id_0d382231_hoisted_2), ConnectToWooCommercevue_type_template_id_0d382231_hoisted_3, Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_4, [_hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_12, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_13, [_hoisted_14, _hoisted_15, Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_16, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("a", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.onGetPermission && $options.onGetPermission.apply($options, arguments);
    }),
    style: Object(vue_runtime_esm_bundler["o" /* normalizeStyle */])([$data.hasAuth ? '' : 'background-color: red', {
      "cursor": "pointer",
      "background-color": "#ffd812",
      "color": "#111111",
      "border-color": "#ffd812",
      "margin": "5px 30px 5px 0",
      "display": "inline-block",
      "line-height": "22px",
      "font-weight": "600",
      "font-size": "15px",
      "text-align": "center",
      "text-decoration": "none",
      "padding": "8px 28px 8px",
      "border-radius": "4px",
      "border-style": "solid",
      "border-width": "2px",
      "font-family": "sans-serif"
    }])
  }, " Give us permission → ", 4), $data.hasAuth ? (Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createBlock */])(_component_Tick, {
    key: 0
  })) : Object(vue_runtime_esm_bundler["e" /* createCommentVNode */])("", true)])]), Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_17, [_hoisted_18, _hoisted_19, Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_20, [Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("a", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.onConnectToUs && $options.onConnectToUs.apply($options, arguments);
    }),
    style: {
      "cursor": "pointer",
      "background-color": "#ffd812",
      "color": "#111111",
      "border-color": "#ffd812",
      "margin": "5px 30px 5px 0",
      "display": "inline-block",
      "line-height": "22px",
      "font-weight": "600",
      "font-size": "15px",
      "text-align": "center",
      "text-decoration": "none",
      "padding": "8px 28px 8px",
      "border-radius": "4px",
      "border-style": "solid",
      "border-width": "2px",
      "font-family": "sans-serif"
    }
  }, " Set up products → "), $data.hasInsuranceProduct ? (Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createBlock */])(_component_Tick, {
    key: 0
  })) : Object(vue_runtime_esm_bundler["e" /* createCommentVNode */])("", true)])]), Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_21, [_hoisted_22, _hoisted_23, Object(vue_runtime_esm_bundler["g" /* createElementVNode */])("div", _hoisted_24, [!$options.isValidAccount && _ctx.accountStatus && !_ctx.accountStatus.hasAccount ? (Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])("a", {
    key: 0,
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.gotoDashBoard && $options.gotoDashBoard.apply($options, arguments);
    }),
    style: {
      "cursor": "pointer",
      "background-color": "#ffd812",
      "color": "#111111",
      "border-color": "#ffd812",
      "margin": "5px 30px 5px 0",
      "display": "inline-block",
      "line-height": "22px",
      "font-weight": "600",
      "font-size": "15px",
      "text-align": "center",
      "text-decoration": "none",
      "padding": "8px 28px 8px",
      "border-radius": "4px",
      "border-style": "solid",
      "border-width": "2px",
      "font-family": "sans-serif"
    }
  }, " Sort my Ship-Safely account → ")) : (Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])("a", {
    key: 1,
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.gotoLogin && $options.gotoLogin.apply($options, arguments);
    }),
    style: {
      "cursor": "pointer",
      "background-color": "#ffd812",
      "color": "#111111",
      "border-color": "#ffd812",
      "margin": "5px 30px 5px 0",
      "display": "inline-block",
      "line-height": "22px",
      "font-weight": "600",
      "font-size": "15px",
      "text-align": "center",
      "text-decoration": "none",
      "padding": "8px 28px 8px",
      "border-radius": "4px",
      "border-style": "solid",
      "border-width": "2px",
      "font-family": "sans-serif"
    }
  }, " Login to my Ship-Safely account → ")), $options.isValidAccount ? (Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createBlock */])(_component_Tick, {
    key: 2
  })) : Object(vue_runtime_esm_bundler["e" /* createCommentVNode */])("", true), !$options.isValidAccount && _ctx.accountStatus ? (Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])("div", _hoisted_25, [_ctx.accountStatus.hasCreditCard === false ? (Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])("div", _hoisted_26, " You are missing payment in your Ship-Safely vendor account. ")) : Object(vue_runtime_esm_bundler["e" /* createCommentVNode */])("", true)])) : Object(vue_runtime_esm_bundler["e" /* createCommentVNode */])("", true)])])])])]);
}
// CONCATENATED MODULE: ./src/views/ConnectToWooCommerce.vue?vue&type=template&id=0d382231

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Tick.vue?vue&type=template&id=29f4005b

var Tickvue_type_template_id_29f4005b_hoisted_1 = {
  style: {
    "background-color": "#18932B",
    "border-radius": "50%",
    "padding": "8px 10px",
    "color": "white",
    "font-size": "20px"
  }
};
function Tickvue_type_template_id_29f4005b_render(_ctx, _cache) {
  return Object(vue_runtime_esm_bundler["s" /* openBlock */])(), Object(vue_runtime_esm_bundler["f" /* createElementBlock */])("div", Tickvue_type_template_id_29f4005b_hoisted_1, " ✓ ");
}
// CONCATENATED MODULE: ./src/components/Tick.vue?vue&type=template&id=29f4005b

// CONCATENATED MODULE: ./src/components/Tick.vue

const script = {}


const Tick_exports_ = /*#__PURE__*/exportHelper_default()(script, [['render',Tickvue_type_template_id_29f4005b_render]])

/* harmony default export */ var Tick = (Tick_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/ConnectToWooCommerce.vue?vue&type=script&lang=js






// @ is an alias to /src


/* harmony default export */ var ConnectToWooCommercevue_type_script_lang_js = ({
  components: {
    Tick: Tick
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm_browser["d" /* mapState */])(["accountStatus"])), {}, {
    isValidAccount: function isValidAccount() {
      var _this = this;

      if (this.$store.state.accountStatus === null) {
        return null;
      }

      var res = Object.keys(this.$store.state.accountStatus).filter(function (key) {
        return !_this.$store.state.accountStatus[key];
      });
      return res.length <= 0;
    }
  }),
  data: function data() {
    return {
      authSuccess: null,
      showWarning: false,
      hasAuth: null,
      storeMode: null,
      hasInsuranceProduct: null,
      logoUrl: null,
      authUrl: null,
      loginUrl: null,
      APIToken: null
    };
  },
  methods: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm_browser["b" /* mapActions */])(["checkConsumerKey", "checkProduct", "createProduct", "checkAccount"])), {}, {
    testAuth: function testAuth() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.checkConsumerKey();

              case 2:
                _this2.hasAuth = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    testInsuranceProduct: function testInsuranceProduct() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.checkProduct();

              case 2:
                _this3.hasInsuranceProduct = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    testAccound: function testAccound() {
      var _this4 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.checkAccount();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onGetPermission: function onGetPermission() {
      var _this5 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                window.location.href = _this5.authUrl;

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onConnectToUs: function onConnectToUs() {
      var _this6 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this6.createProduct();

              case 2:
                _context5.next = 4;
                return _this6.testInsuranceProduct();

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    isDevMode: function isDevMode() {
      return this.storeMode === "dev";
    },
    gotoLogin: function gotoLogin() {
      window.open("".concat(this.loginUrl, "/login"), "_blank").focus();
    },
    gotoDashBoard: function gotoDashBoard() {
      window.open("".concat(this.loginUrl, "/v2/register?platform=WooCommerce&context=").concat(encodeURIComponent(window.location.hostname), "&token=").concat(encodeURIComponent(this.APIToken)), "_blank").focus();
    }
  }),
  mounted: function mounted() {
    var _this7 = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var current_url, store_url, host, callback_url, token;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this7.testAuth();

            case 2:
              _context6.next = 4;
              return _this7.testInsuranceProduct();

            case 4:
              _context6.next = 6;
              return _this7.testAccound();

            case 6:
              current_url = window.location.href;
              store_url = window.url.context;
              host = window.location.hostname;
              callback_url = window.url.callback;
              token = window.credential.token;
              _this7.APIToken = token;
              _this7.loginUrl = callback_url;
              _this7.logoUrl = window.url.plugin + "/ship-safely/admin/dist/logo-full-c.svg";
              _this7.authUrl = "".concat(store_url, "/wc-auth/v1/authorize?app_name=").concat(encodeURIComponent("Ship-Safely Shipping Protection"), "&scope=read_write&user_id=").concat(host, "&return_url=").concat(encodeURIComponent("".concat(current_url)), "&callback_url=").concat(encodeURIComponent("".concat(callback_url, "/api/v2/auth/woocommerce?store=").concat(store_url, "&context=").concat(host, "&token=").concat(token)));

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
});
// CONCATENATED MODULE: ./src/views/ConnectToWooCommerce.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/views/ConnectToWooCommerce.vue





const ConnectToWooCommerce_exports_ = /*#__PURE__*/exportHelper_default()(ConnectToWooCommercevue_type_script_lang_js, [['render',ConnectToWooCommercevue_type_template_id_0d382231_render]])

/* harmony default export */ var ConnectToWooCommerce = (ConnectToWooCommerce_exports_);
// CONCATENATED MODULE: ./src/router/index.js


var routes = [{
  path: "/",
  name: "authentication",
  component: ConnectToWooCommerce
}, {
  path: "/:pathMatch(.*)*",
  redirect: "/"
}];
var router = Object(vue_router_esm_bundler["a" /* createRouter */])({
  history: Object(vue_router_esm_bundler["b" /* createWebHashHistory */])(),
  routes: routes
});
/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/store/index.js





var API = axios_default.a.create({
  baseURL: window.url.API
});
API.defaults.headers.post["Content-Type"] = "application/json";
API.defaults.headers.Authorization = "Bearer " + window.credential.token;

if (false) {}

/* harmony default export */ var store = (Object(vuex_esm_browser["a" /* createStore */])({
  state: function state() {
    return {
      isShowSpinner: false,
      accountStatus: null,
      storeMode: "prod",
      testingUrl: null
    };
  },
  mutations: {
    showSpinner: function showSpinner(state, _ref) {
      var _ref$show = _ref.show,
          show = _ref$show === void 0 ? true : _ref$show;
      state.showSpinner = show;
    },
    setAccountStatus: function setAccountStatus(state, _ref2) {
      var status = _ref2.status;
      state.accountStatus = status;
    },
    setAppMode: function setAppMode(state, _ref3) {
      var _ref3$mode = _ref3.mode,
          mode = _ref3$mode === void 0 ? "prod" : _ref3$mode;
      state.storeMode = mode;
    },
    setTestingUrl: function setTestingUrl(state, _ref4) {
      var _ref4$url = _ref4.url,
          url = _ref4$url === void 0 ? null : _ref4$url;

      if (url) {
        console.log("/woocommerce/admin/vue/src/store/index.js:50", url);
        window.url.API = url + '/api';
        API.defaults.baseURL = window.url.API;
        window.url.callback = url;
        state.testingUrl = url;
      }
    }
  },
  actions: {
    checkAccount: function checkAccount(_ref5) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var commit, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref5.commit;
                _context.prev = 1;
                commit("showSpinner", {
                  show: true
                });
                commit("setAccountStatus", {
                  status: null
                });
                _context.next = 6;
                return API.post("/woocommerce/diagnosis/account", {
                  context: window.location.hostname
                });

              case 6:
                res = _context.sent;

                if (!(res && res.data)) {
                  _context.next = 11;
                  break;
                }

                commit("setAccountStatus", {
                  status: res.data
                });

                if (!(res.data.hasAccount && res.data.hasCreditCard)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", true);

              case 11:
                return _context.abrupt("return", false);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 17:
                _context.prev = 17;
                commit("showSpinner", {
                  show: false
                });
                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 14, 17, 20]]);
      }))();
    },
    checkConsumerKey: function checkConsumerKey(_ref6) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref6.commit;
                _context2.prev = 1;
                commit("showSpinner", {
                  show: true
                });
                _context2.next = 5;
                return API.post("/woocommerce/diagnosis/key", {
                  context: window.location.hostname
                });

              case 5:
                res = _context2.sent;

                if (!(res && res.data && res.data.connected)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", true);

              case 8:
                return _context2.abrupt("return", false);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 14:
                _context2.prev = 14;
                commit("showSpinner", {
                  show: false
                });
                return _context2.finish(14);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 11, 14, 17]]);
      }))();
    },
    checkProduct: function checkProduct(_ref7) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var commit, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref7.commit;
                _context3.prev = 1;
                commit("showSpinner", {
                  show: true
                });
                _context3.next = 5;
                return API.post("/woocommerce/diagnosis/product", {
                  context: window.location.hostname
                });

              case 5:
                res = _context3.sent;

                if (!(res && res.data && res.data.hasValidNanoInsurance === true)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", true);

              case 8:
                return _context3.abrupt("return", false);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);

              case 14:
                _context3.prev = 14;
                commit("showSpinner", {
                  show: false
                });
                return _context3.finish(14);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 11, 14, 17]]);
      }))();
    },
    createProduct: function createProduct(_ref8) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var commit, res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref8.commit;
                _context4.prev = 1;
                commit("showSpinner", {
                  show: true
                });
                _context4.next = 5;
                return API.post("/woocommerce/insurance", {
                  context: window.location.hostname,
                  plginUrl: window.url.plugin
                });

              case 5:
                res = _context4.sent;

                if (!(res && res.data && res.data.connected)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", true);

              case 8:
                return _context4.abrupt("return", false);

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);
                console.log(_context4.t0);

              case 14:
                _context4.prev = 14;
                commit("showSpinner", {
                  show: false
                });
                return _context4.finish(14);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 11, 14, 17]]);
      }))();
    }
  },
  modules: {}
}));
// CONCATENATED MODULE: ./src/main.js








document.addEventListener("DOMContentLoaded", function () {
  if (!window.nanoInstance) {
    window.nanoInstance = Object(vue_runtime_esm_bundler["c" /* createApp */])(App).use(store).use(src_router).mount("#app");
  }
});

/***/ }),

/***/ "a5ce":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ab33":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d73c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_779f6888_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a5ce");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_779f6888_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_779f6888_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ee81":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Spinner_vue_vue_type_style_index_0_id_2e3dd064_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ab33");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Spinner_vue_vue_type_style_index_0_id_2e3dd064_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Spinner_vue_vue_type_style_index_0_id_2e3dd064_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });