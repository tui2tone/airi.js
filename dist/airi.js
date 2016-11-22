(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = require('./instance');

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Airi = _instance2.default;
exports.default = _instance2.default;

},{"./instance":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require("./template");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
	elm: "app",
	data: {},
	methods: {},
	template: ""
};

var Instance = function () {
	function Instance() {
		var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

		_classCallCheck(this, Instance);

		/* Pass Configuration to Instance */
		this.data = config.data;
		this.methods = config.methods;
		this.elm = document.getElementById(config.elm);
		this.template = config.template;

		/* Initial a instance */
		this.init();
	}

	_createClass(Instance, [{
		key: "init",
		value: function init() {

			/* Render */
			this.render();
		}
	}, {
		key: "render",
		value: function render() {
			/* render a template */
			this.elm.innerHTML = (0, _template.RenderTemplate)(this.template, this.data);
		}
	}]);

	return Instance;
}();

exports.default = Instance;

},{"./template":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RenderTemplate = RenderTemplate;
function RenderTemplate(template, data) {
	var getDataBinding = template.match(/{{(.*)}}/);
	var rendered = template.replace(getDataBinding[0], data[getDataBinding[1]]);

	return rendered;
}

},{}]},{},[1]);
