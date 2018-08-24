/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/back/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/webpack/webpack.dev.front.config.js":
/*!****************************************************!*\
  !*** ./config/webpack/webpack.dev.front.config.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/**
 * @file Webpack dev config
 */
var path = __webpack_require__(/*! path */ "path");
var webpack = __webpack_require__(/*! webpack */ "webpack");

module.exports = {
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client', './src/front/index.js']
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: path.join(__dirname, '../../dist'),
    filename: 'reddit.bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
    }, {
      test: /\.(s*)css$/,
      exclude: /node_modules/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    }]
  },
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./src/back/gql/index.js":
/*!*******************************!*\
  !*** ./src/back/gql/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloServerExpress = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");

var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _query = __webpack_require__(/*! ./query */ "./src/back/gql/query.js");

var _query2 = _interopRequireDefault(_query);

var _mutation = __webpack_require__(/*! ./mutation */ "./src/back/gql/mutation.js");

var _mutation2 = _interopRequireDefault(_mutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

// The GraphQL schema
var schema = new _graphql.GraphQLSchema({
  query: _query2.default,
  mutation: _mutation2.default
});

var _default = new _apolloServerExpress.ApolloServer({
  schema: schema,
  playground: {
    settings: {
      'editor.cursorShape': 'line'
    }
  }
});

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(schema, 'schema', '/home/luis/Work/react-reddit/src/back/gql/index.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/gql/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/gql/models/global/types.js":
/*!*********************************************!*\
  !*** ./src/back/gql/models/global/types.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecordID = exports.UInt = exports.SliceArgsType = undefined;

var _graphql = __webpack_require__(/*! graphql */ "graphql");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * @file Global types.
       */


/**
 * Slice arguments type. Serves the purpose of pagination
 * across any array/collection type.
 */
var SliceArgsType = exports.SliceArgsType = new _graphql.GraphQLInputObjectType({
  name: 'SliceArgs',
  description: 'Slice arguments',
  fields: {
    limit: {
      type: _graphql.GraphQLInt,
      defaultValue: 25
    },
    offset: {
      type: _graphql.GraphQLInt,
      defaultValue: 0
    }
  }
});

/**
 * Unsigned int GQL type.
 */
var UInt = exports.UInt = new _graphql.GraphQLScalarType({
  name: 'UInt',
  serialize: function serialize(value) {
    return value && value >= 0 ? value : null;
  },
  parseValue: function parseValue(value) {
    return value && value >= 0 ? value : null;
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === _graphql.Kind.INT) {
      return parseInt(ast.value, 10) >= 0 || null;
    }
    return null;
  }
});

/**
 * Record ID items.
 */
var RecordID = exports.RecordID = new _graphql.GraphQLNonNull(UInt);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SliceArgsType, 'SliceArgsType', '/home/luis/Work/react-reddit/src/back/gql/models/global/types.js');
  reactHotLoader.register(UInt, 'UInt', '/home/luis/Work/react-reddit/src/back/gql/models/global/types.js');
  reactHotLoader.register(RecordID, 'RecordID', '/home/luis/Work/react-reddit/src/back/gql/models/global/types.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/gql/models/users/mutations.js":
/*!************************************************!*\
  !*** ./src/back/gql/models/users/mutations.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserMutation = undefined;

var _types = __webpack_require__(/*! ./types */ "./src/back/gql/models/users/types.js");

var _db = __webpack_require__(/*! ../../../util/db */ "./src/back/util/db.js");

var _db2 = _interopRequireDefault(_db);

var _user = __webpack_require__(/*! ../../../util/user */ "./src/back/util/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();
/**
 * @file Mutations related to the User model.
 */


/**
 * Mutation that enables to create a new user
 */
var CreateUserMutation = exports.CreateUserMutation = {
  name: 'CreateUser',
  type: _types.UserType,
  args: {
    input: {
      type: _types.CreateUserInputType
    }
  },
  resolve: function resolve(src, _ref) {
    var input = _ref.input;

    if (_db2.default.users.some(function (user) {
      return user.username === input.username;
    })) {
      throw new Error('username is already taken');
    }

    if (_db2.default.users.some(function (user) {
      return user.email === input.email;
    })) {
      throw new Error('email is already taken');
    }

    if (input.password !== input.passwordConfirm) {
      throw new Error('passwords do not match');
    }

    var user = (0, _user.generateUser)(input);
    (0, _db.add)('users', user);

    return user;
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CreateUserMutation, 'CreateUserMutation', '/home/luis/Work/react-reddit/src/back/gql/models/users/mutations.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/gql/models/users/queries.js":
/*!**********************************************!*\
  !*** ./src/back/gql/models/users/queries.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUserQuery = exports.SingleUserQuery = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @file Queries regarding user
                                                                                                                                                                                                                                                                   */


var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _types = __webpack_require__(/*! ./types */ "./src/back/gql/models/users/types.js");

var _db = __webpack_require__(/*! ../../../util/db */ "./src/back/util/db.js");

var _db2 = _interopRequireDefault(_db);

var _gql = __webpack_require__(/*! ../../../util/gql */ "./src/back/util/gql.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

/**
 * Query to get a single user.
 */
var SingleUserQuery = exports.SingleUserQuery = {
  name: 'User',
  type: _types.UserType,
  args: {
    id: {
      description: 'ID of the user to look for',
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    }
  },
  resolve: function resolve(src, _ref) {
    var id = _ref.id;

    return _db2.default.users.find(function (user) {
      return user.id === id;
    });
  }
};

/**
 * Query to get the list of users out of the database.
 */
var ListUserQuery = exports.ListUserQuery = {
  name: 'Users',
  type: new _graphql.GraphQLList(_types.UserType),
  args: _extends({}, (0, _gql.getSliceArgs)()),
  resolve: function resolve(src, _ref2) {
    var _ref2$slice = _ref2.slice,
        slice = _ref2$slice === undefined ? {} : _ref2$slice;

    return (0, _gql.getSlicedList)(_db2.default.users, slice);
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SingleUserQuery, 'SingleUserQuery', '/home/luis/Work/react-reddit/src/back/gql/models/users/queries.js');
  reactHotLoader.register(ListUserQuery, 'ListUserQuery', '/home/luis/Work/react-reddit/src/back/gql/models/users/queries.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/gql/models/users/types.js":
/*!********************************************!*\
  !*** ./src/back/gql/models/users/types.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserInputType = exports.UserType = undefined;

var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _types = __webpack_require__(/*! ../global/types */ "./src/back/gql/models/global/types.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * @file User model type definition
       */


var UserType = exports.UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  description: 'Single user item',
  fields: {
    id: {
      type: _types.RecordID
    },
    name: {
      type: _graphql.GraphQLString
    },
    email: {
      type: _graphql.GraphQLString
    },
    username: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  }
});

var CreateUserInputType = exports.CreateUserInputType = new _graphql.GraphQLInputObjectType({
  name: 'CreateUserInputType',
  description: 'Input needed to create an User record',
  fields: {
    username: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    passwordConfirm: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  }
});

var _default = UserType;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserType, 'UserType', '/home/luis/Work/react-reddit/src/back/gql/models/users/types.js');
  reactHotLoader.register(CreateUserInputType, 'CreateUserInputType', '/home/luis/Work/react-reddit/src/back/gql/models/users/types.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/gql/models/users/types.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/gql/mutation.js":
/*!**********************************!*\
  !*** ./src/back/gql/mutation.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _mutations = __webpack_require__(/*! ./models/users/mutations */ "./src/back/gql/models/users/mutations.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * @file Mutation type definitions
       */


var mutation = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: _mutations.CreateUserMutation
  }
});

var _default = mutation;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mutation, 'mutation', '/home/luis/Work/react-reddit/src/back/gql/mutation.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/gql/mutation.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/gql/query.js":
/*!*******************************!*\
  !*** ./src/back/gql/query.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _queries = __webpack_require__(/*! ./models/users/queries */ "./src/back/gql/models/users/queries.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * @file Query type definitions
       */


var query = new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: _queries.SingleUserQuery,
    users: _queries.ListUserQuery
  }
});

var _default = query;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(query, 'query', '/home/luis/Work/react-reddit/src/back/gql/query.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/gql/query.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/index.js":
/*!***************************!*\
  !*** ./src/back/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! babel-polyfill */ "babel-polyfill");

var _dotenv = __webpack_require__(/*! dotenv */ "dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _server = __webpack_require__(/*! ./server/server */ "./src/back/server/server.js");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add .env config
_dotenv2.default.config();
// Start up server:
/**
 * @file entry point for the server initialization.
 */

(0, _server2.default)();

/***/ }),

/***/ "./src/back/routes/front-end.js":
/*!**************************************!*\
  !*** ./src/back/routes/front-end.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _config = __webpack_require__(/*! ../util/config */ "./src/back/util/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * @file Front end related routes
       */


var router = _express2.default.Router();

router.get('*', function (req, res) {
  res.send('\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>React Reddit</title>\n        <script type="text/javascript">\n          window.__CONFIG__ = ' + JSON.stringify((0, _config.frontEndConfig)()) + '\n        </script>\n    </head>\n    <body>\n        <div id="app"></div>\n        <script type="text/javascript" src="dist/reddit.bundle.js"></script>\n    </body>\n    </html>\n  ');
});

var _default = router;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, 'router', '/home/luis/Work/react-reddit/src/back/routes/front-end.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/routes/front-end.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/server/server.js":
/*!***********************************!*\
  !*** ./src/back/server/server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(/*! config */ "config");

var _config2 = _interopRequireDefault(_config);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _log = __webpack_require__(/*! ../util/log */ "./src/back/util/log.js");

var _log2 = _interopRequireDefault(_log);

var _index = __webpack_require__(/*! ../gql/index */ "./src/back/gql/index.js");

var _index2 = _interopRequireDefault(_index);

var _frontEnd = __webpack_require__(/*! ../routes/front-end */ "./src/back/routes/front-end.js");

var _frontEnd2 = _interopRequireDefault(_frontEnd);

var _boot = __webpack_require__(/*! ../util/boot */ "./src/back/util/boot.js");

var _boot2 = _interopRequireDefault(_boot);

var _hotModuleReloading = __webpack_require__(/*! ../util/hotModuleReloading */ "./src/back/util/hotModuleReloading.js");

var _hotModuleReloading2 = _interopRequireDefault(_hotModuleReloading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @file server initialization file.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var app = (0, _express2.default)();
var log = (0, _log2.default)('server');

// Hot reloading:
(0, _hotModuleReloading2.default)(app);

app.use(_bodyParser2.default.json());
app.use(_express2.default.static('./'));

_index2.default.applyMiddleware({ app: app });

/**
 * Routers:
 */
app.use(_frontEnd2.default);

/**
 * health end-points
 */
app.get('/health-check', function (req, res) {
  return res.json({ healthy: true });
});

var _default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var port;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _boot2.default)();
            port = _config2.default.get('server.port');


            app.listen(port, function () {
              log.info('Server initialized on port: ' + port);
              log.info('GQL running at: ' + _index2.default.graphqlPath);
            });

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function _default() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, 'app', '/home/luis/Work/react-reddit/src/back/server/server.js');
  reactHotLoader.register(log, 'log', '/home/luis/Work/react-reddit/src/back/server/server.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/server/server.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/util/boot.js":
/*!*******************************!*\
  !*** ./src/back/util/boot.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(/*! ./user */ "./src/back/util/user.js");

var _db = __webpack_require__(/*! ./db */ "./src/back/util/db.js");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * @file Boot file for the DB.
       */


/**
 * Initializes some data in the Database
 */
var bootDB = function bootDB() {
  _db2.default.users = (0, _user.generateUserBase)();
};

var _default = function _default() {
  bootDB();
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(bootDB, 'bootDB', '/home/luis/Work/react-reddit/src/back/util/boot.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/util/boot.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/util/config.js":
/*!*********************************!*\
  !*** ./src/back/util/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDev = exports.frontEndConfig = undefined;

var _config = __webpack_require__(/*! config */ "config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * @file Configuration helper related methods.
       */


/**
 * Returns config to be used in the front-end
 */
var frontEndConfig = exports.frontEndConfig = function frontEndConfig() {
  var baseUrl = _config2.default.get('baseUrl');

  return {
    baseUrl: baseUrl,
    graphqlEndpoint: baseUrl + 'graphql'
  };
};

/**
 * Checks if current environment is dev.
 */
var isDev = exports.isDev = function isDev() {
  return "development" === 'dev';
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(frontEndConfig, 'frontEndConfig', '/home/luis/Work/react-reddit/src/back/util/config.js');
  reactHotLoader.register(isDev, 'isDev', '/home/luis/Work/react-reddit/src/back/util/config.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/util/db.js":
/*!*****************************!*\
  !*** ./src/back/util/db.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @file Helper to handle generated in-memory database.
 */
/**
 * The database object. Each key here represents
 * a table
 */
var Database = {
  users: []
};

/**
 * Stores the last given ID to the user
 */
var IDRecords = {
  users: 0
};

/**
 * Clears all of the database 'tables'.
 */
var clear = exports.clear = function clear() {
  var keys = Object.keys(Database);
  keys.forEach(function (key) {
    Database[key] = [];
    IDRecords[key] = 0;
  });
};

/**
 * Adds an element to the Database object.
 * @param {String} table The database table name in which the element will be added
 * @param {*} elem Element to be added.
 */
var add = exports.add = function add(table, elem) {
  if (!table || !elem || !Database[table]) {
    return; // nothing to do. Won't add anything.
  }

  Database[table] = [].concat(_toConsumableArray(Database[table]), [elem]);
};

/**
 * Removes an element by ID
 * @param {string} table The database name in which the element will be removed.
 * @param {number} id ID of the element to be removed
 */
var removeById = exports.removeById = function removeById(table, id) {
  if (!table || typeof id === 'undefined' || !Database[table]) {
    return;
  }

  Database[table] = Database[table].filter(function (elem) {
    return elem.id !== id;
  });
};

/**
 * Gets a new, unique, ID for a given table.
 * @param {String} table The database name to which the ID is looked for.
 */
var getIdForTable = exports.getIdForTable = function getIdForTable(table) {
  IDRecords[table] += 1;
  return IDRecords[table];
};

var _default = Database;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Database, 'Database', '/home/luis/Work/react-reddit/src/back/util/db.js');
  reactHotLoader.register(IDRecords, 'IDRecords', '/home/luis/Work/react-reddit/src/back/util/db.js');
  reactHotLoader.register(clear, 'clear', '/home/luis/Work/react-reddit/src/back/util/db.js');
  reactHotLoader.register(add, 'add', '/home/luis/Work/react-reddit/src/back/util/db.js');
  reactHotLoader.register(removeById, 'removeById', '/home/luis/Work/react-reddit/src/back/util/db.js');
  reactHotLoader.register(getIdForTable, 'getIdForTable', '/home/luis/Work/react-reddit/src/back/util/db.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/util/db.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/util/gql.js":
/*!******************************!*\
  !*** ./src/back/util/gql.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSlicedList = exports.getSliceArgs = undefined;

var _types = __webpack_require__(/*! ../gql/models/global/types */ "./src/back/gql/models/global/types.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * @file GQL helper methods
                                                                                                                                                                                                     */


/**
 * Returns the sliced arguments to be used
 * on GQL type definitions.
 */
var getSliceArgs = exports.getSliceArgs = function getSliceArgs() {
  return {
    slice: {
      description: 'Slice arguments for lists',
      type: _types.SliceArgsType
    }
  };
};

/**
 * Given a list, slices it and returns it based on
 * sliceArgs.
 * @param {Array} list List to be sliced
 * @param {Object} slice Parameters for slicing, expecting limit & offset.
 */
var getSlicedList = exports.getSlicedList = function getSlicedList(list, slice) {
  if (!slice) {
    return [].concat(_toConsumableArray(list));
  }

  var _slice$offset = slice.offset,
      offset = _slice$offset === undefined ? 0 : _slice$offset,
      _slice$limit = slice.limit,
      limit = _slice$limit === undefined ? 25 : _slice$limit;


  var resolvedList = [].concat(_toConsumableArray(list));

  if (offset) {
    resolvedList = resolvedList.slice(offset);
  }

  if (limit) {
    resolvedList = resolvedList.slice(0, limit);
  }

  return resolvedList;
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getSliceArgs, 'getSliceArgs', '/home/luis/Work/react-reddit/src/back/util/gql.js');
  reactHotLoader.register(getSlicedList, 'getSlicedList', '/home/luis/Work/react-reddit/src/back/util/gql.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/util/hotModuleReloading.js":
/*!*********************************************!*\
  !*** ./src/back/util/hotModuleReloading.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = __webpack_require__(/*! webpack */ "webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackDevFront = __webpack_require__(/*! ../../../config/webpack/webpack.dev.front.config */ "./config/webpack/webpack.dev.front.config.js");

var _webpackDevFront2 = _interopRequireDefault(_webpackDevFront);

var _config = __webpack_require__(/*! ./config */ "./src/back/util/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * @file setup Hot module reloading.
       */


var clientCompiler = (0, _webpack2.default)(_webpackDevFront2.default);

var _default = function _default(app) {
  // Only do thi on dev
  if ((0, _config.isDev)()) {
    return;
  }

  app.use((0, _webpackDevMiddleware2.default)(clientCompiler, {
    noInfo: true, publicPath: _webpackDevFront2.default.output.publicPath
  }));

  app.use((0, _webpackHotMiddleware2.default)(clientCompiler));
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(clientCompiler, 'clientCompiler', '/home/luis/Work/react-reddit/src/back/util/hotModuleReloading.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/util/hotModuleReloading.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/util/log.js":
/*!******************************!*\
  !*** ./src/back/util/log.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = __webpack_require__(/*! winston */ "winston");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})(); /**
       * @file Logger creation util.
       */


var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    label = _winston.format.label,
    printf = _winston.format.printf;


var customFormat = printf(function (info) {
  return info.timestamp + ' [' + info.label + '] ' + info.level + ': ' + info.message;
});

/**
 * Returns a logger to be used on the back-end.
 * @param {String} name Name of the logger
 */
var getLogger = function getLogger(name) {
  var logger = (0, _winston.createLogger)({
    format: combine(label({ label: name }), timestamp(), customFormat),
    transports: [new _winston.transports.Console()]
  });

  return logger;
};

var _default = getLogger;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(combine, 'combine', '/home/luis/Work/react-reddit/src/back/util/log.js');
  reactHotLoader.register(timestamp, 'timestamp', '/home/luis/Work/react-reddit/src/back/util/log.js');
  reactHotLoader.register(label, 'label', '/home/luis/Work/react-reddit/src/back/util/log.js');
  reactHotLoader.register(printf, 'printf', '/home/luis/Work/react-reddit/src/back/util/log.js');
  reactHotLoader.register(customFormat, 'customFormat', '/home/luis/Work/react-reddit/src/back/util/log.js');
  reactHotLoader.register(getLogger, 'getLogger', '/home/luis/Work/react-reddit/src/back/util/log.js');
  reactHotLoader.register(_default, 'default', '/home/luis/Work/react-reddit/src/back/util/log.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/back/util/user.js":
/*!*******************************!*\
  !*** ./src/back/util/user.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateUserBase = exports.generateUser = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @file User util
                                                                                                                                                                                                                                                                   */


var _faker = __webpack_require__(/*! faker */ "faker");

var _faker2 = _interopRequireDefault(_faker);

var _db = __webpack_require__(/*! ./db */ "./src/back/util/db.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

/**
 * Generates a user with its attributes using faker.
 * BaseData can be provided for custom functionality.
 * @param {Object} baseData information to replace the generated one
 */
var generateUser = exports.generateUser = function generateUser(baseData) {
  return _extends({
    name: _faker2.default.name.findName(),
    email: _faker2.default.internet.email(),
    username: _faker2.default.internet.userName()
  }, baseData, {
    // Make sure ID is not overwritten
    id: (0, _db.getIdForTable)('users')
  });
};

/**
 * Returns a list of users with IDs from 1 to limit
 * @param {int} limit Number of users to generate (defaults to 100)
 */
var generateUserBase = exports.generateUserBase = function generateUserBase() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

  var userBase = [];

  for (var i = 1; i <= limit; i += 1) {
    userBase.push(generateUser());
  }

  return userBase;
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(generateUser, 'generateUser', '/home/luis/Work/react-reddit/src/back/util/user.js');
  reactHotLoader.register(generateUserBase, 'generateUserBase', '/home/luis/Work/react-reddit/src/back/util/user.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=server.bundle.js.map