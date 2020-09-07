(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue-clickoutside"));
	else if(typeof define === 'function' && define.amd)
		define("ElSelect", ["vue-clickoutside"], factory);
	else if(typeof exports === 'object')
		exports["ElSelect"] = factory(require("vue-clickoutside"));
	else
		root["ElSelect"] = factory(root["VueClickoutside"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_35__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElSelect = __webpack_require__(15);
	var ElOption = __webpack_require__(14);
	var ElOptionGroup = __webpack_require__(13);

	module.exports = {
	  ElSelect: ElSelect,
	  ElOption: ElOption,
	  ElOptionGroup: ElOptionGroup,
	  install: function install(Vue) {
	    Vue.component(ElSelect.name, ElSelect);
	    Vue.component(ElOption.name, ElOption);
	    Vue.component(ElOptionGroup.name, ElOptionGroup);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(5)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(23);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.3.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(26)
	  , IE8_DOM_DEFINE = __webpack_require__(31)
	  , toPrimitive    = __webpack_require__(33)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{\n    'is-disabled': disabled,\n    'is-readonly': readonly,\n    'is-multiple': multiple\n  }\" class=element-core-input> <template v-if=multiple> <el-core-tag @remove=tags.$remove(tag) v-for=\"tag in tags\" :data=tag> </el-core-tag> </template> <input v-el:input=\"\" v-model=model :type=\"type || 'text'\" :disabled=disabled :readonly=readonly :placeholder=placeholder :number=\"type === 'number'\" @blur=\"$dispatch('e-blur')\" @focus=handleFocus @keydown.down.prevent=\"$dispatch('e-press-down')\" @keydown.up.prevent=\"$dispatch('e-press-up')\" @keyup.enter=\"$dispatch('e-press-enter')\" @keydown.8=handleDelete @keydown.esc=\"$dispatch('e-press-esc')\" class=element-core-input__original> <slot name=icon></slot> </div>";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<button class=element-core-tag> <span v-text=data></span> <span v-if=_events.remove @click.stop=\"$dispatch('remove')\" class=element-core-tag__button>&times;</span> </button>";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<ul :class=\"{ 'is-hastitle': title }\" class=element-optiongroup> <li v-if=title v-show=!hideTitle v-text=title class=element-optiongroup__title></li> <li v-show=!hideList class=element-optiongroup__content> <slot></slot> </li> </ul>";

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"{\n    'is-disabled': disabled,\n    'is-selected': selected,\n    'is-hover': hit\n  }\" @mouseup=handleClick class=element-option> <span v-text=label></span> <span v-text=remark class=element-option__remark> </span> </li>";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{ 'is-search': searchModel || model }\" v-element-clickoutside=\"showDropdown = false\" class=element-select> <el-core-input v-if=\"type !== 'multiple'\" :class=\"{ 'is-active': active }\" @click=\"showDropdown = !showDropdown\" :placeholder=dislayPlaceholder :model.sync=model :disabled=disabled @e-press-down=\"fetchOption('next')\" @e-press-up=\"fetchOption('prev')\" @e-press-enter=updateModel @e-press-delete=removeTag :multiple=\"type === 'multiple'\" :readonly=\"type !== 'multiple' && type !== 'input'\"> </el-core-input> <el-core-input v-else=\"\" :class=\"{ 'is-active': active }\" @click=\"showDropdown = !showDropdown\" :placeholder=dislayPlaceholder :tags=model :model.sync=searchModel :disabled=disabled @e-press-down=\"fetchOption('next')\" @e-press-up=\"fetchOption('prev')\" @e-press-enter=updateModel @e-press-delete=removeTag :multiple=\"type === 'multiple'\" :readonly=\"type !== 'multiple' && type !== 'input'\"> </el-core-input> <span slot=icon :class=\"{ 'is-up': active }\" class=element-select__chevron> </span> <ul v-show=active class=element-dropdown> <el-core-input v-if=\"type === 'search'\" :placeholder=searchPlaceholder :model.sync=searchModel @e-press-down=\"fetchOption('next')\" @e-press-up=\"fetchOption('prev')\" @e-press-enter=updateModel class=element-dropdown__search> </el-core-input> <div v-el:option-wrap=\"\" class=element-dropdown__option> <slot></slot> <div v-show=empty class=element-dropdown__empty>无搜索结果</div> </div> </ul> </div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(20)
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(22)
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(18)
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(19)
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tag = __webpack_require__(17);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCoreInput',

	  components: {
	    ElCoreTag: _tag2.default
	  },

	  props: {
	    placeholder: String,
	    disabled: Boolean,
	    readonly: Boolean,
	    multiple: Boolean,
	    tags: Array,
	    model: [String, null],
	    type: String
	  },

	  methods: {
	    handleFocus: function handleFocus() {
	      if (!this.readonly) {
	        this.$els.input.select();
	      }
	      this.$dispatch('e-focus');
	    },
	    handleDelete: function handleDelete() {
	      if (this.model && this.model.trim().length !== 0) {
	        return;
	      }

	      this.$dispatch('e-press-delete');
	    }
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  name: 'ElCoreTag',

	  props: {
	    data: [String, Number]
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'el-option-group',
	  props: {
	    title: String,
	    hideTitle: {
	      type: Boolean,
	      coerce: function coerce(value) {
	        return Boolean(value);
	      }
	    },
	    hideList: {
	      type: Boolean,
	      coerce: function coerce(value) {
	        return Boolean(value);
	      }
	    }
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(3);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _events;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElOption',

	  props: {
	    label: String,
	    disabled: Boolean,
	    value: {
	      required: true,
	      type: String
	    },
	    remark: String
	  },

	  created: function created() {
	    this.label = this.label || this.value;
	    this.$dispatch('element.option.created', this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$dispatch('element.option.destroy', this);
	  },
	  data: function data() {
	    return {
	      hit: false,
	      selected: false
	    };
	  },


	  events: (_events = {}, (0, _defineProperty3.default)(_events, 'element.select.current', function elementSelectCurrent(component) {
	    this.hit = component.value === this.value;
	  }), (0, _defineProperty3.default)(_events, 'element.select.selected', function elementSelectSelected(model) {
	    if (Array.isArray(model)) {
	      this.selected = model.indexOf(this.value) > -1;
	    } else {
	      this.selected = model === this.value;
	    }
	  }), _events),

	  methods: {
	    handleClick: function handleClick() {
	      if (this.disabled) {
	        return;
	      }

	      this.$dispatch('element.option.click', this);
	    }
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty2 = __webpack_require__(3);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _events;

	var _input = __webpack_require__(16);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  name: 'ElSelect',

	  props: {
	    placeholder: String,
	    hintPlaceholder: String,
	    type: {
	      type: String,
	      default: 'normal',
	      validator: function validator(value) {
	        return ['multiple', 'normal', 'search', 'input'].indexOf(value) > -1;
	      }
	    },
	    disabled: Boolean,
	    searchPlaceholder: {
	      type: String,
	      default: '搜索'
	    },
	    searchModel: {
	      type: String,
	      twoWay: true
	    },
	    model: {
	      default: function _default() {
	        return [];
	      },

	      twoWay: true,
	      required: true
	    }
	  },

	  created: function created() {
	    this.originalOptions = [];
	  },


	  computed: {
	    active: function active() {
	      return !this.disabled && this.showDropdown;
	    },
	    dislayPlaceholder: function dislayPlaceholder() {
	      var placeholder = this.model.length ? '' : this.placeholder;
	      if (this.focus) {
	        return this.hintPlaceholder || placeholder;
	      }
	      return placeholder;
	    },
	    empty: function empty() {
	      return this.currentOptions.length <= 0;
	    },
	    searchBoxHeight: function searchBoxHeight() {
	      return this.type === 'search' ? 30 : 0;
	    }
	  },

	  components: {
	    ElCoreInput: _input2.default
	  },

	  directives: {
	    ElementClickoutside: __webpack_require__(35)
	  },

	  data: function data() {
	    return {
	      showDropdown: false,
	      current: '',
	      focus: false,
	      currentOptions: []
	    };
	  },


	  watch: {
	    showDropdown: function showDropdown(sure) {
	      if (!sure) {
	        this.searchModel = '';
	        return;
	      }

	      if (this.$els.input) {
	        this.$els.input.focus();
	      }
	    },
	    searchModel: function searchModel(sure) {
	      if (!sure) {
	        return;
	      }

	      var firstMatchOption = this.currentOptions[0];

	      if (firstMatchOption) {
	        this.current = firstMatchOption;
	      } else {
	        this.current = null;
	      }
	      this.showDropdown = true;
	    },
	    current: function current(component) {
	      if (!component) {
	        return;
	      }

	      this.$broadcast('element.select.current', this.current);

	      if (component.$el) {
	        this.$els.optionWrap.scrollTop = component.$el.offsetTop - this.searchBoxHeight;
	      }
	    },
	    model: function model(value) {
	      this.$dispatch('change', value);
	      this.$broadcast('element.select.selected', value);
	    }
	  },

	  events: (_events = {}, (0, _defineProperty3.default)(_events, 'element.option.created', function elementOptionCreated(component) {
	    this.currentOptions.push(component);

	    var result = this.originalOptions.find(function (option) {
	      return option.value === component.value;
	    });

	    if (!result) {
	      this.originalOptions.push(component);
	    }
	  }), (0, _defineProperty3.default)(_events, 'element.option.destroy', function elementOptionDestroy(component) {
	    this.currentOptions.$remove(component);
	  }), (0, _defineProperty3.default)(_events, 'element.option.click', function elementOptionClick(component) {
	    this.current = component;
	    this.updateModel();
	  }), _events),

	  methods: {
	    fetchOption: function fetchOption() {
	      var _this = this;

	      var type = arguments.length <= 0 || arguments[0] === undefined ? 'next' : arguments[0];

	      if (!this.originalOptions.length || !this.currentOptions.length) {
	        return;
	      }

	      var index = this.originalOptions.indexOf(this.current);
	      var len = this.originalOptions.length;

	      if (type === 'next') {
	        if (index < len - 1) {
	          this.current = this.originalOptions[index + 1];
	        } else {
	          this.current = this.originalOptions[0];
	        }
	      } else {
	        if (index > 0) {
	          this.current = this.originalOptions[index - 1];
	        } else {
	          this.current = this.originalOptions[len - 1];
	        }
	      }

	      this.showDropdown = true;

	      var result = this.currentOptions.find(function (option) {
	        return option.value === _this.current.value;
	      });

	      if (this.current.disabled || !result) {
	        this.fetchOption(type);
	        return;
	      }
	    },
	    removeTag: function removeTag() {
	      if (this.searchModel.trim().length !== 0) {
	        return;
	      }

	      if (this.type !== 'multiple') {
	        this.model = '';
	      } else {
	        this.model.pop();
	      }
	    },
	    updateModel: function updateModel() {
	      this.searchModel = '';

	      if (!this.current) {
	        return;
	      }

	      if (this.type !== 'multiple') {
	        this.showDropdown = false;
	        this.model = this.current.value;
	        return;
	      }

	      if (this.model.indexOf(this.current.value) < 0) {
	        this.model.push(this.current.value);
	      } else {
	        this.model.$remove(this.current.value);
	      }
	    }
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	var $Object = __webpack_require__(4).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(4)
	  , ctx       = __webpack_require__(27)
	  , hide      = __webpack_require__(30)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(7)
	  , createDesc = __webpack_require__(32);
	module.exports = __webpack_require__(1) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(1) && !__webpack_require__(5)(function(){
	  return Object.defineProperty(__webpack_require__(28)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(2);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(29);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(1), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }
/******/ ])
});
;