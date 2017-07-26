webpackJsonp([0],{

/***/ 1064:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tableDeviceControl":"src-components-DeviceControls-DeviceControls-style__tableDeviceControl__3nZ","list":"src-components-DeviceControls-DeviceControls-style__list__1FW"};

/***/ }),

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NotFound__ = __webpack_require__(1066);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__NotFound__["a" /* default */]);

/***/ }),

/***/ 1066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_style_css__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NotFound_style_css__);





var NotFound = function NotFound() {

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_3__NotFound_style_css___default.a.notFound },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, { title: 'Oops!' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'The page you are looking for was not found.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      '( Hint: try ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Link */],
        { to: '/' },
        ' this one.'
      ),
      ' ;-)'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (NotFound);

/***/ }),

/***/ 1067:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"notFound":"src-components-NotFound-NotFound-style__notFound__13f"};

/***/ }),

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_logOnlyInProduction__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_logOnlyInProduction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_logOnlyInProduction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_redux_middleware_errorDisplay__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules__ = __webpack_require__(1075);

/* eslint-disable arrow-body-style */








function configureStore(preloadedState, history) {

  var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware___default.a(), __WEBPACK_IMPORTED_MODULE_5_src_redux_middleware_errorDisplay__["b" /* default */], __WEBPACK_IMPORTED_MODULE_3_react_router_redux__["routerMiddleware"](history)];

  // only log redux actions in development
  if (true) {}

  // logger needs to be last
  // uncomment if needed
  // middleware.push(require('redux-logger').createLogger())

  // https://github.com/zalmoxisus/redux-devtools-extension
  // https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f

  var enhancer = __WEBPACK_IMPORTED_MODULE_0_redux__["compose"](__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middleware), __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_logOnlyInProduction__["devToolsEnhancer"]());

  var store = __WEBPACK_IMPORTED_MODULE_0_redux__["createStore"](__WEBPACK_IMPORTED_MODULE_6__modules__["a" /* default */], preloadedState, enhancer);

  return store;
}

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request__ = __webpack_require__(1200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__init__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui__ = __webpack_require__(1201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__device_type__ = __webpack_require__(385);











var rootReducer = __WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"]({
  env: __WEBPACK_IMPORTED_MODULE_3__env__["a" /* default */],
  request: __WEBPACK_IMPORTED_MODULE_4__request__["a" /* default */],
  init: __WEBPACK_IMPORTED_MODULE_5__init__["a" /* default */],
  ui: __WEBPACK_IMPORTED_MODULE_6__ui__["a" /* default */],
  device: __WEBPACK_IMPORTED_MODULE_7__device__["c" /* default */],
  deviceType: __WEBPACK_IMPORTED_MODULE_8__device_type__["a" /* default */],

  // redux-form
  form: __WEBPACK_IMPORTED_MODULE_2_redux_form__["a" /* reducer */],
  // react-router-redux
  routing: __WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerReducer"]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */

// Empty reducer for now since we probably don't want to change
// it in the browser

var initialState = {};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  return state;
}

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */

// Empty reducer for now since we probably don't want to change
// it in the browser

var initialState = {
  userAgent: ''
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  return state;
}

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CLOSE_SIDEBAR */
/* unused harmony export OPEN_SIDEBAR */
/* unused harmony export START_LOADING */
/* unused harmony export STOP_LOADING */
/* unused harmony export initialState */
/* unused harmony export startLoading */
/* unused harmony export stopLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_redux_middleware_errorDisplay__ = __webpack_require__(425);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


// import Debug from 'debug'
// const log = Debug('citrus:redux:modules:ui')


// ACTION TYPES
var CLOSE_SIDEBAR = 'citrus/ui/CLOSE_SIDEBAR';
var OPEN_SIDEBAR = 'citrus/ui/OPEN_SIDEBAR';

var START_LOADING = 'citrus/ui/START_LOADING';
var STOP_LOADING = 'citrus/ui/STOP_LOADING';

// MODEL


var initialState = {
  sidebarOpen: true,
  error: null,
  // Manual option to show loading indicator if needed
  showLoading: false

  // REDUCER
};function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case __WEBPACK_IMPORTED_MODULE_0_src_redux_middleware_errorDisplay__["a" /* DISPLAY_ERROR */]:
      return _extends({}, state, {
        error: action.payload
      });

    case CLOSE_SIDEBAR:
      return _extends({}, state, {
        sidebarOpen: false
      });

    case OPEN_SIDEBAR:
      return _extends({}, state, {
        sidebarOpen: true
      });

    case START_LOADING:
      return _extends({}, state, {
        showLoading: true
      });

    case STOP_LOADING:
      return _extends({}, state, {
        showLoading: false
      });

    default:
      return state;

  }
}

// ACTION CREATORS
// Use Flux Standard Action (FSA) notation
// https://github.com/acdlite/flux-standard-action
var startLoading = function startLoading() {

  return {
    type: START_LOADING
  };
};

var stopLoading = function stopLoading() {

  return {
    type: STOP_LOADING
  };
};

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ 1202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_getMuiTheme__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config_variables__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config_variables___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_config_variables__);



// http://www.material-ui.com/#/customization/themes
var getMuiThemeConfig = function getMuiThemeConfig(userAgent) {

  return __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_getMuiTheme___default.a({
    fontFamily: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.fontFamily,
    palette: {
      primary1Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorTheme,
      primary2Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorThemeSecondary,
      primary3Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorThemeTertiary,
      accent1Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorBlue,
      accent2Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayLight,
      accent3Color: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayDark,
      textColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorDark,
      secondaryTextColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorTheme,
      alternateTextColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorWhite,
      canvasColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorWhite,
      borderColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayDark,
      disabledColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayDark,
      pickerHeaderColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorTheme,
      clockCircleColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorGrayDark,
      shadowColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorDark
    },
    spacing: {
      iconSize: 24,
      desktopGutter: 24,
      desktopGutterMore: 32,
      desktopGutterLess: 16,
      desktopGutterMini: 8,
      desktopKeylineIncrement: 64,
      desktopDropDownMenuItemHeight: 32,
      desktopDropDownMenuFontSize: 15,
      desktopDrawerMenuItemHeight: 48,
      desktopSubheaderHeight: 48,
      desktopToolbarHeight: 56
    },
    datePicker: {
      selectColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorTheme
    },
    snackbar: {
      textColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorWhite,
      backgroundColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorDark,
      actionColor: __WEBPACK_IMPORTED_MODULE_1_config_variables___default.a.colorBlue
    }
  }, {
    userAgent: userAgent
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getMuiThemeConfig);

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isBrowser */


// Grab from env vars if they are set
var _process$env = Object({"NODE_ENV":"development"}),
    NODE_ENV = _process$env.NODE_ENV,
    API_URL = _process$env.API_URL,
    ROOT_URL = _process$env.ROOT_URL,
    USE_MOCK_API = _process$env.USE_MOCK_API,
    SECURE_COOKIE = _process$env.SECURE_COOKIE,
    SHOW_ERRORS = _process$env.SHOW_ERRORS;

// Set defaults

var env = {

  // Since NODE_ENV is automatically used by many plugins, we can't ensure it
  // will produce dev/prod parity by itself. Consequently, we need to use
  // separate ENVs for apps.
  NODE_ENV: NODE_ENV || 'production',

  // App settings
  API_URL: API_URL || 'https://safe-coast-13609.herokuapp.com',
  ROOT_URL: ROOT_URL || 'http://localhost:3000',
  USE_MOCK_API: USE_MOCK_API === 'true' || false,
  SECURE_COOKIE: SECURE_COOKIE === 'true' || false,
  SHOW_ERRORS: SHOW_ERRORS === 'true' || true

};

var isBrowser = function isBrowser() {

  return Boolean(typeof window !== 'undefined' && window.document);
};

var getEnv = function getEnv() {

  if (NODE_ENV === 'test') return env;

  if (isBrowser()) {

    return window.__ENV__;
  }

  return env;
};

var dynamicEnv = getEnv();

/* harmony default export */ __webpack_exports__["a"] = (dynamicEnv);

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_DEVICES */
/* unused harmony export EDIT_DEVICES */
/* unused harmony export CHANGE_EDIT_STATE */
/* unused harmony export CHANGE_ADD_STATE */
/* unused harmony export REMOVE_DEVICES */
/* unused harmony export FETCH_DEVICES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeEditState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeAddState; });
/* unused harmony export addDevices */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return editDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchDevices; });
/* unused harmony export removeDevice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__ = __webpack_require__(876);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var ADD_DEVICES = 'citrus/devices/ADD_DEVICES';
var EDIT_DEVICES = 'citrus/devices/EDIT_DEVICES';
var CHANGE_EDIT_STATE = 'citrus/devices/CHANGE_EDIT_STATE';
var CHANGE_ADD_STATE = 'citrus/devices/CHANGE_ADD_STATE';
var REMOVE_DEVICES = 'citrus/devices/REMOVE_DEVICES';
var FETCH_DEVICES = 'citrus/devices/FETCH_DEVICES';

var initialState = {
  list: [],
  isFetching: false,
  isEditing: '',
  isDeleting: false,
  isAdding: false,
  error: ''
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case REMOVE_DEVICES + '_PENDING':
      return _extends({}, state, {
        isFetching: true,
        isEditing: action.payload
      });
    case REMOVE_DEVICES + '_FULFILLED':
      {

        var deviceList = state.list;
        var index = deviceList.findIndex(function (item) {

          return item.id === action.payload.data.id;
        });
        if (index > -1) {

          deviceList.splice(index, 1);
        }
        return _extends({}, state, {
          isFetching: false,
          isEditing: '',
          list: deviceList
        });
      }
    case REMOVE_DEVICES + '_REJECTED':
      {

        return _extends({}, state, {
          isFetching: false,
          isEditing: '',
          error: action.payload
        });
      }
    case CHANGE_EDIT_STATE:
      {

        var editing = '';

        if (state.isEditing === '') {

          editing = action.payload;
        }
        return _extends({}, state, {
          isEditing: editing
        });
      }
    case CHANGE_ADD_STATE:
      {

        return _extends({}, state, {
          isAdding: !state.isAdding
        });
      }
    case ADD_DEVICES + '_PENDING':
      return _extends({}, state, {
        isFetching: true,
        isAdding: true
      });

    case ADD_DEVICES + '_FULFILLED':
      {

        var _deviceList = state.list;

        var newDevice = _extends({}, action.payload.data);
        _deviceList.unshift(newDevice);
        return _extends({}, state, {
          isFetching: false,
          isAdding: false,
          list: _deviceList
        });
      }
    case ADD_DEVICES + '_REJECTED':
      return _extends({}, state, {
        isFetching: false,
        isAdding: false
      });

    case EDIT_DEVICES + '_PENDING':
      return _extends({}, state, {
        isFetching: true
      });

    case EDIT_DEVICES + '_FULFILLED':
      {

        var newList = state.list.map(function (item, index) {

          if (item.id === action.payload.data.id) {

            return _extends({}, item, action.payload.data);
          }

          return item;
        });
        return _extends({}, state, {
          isFetching: false,
          isEditing: '',
          list: newList
        });
      }
    case EDIT_DEVICES + '_REJECTED':
      return _extends({}, state, {
        isFetching: false
      });
    case FETCH_DEVICES + '_PENDING':
      return _extends({}, state, {
        isFetching: true
      });

    case FETCH_DEVICES + '_FULFILLED':
      return _extends({}, state, {
        isFetching: false,
        list: action.payload.data
      });

    case FETCH_DEVICES + '_REJECTED':
      return _extends({}, state, {
        error: action.payload.data,
        isFetching: false
      });

    default:
      return state;

  }
};

var changeEditState = function changeEditState(deviceId) {

  return {
    type: CHANGE_EDIT_STATE,
    payload: deviceId
  };
};

var changeAddState = function changeAddState() {

  return {
    type: CHANGE_ADD_STATE
  };
};

// thunk
var addDevices = function addDevices(device) {

  return function (dispatch) {

    return dispatch({
      type: ADD_DEVICES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__["c" /* saveDevice */](device)
    });
  };
};

var editDevices = function editDevices(device) {

  return function (dispatch) {

    return dispatch({
      type: EDIT_DEVICES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__["c" /* saveDevice */](device)
    });
  };
};

var fetchDevices = function fetchDevices() {

  return function (dispatch) {

    return dispatch({
      type: FETCH_DEVICES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__["a" /* getDevice */]()
    });
  };
};

var removeDevice = function removeDevice(deviceId) {

  return function (dispatch) {

    return dispatch({
      type: REMOVE_DEVICES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_devices__["b" /* removeDevice */](deviceId)
    });
  };
};

/* harmony default export */ __webpack_exports__["c"] = (reducer);

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Global CSS variables passed via precss > postcss-custom-properties
// Also used throughout JS files in the site
// https://github.com/postcss/postcss-custom-properties#variables

var variables = {

  appTitle: 'CitrusMobile',
  appDescription: 'Citrus Mobile is an app for home automation.',
  appIcon: '/static/images/logo.png',
  appLogo: '/static/images/logo@2x.png',
  appLogoWidth: '128',
  appLogoHeight: '128',

  baseRemSize: '16', // CAUTION: Think twice before changing!
  borderRadius: '3px',

  colorDark: '#404041',
  colorDarkFaded: 'RGBA(64, 64, 65, 0.5)',
  colorTheme: '#0277BD',
  colorThemeFaded: 'RGBA(0, 51, 160, 0.5)',
  colorThemeSecondary: '#82E5D2',
  colorThemeTertiary: '#FF3857',
  colorGrayDark: '#898989',
  colorGray: '#C4C4C4',
  colorGrayLight: '#E6EAE6',
  colorWhite: '#ffffff',
  colorWhiteFaded: 'rgba(255, 255, 255, 0.5)',
  colorBlue: '#64daff', // cartoonblue
  colorGreen: '#84c500', // green
  colorRed: '#d32626', // brick
  colorFacebookBlue: '#335092', // facebook blue
  colorTitleBlue: '#2d7aac', // strongblue
  colorTitleGreen: '#3b9737', // mediumgreen
  colorWarmGray: '#898989',

  fontFamily: 'MyApp, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
  fontWeight: 300,

  navLogoTopPadding: '6rem',
  navLogoTopPaddingSm: '4rem',

  screenLgMax: '1199px',
  screenLgMaxHeight: '800px',
  screenLgMin: '1200px',
  screenMdMax: '1023px',
  screenMdMin: '1024px',
  screenSmMax: '767px',
  screenSmMin: '768px',
  screenXsMax: '320px',
  screenXsMin: '321px',

  zModal: 50,
  zModalBackdrop: 40,

  // Standard sizes based on REMs
  s1: '.25rem',
  s2: '.5rem',
  s3: '1rem',
  s4: '2rem',
  s5: '4rem',
  s6: '8rem',
  s7: '16rem'

};

module.exports = variables;

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return post; });
/* unused harmony export patch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config_env__ = __webpack_require__(164);

// Contains API-specific logic for the API service we're using





var log = __WEBPACK_IMPORTED_MODULE_1_debug___default.a('citrus:helpers:api');

var getClient = function getClient() {

  // Defaults
  var config = {
    baseURL: __WEBPACK_IMPORTED_MODULE_2_config_env__["a" /* default */].API_URL,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' }
  };

  log('Set baseURL: %s', __WEBPACK_IMPORTED_MODULE_2_config_env__["a" /* default */].API_URL);

  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create(config);
};

// Standardize API error format across the app
// Decouple from implementation (here using axios)
var _parseError = function _parseError(error) {

  // DEBUG: Print implementation-specific error information
  log('_parseError: %s \n %o', error);

  if (error && error.response) {

    return {
      statusCode: error.response.status,
      data: error.response.data,
      error: true
    };
  } else if (error instanceof Error) {

    return error.message;
  }

  return 'ERROR: ' + error.toString();
};

// Standardize API response format across the app
// Decouple from implementation (here using axios)
var _parseResponse = function _parseResponse(response) {

  log('_parseResponse: %o', response);

  return {
    statusCode: response.status,
    data: response.data
  };
};

// GET request factories
var get = function get(endpoint, opts) {

  var client = getClient();
  return client.get(endpoint, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

// POST request factories
var post = function post(endpoint) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var opts = arguments[2];


  var client = getClient();
  return client.post(endpoint, data, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

// PATCH request factories
var patch = function patch(endpoint) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var opts = arguments[2];


  var client = getClient();
  return client.patch(endpoint, data, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

// PUT request factories
var put = function put(endpoint) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var opts = arguments[2];


  var client = getClient();
  return client.put(endpoint, data, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

// DELETE request factories
var del = function del(endpoint, opts) {

  var client = getClient();
  return client.delete(endpoint, opts).then(function (response) {

    return _parseResponse(response);
  }).catch(function (error) {

    return Promise.reject(_parseError(error));
  });
};

var mock = function mock(data) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;


  return new Promise(function (resolve, reject) {

    setTimeout(function () {

      return resolve(_parseResponse({
        status: 200,
        data: data
      }));
    }, delay);
  });
};

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_DEVICE_TYPES */
/* unused harmony export EDIT_DEVICE_TYPES */
/* unused harmony export CHANGE_EDIT_STATE */
/* unused harmony export CHANGE_ADD_STATE */
/* unused harmony export REMOVE_DEVICE_TYPES */
/* unused harmony export FETCH_DEVICE_TYPES */
/* unused harmony export changeEditState */
/* unused harmony export changeAddState */
/* unused harmony export addDeviceTypes */
/* unused harmony export editDeviceTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchDeviceTypes; });
/* unused harmony export removeDeviceType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__ = __webpack_require__(896);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var ADD_DEVICE_TYPES = 'citrus/device-types/ADD_DEVICE_TYPES';
var EDIT_DEVICE_TYPES = 'citrus/device-types/EDIT_DEVICE_TYPES';
var CHANGE_EDIT_STATE = 'citrus/device-types/CHANGE_EDIT_STATE';
var CHANGE_ADD_STATE = 'citrus/device-types/CHANGE_ADD_STATE';
var REMOVE_DEVICE_TYPES = 'citrus/device-types/REMOVE_DEVICE_TYPES';
var FETCH_DEVICE_TYPES = 'citrus/device-types/FETCH_DEVICE_TYPES';

var initialState = {
  list: [],
  isFetching: false,
  isEditing: '',
  isDeleting: false,
  isAdding: false,
  error: ''
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case REMOVE_DEVICE_TYPES + '_PENDING':
      return _extends({}, state, {
        isEditing: action.payload,
        isFetching: true
      });
    case REMOVE_DEVICE_TYPES + '_FULFILLED':
      {

        var deviceTypeList = state.list;
        var index = deviceTypeList.findIndex(function (item) {

          return item.id === action.payload.data.id;
        });
        if (index > -1) {

          deviceTypeList.splice(index, 1);
        }
        return _extends({}, state, {
          isEditing: '',
          isFetching: false,
          list: deviceTypeList
        });
      }
    case REMOVE_DEVICE_TYPES + '_REJECTED':
      {

        return _extends({}, state, {
          isEditing: '',
          isFetching: false,
          error: action.payload
        });
      }
    case CHANGE_EDIT_STATE:
      {

        var editing = !state.isEditing ? action.payload : '';

        return _extends({}, state, {
          isEditing: editing
        });
      }
    case CHANGE_ADD_STATE:
      {

        return _extends({}, state, {
          isAdding: !state.isAdding
        });
      }
    case ADD_DEVICE_TYPES + '_PENDING':
      return _extends({}, state, {
        isFetching: true,
        isAdding: true
      });

    case ADD_DEVICE_TYPES + '_FULFILLED':
      {

        var _deviceTypeList = state.list;

        var newDeviceType = _extends({}, action.payload.data);
        _deviceTypeList.unshift(newDeviceType);
        return _extends({}, state, {
          isAdding: false,
          isFetching: false,
          list: _deviceTypeList
        });
      }
    case ADD_DEVICE_TYPES + '_REJECTED':
      return _extends({}, state, {
        isAdding: false,
        isFetching: false
      });

    case EDIT_DEVICE_TYPES + '_PENDING':
      return _extends({}, state, {
        isFetching: true
      });

    case EDIT_DEVICE_TYPES + '_FULFILLED':
      {

        var newList = state.list.map(function (item, index) {

          if (item.id === action.payload.data.id) {

            return _extends({}, item, action.payload.data);
          }

          return item;
        });
        return _extends({}, state, {
          isEditing: '',
          isFetching: false,
          list: newList
        });
      }
    case EDIT_DEVICE_TYPES + '_REJECTED':
      return _extends({}, state, {
        isFetching: false
      });
    case FETCH_DEVICE_TYPES + '_PENDING':
      return _extends({}, state, {
        isFetching: true
      });

    case FETCH_DEVICE_TYPES + '_FULFILLED':
      return _extends({}, state, {
        isFetching: false,
        list: action.payload.data
      });

    case FETCH_DEVICE_TYPES + '_REJECTED':
      return _extends({}, state, {
        error: action.payload.data,
        isFetching: false
      });

    default:
      return state;

  }
};

var changeEditState = function changeEditState(deviceTypeId) {

  return {
    type: CHANGE_EDIT_STATE,
    payload: deviceTypeId
  };
};

var changeAddState = function changeAddState() {

  return {
    type: CHANGE_ADD_STATE
  };
};

// thunk
var addDeviceTypes = function addDeviceTypes(deviceType) {

  return function (dispatch) {

    return dispatch({
      type: ADD_DEVICE_TYPES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__["c" /* saveDeviceType */](deviceType)
    });
  };
};

var editDeviceTypes = function editDeviceTypes(deviceType) {

  return function (dispatch) {

    return dispatch({
      type: EDIT_DEVICE_TYPES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__["c" /* saveDeviceType */](deviceType)
    });
  };
};

var fetchDeviceTypes = function fetchDeviceTypes() {

  return function (dispatch) {

    return dispatch({
      type: FETCH_DEVICE_TYPES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__["a" /* getDeviceType */]()
    });
  };
};

var removeDeviceType = function removeDeviceType(deviceTypeId) {

  return function (dispatch) {

    return dispatch({
      type: REMOVE_DEVICE_TYPES,
      payload: __WEBPACK_IMPORTED_MODULE_0_src_helpers_api_device_types__["b" /* removeDeviceType */](deviceTypeId)
    });
  };
};

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISPLAY_ERROR; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config_env__ = __webpack_require__(164);

var SHOW_ERRORS = __WEBPACK_IMPORTED_MODULE_0_config_env__["a" /* default */].SHOW_ERRORS;


var DISPLAY_ERROR = 'citrus/errorDisplay/DISPLAY_ERROR';

var errorDisplay = function errorDisplay(store) {

  return function (next) {

    return function (action) {

      if (!SHOW_ERRORS) return next(action);
      if (action && action.error) {

        // Skip redux-form errors
        if (action.meta && action.meta.form) return next(action);

        var message = 'An error has occurred.';

        // If error message was passed in payload
        if (typeof action.payload === 'string') {

          message = action.payload;
        }
        // If error message was parsed from API
        else if (action.payload && action.payload.data) {

            message = action.payload.data.message;
          }

        store.dispatch({
          type: DISPLAY_ERROR,
          // return a new object each time
          payload: { message: message }
        });
      }

      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["b"] = (errorDisplay);

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LOAD */
/* unused harmony export LOAD_SUCCESS */
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadSuccess; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// "Shallow" reducer state example doesn't need Immutable
var LOAD = 'citrus/init/LOAD';
var LOAD_SUCCESS = 'citrus/init/LOAD_SUCCESS';

var initialState = {
  isLoading: true,
  loaded: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case LOAD:
      return _extends({}, state, {
        isLoading: true
      });

    case LOAD_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        loaded: true
      });

    default:
      return state;

  }
}

// Removed from implementation until the need arises
// For now, we assume that the app arrives in loading state
// export const load = () => {

//   return {
//     type: LOAD,
//   }

// }

var loadSuccess = function loadSuccess() {

  return {
    type: LOAD_SUCCESS
  };
};

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(449);
__webpack_require__(450);
__webpack_require__(451);
__webpack_require__(452);
__webpack_require__(453);
__webpack_require__(454);
__webpack_require__(455);
__webpack_require__(456);
__webpack_require__(457);
__webpack_require__(458);
__webpack_require__(459);
module.exports = __webpack_require__(460);


/***/ }),

/***/ 449:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_offline_plugin_runtime__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_offline_plugin_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_offline_plugin_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_redux__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_transit_immutable_js__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_transit_immutable_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_transit_immutable_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_routes__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_src_redux_store__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_src_redux_modules_init__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_styles_MuiThemeProvider__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_config_muiTheme__ = __webpack_require__(1202);















// Material-UI



__WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default.a();

var log = __WEBPACK_IMPORTED_MODULE_1_debug___default.a('citrus:browser:index');
var appStateElement = document.getElementById('app-state');
var serializedState = appStateElement ? appStateElement.innerHTML : '{}';
var store = __WEBPACK_IMPORTED_MODULE_11_src_redux_store__["a" /* default */](__WEBPACK_IMPORTED_MODULE_9_transit_immutable_js___default.a.fromJSON(serializedState), __WEBPACK_IMPORTED_MODULE_7_react_router__["e" /* browserHistory */]);
var history = __WEBPACK_IMPORTED_MODULE_8_react_router_redux__["syncHistoryWithStore"](__WEBPACK_IMPORTED_MODULE_7_react_router__["e" /* browserHistory */], store);

window.onload = function () {

  store.dispatch(__WEBPACK_IMPORTED_MODULE_12_src_redux_modules_init__["b" /* loadSuccess */]());

  // Reset this handler when we're done
  window.onload = null;
};

__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_6_react_redux__["a" /* Provider */],
  { store: store },
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_13_material_ui_styles_MuiThemeProvider___default.a,
    { muiTheme: __WEBPACK_IMPORTED_MODULE_14_config_muiTheme__["a" /* default */]() },
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["d" /* Router */], {
      routes: __WEBPACK_IMPORTED_MODULE_10_src_routes__["a" /* default */](),
      history: history
    })
  )
), document.getElementById('react-mount'));

// Progressively apply ServiceWorker updates so browser can simply be refreshed
// to reflect changes with window.location.reload()
// TODO: Fire redux action
__WEBPACK_IMPORTED_MODULE_2_offline_plugin_runtime___default.a.install({
  onUpdateReady: function onUpdateReady() {

    log('onUpdateReady');
    __WEBPACK_IMPORTED_MODULE_2_offline_plugin_runtime___default.a.applyUpdate();
  }
});

if (true) {

  var Perf = __webpack_require__(1203); // eslint-disable-line
  window.Perf = Perf;
}

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

var warn = "offline-plugin: runtime was installed without OfflinePlugin being added to the webpack.config.js. See https://goo.gl/2Ca7NO for details.";

if (window.console) {
  if (console.info) {
    console.info(warn);
  } else if (console.log) {
    console.log(warn);
  }
}

exports.install = function() {};
exports.applyUpdate = function() {};
exports.update = function() {};

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_App_index__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_DeviceList_DeviceList_index__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_DeviceControls_DeviceControls_index__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_NotFound_NotFound_index__ = __webpack_require__(1065);








var getRoutes = function getRoutes() {

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router__["c" /* Route */],
    { path: '/', component: __WEBPACK_IMPORTED_MODULE_2_src_components_App_index__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["a" /* IndexRedirect */], { to: 'devices' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["c" /* Route */], { path: 'devices', component: __WEBPACK_IMPORTED_MODULE_3_src_components_DeviceList_DeviceList_index__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["c" /* Route */], { path: 'device/:deviceId/controls', component: __WEBPACK_IMPORTED_MODULE_4_src_components_DeviceControls_DeviceControls_index__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["c" /* Route */], { path: '*', component: __WEBPACK_IMPORTED_MODULE_5_src_components_NotFound_NotFound_index__["a" /* default */] })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (getRoutes);

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(800);



function mapStateToProps(state) {
  var ROOT_URL = state.env.ROOT_URL;


  return {
    ROOT_URL: ROOT_URL
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */](mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]));

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_shared_LoadingIndicator_LoadingIndicator_index__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_shared_ErrorMessage_ErrorMessage_index__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_config_variables__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_config_variables___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_config_variables__);







var App = function App(props) {
  var appDescription = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appDescription,
      appIcon = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appIcon,
      appLogo = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appLogo,
      appTitle = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appTitle,
      appLogoWidth = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appLogoWidth,
      appLogoHeight = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.appLogoHeight,
      colorTheme = __WEBPACK_IMPORTED_MODULE_4_config_variables___default.a.colorTheme;
  var ROOT_URL = props.ROOT_URL;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'application' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
      htmlAttributes: { lang: 'en' },
      defaultTitle: appTitle,
      titleTemplate: appTitle + ' - %s',
      meta: [{ name: 'theme-color', content: colorTheme }, { name: 'msapplication-TileColor', content: colorTheme }, { name: 'msapplication-TileImage', content: '' + ROOT_URL + appLogo }, { property: 'og:title', content: appTitle }, { property: 'og:image', content: '' + ROOT_URL + appLogo }, { property: 'og:image:width', content: appLogoWidth }, { property: 'og:image:height', content: appLogoHeight }, { property: 'og:url', content: ROOT_URL }, { property: 'og:description', content: appDescription }, { name: 'description', content: appDescription }],
      link: [{ rel: 'shortcut icon', href: appIcon }, { rel: 'apple-touch-icon', href: appIcon }]
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_src_components_shared_LoadingIndicator_LoadingIndicator_index__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_shared_ErrorMessage_ErrorMessage_index__["a" /* default */], null),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_selectors_areWeLoading__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LoadingIndicator__ = __webpack_require__(814);




function mapStateToProps(state) {

  return {
    weAreLoading: __WEBPACK_IMPORTED_MODULE_1_src_selectors_areWeLoading__["a" /* default */](state)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */](mapStateToProps)(__WEBPACK_IMPORTED_MODULE_2__LoadingIndicator__["a" /* default */]));

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);


var getInitLoading = function getInitLoading(state) {

  return state.init.isLoading;
};

var getDevice = function getDevice(state) {

  return state.device.isFetching;
};

var getDeviceType = function getDeviceType(state) {

  return state.deviceType.isFetching;
};

var getUiLoading = function getUiLoading(state) {

  return state.ui.showLoading;
};

var areWeLoading = __WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"]([getInitLoading, getDevice, getDeviceType, getUiLoading], function (initLoading, device, deviceType, uiLoading) {

  if (initLoading || device || deviceType || uiLoading) {

    return true;
  }
  // default
  return false;
});

/* harmony default export */ __webpack_exports__["a"] = (areWeLoading);

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css__);



var LoadingIndicator = function LoadingIndicator(props) {
  var weAreLoading = props.weAreLoading;


  if (!weAreLoading) return null;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css___default.a.loading },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__LoadingIndicator_style_css___default.a.movingBar })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (LoadingIndicator);

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"loading":"src-components-shared-LoadingIndicator-LoadingIndicator-style__loading__E4t","movingBar":"src-components-shared-LoadingIndicator-LoadingIndicator-style__movingBar__naQ","moveright":"src-components-shared-LoadingIndicator-LoadingIndicator-style__moveright___Oe"};

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ErrorMessage__ = __webpack_require__(817);



function mapStateToProps(state) {

  return {
    error: state.ui.error
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */](mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1__ErrorMessage__["a" /* default */]));

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__);



var autoHideDuration = 10000;

var ErrorMessage = function ErrorMessage(props) {
  var error = props.error;


  if (!error) return null;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default.a, {
    open: true,
    message: error.message,
    autoHideDuration: autoHideDuration
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ErrorMessage);

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_redux_modules_device__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device_type__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DeviceList__ = __webpack_require__(897);






function mapStateToProps(state) {

  return {
    devices: state.device
  };
}

function mapDispatchToProps(dispatch) {

  return {

    fetchDevices: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_2_src_redux_modules_device__["e" /* fetchDevices */], dispatch),
    fetchDeviceTypes: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device_type__["b" /* fetchDeviceTypes */], dispatch),
    changeEditState: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_2_src_redux_modules_device__["b" /* changeEditState */], dispatch),
    changeAddState: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_2_src_redux_modules_device__["a" /* changeAddState */], dispatch)

  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */](mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_4__DeviceList__["a" /* default */]));

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getDeviceMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDevice; });
/* unused harmony export saveDeviceMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveDevice; });
/* unused harmony export removeDeviceMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeDevice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config_env__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(379);



var API_URL = __WEBPACK_IMPORTED_MODULE_0_config_env__["a" /* default */].API_URL,
    USE_MOCK_API = __WEBPACK_IMPORTED_MODULE_0_config_env__["a" /* default */].USE_MOCK_API;


var getDeviceMock = function getDeviceMock() {

  return __WEBPACK_IMPORTED_MODULE_1____["c" /* mock */]({
    list: [{
      id: '1',
      name: 'Senadores 2017',
      description: 'Sondeo de elecciones en Rosario',
      created: '2017-06-12 18:37:18',
      visible: '0',
      active: '1'
    }, {
      id: '2',
      name: 'Seguridad Publica',
      description: 'Sensación de seguridad en la gente',
      created: '2017-06-12 18:38:08',
      visible: '1',
      active: '1'
    }]
  });
};

var getDevice = function getDevice() {

  return USE_MOCK_API ? getDeviceMock() : __WEBPACK_IMPORTED_MODULE_1____["b" /* get */](API_URL + '/api/v1/device');
};

var saveDeviceMock = function saveDeviceMock(device) {

  return new Promise(function (resolve, reject) {

    setTimeout(function () {

      return resolve({
        device: device
      });
    }, 1000);
  });
};

var saveDevice = function saveDevice(device) {

  var devicePayload = {
    name: device.name,
    ip: device.ip,
    type: device.type
  };

  var urlCall = device.id ? __WEBPACK_IMPORTED_MODULE_1____["e" /* put */](API_URL + '/api/v1/device/' + device.id, devicePayload) : __WEBPACK_IMPORTED_MODULE_1____["d" /* post */](API_URL + '/api/v1/device', devicePayload);

  return USE_MOCK_API ? getDeviceMock() : urlCall;
};

var removeDeviceMock = function removeDeviceMock() {

  return __WEBPACK_IMPORTED_MODULE_1____["c" /* mock */]({});
};

var removeDevice = function removeDevice(deviceId) {

  return USE_MOCK_API ? removeDeviceMock() : __WEBPACK_IMPORTED_MODULE_1____["a" /* del */](API_URL + '/api/v1/device/' + deviceId);
};

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getDeviceTypeMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDeviceType; });
/* unused harmony export saveDeviceTypeMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveDeviceType; });
/* unused harmony export removeDeviceTypeMock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeDeviceType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config_env__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(379);



var API_URL = __WEBPACK_IMPORTED_MODULE_0_config_env__["a" /* default */].API_URL,
    USE_MOCK_API = __WEBPACK_IMPORTED_MODULE_0_config_env__["a" /* default */].USE_MOCK_API;


var getDeviceTypeMock = function getDeviceTypeMock() {

  return __WEBPACK_IMPORTED_MODULE_1____["c" /* mock */]({
    list: [{
      id: 't1500670834368',
      name: 'Samsung Audio',
      httpApi: '',
      controls: [{
        type: 'button',
        name: 'Power'
      }, {
        type: 'slider',
        name: 'Volume'
      }, {
        type: 'select',
        name: 'Playlist',
        options: ['AC/DC - thunderstruck', 'Metallica - Nothing else matters', 'Foo Fighters - Run']
      }]
    }]
  });
};

var getDeviceType = function getDeviceType() {

  return USE_MOCK_API ? getDeviceTypeMock() : __WEBPACK_IMPORTED_MODULE_1____["b" /* get */](API_URL + '/api/v1/device-type');
};

var saveDeviceTypeMock = function saveDeviceTypeMock(deviceType) {

  return new Promise(function (resolve, reject) {

    setTimeout(function () {

      return resolve({
        deviceType: deviceType
      });
    }, 1000);
  });
};

var saveDeviceType = function saveDeviceType(deviceType) {

  var deviceTypePayload = {
    name: deviceType.name,
    httpApi: deviceType.httpApi,
    controls: deviceType.controls
  };

  var urlCall = deviceType.id ? __WEBPACK_IMPORTED_MODULE_1____["e" /* put */](API_URL + '/api/v1/device-type/' + deviceType.id, deviceTypePayload) : __WEBPACK_IMPORTED_MODULE_1____["d" /* post */](API_URL + '/api/v1/device-type', deviceTypePayload);

  return USE_MOCK_API ? getDeviceTypeMock() : urlCall;
};

var removeDeviceTypeMock = function removeDeviceTypeMock() {

  return __WEBPACK_IMPORTED_MODULE_1____["c" /* mock */]({
    success: true
  });
};

var removeDeviceType = function removeDeviceType(deviceTypeId) {

  return USE_MOCK_API ? removeDeviceTypeMock() : __WEBPACK_IMPORTED_MODULE_1____["a" /* del */](API_URL + '/api/v1/device-type/' + deviceTypeId);
};

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_action_info__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_action_info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_action_info__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var DeviceList = function (_Component) {
  _inherits(DeviceList, _Component);

  function DeviceList() {
    _classCallCheck(this, DeviceList);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  DeviceList.prototype.componentDidMount = function componentDidMount() {

    this.props.fetchDevices();
  };

  DeviceList.prototype.showDevices = function showDevices() {
    var devices = this.props.devices.list;


    return devices.map(function (item, index) {
      var id = item.id,
          name = item.name,
          type = item.type;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["b" /* Link */],
        { to: '/device/' + id + '/controls', key: id },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItem"], {
          primaryText: name + ' (' + type.name + ')',
          rightIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_action_info___default.a, null)
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default.a, null)
      );
    });
  };

  DeviceList.prototype.render = function render() {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css___default.a.container },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default.a, {
        title: 'Devices'
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6__DeviceList_style_css___default.a.tableDevice },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui_List__["List"],
          null,
          this.showDevices()
        )
      )
    );
  };

  return DeviceList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DeviceList);

/***/ }),

/***/ 917:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"src-components-DeviceList-DeviceList-style__container__1lu"};

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_selectors_deviceById__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DeviceControls__ = __webpack_require__(920);






function mapStateToProps(state, ownProps) {

  return {
    device: __WEBPACK_IMPORTED_MODULE_2_src_selectors_deviceById__["a" /* default */](state, ownProps.params.deviceId) || {},
    devices: state.device
  };
}

function mapDispatchToProps(dispatch) {

  return {
    fetchDevices: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device__["e" /* fetchDevices */], dispatch),
    editDevices: __WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"](__WEBPACK_IMPORTED_MODULE_3_src_redux_modules_device__["d" /* editDevices */], dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */](mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_4__DeviceControls__["a" /* default */]));

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);


var getList = function getList(state) {

  return state.device.list;
};

var getId = function getId(state, deviceId) {

  return deviceId;
};

var getDeviceById = __WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"]([getList, getId], function (devices, deviceId) {

  var selectedDevice = devices.find(function (device) {

    return device.id === deviceId;
  });
  return selectedDevice;
});

/* harmony default export */ __webpack_exports__["a"] = (getDeviceById);

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_navigation_arrow_back__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_navigation_arrow_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_navigation_arrow_back__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Divider__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css__ = __webpack_require__(1064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var DeviceControls = function (_Component) {
  _inherits(DeviceControls, _Component);

  function DeviceControls(props) {
    _classCallCheck(this, DeviceControls);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.showDeviceControls = _this.showDeviceControls.bind(_this);
    _this.onChange = __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default.a(_this.onChange.bind(_this), 500);

    return _this;
  }

  DeviceControls.prototype.componentDidMount = function componentDidMount() {

    this.props.fetchDevices();
  };

  DeviceControls.prototype.onChange = function onChange(type, index, value) {
    var _props = this.props,
        editDevices = _props.editDevices,
        device = _props.device;


    var edited = _extends({}, device, {
      type: _extends({}, device.type, {
        controls: [].concat(device.type.controls)
      })

    });
    var control = _extends({}, device.type.controls[index], {
      value: value
    });

    edited.type.controls.splice(index, 1, control);
    editDevices(edited);
  };

  DeviceControls.prototype.showDeviceControls = function showDeviceControls() {
    var _this2 = this;

    var _props$device$type = this.props.device.type,
        type = _props$device$type === undefined ? {} : _props$device$type;
    var _type$controls = type.controls,
        controls = _type$controls === undefined ? [] : _type$controls;


    return controls.map(function (item, index) {
      var name = item.name,
          value = item.value;

      var itemType = item.type;
      var control = null;

      switch (itemType) {
        case 'button':
          {

            control = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui__["c" /* Toggle */], {
              name: 'value',
              value: value,
              onToggle: function onToggle(evt, val) {

                _this2.onChange('button', index, val);
              },
              style: { width: '60%', marginTop: '5px' }
            });
            break;
          }
        case 'slider':
          {

            control = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui__["b" /* Slider */], {
              name: 'value',
              value: value,
              defaultValue: value,
              format: null,
              min: 0,
              max: 100,
              step: 1,
              onChange: function onChange(evt, val) {

                _this2.onChange('slider', index, val);
              },
              style: { width: '60%', margin: '5px', marginTop: 0 }
            });
            break;
          }

        case 'select':
          {

            control = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_material_ui__["a" /* SelectField */],
              {
                name: 'value',
                value: value,
                hintText: name,
                onChange: function onChange(evt, val) {

                  _this2.onChange('select', index, val);
                },
                style: { width: '60%', margin: '5px', height: '45px' }
              },
              item.options.map(function (option, i) {

                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_MenuItem___default.a, {
                  key: i,
                  value: option,
                  primaryText: option
                });
              })
            );
            break;
          }

        default:
          return null;
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { key: index },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_List__["ListItem"], {
          primaryText: name,
          className: __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css___default.a.control,
          rightIcon: control
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Divider___default.a, null)
      );
    });
  };

  DeviceControls.prototype.render = function render() {
    var deviceName = this.props.device.name;


    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css___default.a.container },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar___default.a, {
        iconElementLeft: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_router__["b" /* Link */],
          { to: '/devices' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default.a,
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_svg_icons_navigation_arrow_back___default.a, null)
          )
        ),
        title: deviceName
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_material_ui_List__["List"],
        { className: __WEBPACK_IMPORTED_MODULE_10__DeviceControls_style_css___default.a.list },
        this.showDeviceControls()
      )
    );
  };

  return DeviceControls;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DeviceControls);

/***/ })

},[448]);
//# sourceMappingURL=bundle-533a774ff3d8bcd93871.js.map