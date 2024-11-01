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
/******/ 	__webpack_require__.p = "/wp-content/plugins/nano-insurance/public/dist/";
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

/***/ "035d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Reminder_vue_vue_type_style_index_0_id_660c9d91_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("392d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Reminder_vue_vue_type_style_index_0_id_660c9d91_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Reminder_vue_vue_type_style_index_0_id_660c9d91_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "392d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=template&id=aac48e26

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Reminder = Object(vue_runtime_esm_bundler["l" /* resolveComponent */])("Reminder");

  return Object(vue_runtime_esm_bundler["h" /* openBlock */])(), Object(vue_runtime_esm_bundler["b" /* createBlock */])(_component_Reminder);
}
// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=aac48e26

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Reminder.vue?vue&type=template&id=660c9d91&scoped=true


var Remindervue_type_template_id_660c9d91_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(vue_runtime_esm_bundler["j" /* pushScopeId */])("data-v-660c9d91"), n = n(), Object(vue_runtime_esm_bundler["i" /* popScopeId */])(), n;
};

var _hoisted_1 = {
  key: 0,
  style: {
    "padding": "0px 15px",
    "margin": "30px 0px",
    "border-radius": "10px",
    "background-color": "#FFF3CD"
  }
};
var _hoisted_2 = {
  id: "reminder"
};
var _hoisted_3 = {
  "test-id": "reminder-wraper",
  style: {
    "display": "flex",
    "justify-content": "flex-end",
    "flex-wrap": "wrap"
  }
};
var _hoisted_4 = {
  style: {
    "width": "100%",
    "font-family": "'Source Sans Pro', 'Arial', sans-serif",
    "padding": "10px 10px 15px 10px",
    "color": "#111",
    "border-radius": "15px",
    "margin": "15px 0",
    "box-sizing": "border-box",
    "background": "#f6f6f6"
  }
};
var _hoisted_5 = {
  key: 0,
  style: {
    "display": "flex",
    "flex-direction": "row",
    "align-items": "center",
    "width": "100%",
    "margin": "0"
  }
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  style: {
    "text-align": "left",
    "flex": "1"
  }
};

var _hoisted_8 = /*#__PURE__*/Remindervue_type_template_id_660c9d91_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("span", {
    style: {
      "font-weight": "bold",
      "font-size": "14px",
      "margin": "0",
      "line-height": "1em"
    }
  }, "Shipping Protection", -1);
});

var _hoisted_9 = {
  style: {
    "font-size": "11px",
    "line-height": "10px",
    "font-weight": "400",
    "text-transform": "uppercase",
    "background": "#111",
    "color": "#f9f9f9",
    "border-radius": "20px",
    "padding": "3px 10px",
    "margin": "0 0 2px 5px"
  }
};
var _hoisted_10 = {
  id: "pricesymbol",
  style: {
    "margin-right": "5px"
  }
};

var _hoisted_11 = /*#__PURE__*/Remindervue_type_template_id_660c9d91_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("span", {
    style: {
      "display": "block",
      "font-size": "11px",
      "line-height": "11px"
    }
  }, "Covers lost, stolen or damaged in transit.", -1);
});

var _hoisted_12 = {
  style: {
    "display": "flex",
    "justify-content": "flex-start",
    "align-items": "center",
    "flex-wrap": "wrap",
    "width": "100%",
    "margin": "8px 0 0",
    "padding": "0"
  }
};

var _hoisted_13 = /*#__PURE__*/Remindervue_type_template_id_660c9d91_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("span", {
    style: {
      "padding": "0 5px",
      "line-height": "11px",
      "font-size": "10px",
      "margin": "0",
      "width": "auto"
    }
  }, "•", -1);
});

var _hoisted_14 = /*#__PURE__*/Remindervue_type_template_id_660c9d91_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("a", {
    href: "https://ship-safely.com/terms",
    target: "_blank",
    style: {
      "font-size": "10px",
      "color": "#4F9FCF",
      "padding": "0",
      "text-decoration": "none",
      "line-height": "10px",
      "width": "auto"
    }
  }, " Terms & Conditions. ", -1);
});

var _hoisted_15 = {
  key: 0,
  style: {
    "width": "60px"
  }
};

var _hoisted_16 = /*#__PURE__*/Remindervue_type_template_id_660c9d91_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("label", {
    class: "nano-insur_tgl-btn",
    "data-tg-off": "OFF",
    "data-tg-on": "ON",
    for: "nano_insurance_checkbox"
  }, null, -1);
});

var _hoisted_17 = ["src"];
var _hoisted_18 = {
  key: 1
};

var _hoisted_19 = /*#__PURE__*/Remindervue_type_template_id_660c9d91_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("div", {
    style: {
      "font-size": "14px",
      "font-weight": "600",
      "color": "#856404",
      "text-align": "center"
    }
  }, " Apologies, we are unable to insure cart amount that is larger than $5,000. ", -1);
});

var _hoisted_20 = [_hoisted_19];

var _hoisted_21 = /*#__PURE__*/Remindervue_type_template_id_660c9d91_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("p", {
    style: {
      "font-size": "10px",
      "line-height": "14px",
      "width": "100%",
      "margin": "0 0 20px",
      "padding": "0",
      "text-align": "right"
    }
  }, "This store has organised an offer for shipping protection insurance. By opting out of this offer you accept that the store is not liable for any goods that are Damaged, Lost, or Stolen throughout the shipping process.", -1);
});

var _hoisted_22 = {
  key: 0,
  style: {
    "width": "100%",
    "height": "100%",
    "position": "fixed",
    "z-index": "999",
    "background": "rgba(0,0,0,0.7)",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "left": "0",
    "top": "0"
  }
};
var _hoisted_23 = {
  style: {
    "background": "#f9f9f9",
    "border-radius": "20px",
    "padding": "20px",
    "width": "90%",
    "max-width": "350px",
    "text-align": "left",
    "font-family": "'Source Sans Pro', 'Arial', sans-serif"
  }
};
var _hoisted_24 = ["src"];

var _hoisted_25 = /*#__PURE__*/Remindervue_type_template_id_660c9d91_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("div", {
    style: {
      "font-size": "14px",
      "line-height": "1.4em",
      "margin": "0 0 15px"
    }
  }, " Ship-Safely is a policy designed for you and covers you in the event of your delivery being lost, stolen or damaged whilst in transit. Giving you an added level of comfort and security that your purchase is protected. ", -1);
});

function Remindervue_type_template_id_660c9d91_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isPluginEnabled === 'Active' ? (Object(vue_runtime_esm_bundler["h" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createElementBlock */])("div", _hoisted_1, [Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("div", _hoisted_2, [Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("div", _hoisted_3, [Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("div", _hoisted_4, [_ctx.hitPriceLimitation === false ? (Object(vue_runtime_esm_bundler["h" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createElementBlock */])("div", _hoisted_5, [Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("img", {
    src: $data.logoUrl,
    alt: "",
    style: {
      "width": "40px",
      "height": "40px",
      "margin": "0 10px 0 0"
    }
  }, null, 8, _hoisted_6), Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("div", _hoisted_7, [_hoisted_8, Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("span", _hoisted_9, [Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("span", _hoisted_10, Object(vue_runtime_esm_bundler["m" /* toDisplayString */])(_ctx.insuranceCurrency), 1), Object(vue_runtime_esm_bundler["f" /* createTextVNode */])(Object(vue_runtime_esm_bundler["m" /* toDisplayString */])(_ctx.insurancePrice), 1)]), _hoisted_11, Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("div", _hoisted_12, [Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("a", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.openPopup && $options.openPopup.apply($options, arguments);
    }),
    id: "nanoPopupButton",
    style: {
      "font-size": "10px",
      "color": "#4F9FCF",
      "padding": "0",
      "text-decoration": "none",
      "line-height": "11px",
      "width": "auto",
      "cursor": "pointer"
    }
  }, " What's this? "), _hoisted_13, _hoisted_14])]), !_ctx.showSpinner ? (Object(vue_runtime_esm_bundler["h" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createElementBlock */])("div", _hoisted_15, [Object(vue_runtime_esm_bundler["p" /* withDirectives */])(Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("input", {
    class: "nano-insur_tgl nano-insur_tgl-ios",
    id: "nano_insurance_checkbox",
    type: "checkbox",
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.onInsuranceStatusChange(_ctx.event);
    }),
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.isCartHasInsurance = $event;
    })
  }, null, 544), [[vue_runtime_esm_bundler["n" /* vModelCheckbox */], _ctx.isCartHasInsurance]]), _hoisted_16])) : (Object(vue_runtime_esm_bundler["h" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createElementBlock */])("img", {
    key: 1,
    src: $data.loadingUrl,
    style: {
      "width": "30px",
      "height": "30px"
    },
    alt: ""
  }, null, 8, _hoisted_17))])) : (Object(vue_runtime_esm_bundler["h" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createElementBlock */])("div", _hoisted_18, _hoisted_20))]), _hoisted_21])]), $data.showPopup ? (Object(vue_runtime_esm_bundler["h" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createElementBlock */])("div", _hoisted_22, [Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("div", _hoisted_23, [Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("img", {
    src: $data.minLogoUrl,
    style: {
      "width": "140px",
      "display": "block",
      "margin": "0 auto 20px"
    }
  }, null, 8, _hoisted_24), _hoisted_25, Object(vue_runtime_esm_bundler["e" /* createElementVNode */])("div", {
    id: "nanoPopupClose",
    style: {
      "background": "#000",
      "color": "#fbc705",
      "font-weight": "700",
      "border-radius": "40px",
      "line-height": "1em",
      "padding": "10px 15px",
      "text-align": "center",
      "margin": "20px 0 0",
      "cursor": "pointer"
    },
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.closePopup && $options.closePopup.apply($options, arguments);
    })
  }, " Got it. Thanks! ")])])) : Object(vue_runtime_esm_bundler["c" /* createCommentVNode */])("", true)])) : Object(vue_runtime_esm_bundler["c" /* createCommentVNode */])("", true);
}
// CONCATENATED MODULE: ./src/components/Reminder.vue?vue&type=template&id=660c9d91&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-browser.js
var vuex_esm_browser = __webpack_require__("5502");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Reminder.vue?vue&type=script&lang=js




/* harmony default export */ var Remindervue_type_script_lang_js = ({
  name: "Reminder",
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm_browser["c" /* mapState */])(["isCartHasInsurance", "isPluginEnabled", "insuranceId", "cartPrice", "insuranceCurrency", "insurancePrice", "cartInsurancePrice", "hitPriceLimitation", "variation", "showSpinner", "autoAddInsuranceToCart"])),
  watch: {
    "$store.state.insuranceId": function () {
      var _$storeStateInsuranceId = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(val) {
        var insurancePrice, cartInsurancePrice, diff;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getInsurancePrice({
                  insuranceId: val,
                  currency: this.insuranceCurrency
                });

              case 2:
                insurancePrice = _context.sent;
                _context.next = 5;
                return this.getCartInsurance(val);

              case 5:
                cartInsurancePrice = _context.sent;

                if (!(cartInsurancePrice > 0)) {
                  _context.next = 16;
                  break;
                }

                diff = Math.abs(insurancePrice - cartInsurancePrice);

                if (!(diff > cartInsurancePrice * 0.193333)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 11;
                return this.removeInsuranceFromCart();

              case 11:
                _context.next = 13;
                return this.addInsuranceToCart({
                  insuranceId: val,
                  variation: this.variation["variation_id"]
                });

              case 13:
                this.refreshForm();

              case 14:
                _context.next = 20;
                break;

              case 16:
                if (!(this.autoAddInsuranceToCart === "yes")) {
                  _context.next = 20;
                  break;
                }

                _context.next = 19;
                return this.addInsuranceToCart({
                  insuranceId: val,
                  variation: this.variation["variation_id"]
                });

              case 19:
                this.refreshForm();

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function $storeStateInsuranceId(_x) {
        return _$storeStateInsuranceId.apply(this, arguments);
      }

      return $storeStateInsuranceId;
    }()
  },
  data: function data() {
    return {
      storeMode: null,
      showPopup: false,
      logoUrl: window.url.plugin + "/ship-safely/public/dist/glyph-c.png",
      loadingUrl: window.url.plugin + "/ship-safely/public/dist/loading.gif",
      minLogoUrl: window.url.plugin + "/ship-safely/public/dist/logo-min-c.png"
    };
  },
  methods: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm_browser["b" /* mapActions */])(["addInsuranceToCart", "removeInsuranceFromCart", "getCartInsurance", "getInsurancePrice", "getStoreData"])), {}, {
    refreshForm: function refreshForm() {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.jQuery('body').trigger('update_checkout');

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onInsuranceStatusChange: function onInsuranceStatusChange() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this.isCartHasInsurance) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return _this.removeInsuranceFromCart();

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.next = 7;
                return _this.addInsuranceToCart({
                  insuranceId: _this.insuranceId,
                  variation: _this.variation['variation_id']
                });

              case 7:
                _this.refreshForm();

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    isDevMode: function isDevMode() {
      return this.storeMode === "dev";
    },
    openPopup: function openPopup() {
      this.showPopup = true;
    },
    closePopup: function closePopup() {
      this.showPopup = false;
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this2.getStoreData();

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
});
// CONCATENATED MODULE: ./src/components/Reminder.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Reminder.vue?vue&type=style&index=0&id=660c9d91&scoped=true&lang=css
var Remindervue_type_style_index_0_id_660c9d91_scoped_true_lang_css = __webpack_require__("035d");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/Reminder.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(Remindervue_type_script_lang_js, [['render',Remindervue_type_template_id_660c9d91_scoped_true_render],['__scopeId',"data-v-660c9d91"]])

/* harmony default export */ var Reminder = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=script&lang=js

/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: "App",
  components: {
    Reminder: Reminder
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/App.vue





const App_exports_ = /*#__PURE__*/exportHelper_default()(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var App = (App_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/OrderSender.vue?vue&type=template&id=1036cd97

function OrderSendervue_type_template_id_1036cd97_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_runtime_esm_bundler["h" /* openBlock */])(), Object(vue_runtime_esm_bundler["d" /* createElementBlock */])("div");
}
// CONCATENATED MODULE: ./src/components/OrderSender.vue?vue&type=template&id=1036cd97

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/OrderSender.vue?vue&type=script&lang=js




/* harmony default export */ var OrderSendervue_type_script_lang_js = ({
  name: "OrderSender",
  components: {},
  props: {
    orderid: String
  },
  methods: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm_browser["b" /* mapActions */])(["saveOrder"])),
  mounted: function mounted() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.saveOrder(_this.orderid);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./src/components/OrderSender.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/OrderSender.vue





const OrderSender_exports_ = /*#__PURE__*/exportHelper_default()(OrderSendervue_type_script_lang_js, [['render',OrderSendervue_type_template_id_1036cd97_render]])

/* harmony default export */ var OrderSender = (OrderSender_exports_);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/store/index.js





var API = axios_default.a.create({
  baseURL: window.url.API
});
var Plugin = axios_default.a.create({
  baseURL: "".concat(window.url.context, "/index.php/wp-json/nanoinsurance/v1")
}); // Credential is set in class-nano-insurance-public.php

API.defaults.headers.post["Content-Type"] = "application/json";
API.defaults.headers.Authorization = "Bearer " + window.credential.token;
API.defaults.headers.Context = window.credential.context;
Plugin.defaults.headers.post["Content-Type"] = "application/json";
Plugin.defaults.headers.common['X-WP-Nonce'] = window.credential.nonce; // this will make "global $current_user" valid in function 'wp_set_current_user', so REST API can work with logged in user's authentication.

if (false) {}

/* harmony default export */ var store = (Object(vuex_esm_browser["a" /* createStore */])({
  state: function state() {
    return {
      isShowSpinner: false,
      isCartHasInsurance: false,
      cartInsurancePrice: 0,
      isPluginEnabled: false,
      insuranceId: 0,
      cartPrice: 0,
      insurancePrice: 0,
      insuranceCurrency: 0,
      hitPriceLimitation: false,
      errors: {},
      storeMode: "prod",
      variation: "",
      testingUrl: null,
      autoAddInsuranceToCart: false
    };
  },
  mutations: {
    showSpinner: function showSpinner(state, _ref) {
      var _ref$show = _ref.show,
          show = _ref$show === void 0 ? true : _ref$show;
      state.showSpinner = show;
    },
    setVariation: function setVariation(state, _ref2) {
      var _ref2$variation = _ref2.variation,
          variation = _ref2$variation === void 0 ? null : _ref2$variation;
      state.variation = variation;
    },
    cartHasInsurance: function cartHasInsurance(state, _ref3) {
      var _ref3$has = _ref3.has,
          has = _ref3$has === void 0 ? true : _ref3$has;
      state.isCartHasInsurance = has;
    },
    setCartInsurancePrice: function setCartInsurancePrice(state, _ref4) {
      var _ref4$price = _ref4.price,
          price = _ref4$price === void 0 ? 0 : _ref4$price;
      state.cartInsurancePrice = price;
    },
    setCartPrice: function setCartPrice(state, _ref5) {
      var _ref5$price = _ref5.price,
          price = _ref5$price === void 0 ? 0 : _ref5$price;
      state.cartPrice = price;
    },
    setPriceLimitation: function setPriceLimitation(state, _ref6) {
      var _ref6$hit = _ref6.hit,
          hit = _ref6$hit === void 0 ? false : _ref6$hit;
      state.hitPriceLimitation = hit;
    },
    setInsurancePrice: function setInsurancePrice(state, _ref7) {
      var _ref7$price = _ref7.price,
          price = _ref7$price === void 0 ? 0 : _ref7$price;
      state.insurancePrice = price;
    },
    setInsuranceCurrency: function setInsuranceCurrency(state, _ref8) {
      var _ref8$currency = _ref8.currency,
          currency = _ref8$currency === void 0 ? 0 : _ref8$currency;
      state.insuranceCurrency = currency;
    },
    setInsuranceId: function setInsuranceId(state, _ref9) {
      var _ref9$insuranceId = _ref9.insuranceId,
          insuranceId = _ref9$insuranceId === void 0 ? 0 : _ref9$insuranceId;
      state.insuranceId = insuranceId;
    },
    setErrors: function setErrors(state, _ref10) {
      var errors = _ref10.errors;
      state.errors = errors;
    },
    setPluginStatus: function setPluginStatus(state, _ref11) {
      var _ref11$status = _ref11.status,
          status = _ref11$status === void 0 ? "Disabled" : _ref11$status;
      state.isPluginEnabled = status;
    },
    setAppMode: function setAppMode(state, _ref12) {
      var _ref12$mode = _ref12.mode,
          mode = _ref12$mode === void 0 ? "prod" : _ref12$mode;
      state.storeMode = mode;
    },
    setAutoAddInsuranceToCart: function setAutoAddInsuranceToCart(state, _ref13) {
      var _ref13$auto = _ref13.auto,
          auto = _ref13$auto === void 0 ? false : _ref13$auto;
      state.autoAddInsuranceToCart = auto;
    },
    setTestingUrl: function setTestingUrl(state, _ref14) {
      var _ref14$url = _ref14.url,
          url = _ref14$url === void 0 ? null : _ref14$url;

      if (url) {
        console.log("/woocommerce/public/vue/src/store/index.js:102", url);
        window.url.API = url + '/api';
        API.defaults.baseURL = window.url.API;
        window.url.callback = url;
        state.testingUrl = url;
      }
    }
  },
  actions: {
    getStoreData: function getStoreData(_ref15) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var commit, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref15.commit;
                commit("setErrors", {
                  errors: {}
                });
                _context.prev = 2;
                commit("showSpinner", {
                  show: true
                });
                _context.next = 6;
                return API.get("/woocommerce/store/".concat(encodeURIComponent(window.location.hostname)));

              case 6:
                res = _context.sent;

                if (!(res && res.data)) {
                  _context.next = 12;
                  break;
                }

                commit("setInsuranceId", {
                  insuranceId: res.data.insurance_id
                });
                commit("setInsuranceCurrency", {
                  currency: res.data.currency
                });
                commit("setAutoAddInsuranceToCart", {
                  auto: res.data.auto_enable
                });
                return _context.abrupt("return", commit("setPluginStatus", {
                  status: res.data.status
                }));

              case 12:
                commit("setPluginStatus", {
                  status: false
                });
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);
                console.log("/nano-insurance/WooCommerce/public/vue/src/store/index.js:72", _context.t0.response.data);
                commit("setErrors", {
                  errors: _context.t0.response.data
                }); // alert(e.response.data ? (e.response.data.message ? e.response.data.message : e.response.data) : "Unknown error.");

              case 19:
                _context.prev = 19;
                commit("showSpinner", {
                  show: false
                });
                return _context.finish(19);

              case 22:
                return _context.abrupt("return", false);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 15, 19, 22]]);
      }))();
    },
    getCartInsurance: function getCartInsurance(_ref16, insuranceId) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref16.commit;

                if (!(insuranceId <= 0)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", false);

              case 3:
                commit("setErrors", {
                  errors: {}
                });
                _context2.prev = 4;
                commit("showSpinner", {
                  show: true
                });
                _context2.next = 8;
                return Plugin.get("/cart/insurance/".concat(insuranceId));

              case 8:
                res = _context2.sent;

                if (res && res.data !== "") {
                  commit("setCartInsurancePrice", {
                    price: res.data
                  });
                  commit("cartHasInsurance", {
                    has: true
                  });
                } else {
                  commit("cartHasInsurance", {
                    has: false
                  });
                }

                return _context2.abrupt("return", res.data);

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);
                console.error("/nano-insurance/WooCommerce/public/vue/src/store/index.js:81", _context2.t0.response.data);
                commit("setErrors", {
                  errors: _context2.t0.response.data
                }); // alert(e.response.data ? (e.response.data.message ? e.response.data.message : e.response.data) : "Unknown error.");

              case 17:
                _context2.prev = 17;
                commit("showSpinner", {
                  show: false
                });
                return _context2.finish(17);

              case 20:
                return _context2.abrupt("return", false);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 13, 17, 20]]);
      }))();
    },
    getInsurancePrice: function getInsurancePrice(_ref17, _ref18) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var commit, _ref18$insuranceId, insuranceId, _ref18$currency, currency, res, price, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref17.commit;
                _ref18$insuranceId = _ref18.insuranceId, insuranceId = _ref18$insuranceId === void 0 ? 0 : _ref18$insuranceId, _ref18$currency = _ref18.currency, currency = _ref18$currency === void 0 ? "USD" : _ref18$currency;

                if (!(insuranceId <= 0)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", false);

              case 4:
                commit("setErrors", {
                  errors: {}
                });
                commit("setPriceLimitation", {
                  hit: false
                });
                _context3.prev = 6;
                commit("showSpinner", {
                  show: true
                });
                _context3.next = 10;
                return Plugin.get("/cart/price/".concat(insuranceId));

              case 10:
                res = _context3.sent;

                if (!(res && res.data !== "")) {
                  _context3.next = 26;
                  break;
                }

                commit("setCartPrice", {
                  price: res.data
                });
                _context3.next = 15;
                return API.post("/price", {
                  amount: res.data,
                  currency: currency
                });

              case 15:
                price = _context3.sent;

                if (!(price && price.data)) {
                  _context3.next = 25;
                  break;
                }

                _context3.next = 19;
                return Plugin.post("/cart/insuranceprice", {
                  id: insuranceId,
                  price: price.data.price,
                  currency: price.data.currency
                });

              case 19:
                result = _context3.sent;
                commit("setInsuranceCurrency", {
                  currency: price.data.currency
                });

                if (!(result && result.data)) {
                  _context3.next = 25;
                  break;
                }

                commit("setInsurancePrice", {
                  price: result.data.display_price
                });
                commit("setVariation", {
                  variation: result.data
                });
                return _context3.abrupt("return", result.data.display_price);

              case 25:
                return _context3.abrupt("return", 0);

              case 26:
                commit("setCartPrice", {
                  price: 0
                });
                commit("setInsurancePrice", {
                  price: 0
                });
                commit("setInsuranceCurrency", {
                  currency: ""
                });
                _context3.next = 36;
                break;

              case 31:
                _context3.prev = 31;
                _context3.t0 = _context3["catch"](6);
                console.error("/nano-insurance/WooCommerce/public/vue/src/store/index.js:81", _context3.t0.response.data);

                if (_context3.t0.response.status === 404) {
                  commit("setPriceLimitation", {
                    hit: true
                  });
                }

                commit("setErrors", {
                  errors: _context3.t0.response.data
                }); // alert(e.response.data ? (e.response.data.message ? e.response.data.message : e.response.data) : "Unknown error.");

              case 36:
                _context3.prev = 36;
                commit("showSpinner", {
                  show: false
                });
                return _context3.finish(36);

              case 39:
                return _context3.abrupt("return", false);

              case 40:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[6, 31, 36, 39]]);
      }))();
    },
    removeInsuranceFromCart: function removeInsuranceFromCart(_ref19) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var commit, res, store;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref19.commit;
                commit("setErrors", {
                  errors: {}
                });
                _context4.prev = 2;
                commit("showSpinner", {
                  show: true
                });
                _context4.next = 6;
                return API.get("/woocommerce/store/".concat(encodeURIComponent(window.location.hostname)));

              case 6:
                res = _context4.sent;
                store = res.data;
                _context4.next = 10;
                return Plugin.delete("/cart/insurance/".concat(store.insurance_id), {
                  id: store.insurance_id
                });

              case 10:
                res = _context4.sent;
                return _context4.abrupt("return", true);

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](2);
                console.error("/nano-insurance/WooCommerce/public/vue/src/store/index.js:81", _context4.t0.response.data);
                commit("setErrors", {
                  errors: _context4.t0.response.data
                });
                commit("cartHasInsurance", {
                  has: true
                }); // alert(e.response.data ? (e.response.data.message ? e.response.data.message : e.response.data) : "Unknown error.");

              case 19:
                _context4.prev = 19;
                commit("showSpinner", {
                  show: false
                });
                commit("cartHasInsurance", {
                  has: false
                });
                return _context4.finish(19);

              case 23:
                return _context4.abrupt("return", false);

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 14, 19, 23]]);
      }))();
    },
    addInsuranceToCart: function addInsuranceToCart(_ref20, _ref21) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var commit, insuranceId, variation;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref20.commit;
                insuranceId = _ref21.insuranceId, variation = _ref21.variation;
                commit("setErrors", {
                  errors: {}
                });
                _context5.prev = 3;
                commit("showSpinner", {
                  show: true
                });
                _context5.next = 7;
                return Plugin.put("/cart/insurance", {
                  variation: variation,
                  id: insuranceId
                });

              case 7:
                return _context5.abrupt("return", true);

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](3);
                console.error("/nano-insurance/WooCommerce/public/vue/src/store/index.js:81", _context5.t0.response.data);
                commit("setErrors", {
                  errors: _context5.t0.response.data
                });
                commit("cartHasInsurance", {
                  has: false
                }); // alert(e.response.data ? (e.response.data.message ? e.response.data.message : e.response.data) : "Unknown error.");

              case 15:
                _context5.prev = 15;
                commit("showSpinner", {
                  show: false
                });
                commit("cartHasInsurance", {
                  has: true
                });
                return _context5.finish(15);

              case 19:
                return _context5.abrupt("return", false);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[3, 10, 15, 19]]);
      }))();
    },
    saveOrder: function saveOrder(_ref22, orderId) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var commit;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref22.commit;
                commit("setErrors", {
                  errors: {}
                });
                _context6.prev = 2;
                commit("showSpinner", {
                  show: true
                });
                _context6.next = 6;
                return API.post("/woocommerce/order", {
                  context: window.location.hostname,
                  id: orderId
                });

              case 6:
                _context6.next = 12;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](2);
                console.error("/nano-insurance/WooCommerce/public/vue/src/store/index.js:81", _context6.t0.response.data);
                commit("setErrors", {
                  errors: _context6.t0.response.data
                }); // alert(e.response.data ? (e.response.data.message ? e.response.data.message : e.response.data) : "Unknown error.");

              case 12:
                _context6.prev = 12;
                commit("showSpinner", {
                  show: false
                });
                return _context6.finish(12);

              case 15:
                return _context6.abrupt("return", false);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[2, 8, 12, 15]]);
      }))();
    }
  },
  modules: {}
}));
// CONCATENATED MODULE: ./src/main.js









Object(vue_runtime_esm_bundler["a" /* createApp */])(App).use(store).mount("#nano_reminder");
var mountEl = document.querySelector("#nano_order_completed");
mountEl && Object(vue_runtime_esm_bundler["a" /* createApp */])(OrderSender, Object(objectSpread2["a" /* default */])({}, mountEl.dataset)) // pass order id from dom to OrderSender component
.use(store).mount("#nano_order_completed");

/***/ })

/******/ });