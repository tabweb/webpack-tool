webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(59);
} else {
  module.exports = require('./dist/react-hot-loader.development.js');
}


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(15);

var _reducer = __webpack_require__(111);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var store = (0, _redux.createStore)(_reducer2.default);
console.log(store.getState(), "store");
var _default = store;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, "store", "D:/webpack-tool/webpack-react/src/redux/store.js");
  reactHotLoader.register(_default, "default", "D:/webpack-tool/webpack-react/src/redux/store.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _counter = __webpack_require__(112);

var _counter2 = _interopRequireDefault(_counter);

var _redux = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

// export default function combineReducers(state = {}, action) {
//   return {
//     counter: counter(state.counter, action)
//   };
// }

var _default = (0, _redux.combineReducers)({ counter: _counter2.default });

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:/webpack-tool/webpack-react/src/redux/reducer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _counter = __webpack_require__(113);

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

/*
* 初始化state
 */

var initState = {
  count: 0
};
/*
* reducer
 */
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _counter.INCREMENT:
      return {
        count: state.count + 1
      };
    case _counter.DECREMENT:
      return {
        count: state.count - 1
      };
    case _counter.RESET:
      return { count: 0 };
    default:
      return state;
  }
}
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initState, "initState", "D:/webpack-tool/webpack-react/src/redux/reducers/counter.js");
  reactHotLoader.register(reducer, "reducer", "D:/webpack-tool/webpack-react/src/redux/reducers/counter.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.decrement = decrement;
exports.reset = reset;

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var INCREMENT = exports.INCREMENT = "counter/INCREMENT";
var DECREMENT = exports.DECREMENT = "counter/DECREMENT";
var RESET = exports.RESET = "counter/RESET";

function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function reset() {
  return { type: RESET };
}
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INCREMENT, "INCREMENT", "D:/webpack-tool/webpack-react/src/redux/actions/counter.js");
  reactHotLoader.register(DECREMENT, "DECREMENT", "D:/webpack-tool/webpack-react/src/redux/actions/counter.js");
  reactHotLoader.register(RESET, "RESET", "D:/webpack-tool/webpack-react/src/redux/actions/counter.js");
  reactHotLoader.register(increment, "increment", "D:/webpack-tool/webpack-react/src/redux/actions/counter.js");
  reactHotLoader.register(decrement, "decrement", "D:/webpack-tool/webpack-react/src/redux/actions/counter.js");
  reactHotLoader.register(reset, "reset", "D:/webpack-tool/webpack-react/src/redux/actions/counter.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _hello = __webpack_require__(58);

var _hello2 = _interopRequireDefault(_hello);

var _index = __webpack_require__(60);

var _index2 = _interopRequireDefault(_index);

var _reactHotLoader = __webpack_require__(0);

var _reactRedux = __webpack_require__(39);

var _store = __webpack_require__(110);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); // document.getElementById("app").innerHTML = "Webpack works";

/*使用es6的箭头函数*/
// var func = str => {
//   document.getElementById("app").innerHTML = str;
// };
// func("我现在在使用Babel!");

/*初始化*/
renderWithHotReload((0, _index2.default)());

/*热更新*/
if (false) {
  module.hot.accept("./router/index", function () {
    var getRouter = require("./router/index").default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  _reactDom2.default.render(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: _store2.default },
      RootElement
    )
  ), document.getElementById("app"));
}

// module.hot.accept(),如下。当模块更新的时候，通知index.js
// if (module.hot) {
//   module.hot.accept();
// }

// ReactDom.render(RootRouter(), document.getElementById("app"));

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderWithHotReload, "renderWithHotReload", "D:/webpack-tool/webpack-react/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_Component) {
  _inherits(Hello, _Component);

  function Hello() {
    _classCallCheck(this, Hello);

    return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
  }

  _createClass(Hello, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        "Hello,React!"
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Hello;
}(_react.Component);

var _default = Hello;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Hello, "Hello", "D:/webpack-tool/webpack-react/src/component/hello.js");
  reactHotLoader.register(_default, "default", "D:/webpack-tool/webpack-react/src/component/hello.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(1)),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},AppContainer=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,e.apply(this,arguments))}return inherits(t,e),t.prototype.render=function(){return React.Children.only(this.props.children)},t}(React.Component),hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,t){return e===t},setConfig=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig;


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(30);

var _index = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bundle-loader?lazy&name=index!page/index\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _index2 = _interopRequireDefault(_index);

var _counter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bundle-loader?lazy&name=counter!page/counter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _counter2 = _interopRequireDefault(_counter);

var _Bundle = __webpack_require__(88);

var _Bundle2 = _interopRequireDefault(_Bundle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Index from "page/index";
// import Counter from "page/counter";
//
// 按需加载所有页面只生成了一个build.js,当我们首屏加载的时候，就会很慢。因为他也下载了别的页面的js了哦


// const Home = () => {
//   return <div>this is home 6464646</div>;
// };
var Loading = function Loading() {
  return _react2.default.createElement(
    "div",
    null,
    "Loading..."
  );
};

var createComponent = function createComponent(component) {
  return function (props) {
    return _react2.default.createElement(
      _Bundle2.default,
      { load: component },
      function (Component) {
        return Component ? _react2.default.createElement(Component, props) : _react2.default.createElement(Loading, null);
      }
    );
  };
};

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      count: 10
    };
    return _this;
  }

  _createClass(Home, [{
    key: "add",
    value: function add() {
      this.setState({ count: ++this.state.count });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "p",
          null,
          "\u6211\u6539\u53D8\u4E86\u6211\u7684\u4EE4\u5C45\u4E0D\u6539\u53D8132323313"
        ),
        _react2.default.createElement(
          "p",
          null,
          "this is count ",
          this.state.count
        ),
        _react2.default.createElement(
          "button",
          { onClick: this.add.bind(this) },
          "add"
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Home;
}(_react.Component);

var Page = function Page() {
  return _react2.default.createElement(
    "div",
    null,
    "this is page \u5C40\u90E8\u5237\u6D17"
  );
};

var getRouter = function getRouter() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" },
            "\u9996\u9875"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/page" },
            "Page"
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/page1" },
          "@page1"
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/counter" },
            "counter"
          )
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: Home }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/page", component: Page }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/page1", component: createComponent(_index2.default) }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/counter", component: createComponent(_counter2.default) })
      )
    )
  );
};

var _default = getRouter;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "D:/webpack-tool/webpack-react/src/router/index.js");
  reactHotLoader.register(createComponent, "createComponent", "D:/webpack-tool/webpack-react/src/router/index.js");
  reactHotLoader.register(Home, "Home", "D:/webpack-tool/webpack-react/src/router/index.js");
  reactHotLoader.register(Page, "Page", "D:/webpack-tool/webpack-react/src/router/index.js");
  reactHotLoader.register(getRouter, "getRouter", "D:/webpack-tool/webpack-react/src/router/index.js");
  reactHotLoader.register(_default, "default", "D:/webpack-tool/webpack-react/src/router/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bundle = function (_Component) {
  _inherits(Bundle, _Component);

  function Bundle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bundle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bundle.__proto__ || Object.getPrototypeOf(Bundle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bundle, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.load(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.load !== this.props.load) {
        this.load(nextProps);
      }
    }
  }, {
    key: "load",
    value: function load(props) {
      var _this2 = this;

      this.setState({
        mod: null
      });
      props.load(function (mod) {
        _this2.setState({
          // handle both es imports and cjs
          mod: mod.default ? mod.default : mod
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.state.mod);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Bundle;
}(_react.Component);

var _default = Bundle;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bundle, "Bundle", "D:/webpack-tool/webpack-react/src/router/Bundle.js");
  reactHotLoader.register(_default, "default", "D:/webpack-tool/webpack-react/src/router/Bundle.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ })

},[46]);
//# sourceMappingURL=app.f83eaa05f0632a6288e2.js.map