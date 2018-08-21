!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist",r(r.s=3)}([function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecordID=t.UInt=t.SliceArgsType=void 0;var n=r(0),i=(t.SliceArgsType=new n.GraphQLInputObjectType({name:"SliceArgs",description:"Slice arguments",fields:{limit:{type:n.GraphQLInt,defaultValue:25},offset:{type:n.GraphQLInt,defaultValue:0}}}),t.UInt=new n.GraphQLScalarType({name:"UInt",serialize:function(e){return e&&e>=0?e:null},parseValue:function(e){return e&&e>=0?e:null},parseLiteral:function(e){return e.kind===n.Kind.INT&&parseInt(e.value,10)>=0||null}}));t.RecordID=new n.GraphQLNonNull(i)},function(e,t,r){"use strict";r(4),(0,function(e){return e&&e.__esModule?e:{default:e}}(r(5)).default)()},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(6)),i=l(r(1)),u=l(r(7)),o=l(r(8)),a=l(r(10)),s=l(r(19));function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,i.default)(),f=(0,o.default)("server");c.use(u.default.json()),c.use(i.default.static("./")),a.default.applyMiddleware({app:c}),c.use(s.default),c.get("/health-check",function(e,t){return t.json({healthy:!0})}),t.default=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(i,u){try{var o=t[i](u),a=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});e(a)}("next")})}}(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.default.get("server.port"),c.listen(t,function(){f.info("Server initialized on port: "+t),f.info("GQL running at: "+a.default.graphqlPath)});case 2:case"end":return e.stop()}},e,void 0)}))},function(e,t){e.exports=require("config")},function(e,t){e.exports=require("body-parser")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=n.format.combine,u=n.format.timestamp,o=n.format.label,a=(0,n.format.printf)(function(e){return e.timestamp+" ["+e.label+"] "+e.level+": "+e.message});t.default=function(e){return(0,n.createLogger)({format:i(o({label:e}),u(),a),transports:[new n.transports.Console]})}},function(e,t){e.exports=require("winston")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(11),i=r(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r(12));var o=new i.GraphQLSchema({query:u.default});t.default=new n.ApolloServer({schema:o,playground:{settings:{"editor.cursorShape":"line"}}})},function(e,t){e.exports=require("apollo-server-express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i=r(13),u=new n.GraphQLObjectType({name:"Query",fields:{user:i.SingleUserQuery,users:i.ListUserQuery}});t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListUserQuery=t.SingleUserQuery=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(0),u=r(14),o=function(e){return e&&e.__esModule?e:{default:e}}(r(15)),a=r(18);t.SingleUserQuery={name:"User",type:u.UserType,args:{id:{description:"ID of the user to look for",type:new i.GraphQLNonNull(i.GraphQLInt)}},resolve:function(e,t){var r=t.id;return o.default.users.find(function(e){return e.id===r})}},t.ListUserQuery={name:"Users",type:new i.GraphQLList(u.UserType),args:n({},(0,a.getSliceArgs)()),resolve:function(e,t){var r=t.slice,n=void 0===r?{}:r;return(0,a.getSlicedList)(o.default.users,n)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserType=void 0;var n=r(0),i=r(2),u=t.UserType=new n.GraphQLObjectType({name:"User",description:"Single user item",fields:{id:{type:i.RecordID},name:{type:n.GraphQLString},email:{type:n.GraphQLString},username:{type:new n.GraphQLNonNull(n.GraphQLString)}}});t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeById=t.add=t.clear=void 0;var n={users:(0,r(16).generateUserBase)()};t.clear=function(){Object.keys(n).forEach(function(e){n[e]=[]})},t.add=function(e,t){e&&t&&n[e]&&(n[e]=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(n[e]),[t]))},t.removeById=function(e,t){e&&void 0!==t&&n[e]&&(n[e]=n[e].filter(function(e){return e.id!==t}))};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateUserBase=t.generateUser=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e){return e&&e.__esModule?e:{default:e}}(r(17));var u=t.generateUser=function(e){return n({id:i.default.random.uuid(),name:i.default.name.findName(),email:i.default.internet.email(),username:i.default.internet.userName()},e)};t.generateUserBase=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=[],r=1;r<=e;r+=1)t.push(u({id:r}));return t}},function(e,t){e.exports=require("faker")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSlicedList=t.getSliceArgs=void 0;var n=r(2);t.getSliceArgs=function(){return{slice:{description:"Slice arguments for lists",type:n.SliceArgsType}}},t.getSlicedList=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.offset,n=t.limit,i=void 0===n?25:n,u=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e));return r&&(u=u.slice(r)),i&&(u=u.slice(0,i)),u}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1)).default.Router();n.get("*",function(e,t){t.send('\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>My React App</title>\n    </head>\n    <body>\n        <div id="app"></div>\n        <script type="text/javascript" src="dist/reddit.bundle.js"><\/script>\n    </body>\n    </html>\n  ')}),t.default=n}]);
//# sourceMappingURL=server.bundle.js.map