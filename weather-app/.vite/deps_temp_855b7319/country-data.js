import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-CEQRFMJQ.js";

// node_modules/underscore/modules/_setup.js
var VERSION, root, ArrayProto, ObjProto, SymbolProto, push, slice, toString, hasOwnProperty, supportsArrayBuffer, supportsDataView, nativeIsArray, nativeKeys, nativeCreate, nativeIsView, _isNaN, _isFinite, hasEnumBug, nonEnumerableProps, MAX_ARRAY_INDEX;
var init_setup = __esm({
  "node_modules/underscore/modules/_setup.js"() {
    VERSION = "1.13.6";
    root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
    ArrayProto = Array.prototype;
    ObjProto = Object.prototype;
    SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
    push = ArrayProto.push;
    slice = ArrayProto.slice;
    toString = ObjProto.toString;
    hasOwnProperty = ObjProto.hasOwnProperty;
    supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
    supportsDataView = typeof DataView !== "undefined";
    nativeIsArray = Array.isArray;
    nativeKeys = Object.keys;
    nativeCreate = Object.create;
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
    _isNaN = isNaN;
    _isFinite = isFinite;
    hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
    nonEnumerableProps = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString"
    ];
    MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  }
});

// node_modules/underscore/modules/restArguments.js
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
    for (; index < length; index++) {
      rest2[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest2);
      case 1:
        return func.call(this, arguments[0], rest2);
      case 2:
        return func.call(this, arguments[0], arguments[1], rest2);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest2;
    return func.apply(this, args);
  };
}
var init_restArguments = __esm({
  "node_modules/underscore/modules/restArguments.js"() {
  }
});

// node_modules/underscore/modules/isObject.js
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || type === "object" && !!obj;
}
var init_isObject = __esm({
  "node_modules/underscore/modules/isObject.js"() {
  }
});

// node_modules/underscore/modules/isNull.js
function isNull(obj) {
  return obj === null;
}
var init_isNull = __esm({
  "node_modules/underscore/modules/isNull.js"() {
  }
});

// node_modules/underscore/modules/isUndefined.js
function isUndefined(obj) {
  return obj === void 0;
}
var init_isUndefined = __esm({
  "node_modules/underscore/modules/isUndefined.js"() {
  }
});

// node_modules/underscore/modules/isBoolean.js
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
}
var init_isBoolean = __esm({
  "node_modules/underscore/modules/isBoolean.js"() {
    init_setup();
  }
});

// node_modules/underscore/modules/isElement.js
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}
var init_isElement = __esm({
  "node_modules/underscore/modules/isElement.js"() {
  }
});

// node_modules/underscore/modules/_tagTester.js
function tagTester(name) {
  var tag = "[object " + name + "]";
  return function(obj) {
    return toString.call(obj) === tag;
  };
}
var init_tagTester = __esm({
  "node_modules/underscore/modules/_tagTester.js"() {
    init_setup();
  }
});

// node_modules/underscore/modules/isString.js
var isString_default;
var init_isString = __esm({
  "node_modules/underscore/modules/isString.js"() {
    init_tagTester();
    isString_default = tagTester("String");
  }
});

// node_modules/underscore/modules/isNumber.js
var isNumber_default;
var init_isNumber = __esm({
  "node_modules/underscore/modules/isNumber.js"() {
    init_tagTester();
    isNumber_default = tagTester("Number");
  }
});

// node_modules/underscore/modules/isDate.js
var isDate_default;
var init_isDate = __esm({
  "node_modules/underscore/modules/isDate.js"() {
    init_tagTester();
    isDate_default = tagTester("Date");
  }
});

// node_modules/underscore/modules/isRegExp.js
var isRegExp_default;
var init_isRegExp = __esm({
  "node_modules/underscore/modules/isRegExp.js"() {
    init_tagTester();
    isRegExp_default = tagTester("RegExp");
  }
});

// node_modules/underscore/modules/isError.js
var isError_default;
var init_isError = __esm({
  "node_modules/underscore/modules/isError.js"() {
    init_tagTester();
    isError_default = tagTester("Error");
  }
});

// node_modules/underscore/modules/isSymbol.js
var isSymbol_default;
var init_isSymbol = __esm({
  "node_modules/underscore/modules/isSymbol.js"() {
    init_tagTester();
    isSymbol_default = tagTester("Symbol");
  }
});

// node_modules/underscore/modules/isArrayBuffer.js
var isArrayBuffer_default;
var init_isArrayBuffer = __esm({
  "node_modules/underscore/modules/isArrayBuffer.js"() {
    init_tagTester();
    isArrayBuffer_default = tagTester("ArrayBuffer");
  }
});

// node_modules/underscore/modules/isFunction.js
var isFunction, nodelist, isFunction_default;
var init_isFunction = __esm({
  "node_modules/underscore/modules/isFunction.js"() {
    init_tagTester();
    init_setup();
    isFunction = tagTester("Function");
    nodelist = root.document && root.document.childNodes;
    if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
      isFunction = function(obj) {
        return typeof obj == "function" || false;
      };
    }
    isFunction_default = isFunction;
  }
});

// node_modules/underscore/modules/_hasObjectTag.js
var hasObjectTag_default;
var init_hasObjectTag = __esm({
  "node_modules/underscore/modules/_hasObjectTag.js"() {
    init_tagTester();
    hasObjectTag_default = tagTester("Object");
  }
});

// node_modules/underscore/modules/_stringTagBug.js
var hasStringTagBug, isIE11;
var init_stringTagBug = __esm({
  "node_modules/underscore/modules/_stringTagBug.js"() {
    init_setup();
    init_hasObjectTag();
    hasStringTagBug = supportsDataView && hasObjectTag_default(new DataView(new ArrayBuffer(8)));
    isIE11 = typeof Map !== "undefined" && hasObjectTag_default(/* @__PURE__ */ new Map());
  }
});

// node_modules/underscore/modules/isDataView.js
function ie10IsDataView(obj) {
  return obj != null && isFunction_default(obj.getInt8) && isArrayBuffer_default(obj.buffer);
}
var isDataView, isDataView_default;
var init_isDataView = __esm({
  "node_modules/underscore/modules/isDataView.js"() {
    init_tagTester();
    init_isFunction();
    init_isArrayBuffer();
    init_stringTagBug();
    isDataView = tagTester("DataView");
    isDataView_default = hasStringTagBug ? ie10IsDataView : isDataView;
  }
});

// node_modules/underscore/modules/isArray.js
var isArray_default;
var init_isArray = __esm({
  "node_modules/underscore/modules/isArray.js"() {
    init_setup();
    init_tagTester();
    isArray_default = nativeIsArray || tagTester("Array");
  }
});

// node_modules/underscore/modules/_has.js
function has(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
var init_has = __esm({
  "node_modules/underscore/modules/_has.js"() {
    init_setup();
  }
});

// node_modules/underscore/modules/isArguments.js
var isArguments, isArguments_default;
var init_isArguments = __esm({
  "node_modules/underscore/modules/isArguments.js"() {
    init_tagTester();
    init_has();
    isArguments = tagTester("Arguments");
    (function() {
      if (!isArguments(arguments)) {
        isArguments = function(obj) {
          return has(obj, "callee");
        };
      }
    })();
    isArguments_default = isArguments;
  }
});

// node_modules/underscore/modules/isFinite.js
function isFinite2(obj) {
  return !isSymbol_default(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
}
var init_isFinite = __esm({
  "node_modules/underscore/modules/isFinite.js"() {
    init_setup();
    init_isSymbol();
  }
});

// node_modules/underscore/modules/isNaN.js
function isNaN2(obj) {
  return isNumber_default(obj) && _isNaN(obj);
}
var init_isNaN = __esm({
  "node_modules/underscore/modules/isNaN.js"() {
    init_setup();
    init_isNumber();
  }
});

// node_modules/underscore/modules/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var init_constant = __esm({
  "node_modules/underscore/modules/constant.js"() {
  }
});

// node_modules/underscore/modules/_createSizePropertyCheck.js
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
  };
}
var init_createSizePropertyCheck = __esm({
  "node_modules/underscore/modules/_createSizePropertyCheck.js"() {
    init_setup();
  }
});

// node_modules/underscore/modules/_shallowProperty.js
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}
var init_shallowProperty = __esm({
  "node_modules/underscore/modules/_shallowProperty.js"() {
  }
});

// node_modules/underscore/modules/_getByteLength.js
var getByteLength_default;
var init_getByteLength = __esm({
  "node_modules/underscore/modules/_getByteLength.js"() {
    init_shallowProperty();
    getByteLength_default = shallowProperty("byteLength");
  }
});

// node_modules/underscore/modules/_isBufferLike.js
var isBufferLike_default;
var init_isBufferLike = __esm({
  "node_modules/underscore/modules/_isBufferLike.js"() {
    init_createSizePropertyCheck();
    init_getByteLength();
    isBufferLike_default = createSizePropertyCheck(getByteLength_default);
  }
});

// node_modules/underscore/modules/isTypedArray.js
function isTypedArray(obj) {
  return nativeIsView ? nativeIsView(obj) && !isDataView_default(obj) : isBufferLike_default(obj) && typedArrayPattern.test(toString.call(obj));
}
var typedArrayPattern, isTypedArray_default;
var init_isTypedArray = __esm({
  "node_modules/underscore/modules/isTypedArray.js"() {
    init_setup();
    init_isDataView();
    init_constant();
    init_isBufferLike();
    typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
    isTypedArray_default = supportsArrayBuffer ? isTypedArray : constant(false);
  }
});

// node_modules/underscore/modules/_getLength.js
var getLength_default;
var init_getLength = __esm({
  "node_modules/underscore/modules/_getLength.js"() {
    init_shallowProperty();
    getLength_default = shallowProperty("length");
  }
});

// node_modules/underscore/modules/_collectNonEnumProps.js
function emulatedSet(keys2) {
  var hash = {};
  for (var l = keys2.length, i = 0; i < l; ++i)
    hash[keys2[i]] = true;
  return {
    contains: function(key) {
      return hash[key] === true;
    },
    push: function(key) {
      hash[key] = true;
      return keys2.push(key);
    }
  };
}
function collectNonEnumProps(obj, keys2) {
  keys2 = emulatedSet(keys2);
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction_default(constructor) && constructor.prototype || ObjProto;
  var prop = "constructor";
  if (has(obj, prop) && !keys2.contains(prop))
    keys2.push(prop);
  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
      keys2.push(prop);
    }
  }
}
var init_collectNonEnumProps = __esm({
  "node_modules/underscore/modules/_collectNonEnumProps.js"() {
    init_setup();
    init_isFunction();
    init_has();
  }
});

// node_modules/underscore/modules/keys.js
function keys(obj) {
  if (!isObject(obj))
    return [];
  if (nativeKeys)
    return nativeKeys(obj);
  var keys2 = [];
  for (var key in obj)
    if (has(obj, key))
      keys2.push(key);
  if (hasEnumBug)
    collectNonEnumProps(obj, keys2);
  return keys2;
}
var init_keys = __esm({
  "node_modules/underscore/modules/keys.js"() {
    init_isObject();
    init_setup();
    init_has();
    init_collectNonEnumProps();
  }
});

// node_modules/underscore/modules/isEmpty.js
function isEmpty(obj) {
  if (obj == null)
    return true;
  var length = getLength_default(obj);
  if (typeof length == "number" && (isArray_default(obj) || isString_default(obj) || isArguments_default(obj)))
    return length === 0;
  return getLength_default(keys(obj)) === 0;
}
var init_isEmpty = __esm({
  "node_modules/underscore/modules/isEmpty.js"() {
    init_getLength();
    init_isArray();
    init_isString();
    init_isArguments();
    init_keys();
  }
});

// node_modules/underscore/modules/isMatch.js
function isMatch(object2, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object2 == null)
    return !length;
  var obj = Object(object2);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj))
      return false;
  }
  return true;
}
var init_isMatch = __esm({
  "node_modules/underscore/modules/isMatch.js"() {
    init_keys();
  }
});

// node_modules/underscore/modules/underscore.js
function _(obj) {
  if (obj instanceof _)
    return obj;
  if (!(this instanceof _))
    return new _(obj);
  this._wrapped = obj;
}
var init_underscore = __esm({
  "node_modules/underscore/modules/underscore.js"() {
    init_setup();
    _.VERSION = VERSION;
    _.prototype.value = function() {
      return this._wrapped;
    };
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
    _.prototype.toString = function() {
      return String(this._wrapped);
    };
  }
});

// node_modules/underscore/modules/_toBufferView.js
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    getByteLength_default(bufferSource)
  );
}
var init_toBufferView = __esm({
  "node_modules/underscore/modules/_toBufferView.js"() {
    init_getByteLength();
  }
});

// node_modules/underscore/modules/isEqual.js
function eq(a, b, aStack, bStack) {
  if (a === b)
    return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null)
    return false;
  if (a !== a)
    return b !== b;
  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object")
    return false;
  return deepEq(a, b, aStack, bStack);
}
function deepEq(a, b, aStack, bStack) {
  if (a instanceof _)
    a = a._wrapped;
  if (b instanceof _)
    b = b._wrapped;
  var className = toString.call(a);
  if (className !== toString.call(b))
    return false;
  if (hasStringTagBug && className == "[object Object]" && isDataView_default(a)) {
    if (!isDataView_default(b))
      return false;
    className = tagDataView;
  }
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a)
        return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object Symbol]":
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    case "[object ArrayBuffer]":
    case tagDataView:
      return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
  }
  var areArrays = className === "[object Array]";
  if (!areArrays && isTypedArray_default(a)) {
    var byteLength = getByteLength_default(a);
    if (byteLength !== getByteLength_default(b))
      return false;
    if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
      return true;
    areArrays = true;
  }
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object")
      return false;
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction_default(aCtor) && aCtor instanceof aCtor && isFunction_default(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
      return false;
    }
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length)
      return false;
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack))
        return false;
    }
  } else {
    var _keys = keys(a), key;
    length = _keys.length;
    if (keys(b).length !== length)
      return false;
    while (length--) {
      key = _keys[length];
      if (!(has(b, key) && eq(a[key], b[key], aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function isEqual(a, b) {
  return eq(a, b);
}
var tagDataView;
var init_isEqual = __esm({
  "node_modules/underscore/modules/isEqual.js"() {
    init_underscore();
    init_setup();
    init_getByteLength();
    init_isTypedArray();
    init_isFunction();
    init_stringTagBug();
    init_isDataView();
    init_keys();
    init_has();
    init_toBufferView();
    tagDataView = "[object DataView]";
  }
});

// node_modules/underscore/modules/allKeys.js
function allKeys(obj) {
  if (!isObject(obj))
    return [];
  var keys2 = [];
  for (var key in obj)
    keys2.push(key);
  if (hasEnumBug)
    collectNonEnumProps(obj, keys2);
  return keys2;
}
var init_allKeys = __esm({
  "node_modules/underscore/modules/allKeys.js"() {
    init_isObject();
    init_setup();
    init_collectNonEnumProps();
  }
});

// node_modules/underscore/modules/_methodFingerprint.js
function ie11fingerprint(methods) {
  var length = getLength_default(methods);
  return function(obj) {
    if (obj == null)
      return false;
    var keys2 = allKeys(obj);
    if (getLength_default(keys2))
      return false;
    for (var i = 0; i < length; i++) {
      if (!isFunction_default(obj[methods[i]]))
        return false;
    }
    return methods !== weakMapMethods || !isFunction_default(obj[forEachName]);
  };
}
var forEachName, hasName, commonInit, mapTail, mapMethods, weakMapMethods, setMethods;
var init_methodFingerprint = __esm({
  "node_modules/underscore/modules/_methodFingerprint.js"() {
    init_getLength();
    init_isFunction();
    init_allKeys();
    forEachName = "forEach";
    hasName = "has";
    commonInit = ["clear", "delete"];
    mapTail = ["get", hasName, "set"];
    mapMethods = commonInit.concat(forEachName, mapTail);
    weakMapMethods = commonInit.concat(mapTail);
    setMethods = ["add"].concat(commonInit, forEachName, hasName);
  }
});

// node_modules/underscore/modules/isMap.js
var isMap_default;
var init_isMap = __esm({
  "node_modules/underscore/modules/isMap.js"() {
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isMap_default = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
  }
});

// node_modules/underscore/modules/isWeakMap.js
var isWeakMap_default;
var init_isWeakMap = __esm({
  "node_modules/underscore/modules/isWeakMap.js"() {
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isWeakMap_default = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
  }
});

// node_modules/underscore/modules/isSet.js
var isSet_default;
var init_isSet = __esm({
  "node_modules/underscore/modules/isSet.js"() {
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isSet_default = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
  }
});

// node_modules/underscore/modules/isWeakSet.js
var isWeakSet_default;
var init_isWeakSet = __esm({
  "node_modules/underscore/modules/isWeakSet.js"() {
    init_tagTester();
    isWeakSet_default = tagTester("WeakSet");
  }
});

// node_modules/underscore/modules/values.js
function values(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var values2 = Array(length);
  for (var i = 0; i < length; i++) {
    values2[i] = obj[_keys[i]];
  }
  return values2;
}
var init_values = __esm({
  "node_modules/underscore/modules/values.js"() {
    init_keys();
  }
});

// node_modules/underscore/modules/pairs.js
function pairs(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs2 = Array(length);
  for (var i = 0; i < length; i++) {
    pairs2[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs2;
}
var init_pairs = __esm({
  "node_modules/underscore/modules/pairs.js"() {
    init_keys();
  }
});

// node_modules/underscore/modules/invert.js
function invert(obj) {
  var result2 = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result2[obj[_keys[i]]] = _keys[i];
  }
  return result2;
}
var init_invert = __esm({
  "node_modules/underscore/modules/invert.js"() {
    init_keys();
  }
});

// node_modules/underscore/modules/functions.js
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction_default(obj[key]))
      names.push(key);
  }
  return names.sort();
}
var init_functions = __esm({
  "node_modules/underscore/modules/functions.js"() {
    init_isFunction();
  }
});

// node_modules/underscore/modules/_createAssigner.js
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults)
      obj = Object(obj);
    if (length < 2 || obj == null)
      return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
      for (var i = 0; i < l; i++) {
        var key = keys2[i];
        if (!defaults || obj[key] === void 0)
          obj[key] = source[key];
      }
    }
    return obj;
  };
}
var init_createAssigner = __esm({
  "node_modules/underscore/modules/_createAssigner.js"() {
  }
});

// node_modules/underscore/modules/extend.js
var extend_default;
var init_extend = __esm({
  "node_modules/underscore/modules/extend.js"() {
    init_createAssigner();
    init_allKeys();
    extend_default = createAssigner(allKeys);
  }
});

// node_modules/underscore/modules/extendOwn.js
var extendOwn_default;
var init_extendOwn = __esm({
  "node_modules/underscore/modules/extendOwn.js"() {
    init_createAssigner();
    init_keys();
    extendOwn_default = createAssigner(keys);
  }
});

// node_modules/underscore/modules/defaults.js
var defaults_default;
var init_defaults = __esm({
  "node_modules/underscore/modules/defaults.js"() {
    init_createAssigner();
    init_allKeys();
    defaults_default = createAssigner(allKeys, true);
  }
});

// node_modules/underscore/modules/_baseCreate.js
function ctor() {
  return function() {
  };
}
function baseCreate(prototype) {
  if (!isObject(prototype))
    return {};
  if (nativeCreate)
    return nativeCreate(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result2 = new Ctor();
  Ctor.prototype = null;
  return result2;
}
var init_baseCreate = __esm({
  "node_modules/underscore/modules/_baseCreate.js"() {
    init_isObject();
    init_setup();
  }
});

// node_modules/underscore/modules/create.js
function create(prototype, props) {
  var result2 = baseCreate(prototype);
  if (props)
    extendOwn_default(result2, props);
  return result2;
}
var init_create = __esm({
  "node_modules/underscore/modules/create.js"() {
    init_baseCreate();
    init_extendOwn();
  }
});

// node_modules/underscore/modules/clone.js
function clone(obj) {
  if (!isObject(obj))
    return obj;
  return isArray_default(obj) ? obj.slice() : extend_default({}, obj);
}
var init_clone = __esm({
  "node_modules/underscore/modules/clone.js"() {
    init_isObject();
    init_isArray();
    init_extend();
  }
});

// node_modules/underscore/modules/tap.js
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}
var init_tap = __esm({
  "node_modules/underscore/modules/tap.js"() {
  }
});

// node_modules/underscore/modules/toPath.js
function toPath(path) {
  return isArray_default(path) ? path : [path];
}
var init_toPath = __esm({
  "node_modules/underscore/modules/toPath.js"() {
    init_underscore();
    init_isArray();
    _.toPath = toPath;
  }
});

// node_modules/underscore/modules/_toPath.js
function toPath2(path) {
  return _.toPath(path);
}
var init_toPath2 = __esm({
  "node_modules/underscore/modules/_toPath.js"() {
    init_underscore();
    init_toPath();
  }
});

// node_modules/underscore/modules/_deepGet.js
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null)
      return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}
var init_deepGet = __esm({
  "node_modules/underscore/modules/_deepGet.js"() {
  }
});

// node_modules/underscore/modules/get.js
function get(object2, path, defaultValue) {
  var value = deepGet(object2, toPath2(path));
  return isUndefined(value) ? defaultValue : value;
}
var init_get = __esm({
  "node_modules/underscore/modules/get.js"() {
    init_toPath2();
    init_deepGet();
    init_isUndefined();
  }
});

// node_modules/underscore/modules/has.js
function has2(obj, path) {
  path = toPath2(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!has(obj, key))
      return false;
    obj = obj[key];
  }
  return !!length;
}
var init_has2 = __esm({
  "node_modules/underscore/modules/has.js"() {
    init_has();
    init_toPath2();
  }
});

// node_modules/underscore/modules/identity.js
function identity(value) {
  return value;
}
var init_identity = __esm({
  "node_modules/underscore/modules/identity.js"() {
  }
});

// node_modules/underscore/modules/matcher.js
function matcher(attrs) {
  attrs = extendOwn_default({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
}
var init_matcher = __esm({
  "node_modules/underscore/modules/matcher.js"() {
    init_extendOwn();
    init_isMatch();
  }
});

// node_modules/underscore/modules/property.js
function property(path) {
  path = toPath2(path);
  return function(obj) {
    return deepGet(obj, path);
  };
}
var init_property = __esm({
  "node_modules/underscore/modules/property.js"() {
    init_deepGet();
    init_toPath2();
  }
});

// node_modules/underscore/modules/_optimizeCb.js
function optimizeCb(func, context, argCount) {
  if (context === void 0)
    return func;
  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function(value) {
        return func.call(context, value);
      };
    case 3:
      return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
    case 4:
      return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }
  return function() {
    return func.apply(context, arguments);
  };
}
var init_optimizeCb = __esm({
  "node_modules/underscore/modules/_optimizeCb.js"() {
  }
});

// node_modules/underscore/modules/_baseIteratee.js
function baseIteratee(value, context, argCount) {
  if (value == null)
    return identity;
  if (isFunction_default(value))
    return optimizeCb(value, context, argCount);
  if (isObject(value) && !isArray_default(value))
    return matcher(value);
  return property(value);
}
var init_baseIteratee = __esm({
  "node_modules/underscore/modules/_baseIteratee.js"() {
    init_identity();
    init_isFunction();
    init_isObject();
    init_isArray();
    init_matcher();
    init_property();
    init_optimizeCb();
  }
});

// node_modules/underscore/modules/iteratee.js
function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
}
var init_iteratee = __esm({
  "node_modules/underscore/modules/iteratee.js"() {
    init_underscore();
    init_baseIteratee();
    _.iteratee = iteratee;
  }
});

// node_modules/underscore/modules/_cb.js
function cb(value, context, argCount) {
  if (_.iteratee !== iteratee)
    return _.iteratee(value, context);
  return baseIteratee(value, context, argCount);
}
var init_cb = __esm({
  "node_modules/underscore/modules/_cb.js"() {
    init_underscore();
    init_baseIteratee();
    init_iteratee();
  }
});

// node_modules/underscore/modules/mapObject.js
function mapObject(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = keys(obj), length = _keys.length, results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
var init_mapObject = __esm({
  "node_modules/underscore/modules/mapObject.js"() {
    init_cb();
    init_keys();
  }
});

// node_modules/underscore/modules/noop.js
function noop() {
}
var init_noop = __esm({
  "node_modules/underscore/modules/noop.js"() {
  }
});

// node_modules/underscore/modules/propertyOf.js
function propertyOf(obj) {
  if (obj == null)
    return noop;
  return function(path) {
    return get(obj, path);
  };
}
var init_propertyOf = __esm({
  "node_modules/underscore/modules/propertyOf.js"() {
    init_noop();
    init_get();
  }
});

// node_modules/underscore/modules/times.js
function times(n, iteratee2, context) {
  var accum = Array(Math.max(0, n));
  iteratee2 = optimizeCb(iteratee2, context, 1);
  for (var i = 0; i < n; i++)
    accum[i] = iteratee2(i);
  return accum;
}
var init_times = __esm({
  "node_modules/underscore/modules/times.js"() {
    init_optimizeCb();
  }
});

// node_modules/underscore/modules/random.js
function random(min2, max2) {
  if (max2 == null) {
    max2 = min2;
    min2 = 0;
  }
  return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
}
var init_random = __esm({
  "node_modules/underscore/modules/random.js"() {
  }
});

// node_modules/underscore/modules/now.js
var now_default;
var init_now = __esm({
  "node_modules/underscore/modules/now.js"() {
    now_default = Date.now || function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  }
});

// node_modules/underscore/modules/_createEscaper.js
function createEscaper(map2) {
  var escaper = function(match) {
    return map2[match];
  };
  var source = "(?:" + keys(map2).join("|") + ")";
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, "g");
  return function(string) {
    string = string == null ? "" : "" + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}
var init_createEscaper = __esm({
  "node_modules/underscore/modules/_createEscaper.js"() {
    init_keys();
  }
});

// node_modules/underscore/modules/_escapeMap.js
var escapeMap_default;
var init_escapeMap = __esm({
  "node_modules/underscore/modules/_escapeMap.js"() {
    escapeMap_default = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };
  }
});

// node_modules/underscore/modules/escape.js
var escape_default;
var init_escape = __esm({
  "node_modules/underscore/modules/escape.js"() {
    init_createEscaper();
    init_escapeMap();
    escape_default = createEscaper(escapeMap_default);
  }
});

// node_modules/underscore/modules/_unescapeMap.js
var unescapeMap_default;
var init_unescapeMap = __esm({
  "node_modules/underscore/modules/_unescapeMap.js"() {
    init_invert();
    init_escapeMap();
    unescapeMap_default = invert(escapeMap_default);
  }
});

// node_modules/underscore/modules/unescape.js
var unescape_default;
var init_unescape = __esm({
  "node_modules/underscore/modules/unescape.js"() {
    init_createEscaper();
    init_unescapeMap();
    unescape_default = createEscaper(unescapeMap_default);
  }
});

// node_modules/underscore/modules/templateSettings.js
var templateSettings_default;
var init_templateSettings = __esm({
  "node_modules/underscore/modules/templateSettings.js"() {
    init_underscore();
    templateSettings_default = _.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
  }
});

// node_modules/underscore/modules/template.js
function escapeChar(match) {
  return "\\" + escapes[match];
}
function template(text, settings, oldSettings) {
  if (!settings && oldSettings)
    settings = oldSettings;
  settings = defaults_default({}, settings, _.templateSettings);
  var matcher2 = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join("|") + "|$", "g");
  var index = 0;
  var source = "__p+='";
  text.replace(matcher2, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;
    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }
    return match;
  });
  source += "';\n";
  var argument = settings.variable;
  if (argument) {
    if (!bareIdentifier.test(argument))
      throw new Error(
        "variable is not a bare identifier: " + argument
      );
  } else {
    source = "with(obj||{}){\n" + source + "}\n";
    argument = "obj";
  }
  source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
  var render;
  try {
    render = new Function(argument, "_", source);
  } catch (e) {
    e.source = source;
    throw e;
  }
  var template2 = function(data) {
    return render.call(this, data, _);
  };
  template2.source = "function(" + argument + "){\n" + source + "}";
  return template2;
}
var noMatch, escapes, escapeRegExp, bareIdentifier;
var init_template = __esm({
  "node_modules/underscore/modules/template.js"() {
    init_defaults();
    init_underscore();
    init_templateSettings();
    noMatch = /(.)^/;
    escapes = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
    bareIdentifier = /^\s*(\w|\$)+\s*$/;
  }
});

// node_modules/underscore/modules/result.js
function result(obj, path, fallback) {
  path = toPath2(path);
  var length = path.length;
  if (!length) {
    return isFunction_default(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length;
    }
    obj = isFunction_default(prop) ? prop.call(obj) : prop;
  }
  return obj;
}
var init_result = __esm({
  "node_modules/underscore/modules/result.js"() {
    init_isFunction();
    init_toPath2();
  }
});

// node_modules/underscore/modules/uniqueId.js
function uniqueId(prefix) {
  var id = ++idCounter + "";
  return prefix ? prefix + id : id;
}
var idCounter;
var init_uniqueId = __esm({
  "node_modules/underscore/modules/uniqueId.js"() {
    idCounter = 0;
  }
});

// node_modules/underscore/modules/chain.js
function chain(obj) {
  var instance = _(obj);
  instance._chain = true;
  return instance;
}
var init_chain = __esm({
  "node_modules/underscore/modules/chain.js"() {
    init_underscore();
  }
});

// node_modules/underscore/modules/_executeBound.js
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc))
    return sourceFunc.apply(context, args);
  var self2 = baseCreate(sourceFunc.prototype);
  var result2 = sourceFunc.apply(self2, args);
  if (isObject(result2))
    return result2;
  return self2;
}
var init_executeBound = __esm({
  "node_modules/underscore/modules/_executeBound.js"() {
    init_baseCreate();
    init_isObject();
  }
});

// node_modules/underscore/modules/partial.js
var partial, partial_default;
var init_partial = __esm({
  "node_modules/underscore/modules/partial.js"() {
    init_restArguments();
    init_executeBound();
    init_underscore();
    partial = restArguments(function(func, boundArgs) {
      var placeholder = partial.placeholder;
      var bound = function() {
        var position = 0, length = boundArgs.length;
        var args = Array(length);
        for (var i = 0; i < length; i++) {
          args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
        }
        while (position < arguments.length)
          args.push(arguments[position++]);
        return executeBound(func, bound, this, this, args);
      };
      return bound;
    });
    partial.placeholder = _;
    partial_default = partial;
  }
});

// node_modules/underscore/modules/bind.js
var bind_default;
var init_bind = __esm({
  "node_modules/underscore/modules/bind.js"() {
    init_restArguments();
    init_isFunction();
    init_executeBound();
    bind_default = restArguments(function(func, context, args) {
      if (!isFunction_default(func))
        throw new TypeError("Bind must be called on a function");
      var bound = restArguments(function(callArgs) {
        return executeBound(func, bound, context, this, args.concat(callArgs));
      });
      return bound;
    });
  }
});

// node_modules/underscore/modules/_isArrayLike.js
var isArrayLike_default;
var init_isArrayLike = __esm({
  "node_modules/underscore/modules/_isArrayLike.js"() {
    init_createSizePropertyCheck();
    init_getLength();
    isArrayLike_default = createSizePropertyCheck(getLength_default);
  }
});

// node_modules/underscore/modules/_flatten.js
function flatten(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = getLength_default(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike_default(value) && (isArray_default(value) || isArguments_default(value))) {
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len)
          output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}
var init_flatten = __esm({
  "node_modules/underscore/modules/_flatten.js"() {
    init_getLength();
    init_isArrayLike();
    init_isArray();
    init_isArguments();
  }
});

// node_modules/underscore/modules/bindAll.js
var bindAll_default;
var init_bindAll = __esm({
  "node_modules/underscore/modules/bindAll.js"() {
    init_restArguments();
    init_flatten();
    init_bind();
    bindAll_default = restArguments(function(obj, keys2) {
      keys2 = flatten(keys2, false, false);
      var index = keys2.length;
      if (index < 1)
        throw new Error("bindAll must be passed function names");
      while (index--) {
        var key = keys2[index];
        obj[key] = bind_default(obj[key], obj);
      }
      return obj;
    });
  }
});

// node_modules/underscore/modules/memoize.js
function memoize(func, hasher) {
  var memoize2 = function(key) {
    var cache = memoize2.cache;
    var address = "" + (hasher ? hasher.apply(this, arguments) : key);
    if (!has(cache, address))
      cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize2.cache = {};
  return memoize2;
}
var init_memoize = __esm({
  "node_modules/underscore/modules/memoize.js"() {
    init_has();
  }
});

// node_modules/underscore/modules/delay.js
var delay_default;
var init_delay = __esm({
  "node_modules/underscore/modules/delay.js"() {
    init_restArguments();
    delay_default = restArguments(function(func, wait, args) {
      return setTimeout(function() {
        return func.apply(null, args);
      }, wait);
    });
  }
});

// node_modules/underscore/modules/defer.js
var defer_default;
var init_defer = __esm({
  "node_modules/underscore/modules/defer.js"() {
    init_partial();
    init_delay();
    init_underscore();
    defer_default = partial_default(delay_default, _, 1);
  }
});

// node_modules/underscore/modules/throttle.js
function throttle(func, wait, options) {
  var timeout, context, args, result2;
  var previous = 0;
  if (!options)
    options = {};
  var later = function() {
    previous = options.leading === false ? 0 : now_default();
    timeout = null;
    result2 = func.apply(context, args);
    if (!timeout)
      context = args = null;
  };
  var throttled = function() {
    var _now = now_default();
    if (!previous && options.leading === false)
      previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result2 = func.apply(context, args);
      if (!timeout)
        context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result2;
  };
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
}
var init_throttle = __esm({
  "node_modules/underscore/modules/throttle.js"() {
    init_now();
  }
});

// node_modules/underscore/modules/debounce.js
function debounce(func, wait, immediate) {
  var timeout, previous, args, result2, context;
  var later = function() {
    var passed = now_default() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate)
        result2 = func.apply(context, args);
      if (!timeout)
        args = context = null;
    }
  };
  var debounced = restArguments(function(_args) {
    context = this;
    args = _args;
    previous = now_default();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate)
        result2 = func.apply(context, args);
    }
    return result2;
  });
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };
  return debounced;
}
var init_debounce = __esm({
  "node_modules/underscore/modules/debounce.js"() {
    init_restArguments();
    init_now();
  }
});

// node_modules/underscore/modules/wrap.js
function wrap(func, wrapper) {
  return partial_default(wrapper, func);
}
var init_wrap = __esm({
  "node_modules/underscore/modules/wrap.js"() {
    init_partial();
  }
});

// node_modules/underscore/modules/negate.js
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
var init_negate = __esm({
  "node_modules/underscore/modules/negate.js"() {
  }
});

// node_modules/underscore/modules/compose.js
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result2 = args[start].apply(this, arguments);
    while (i--)
      result2 = args[i].call(this, result2);
    return result2;
  };
}
var init_compose = __esm({
  "node_modules/underscore/modules/compose.js"() {
  }
});

// node_modules/underscore/modules/after.js
function after(times2, func) {
  return function() {
    if (--times2 < 1) {
      return func.apply(this, arguments);
    }
  };
}
var init_after = __esm({
  "node_modules/underscore/modules/after.js"() {
  }
});

// node_modules/underscore/modules/before.js
function before(times2, func) {
  var memo;
  return function() {
    if (--times2 > 0) {
      memo = func.apply(this, arguments);
    }
    if (times2 <= 1)
      func = null;
    return memo;
  };
}
var init_before = __esm({
  "node_modules/underscore/modules/before.js"() {
  }
});

// node_modules/underscore/modules/once.js
var once_default;
var init_once = __esm({
  "node_modules/underscore/modules/once.js"() {
    init_partial();
    init_before();
    once_default = partial_default(before, 2);
  }
});

// node_modules/underscore/modules/findKey.js
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj))
      return key;
  }
}
var init_findKey = __esm({
  "node_modules/underscore/modules/findKey.js"() {
    init_cb();
    init_keys();
  }
});

// node_modules/underscore/modules/_createPredicateIndexFinder.js
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength_default(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array))
        return index;
    }
    return -1;
  };
}
var init_createPredicateIndexFinder = __esm({
  "node_modules/underscore/modules/_createPredicateIndexFinder.js"() {
    init_cb();
    init_getLength();
  }
});

// node_modules/underscore/modules/findIndex.js
var findIndex_default;
var init_findIndex = __esm({
  "node_modules/underscore/modules/findIndex.js"() {
    init_createPredicateIndexFinder();
    findIndex_default = createPredicateIndexFinder(1);
  }
});

// node_modules/underscore/modules/findLastIndex.js
var findLastIndex_default;
var init_findLastIndex = __esm({
  "node_modules/underscore/modules/findLastIndex.js"() {
    init_createPredicateIndexFinder();
    findLastIndex_default = createPredicateIndexFinder(-1);
  }
});

// node_modules/underscore/modules/sortedIndex.js
function sortedIndex(array, obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context, 1);
  var value = iteratee2(obj);
  var low = 0, high = getLength_default(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee2(array[mid]) < value)
      low = mid + 1;
    else
      high = mid;
  }
  return low;
}
var init_sortedIndex = __esm({
  "node_modules/underscore/modules/sortedIndex.js"() {
    init_cb();
    init_getLength();
  }
});

// node_modules/underscore/modules/_createIndexFinder.js
function createIndexFinder(dir, predicateFind, sortedIndex2) {
  return function(array, item, idx) {
    var i = 0, length = getLength_default(array);
    if (typeof idx == "number") {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex2 && idx && length) {
      idx = sortedIndex2(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN2);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item)
        return idx;
    }
    return -1;
  };
}
var init_createIndexFinder = __esm({
  "node_modules/underscore/modules/_createIndexFinder.js"() {
    init_getLength();
    init_setup();
    init_isNaN();
  }
});

// node_modules/underscore/modules/indexOf.js
var indexOf_default;
var init_indexOf = __esm({
  "node_modules/underscore/modules/indexOf.js"() {
    init_sortedIndex();
    init_findIndex();
    init_createIndexFinder();
    indexOf_default = createIndexFinder(1, findIndex_default, sortedIndex);
  }
});

// node_modules/underscore/modules/lastIndexOf.js
var lastIndexOf_default;
var init_lastIndexOf = __esm({
  "node_modules/underscore/modules/lastIndexOf.js"() {
    init_findLastIndex();
    init_createIndexFinder();
    lastIndexOf_default = createIndexFinder(-1, findLastIndex_default);
  }
});

// node_modules/underscore/modules/find.js
function find(obj, predicate, context) {
  var keyFinder = isArrayLike_default(obj) ? findIndex_default : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1)
    return obj[key];
}
var init_find = __esm({
  "node_modules/underscore/modules/find.js"() {
    init_isArrayLike();
    init_findIndex();
    init_findKey();
  }
});

// node_modules/underscore/modules/findWhere.js
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}
var init_findWhere = __esm({
  "node_modules/underscore/modules/findWhere.js"() {
    init_find();
    init_matcher();
  }
});

// node_modules/underscore/modules/each.js
function each(obj, iteratee2, context) {
  iteratee2 = optimizeCb(iteratee2, context);
  var i, length;
  if (isArrayLike_default(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee2(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee2(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}
var init_each = __esm({
  "node_modules/underscore/modules/each.js"() {
    init_optimizeCb();
    init_isArrayLike();
    init_keys();
  }
});

// node_modules/underscore/modules/map.js
function map(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
var init_map = __esm({
  "node_modules/underscore/modules/map.js"() {
    init_cb();
    init_isArrayLike();
    init_keys();
  }
});

// node_modules/underscore/modules/_createReduce.js
function createReduce(dir) {
  var reducer = function(obj, iteratee2, memo, initial2) {
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
    if (!initial2) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee2(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };
  return function(obj, iteratee2, memo, context) {
    var initial2 = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial2);
  };
}
var init_createReduce = __esm({
  "node_modules/underscore/modules/_createReduce.js"() {
    init_isArrayLike();
    init_keys();
    init_optimizeCb();
  }
});

// node_modules/underscore/modules/reduce.js
var reduce_default;
var init_reduce = __esm({
  "node_modules/underscore/modules/reduce.js"() {
    init_createReduce();
    reduce_default = createReduce(1);
  }
});

// node_modules/underscore/modules/reduceRight.js
var reduceRight_default;
var init_reduceRight = __esm({
  "node_modules/underscore/modules/reduceRight.js"() {
    init_createReduce();
    reduceRight_default = createReduce(-1);
  }
});

// node_modules/underscore/modules/filter.js
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value, index, list) {
    if (predicate(value, index, list))
      results.push(value);
  });
  return results;
}
var init_filter = __esm({
  "node_modules/underscore/modules/filter.js"() {
    init_cb();
    init_each();
  }
});

// node_modules/underscore/modules/reject.js
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
}
var init_reject = __esm({
  "node_modules/underscore/modules/reject.js"() {
    init_filter();
    init_negate();
    init_cb();
  }
});

// node_modules/underscore/modules/every.js
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj))
      return false;
  }
  return true;
}
var init_every = __esm({
  "node_modules/underscore/modules/every.js"() {
    init_cb();
    init_isArrayLike();
    init_keys();
  }
});

// node_modules/underscore/modules/some.js
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj))
      return true;
  }
  return false;
}
var init_some = __esm({
  "node_modules/underscore/modules/some.js"() {
    init_cb();
    init_isArrayLike();
    init_keys();
  }
});

// node_modules/underscore/modules/contains.js
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike_default(obj))
    obj = values(obj);
  if (typeof fromIndex != "number" || guard)
    fromIndex = 0;
  return indexOf_default(obj, item, fromIndex) >= 0;
}
var init_contains = __esm({
  "node_modules/underscore/modules/contains.js"() {
    init_isArrayLike();
    init_values();
    init_indexOf();
  }
});

// node_modules/underscore/modules/invoke.js
var invoke_default;
var init_invoke = __esm({
  "node_modules/underscore/modules/invoke.js"() {
    init_restArguments();
    init_isFunction();
    init_map();
    init_deepGet();
    init_toPath2();
    invoke_default = restArguments(function(obj, path, args) {
      var contextPath, func;
      if (isFunction_default(path)) {
        func = path;
      } else {
        path = toPath2(path);
        contextPath = path.slice(0, -1);
        path = path[path.length - 1];
      }
      return map(obj, function(context) {
        var method = func;
        if (!method) {
          if (contextPath && contextPath.length) {
            context = deepGet(context, contextPath);
          }
          if (context == null)
            return void 0;
          method = context[path];
        }
        return method == null ? method : method.apply(context, args);
      });
    });
  }
});

// node_modules/underscore/modules/pluck.js
function pluck(obj, key) {
  return map(obj, property(key));
}
var init_pluck = __esm({
  "node_modules/underscore/modules/pluck.js"() {
    init_map();
    init_property();
  }
});

// node_modules/underscore/modules/where.js
function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}
var init_where = __esm({
  "node_modules/underscore/modules/where.js"() {
    init_filter();
    init_matcher();
  }
});

// node_modules/underscore/modules/max.js
function max(obj, iteratee2, context) {
  var result2 = -Infinity, lastComputed = -Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike_default(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var init_max = __esm({
  "node_modules/underscore/modules/max.js"() {
    init_isArrayLike();
    init_values();
    init_cb();
    init_each();
  }
});

// node_modules/underscore/modules/min.js
function min(obj, iteratee2, context) {
  var result2 = Infinity, lastComputed = Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike_default(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var init_min = __esm({
  "node_modules/underscore/modules/min.js"() {
    init_isArrayLike();
    init_values();
    init_cb();
    init_each();
  }
});

// node_modules/underscore/modules/toArray.js
function toArray(obj) {
  if (!obj)
    return [];
  if (isArray_default(obj))
    return slice.call(obj);
  if (isString_default(obj)) {
    return obj.match(reStrSymbol);
  }
  if (isArrayLike_default(obj))
    return map(obj, identity);
  return values(obj);
}
var reStrSymbol;
var init_toArray = __esm({
  "node_modules/underscore/modules/toArray.js"() {
    init_isArray();
    init_setup();
    init_isString();
    init_isArrayLike();
    init_map();
    init_identity();
    init_values();
    reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  }
});

// node_modules/underscore/modules/sample.js
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike_default(obj))
      obj = values(obj);
    return obj[random(obj.length - 1)];
  }
  var sample2 = toArray(obj);
  var length = getLength_default(sample2);
  n = Math.max(Math.min(n, length), 0);
  var last2 = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last2);
    var temp = sample2[index];
    sample2[index] = sample2[rand];
    sample2[rand] = temp;
  }
  return sample2.slice(0, n);
}
var init_sample = __esm({
  "node_modules/underscore/modules/sample.js"() {
    init_isArrayLike();
    init_values();
    init_getLength();
    init_random();
    init_toArray();
  }
});

// node_modules/underscore/modules/shuffle.js
function shuffle(obj) {
  return sample(obj, Infinity);
}
var init_shuffle = __esm({
  "node_modules/underscore/modules/shuffle.js"() {
    init_sample();
  }
});

// node_modules/underscore/modules/sortBy.js
function sortBy(obj, iteratee2, context) {
  var index = 0;
  iteratee2 = cb(iteratee2, context);
  return pluck(map(obj, function(value, key, list) {
    return {
      value,
      index: index++,
      criteria: iteratee2(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0)
        return 1;
      if (a < b || b === void 0)
        return -1;
    }
    return left.index - right.index;
  }), "value");
}
var init_sortBy = __esm({
  "node_modules/underscore/modules/sortBy.js"() {
    init_cb();
    init_pluck();
    init_map();
  }
});

// node_modules/underscore/modules/_group.js
function group(behavior, partition) {
  return function(obj, iteratee2, context) {
    var result2 = partition ? [[], []] : {};
    iteratee2 = cb(iteratee2, context);
    each(obj, function(value, index) {
      var key = iteratee2(value, index, obj);
      behavior(result2, value, key);
    });
    return result2;
  };
}
var init_group = __esm({
  "node_modules/underscore/modules/_group.js"() {
    init_cb();
    init_each();
  }
});

// node_modules/underscore/modules/groupBy.js
var groupBy_default;
var init_groupBy = __esm({
  "node_modules/underscore/modules/groupBy.js"() {
    init_group();
    init_has();
    groupBy_default = group(function(result2, value, key) {
      if (has(result2, key))
        result2[key].push(value);
      else
        result2[key] = [value];
    });
  }
});

// node_modules/underscore/modules/indexBy.js
var indexBy_default;
var init_indexBy = __esm({
  "node_modules/underscore/modules/indexBy.js"() {
    init_group();
    indexBy_default = group(function(result2, value, key) {
      result2[key] = value;
    });
  }
});

// node_modules/underscore/modules/countBy.js
var countBy_default;
var init_countBy = __esm({
  "node_modules/underscore/modules/countBy.js"() {
    init_group();
    init_has();
    countBy_default = group(function(result2, value, key) {
      if (has(result2, key))
        result2[key]++;
      else
        result2[key] = 1;
    });
  }
});

// node_modules/underscore/modules/partition.js
var partition_default;
var init_partition = __esm({
  "node_modules/underscore/modules/partition.js"() {
    init_group();
    partition_default = group(function(result2, value, pass) {
      result2[pass ? 0 : 1].push(value);
    }, true);
  }
});

// node_modules/underscore/modules/size.js
function size(obj) {
  if (obj == null)
    return 0;
  return isArrayLike_default(obj) ? obj.length : keys(obj).length;
}
var init_size = __esm({
  "node_modules/underscore/modules/size.js"() {
    init_isArrayLike();
    init_keys();
  }
});

// node_modules/underscore/modules/_keyInObj.js
function keyInObj(value, key, obj) {
  return key in obj;
}
var init_keyInObj = __esm({
  "node_modules/underscore/modules/_keyInObj.js"() {
  }
});

// node_modules/underscore/modules/pick.js
var pick_default;
var init_pick = __esm({
  "node_modules/underscore/modules/pick.js"() {
    init_restArguments();
    init_isFunction();
    init_optimizeCb();
    init_allKeys();
    init_keyInObj();
    init_flatten();
    pick_default = restArguments(function(obj, keys2) {
      var result2 = {}, iteratee2 = keys2[0];
      if (obj == null)
        return result2;
      if (isFunction_default(iteratee2)) {
        if (keys2.length > 1)
          iteratee2 = optimizeCb(iteratee2, keys2[1]);
        keys2 = allKeys(obj);
      } else {
        iteratee2 = keyInObj;
        keys2 = flatten(keys2, false, false);
        obj = Object(obj);
      }
      for (var i = 0, length = keys2.length; i < length; i++) {
        var key = keys2[i];
        var value = obj[key];
        if (iteratee2(value, key, obj))
          result2[key] = value;
      }
      return result2;
    });
  }
});

// node_modules/underscore/modules/omit.js
var omit_default;
var init_omit = __esm({
  "node_modules/underscore/modules/omit.js"() {
    init_restArguments();
    init_isFunction();
    init_negate();
    init_map();
    init_flatten();
    init_contains();
    init_pick();
    omit_default = restArguments(function(obj, keys2) {
      var iteratee2 = keys2[0], context;
      if (isFunction_default(iteratee2)) {
        iteratee2 = negate(iteratee2);
        if (keys2.length > 1)
          context = keys2[1];
      } else {
        keys2 = map(flatten(keys2, false, false), String);
        iteratee2 = function(value, key) {
          return !contains(keys2, key);
        };
      }
      return pick_default(obj, iteratee2, context);
    });
  }
});

// node_modules/underscore/modules/initial.js
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}
var init_initial = __esm({
  "node_modules/underscore/modules/initial.js"() {
    init_setup();
  }
});

// node_modules/underscore/modules/first.js
function first(array, n, guard) {
  if (array == null || array.length < 1)
    return n == null || guard ? void 0 : [];
  if (n == null || guard)
    return array[0];
  return initial(array, array.length - n);
}
var init_first = __esm({
  "node_modules/underscore/modules/first.js"() {
    init_initial();
  }
});

// node_modules/underscore/modules/rest.js
function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}
var init_rest = __esm({
  "node_modules/underscore/modules/rest.js"() {
    init_setup();
  }
});

// node_modules/underscore/modules/last.js
function last(array, n, guard) {
  if (array == null || array.length < 1)
    return n == null || guard ? void 0 : [];
  if (n == null || guard)
    return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
}
var init_last = __esm({
  "node_modules/underscore/modules/last.js"() {
    init_rest();
  }
});

// node_modules/underscore/modules/compact.js
function compact(array) {
  return filter(array, Boolean);
}
var init_compact = __esm({
  "node_modules/underscore/modules/compact.js"() {
    init_filter();
  }
});

// node_modules/underscore/modules/flatten.js
function flatten2(array, depth) {
  return flatten(array, depth, false);
}
var init_flatten2 = __esm({
  "node_modules/underscore/modules/flatten.js"() {
    init_flatten();
  }
});

// node_modules/underscore/modules/difference.js
var difference_default;
var init_difference = __esm({
  "node_modules/underscore/modules/difference.js"() {
    init_restArguments();
    init_flatten();
    init_filter();
    init_contains();
    difference_default = restArguments(function(array, rest2) {
      rest2 = flatten(rest2, true, true);
      return filter(array, function(value) {
        return !contains(rest2, value);
      });
    });
  }
});

// node_modules/underscore/modules/without.js
var without_default;
var init_without = __esm({
  "node_modules/underscore/modules/without.js"() {
    init_restArguments();
    init_difference();
    without_default = restArguments(function(array, otherArrays) {
      return difference_default(array, otherArrays);
    });
  }
});

// node_modules/underscore/modules/uniq.js
function uniq(array, isSorted, iteratee2, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee2;
    iteratee2 = isSorted;
    isSorted = false;
  }
  if (iteratee2 != null)
    iteratee2 = cb(iteratee2, context);
  var result2 = [];
  var seen = [];
  for (var i = 0, length = getLength_default(array); i < length; i++) {
    var value = array[i], computed = iteratee2 ? iteratee2(value, i, array) : value;
    if (isSorted && !iteratee2) {
      if (!i || seen !== computed)
        result2.push(value);
      seen = computed;
    } else if (iteratee2) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result2.push(value);
      }
    } else if (!contains(result2, value)) {
      result2.push(value);
    }
  }
  return result2;
}
var init_uniq = __esm({
  "node_modules/underscore/modules/uniq.js"() {
    init_isBoolean();
    init_cb();
    init_getLength();
    init_contains();
  }
});

// node_modules/underscore/modules/union.js
var union_default;
var init_union = __esm({
  "node_modules/underscore/modules/union.js"() {
    init_restArguments();
    init_uniq();
    init_flatten();
    union_default = restArguments(function(arrays) {
      return uniq(flatten(arrays, true, true));
    });
  }
});

// node_modules/underscore/modules/intersection.js
function intersection(array) {
  var result2 = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength_default(array); i < length; i++) {
    var item = array[i];
    if (contains(result2, item))
      continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item))
        break;
    }
    if (j === argsLength)
      result2.push(item);
  }
  return result2;
}
var init_intersection = __esm({
  "node_modules/underscore/modules/intersection.js"() {
    init_getLength();
    init_contains();
  }
});

// node_modules/underscore/modules/unzip.js
function unzip(array) {
  var length = array && max(array, getLength_default).length || 0;
  var result2 = Array(length);
  for (var index = 0; index < length; index++) {
    result2[index] = pluck(array, index);
  }
  return result2;
}
var init_unzip = __esm({
  "node_modules/underscore/modules/unzip.js"() {
    init_max();
    init_getLength();
    init_pluck();
  }
});

// node_modules/underscore/modules/zip.js
var zip_default;
var init_zip = __esm({
  "node_modules/underscore/modules/zip.js"() {
    init_restArguments();
    init_unzip();
    zip_default = restArguments(unzip);
  }
});

// node_modules/underscore/modules/object.js
function object(list, values2) {
  var result2 = {};
  for (var i = 0, length = getLength_default(list); i < length; i++) {
    if (values2) {
      result2[list[i]] = values2[i];
    } else {
      result2[list[i][0]] = list[i][1];
    }
  }
  return result2;
}
var init_object = __esm({
  "node_modules/underscore/modules/object.js"() {
    init_getLength();
  }
});

// node_modules/underscore/modules/range.js
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }
  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range2 = Array(length);
  for (var idx = 0; idx < length; idx++, start += step) {
    range2[idx] = start;
  }
  return range2;
}
var init_range = __esm({
  "node_modules/underscore/modules/range.js"() {
  }
});

// node_modules/underscore/modules/chunk.js
function chunk(array, count) {
  if (count == null || count < 1)
    return [];
  var result2 = [];
  var i = 0, length = array.length;
  while (i < length) {
    result2.push(slice.call(array, i, i += count));
  }
  return result2;
}
var init_chunk = __esm({
  "node_modules/underscore/modules/chunk.js"() {
    init_setup();
  }
});

// node_modules/underscore/modules/_chainResult.js
function chainResult(instance, obj) {
  return instance._chain ? _(obj).chain() : obj;
}
var init_chainResult = __esm({
  "node_modules/underscore/modules/_chainResult.js"() {
    init_underscore();
  }
});

// node_modules/underscore/modules/mixin.js
function mixin(obj) {
  each(functions(obj), function(name) {
    var func = _[name] = obj[name];
    _.prototype[name] = function() {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_, args));
    };
  });
  return _;
}
var init_mixin = __esm({
  "node_modules/underscore/modules/mixin.js"() {
    init_underscore();
    init_each();
    init_functions();
    init_setup();
    init_chainResult();
  }
});

// node_modules/underscore/modules/underscore-array-methods.js
var underscore_array_methods_default;
var init_underscore_array_methods = __esm({
  "node_modules/underscore/modules/underscore-array-methods.js"() {
    init_underscore();
    init_each();
    init_setup();
    init_chainResult();
    each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        var obj = this._wrapped;
        if (obj != null) {
          method.apply(obj, arguments);
          if ((name === "shift" || name === "splice") && obj.length === 0) {
            delete obj[0];
          }
        }
        return chainResult(this, obj);
      };
    });
    each(["concat", "join", "slice"], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        var obj = this._wrapped;
        if (obj != null)
          obj = method.apply(obj, arguments);
        return chainResult(this, obj);
      };
    });
    underscore_array_methods_default = _;
  }
});

// node_modules/underscore/modules/index.js
var modules_exports = {};
__export(modules_exports, {
  VERSION: () => VERSION,
  after: () => after,
  all: () => every,
  allKeys: () => allKeys,
  any: () => some,
  assign: () => extendOwn_default,
  before: () => before,
  bind: () => bind_default,
  bindAll: () => bindAll_default,
  chain: () => chain,
  chunk: () => chunk,
  clone: () => clone,
  collect: () => map,
  compact: () => compact,
  compose: () => compose,
  constant: () => constant,
  contains: () => contains,
  countBy: () => countBy_default,
  create: () => create,
  debounce: () => debounce,
  default: () => underscore_array_methods_default,
  defaults: () => defaults_default,
  defer: () => defer_default,
  delay: () => delay_default,
  detect: () => find,
  difference: () => difference_default,
  drop: () => rest,
  each: () => each,
  escape: () => escape_default,
  every: () => every,
  extend: () => extend_default,
  extendOwn: () => extendOwn_default,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex_default,
  findKey: () => findKey,
  findLastIndex: () => findLastIndex_default,
  findWhere: () => findWhere,
  first: () => first,
  flatten: () => flatten2,
  foldl: () => reduce_default,
  foldr: () => reduceRight_default,
  forEach: () => each,
  functions: () => functions,
  get: () => get,
  groupBy: () => groupBy_default,
  has: () => has2,
  head: () => first,
  identity: () => identity,
  include: () => contains,
  includes: () => contains,
  indexBy: () => indexBy_default,
  indexOf: () => indexOf_default,
  initial: () => initial,
  inject: () => reduce_default,
  intersection: () => intersection,
  invert: () => invert,
  invoke: () => invoke_default,
  isArguments: () => isArguments_default,
  isArray: () => isArray_default,
  isArrayBuffer: () => isArrayBuffer_default,
  isBoolean: () => isBoolean,
  isDataView: () => isDataView_default,
  isDate: () => isDate_default,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isError: () => isError_default,
  isFinite: () => isFinite2,
  isFunction: () => isFunction_default,
  isMap: () => isMap_default,
  isMatch: () => isMatch,
  isNaN: () => isNaN2,
  isNull: () => isNull,
  isNumber: () => isNumber_default,
  isObject: () => isObject,
  isRegExp: () => isRegExp_default,
  isSet: () => isSet_default,
  isString: () => isString_default,
  isSymbol: () => isSymbol_default,
  isTypedArray: () => isTypedArray_default,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap_default,
  isWeakSet: () => isWeakSet_default,
  iteratee: () => iteratee,
  keys: () => keys,
  last: () => last,
  lastIndexOf: () => lastIndexOf_default,
  map: () => map,
  mapObject: () => mapObject,
  matcher: () => matcher,
  matches: () => matcher,
  max: () => max,
  memoize: () => memoize,
  methods: () => functions,
  min: () => min,
  mixin: () => mixin,
  negate: () => negate,
  noop: () => noop,
  now: () => now_default,
  object: () => object,
  omit: () => omit_default,
  once: () => once_default,
  pairs: () => pairs,
  partial: () => partial_default,
  partition: () => partition_default,
  pick: () => pick_default,
  pluck: () => pluck,
  property: () => property,
  propertyOf: () => propertyOf,
  random: () => random,
  range: () => range,
  reduce: () => reduce_default,
  reduceRight: () => reduceRight_default,
  reject: () => reject,
  rest: () => rest,
  restArguments: () => restArguments,
  result: () => result,
  sample: () => sample,
  select: () => filter,
  shuffle: () => shuffle,
  size: () => size,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  tail: () => rest,
  take: () => first,
  tap: () => tap,
  template: () => template,
  templateSettings: () => templateSettings_default,
  throttle: () => throttle,
  times: () => times,
  toArray: () => toArray,
  toPath: () => toPath,
  transpose: () => unzip,
  unescape: () => unescape_default,
  union: () => union_default,
  uniq: () => uniq,
  unique: () => uniq,
  uniqueId: () => uniqueId,
  unzip: () => unzip,
  values: () => values,
  where: () => where,
  without: () => without_default,
  wrap: () => wrap,
  zip: () => zip_default
});
var init_modules = __esm({
  "node_modules/underscore/modules/index.js"() {
    init_setup();
    init_restArguments();
    init_isObject();
    init_isNull();
    init_isUndefined();
    init_isBoolean();
    init_isElement();
    init_isString();
    init_isNumber();
    init_isDate();
    init_isRegExp();
    init_isError();
    init_isSymbol();
    init_isArrayBuffer();
    init_isDataView();
    init_isArray();
    init_isFunction();
    init_isArguments();
    init_isFinite();
    init_isNaN();
    init_isTypedArray();
    init_isEmpty();
    init_isMatch();
    init_isEqual();
    init_isMap();
    init_isWeakMap();
    init_isSet();
    init_isWeakSet();
    init_keys();
    init_allKeys();
    init_values();
    init_pairs();
    init_invert();
    init_functions();
    init_extend();
    init_extendOwn();
    init_defaults();
    init_create();
    init_clone();
    init_tap();
    init_get();
    init_has2();
    init_mapObject();
    init_identity();
    init_constant();
    init_noop();
    init_toPath();
    init_property();
    init_propertyOf();
    init_matcher();
    init_times();
    init_random();
    init_now();
    init_escape();
    init_unescape();
    init_templateSettings();
    init_template();
    init_result();
    init_uniqueId();
    init_chain();
    init_iteratee();
    init_partial();
    init_bind();
    init_bindAll();
    init_memoize();
    init_delay();
    init_defer();
    init_throttle();
    init_debounce();
    init_wrap();
    init_negate();
    init_compose();
    init_after();
    init_before();
    init_once();
    init_findKey();
    init_findIndex();
    init_findLastIndex();
    init_sortedIndex();
    init_indexOf();
    init_lastIndexOf();
    init_find();
    init_findWhere();
    init_each();
    init_map();
    init_reduce();
    init_reduceRight();
    init_filter();
    init_reject();
    init_every();
    init_some();
    init_contains();
    init_invoke();
    init_pluck();
    init_where();
    init_max();
    init_min();
    init_shuffle();
    init_sample();
    init_sortBy();
    init_groupBy();
    init_indexBy();
    init_countBy();
    init_partition();
    init_toArray();
    init_size();
    init_pick();
    init_omit();
    init_first();
    init_initial();
    init_last();
    init_rest();
    init_compact();
    init_flatten2();
    init_without();
    init_uniq();
    init_union();
    init_intersection();
    init_difference();
    init_unzip();
    init_zip();
    init_object();
    init_range();
    init_chunk();
    init_mixin();
    init_underscore_array_methods();
  }
});

// node_modules/underscore/modules/index-default.js
var _2, index_default_default;
var init_index_default = __esm({
  "node_modules/underscore/modules/index-default.js"() {
    init_modules();
    init_modules();
    _2 = mixin(modules_exports);
    _2._ = _2;
    index_default_default = _2;
  }
});

// node_modules/underscore/modules/index-all.js
var index_all_exports = {};
__export(index_all_exports, {
  VERSION: () => VERSION,
  after: () => after,
  all: () => every,
  allKeys: () => allKeys,
  any: () => some,
  assign: () => extendOwn_default,
  before: () => before,
  bind: () => bind_default,
  bindAll: () => bindAll_default,
  chain: () => chain,
  chunk: () => chunk,
  clone: () => clone,
  collect: () => map,
  compact: () => compact,
  compose: () => compose,
  constant: () => constant,
  contains: () => contains,
  countBy: () => countBy_default,
  create: () => create,
  debounce: () => debounce,
  default: () => index_default_default,
  defaults: () => defaults_default,
  defer: () => defer_default,
  delay: () => delay_default,
  detect: () => find,
  difference: () => difference_default,
  drop: () => rest,
  each: () => each,
  escape: () => escape_default,
  every: () => every,
  extend: () => extend_default,
  extendOwn: () => extendOwn_default,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex_default,
  findKey: () => findKey,
  findLastIndex: () => findLastIndex_default,
  findWhere: () => findWhere,
  first: () => first,
  flatten: () => flatten2,
  foldl: () => reduce_default,
  foldr: () => reduceRight_default,
  forEach: () => each,
  functions: () => functions,
  get: () => get,
  groupBy: () => groupBy_default,
  has: () => has2,
  head: () => first,
  identity: () => identity,
  include: () => contains,
  includes: () => contains,
  indexBy: () => indexBy_default,
  indexOf: () => indexOf_default,
  initial: () => initial,
  inject: () => reduce_default,
  intersection: () => intersection,
  invert: () => invert,
  invoke: () => invoke_default,
  isArguments: () => isArguments_default,
  isArray: () => isArray_default,
  isArrayBuffer: () => isArrayBuffer_default,
  isBoolean: () => isBoolean,
  isDataView: () => isDataView_default,
  isDate: () => isDate_default,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isError: () => isError_default,
  isFinite: () => isFinite2,
  isFunction: () => isFunction_default,
  isMap: () => isMap_default,
  isMatch: () => isMatch,
  isNaN: () => isNaN2,
  isNull: () => isNull,
  isNumber: () => isNumber_default,
  isObject: () => isObject,
  isRegExp: () => isRegExp_default,
  isSet: () => isSet_default,
  isString: () => isString_default,
  isSymbol: () => isSymbol_default,
  isTypedArray: () => isTypedArray_default,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap_default,
  isWeakSet: () => isWeakSet_default,
  iteratee: () => iteratee,
  keys: () => keys,
  last: () => last,
  lastIndexOf: () => lastIndexOf_default,
  map: () => map,
  mapObject: () => mapObject,
  matcher: () => matcher,
  matches: () => matcher,
  max: () => max,
  memoize: () => memoize,
  methods: () => functions,
  min: () => min,
  mixin: () => mixin,
  negate: () => negate,
  noop: () => noop,
  now: () => now_default,
  object: () => object,
  omit: () => omit_default,
  once: () => once_default,
  pairs: () => pairs,
  partial: () => partial_default,
  partition: () => partition_default,
  pick: () => pick_default,
  pluck: () => pluck,
  property: () => property,
  propertyOf: () => propertyOf,
  random: () => random,
  range: () => range,
  reduce: () => reduce_default,
  reduceRight: () => reduceRight_default,
  reject: () => reject,
  rest: () => rest,
  restArguments: () => restArguments,
  result: () => result,
  sample: () => sample,
  select: () => filter,
  shuffle: () => shuffle,
  size: () => size,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  tail: () => rest,
  take: () => first,
  tap: () => tap,
  template: () => template,
  templateSettings: () => templateSettings_default,
  throttle: () => throttle,
  times: () => times,
  toArray: () => toArray,
  toPath: () => toPath,
  transpose: () => unzip,
  unescape: () => unescape_default,
  union: () => union_default,
  uniq: () => uniq,
  unique: () => uniq,
  uniqueId: () => uniqueId,
  unzip: () => unzip,
  values: () => values,
  where: () => where,
  without: () => without_default,
  wrap: () => wrap,
  zip: () => zip_default
});
var init_index_all = __esm({
  "node_modules/underscore/modules/index-all.js"() {
    init_index_default();
    init_modules();
  }
});

// node_modules/country-data/data/regions.js
var require_regions = __commonJS({
  "node_modules/country-data/data/regions.js"(exports, module) {
    "use strict";
    var regions = {};
    regions.centralAsia = {
      name: "Central Asia",
      countries: [
        // source is http://en.wikipedia.org/wiki/Central_Asia
        "KZ",
        // Kazakhstan
        "KG",
        // Kyrgyzstan
        "TJ",
        // Tajikistan
        "TM",
        // Turkmenistan
        "UZ"
        // Uzbekistan
      ]
    };
    regions.southernAsia = {
      name: "Southern Asia",
      countries: [
        // source is http://en.wikipedia.org/wiki/South_Asia
        "AF",
        // Afghanistan
        "BD",
        // Bangladesh
        "BT",
        // Bhutan
        "IO",
        // British Indian Ocean Territory
        "IN",
        // India
        "IR",
        // Iran
        "MV",
        // Maldives
        "NP",
        // Nepal
        "PK",
        // Pakistan
        "LK"
        // Sri Lanka
      ]
    };
    regions.southeastAsia = {
      name: "Southeast Asia",
      countries: [
        // source is http://en.wikipedia.org/wiki/Southeast_Asia
        "BN",
        // Brunei
        "KH",
        // Cambodia
        "CX",
        // Christmas Island
        "CC",
        // Cocos (Keeling) Islands
        "TL",
        // East Timor
        "ID",
        // Indonesia
        "LA",
        // Laos
        "MY",
        // Malaysia
        "MM",
        // Myanmar (Burma)
        "PH",
        // Philippines
        "SG",
        // Singapore
        "TH",
        // Thailand
        "VN"
        // Vietnam
      ]
    };
    regions.eastAsia = {
      name: "East Asia",
      countries: [
        // source is http://en.wikipedia.org/wiki/East_Asia
        "CN",
        // China
        "HK",
        // Hong Kong
        "JP",
        // Japan
        "KP",
        // North Korea
        "KR",
        // South Korea
        "MO",
        // Macao
        "MN",
        // Mongolia
        "TW"
        // Taiwan
      ]
    };
    regions.westernAsia = {
      name: "Western Asia",
      countries: [
        // source is http://en.wikipedia.org/wiki/Western_Asia
        "AM",
        // Armenia
        "AZ",
        // Azerbaijan
        "BH",
        // Bahrain
        "IQ",
        // Iraq
        "IL",
        // Israel
        "JO",
        // Jordan
        "KW",
        // Kuwait
        "LB",
        // Lebanon
        "OM",
        // Oman
        "PS",
        // Palestinian territories
        "QA",
        // Qatar
        "SA",
        // Saudi Arabia
        "SY",
        // Syria
        "TR",
        // Turkey
        "AE",
        // United Arab Emirates
        "YE"
        // Yemen
      ]
    };
    regions.centralAfrica = {
      name: "Central Aftrica",
      countries: [
        // source is http://en.wikipedia.org/wiki/Central_Africa
        "AO",
        // Angola
        "CM",
        // Cameroon
        "CF",
        // Central African Republic
        "TD",
        // Chad
        "CG",
        // Republic of the Congo
        "CD",
        // Democratic Republic of the Congo
        "GQ",
        // Equatorial Guinea
        "GA",
        // Gabon
        "ST"
        // São Tomé and Príncipe
      ]
    };
    regions.northAfrica = {
      name: "North Africa",
      countries: [
        // source is http://en.wikipedia.org/wiki/North_Africa
        "DZ",
        // Algeria
        "EG",
        // Egypt
        "LY",
        // Libya
        "MA",
        // Morocco
        "SD",
        // Sudan
        "TN",
        // Tunisia
        "EH"
        // Western Sahara
      ]
    };
    regions.southernAfrica = {
      name: "Southern Africa",
      countries: [
        // source is http://en.wikipedia.org/wiki/Southern_Africa
        "BW",
        // Botswana
        "LS",
        // Lesotho
        "NA",
        // Namibia
        "ZA",
        // South Africa
        "SZ"
        // Swaziland
      ]
    };
    regions.eastAfrica = {
      name: "East Africa",
      countries: [
        // source is http://en.wikipedia.org/wiki/East_Africa
        "BI",
        // Burundi
        "KM",
        // Comoros
        "DJ",
        // Djibouti
        "ER",
        // Eritrea
        "ET",
        // Ethiopia
        "KE",
        // Kenya
        "MG",
        // Madagascar
        "MW",
        // Malawi
        "MU",
        // Mauritius
        "YT",
        // Mayotte (France)
        "MZ",
        // Mozambique
        "RE",
        // Réunion (France)
        "RW",
        // Rwanda
        "SC",
        // Seychelles
        "SO",
        // Somalia
        "SS",
        // South Sudan
        "TZ",
        // Tanzania
        "UG",
        // Uganda
        "ZM",
        // Zambia
        "ZW"
        // Zimbabwe
      ]
    };
    regions.westAfrica = {
      name: "West Africa",
      countries: [
        // source is http://en.wikipedia.org/wiki/West_Africa
        "BJ",
        // Benin
        "BF",
        // Burkina Faso
        "CV",
        // Cabo Verde
        "CI",
        // Côte d'Ivoire
        "GM",
        // Gambia
        "GH",
        // Ghana
        "GN",
        // Guinea
        "GW",
        // Guinea-Bissau
        "LR",
        // Liberia
        "ML",
        // Mali
        "MR",
        // Mauritania
        "NE",
        // Niger
        "NG",
        // Nigeria
        "SH",
        // Saint Helena, Ascension and Tristan da Cunha (United Kingdom)
        "SN",
        // Senegal
        "SL",
        // Sierra Leone
        "TG"
        // Togo
      ]
    };
    regions.centralAmerica = {
      name: "Central America",
      countries: [
        // source is http://en.wikipedia.org/wiki/Central_America
        "BZ",
        // Belize
        "CR",
        // Costa Rica
        "SV",
        // El Salvador
        "GT",
        // Guatemala
        "HN",
        // Honduras
        "NI",
        // Nicaragua
        "PA"
        // Panama
      ]
    };
    regions.northernAmerica = {
      name: "Northern America",
      countries: [
        // source is http://en.wikipedia.org/wiki/Northern_America
        "BM",
        // Bermuda
        "CA",
        // Canada
        "GL",
        // Greenland
        "MX",
        // Mexico
        "PM",
        // Saint Pierre and Miquelon
        "US"
        // United States
      ]
    };
    regions.caribbean = {
      name: "Caribbean",
      countries: [
        // source is http://en.wikipedia.org/wiki/Caribbean
        "AI",
        // Anguilla
        "AG",
        // Antigua and Barbuda
        "AW",
        // Aruba
        "BS",
        // Bahamas
        "BB",
        // Barbados
        "BQ",
        // Bonaire, Sint Eustatius & Saba
        "VG",
        // British Virgin Islands
        "KY",
        // Cayman Islands
        "CU",
        // Cuba
        "CW",
        // Curaçao
        "DM",
        // Dominica
        "DO",
        // Dominican Republic
        "GD",
        // Grenada
        "GP",
        // Guadeloupe
        "HT",
        // Haiti
        "JM",
        // Jamaica
        "MQ",
        // Martinique
        "MS",
        // Montserrat
        "PR",
        // Puerto Rico
        "BL",
        // Saint Barthélemy
        "KN",
        // St. Kitts & Nevis
        "LC",
        // Saint Lucia
        "MF",
        // Saint Martin
        "VC",
        // Saint Vincent and the Grenadines
        "SX",
        // Sint Maarten
        "TT",
        // Trinidad and Tobago
        "TC",
        // Turks & Caicos
        "VI"
        // United States Virgin Islands
      ]
    };
    regions.southAmerica = {
      name: "South America",
      countries: [
        // source is http://en.wikipedia.org/wiki/South_America
        "AR",
        // Argentina
        "BO",
        // Bolivia
        "BR",
        // Brazil
        "CL",
        // Chile
        "CO",
        // Colombia
        "EC",
        // Ecuador
        "FK",
        // Falkland Islands
        "GF",
        // French Guiana
        "GY",
        // Guyana
        "PY",
        // Paraguay
        "PE",
        // Peru
        "SR",
        // Suriname
        "UY",
        // Uruguay
        "VE"
        // Venezuela
      ]
    };
    regions.antartica = {
      name: "Antartica",
      countries: [
        // source is http://en.wikipedia.org/wiki/Antarctica
        "AQ",
        // Antarctica
        "BV",
        // Bouvet Island
        "TF",
        // French Southern Territories
        "HM",
        // Heard Island and McDonald Islands
        "GS"
        // South Georgia and the South Sandwich Islands
      ]
    };
    regions.northernEurope = {
      name: "Northern Europe",
      countries: [
        // source is http://en.wikipedia.org/wiki/Northern_Europe
        "AX",
        // Åland
        "DK",
        // Denmark
        "EE",
        // Estonia
        "FO",
        // Faroe Islands
        "FI",
        // Finland
        "GG",
        // Guernsey
        "IS",
        // Iceland
        "IE",
        // Republic of Ireland
        "JE",
        // Jersey (UK)
        "IM",
        // Isle of Man
        "LV",
        // Latvia
        "LT",
        // Lithuania
        "NO",
        // Norway
        "SJ",
        // Svalbard and Jan Mayen
        "SE",
        // Sweden
        "GB"
        // United Kingdom
      ]
    };
    regions.southernEurope = {
      name: "Southern Europe",
      countries: [
        // source is http://en.wikipedia.org/wiki/Southern_Europe
        "AL",
        // Albania
        "AD",
        // Andorra
        "BA",
        // Bosnia and Herzegovina
        "HR",
        // Croatia
        "CY",
        // Cyprus
        "GI",
        // Gibraltar
        "GR",
        // Greece
        "IT",
        // Italy
        "MK",
        // Republic of Macedonia
        "VA",
        // Vatican City
        "MT",
        // Malta
        "ME",
        // Montenegro
        "PT",
        // Portugal
        "SM",
        // San Marino
        "RS",
        // Serbia
        "SI",
        // Slovenia
        "ES"
        // Spain
      ]
    };
    regions.easternEurope = {
      name: "Eastern Europe",
      countries: [
        // source is http://en.wikipedia.org/wiki/Eastern_Europe
        "BY",
        // Belarus
        "BG",
        // Bulgaria
        "CZ",
        // Czech Republic
        "GE",
        // Georgia
        "HU",
        // Hungary
        "MD",
        // Moldova
        "PL",
        // Poland
        "RO",
        // Romania
        "RU",
        // Russia
        "SK",
        // Slovakia
        "UA"
        // Ukraine
      ]
    };
    regions.westernEurope = {
      name: "Western Europe",
      countries: [
        // source is http://en.wikipedia.org/wiki/Western_Europe
        "AT",
        // Austria
        "BE",
        // Belgium
        "FR",
        // France
        "DE",
        // Germany
        "LI",
        // Liechtenstein
        "LU",
        // Luxembourg
        "MC",
        // Monaco
        "NL",
        // Netherlands
        "CH"
        // Switzerland
      ]
    };
    regions.australia = {
      name: "Australia",
      countries: [
        // source is http://en.wikipedia.org/wiki/Oceania
        "AU",
        // Australia
        "NF",
        // Norfolk Island
        "NZ"
        // New Zealand
      ]
    };
    regions.melanesia = {
      name: "Melanesia",
      countries: [
        // source is http://en.wikipedia.org/wiki/Oceania
        "FJ",
        // Fiji
        "NC",
        //  New Caledonia
        "PG",
        // Papua New Guinea
        "SB",
        // Solomon Islands
        "VU"
        // Vanuatu
      ]
    };
    regions.micronesia = {
      name: "Micronesia",
      countries: [
        // source is http://en.wikipedia.org/wiki/Oceania
        "GU",
        // Guam
        "KI",
        // Kiribati
        "MH",
        // Marshall Islands
        "FM",
        // Micronesia, Fed. Sts.
        "NR",
        // Nauru
        "MP",
        // Northern Mariana Islands
        "PW",
        // Palau
        "UM"
        // United States Minor Outlying Islands
      ]
    };
    regions.polynesia = {
      name: "Polynesia",
      countries: [
        // source is http://en.wikipedia.org/wiki/Oceania
        "AS",
        // American Samoa
        "CK",
        // Cook Islands
        "PF",
        // French Polynesia
        "NU",
        // Niue
        "PN",
        // Pitcairn Islands
        "WS",
        // Samoa
        "TK",
        // Tokelau
        "TO",
        // Tonga
        "TV",
        // Tuvalu
        "WF"
        // Wallis and Futuna
      ]
    };
    module.exports = regions;
  }
});

// node_modules/country-data/data/continents.js
var require_continents = __commonJS({
  "node_modules/country-data/data/continents.js"(exports, module) {
    "use strict";
    var _3 = (init_index_all(), __toCommonJS(index_all_exports));
    var regions = require_regions();
    var continents = {};
    continents.asia = {
      name: "Asia",
      regions: ["centralAsia", "southernAsia", "southeastAsia", "eastAsia", "westernAsia"],
      countries: _3.flatten([
        regions.centralAsia.countries,
        regions.southernAsia.countries,
        regions.southeastAsia.countries,
        regions.eastAsia.countries,
        regions.westernAsia.countries
      ]).sort()
    };
    continents.africa = {
      name: "Africa",
      regions: ["centralAfrica", "northAfrica", "southernAfrica", "eastAfrica", "westAfrica"],
      countries: _3.flatten([
        regions.centralAfrica.countries,
        regions.northAfrica.countries,
        regions.southernAfrica.countries,
        regions.eastAfrica.countries,
        regions.westAfrica.countries
      ]).sort()
    };
    continents.northAmerica = {
      name: "North America",
      regions: ["centralAmerica", "northernAmerica", "caribbean"],
      countries: _3.flatten([
        regions.centralAmerica.countries,
        regions.northernAmerica.countries,
        regions.caribbean.countries
      ]).sort()
    };
    continents.southAmerica = {
      name: "South America",
      regions: ["southAmerica"],
      countries: _3.flatten([
        regions.southAmerica.countries
      ]).sort()
    };
    continents.antartica = {
      name: "Antartica",
      regions: ["antartica"],
      countries: _3.flatten([
        regions.antartica.countries
      ]).sort()
    };
    continents.europe = {
      name: "Europe",
      regions: ["northernEurope", "southernEurope", "easternEurope", "westernEurope"],
      countries: _3.flatten([
        regions.northernEurope.countries,
        regions.southernEurope.countries,
        regions.easternEurope.countries,
        regions.westernEurope.countries
      ]).sort()
    };
    continents.oceania = {
      name: "Oceania",
      regions: ["australia", "melanesia", "micronesia", "polynesia"],
      countries: _3.flatten([
        regions.australia.countries,
        regions.melanesia.countries,
        regions.micronesia.countries,
        regions.polynesia.countries
      ]).sort()
    };
    module.exports = continents;
  }
});

// node_modules/country-data/data/countries.json
var require_countries = __commonJS({
  "node_modules/country-data/data/countries.json"(exports, module) {
    module.exports = [
      {
        alpha2: "AC",
        alpha3: "",
        countryCallingCodes: [
          "+247"
        ],
        currencies: [
          "USD"
        ],
        emoji: "",
        ioc: "SHP",
        languages: [
          "eng"
        ],
        name: "Ascension Island",
        status: "reserved"
      },
      {
        alpha2: "AD",
        alpha3: "AND",
        countryCallingCodes: [
          "+376"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇦🇩",
        ioc: "AND",
        languages: [
          "cat"
        ],
        name: "Andorra",
        status: "assigned"
      },
      {
        alpha2: "AE",
        alpha3: "ARE",
        countryCallingCodes: [
          "+971"
        ],
        currencies: [
          "AED"
        ],
        emoji: "🇦🇪",
        ioc: "UAE",
        languages: [
          "ara"
        ],
        name: "United Arab Emirates",
        status: "assigned"
      },
      {
        alpha2: "AF",
        alpha3: "AFG",
        countryCallingCodes: [
          "+93"
        ],
        currencies: [
          "AFN"
        ],
        emoji: "🇦🇫",
        ioc: "AFG",
        languages: [
          "pus"
        ],
        name: "Afghanistan",
        status: "assigned"
      },
      {
        alpha2: "AG",
        alpha3: "ATG",
        countryCallingCodes: [
          "+1 268"
        ],
        currencies: [
          "XCD"
        ],
        emoji: "🇦🇬",
        ioc: "ANT",
        languages: [
          "eng"
        ],
        name: "Antigua And Barbuda",
        status: "assigned"
      },
      {
        alpha2: "AI",
        alpha3: "AIA",
        countryCallingCodes: [
          "+1 264"
        ],
        currencies: [
          "XCD"
        ],
        emoji: "🇦🇮",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Anguilla",
        status: "assigned"
      },
      {
        alpha2: "AI",
        alpha3: "AFI",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "French Afar and Issas",
        status: "deleted"
      },
      {
        alpha2: "AL",
        alpha3: "ALB",
        countryCallingCodes: [
          "+355"
        ],
        currencies: [
          "ALL"
        ],
        emoji: "🇦🇱",
        ioc: "ALB",
        languages: [
          "sqi"
        ],
        name: "Albania",
        status: "assigned"
      },
      {
        alpha2: "AM",
        alpha3: "ARM",
        countryCallingCodes: [
          "+374"
        ],
        currencies: [
          "AMD"
        ],
        emoji: "🇦🇲",
        ioc: "ARM",
        languages: [
          "hye",
          "rus"
        ],
        name: "Armenia",
        status: "assigned"
      },
      {
        alpha2: "AN",
        alpha3: "ANT",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Netherlands Antilles",
        status: "deleted"
      },
      {
        alpha2: "AO",
        alpha3: "AGO",
        countryCallingCodes: [
          "+244"
        ],
        currencies: [
          "AOA"
        ],
        emoji: "🇦🇴",
        ioc: "ANG",
        languages: [
          "por"
        ],
        name: "Angola",
        status: "assigned"
      },
      {
        alpha2: "AQ",
        alpha3: "ATA",
        countryCallingCodes: [
          "+672"
        ],
        currencies: [],
        emoji: "🇦🇶",
        ioc: "",
        languages: [],
        name: "Antarctica",
        status: "assigned"
      },
      {
        alpha2: "AR",
        alpha3: "ARG",
        countryCallingCodes: [
          "+54"
        ],
        currencies: [
          "ARS"
        ],
        emoji: "🇦🇷",
        ioc: "ARG",
        languages: [
          "spa"
        ],
        name: "Argentina",
        status: "assigned"
      },
      {
        alpha2: "AS",
        alpha3: "ASM",
        countryCallingCodes: [
          "+1 684"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇦🇸",
        ioc: "ASA",
        languages: [
          "eng",
          "smo"
        ],
        name: "American Samoa",
        status: "assigned"
      },
      {
        alpha2: "AT",
        alpha3: "AUT",
        countryCallingCodes: [
          "+43"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇦🇹",
        ioc: "AUT",
        languages: [
          "deu"
        ],
        name: "Austria",
        status: "assigned"
      },
      {
        alpha2: "AU",
        alpha3: "AUS",
        countryCallingCodes: [
          "+61"
        ],
        currencies: [
          "AUD"
        ],
        emoji: "🇦🇺",
        ioc: "AUS",
        languages: [
          "eng"
        ],
        name: "Australia",
        status: "assigned"
      },
      {
        alpha2: "AW",
        alpha3: "ABW",
        countryCallingCodes: [
          "+297"
        ],
        currencies: [
          "AWG"
        ],
        emoji: "🇦🇼",
        ioc: "ARU",
        languages: [
          "nld"
        ],
        name: "Aruba",
        status: "assigned"
      },
      {
        alpha2: "AX",
        alpha3: "ALA",
        countryCallingCodes: [
          "+358"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇦🇽",
        ioc: "",
        languages: [
          "swe"
        ],
        name: "Åland Islands",
        status: "assigned"
      },
      {
        alpha2: "AZ",
        alpha3: "AZE",
        countryCallingCodes: [
          "+994"
        ],
        currencies: [
          "AZN"
        ],
        emoji: "🇦🇿",
        ioc: "AZE",
        languages: [
          "aze"
        ],
        name: "Azerbaijan",
        status: "assigned"
      },
      {
        alpha2: "BA",
        alpha3: "BIH",
        countryCallingCodes: [
          "+387"
        ],
        currencies: [
          "BAM"
        ],
        emoji: "🇧🇦",
        ioc: "BIH",
        languages: [
          "bos",
          "cre",
          "srp"
        ],
        name: "Bosnia & Herzegovina",
        status: "assigned"
      },
      {
        alpha2: "BB",
        alpha3: "BRB",
        countryCallingCodes: [
          "+1 246"
        ],
        currencies: [
          "BBD"
        ],
        emoji: "🇧🇧",
        ioc: "BAR",
        languages: [
          "eng"
        ],
        name: "Barbados",
        status: "assigned"
      },
      {
        alpha2: "BD",
        alpha3: "BGD",
        countryCallingCodes: [
          "+880"
        ],
        currencies: [
          "BDT"
        ],
        emoji: "🇧🇩",
        ioc: "BAN",
        languages: [
          "ben"
        ],
        name: "Bangladesh",
        status: "assigned"
      },
      {
        alpha2: "BE",
        alpha3: "BEL",
        countryCallingCodes: [
          "+32"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇧🇪",
        ioc: "BEL",
        languages: [
          "nld",
          "fra",
          "deu"
        ],
        name: "Belgium",
        status: "assigned"
      },
      {
        alpha2: "BF",
        alpha3: "BFA",
        countryCallingCodes: [
          "+226"
        ],
        currencies: [
          "XOF"
        ],
        emoji: "🇧🇫",
        ioc: "BUR",
        languages: [
          "fra"
        ],
        name: "Burkina Faso",
        status: "assigned"
      },
      {
        alpha2: "BG",
        alpha3: "BGR",
        countryCallingCodes: [
          "+359"
        ],
        currencies: [
          "BGN"
        ],
        emoji: "🇧🇬",
        ioc: "BUL",
        languages: [
          "bul"
        ],
        name: "Bulgaria",
        status: "assigned"
      },
      {
        alpha2: "BH",
        alpha3: "BHR",
        countryCallingCodes: [
          "+973"
        ],
        currencies: [
          "BHD"
        ],
        emoji: "🇧🇭",
        ioc: "BRN",
        languages: [
          "ara"
        ],
        name: "Bahrain",
        status: "assigned"
      },
      {
        alpha2: "BI",
        alpha3: "BDI",
        countryCallingCodes: [
          "+257"
        ],
        currencies: [
          "BIF"
        ],
        emoji: "🇧🇮",
        ioc: "BDI",
        languages: [
          "fra"
        ],
        name: "Burundi",
        status: "assigned"
      },
      {
        alpha2: "BJ",
        alpha3: "BEN",
        countryCallingCodes: [
          "+229"
        ],
        currencies: [
          "XOF"
        ],
        emoji: "🇧🇯",
        ioc: "BEN",
        languages: [
          "fra"
        ],
        name: "Benin",
        status: "assigned"
      },
      {
        alpha2: "BL",
        alpha3: "BLM",
        countryCallingCodes: [
          "+590"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇧🇱",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "Saint Barthélemy",
        status: "assigned"
      },
      {
        alpha2: "BM",
        alpha3: "BMU",
        countryCallingCodes: [
          "+1 441"
        ],
        currencies: [
          "BMD"
        ],
        emoji: "🇧🇲",
        ioc: "BER",
        languages: [
          "eng"
        ],
        name: "Bermuda",
        status: "assigned"
      },
      {
        alpha2: "BN",
        alpha3: "BRN",
        countryCallingCodes: [
          "+673"
        ],
        currencies: [
          "BND"
        ],
        emoji: "🇧🇳",
        ioc: "BRU",
        languages: [
          "msa",
          "eng"
        ],
        name: "Brunei Darussalam",
        status: "assigned"
      },
      {
        alpha2: "BO",
        alpha3: "BOL",
        countryCallingCodes: [
          "+591"
        ],
        currencies: [
          "BOB",
          "BOV"
        ],
        emoji: "🇧🇴",
        ioc: "BOL",
        languages: [
          "spa",
          "aym",
          "que"
        ],
        name: "Bolivia, Plurinational State Of",
        status: "assigned"
      },
      {
        alpha2: "BQ",
        alpha3: "BES",
        countryCallingCodes: [
          "+599"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇧🇶",
        ioc: "",
        languages: [
          "nld"
        ],
        name: "Bonaire, Saint Eustatius And Saba",
        status: "assigned"
      },
      {
        alpha2: "BQ",
        alpha3: "ATB",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "British Antarctic Territory",
        status: "deleted"
      },
      {
        alpha2: "BR",
        alpha3: "BRA",
        countryCallingCodes: [
          "+55"
        ],
        currencies: [
          "BRL"
        ],
        emoji: "🇧🇷",
        ioc: "BRA",
        languages: [
          "por"
        ],
        name: "Brazil",
        status: "assigned"
      },
      {
        alpha2: "BS",
        alpha3: "BHS",
        countryCallingCodes: [
          "+1 242"
        ],
        currencies: [
          "BSD"
        ],
        emoji: "🇧🇸",
        ioc: "BAH",
        languages: [
          "eng"
        ],
        name: "Bahamas",
        status: "assigned"
      },
      {
        alpha2: "BT",
        alpha3: "BTN",
        countryCallingCodes: [
          "+975"
        ],
        currencies: [
          "INR",
          "BTN"
        ],
        emoji: "🇧🇹",
        ioc: "BHU",
        languages: [
          "dzo"
        ],
        name: "Bhutan",
        status: "assigned"
      },
      {
        alpha2: "BU",
        alpha3: "BUR",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Burma",
        status: "deleted"
      },
      {
        alpha2: "BV",
        alpha3: "BVT",
        countryCallingCodes: [],
        currencies: [
          "NOK"
        ],
        emoji: "🇧🇻",
        ioc: "",
        languages: [],
        name: "Bouvet Island",
        status: "assigned"
      },
      {
        alpha2: "BW",
        alpha3: "BWA",
        countryCallingCodes: [
          "+267"
        ],
        currencies: [
          "BWP"
        ],
        emoji: "🇧🇼",
        ioc: "BOT",
        languages: [
          "eng",
          "tsn"
        ],
        name: "Botswana",
        status: "assigned"
      },
      {
        alpha2: "BY",
        alpha3: "BLR",
        countryCallingCodes: [
          "+375"
        ],
        currencies: [
          "BYR"
        ],
        emoji: "🇧🇾",
        ioc: "BLR",
        languages: [
          "bel",
          "rus"
        ],
        name: "Belarus",
        status: "assigned"
      },
      {
        alpha2: "BY",
        alpha3: "BYS",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Byelorussian SSR",
        status: "deleted"
      },
      {
        alpha2: "BZ",
        alpha3: "BLZ",
        countryCallingCodes: [
          "+501"
        ],
        currencies: [
          "BZD"
        ],
        emoji: "🇧🇿",
        ioc: "BIZ",
        languages: [
          "eng"
        ],
        name: "Belize",
        status: "assigned"
      },
      {
        alpha2: "CA",
        alpha3: "CAN",
        countryCallingCodes: [
          "+1"
        ],
        currencies: [
          "CAD"
        ],
        emoji: "🇨🇦",
        ioc: "CAN",
        languages: [
          "eng",
          "fra"
        ],
        name: "Canada",
        status: "assigned"
      },
      {
        alpha2: "CC",
        alpha3: "CCK",
        countryCallingCodes: [
          "+61"
        ],
        currencies: [
          "AUD"
        ],
        emoji: "🇨🇨",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Cocos (Keeling) Islands",
        status: "assigned"
      },
      {
        alpha2: "CD",
        alpha3: "COD",
        countryCallingCodes: [
          "+243"
        ],
        currencies: [
          "CDF"
        ],
        emoji: "🇨🇩",
        ioc: "COD",
        languages: [
          "fra",
          "lin",
          "kon",
          "swa"
        ],
        name: "Democratic Republic Of Congo",
        status: "assigned"
      },
      {
        alpha2: "CF",
        alpha3: "CAF",
        countryCallingCodes: [
          "+236"
        ],
        currencies: [
          "XAF"
        ],
        emoji: "🇨🇫",
        ioc: "CAF",
        languages: [
          "fra",
          "sag"
        ],
        name: "Central African Republic",
        status: "assigned"
      },
      {
        alpha2: "CG",
        alpha3: "COG",
        countryCallingCodes: [
          "+242"
        ],
        currencies: [
          "XAF"
        ],
        emoji: "🇨🇬",
        ioc: "CGO",
        languages: [
          "fra",
          "lin"
        ],
        name: "Republic Of Congo",
        status: "assigned"
      },
      {
        alpha2: "CH",
        alpha3: "CHE",
        countryCallingCodes: [
          "+41"
        ],
        currencies: [
          "CHF",
          "CHE",
          "CHW"
        ],
        emoji: "🇨🇭",
        ioc: "SUI",
        languages: [
          "deu",
          "fra",
          "ita",
          "roh"
        ],
        name: "Switzerland",
        status: "assigned"
      },
      {
        alpha2: "CI",
        alpha3: "CIV",
        countryCallingCodes: [
          "+225"
        ],
        currencies: [
          "XOF"
        ],
        emoji: "🇨🇮",
        ioc: "CIV",
        languages: [
          "fra"
        ],
        name: "Côte d'Ivoire",
        status: "assigned"
      },
      {
        alpha2: "CK",
        alpha3: "COK",
        countryCallingCodes: [
          "+682"
        ],
        currencies: [
          "NZD"
        ],
        emoji: "🇨🇰",
        ioc: "COK",
        languages: [
          "eng",
          "mri"
        ],
        name: "Cook Islands",
        status: "assigned"
      },
      {
        alpha2: "CL",
        alpha3: "CHL",
        countryCallingCodes: [
          "+56"
        ],
        currencies: [
          "CLP",
          "CLF"
        ],
        emoji: "🇨🇱",
        ioc: "CHI",
        languages: [
          "spa"
        ],
        name: "Chile",
        status: "assigned"
      },
      {
        alpha2: "CM",
        alpha3: "CMR",
        countryCallingCodes: [
          "+237"
        ],
        currencies: [
          "XAF"
        ],
        emoji: "🇨🇲",
        ioc: "CMR",
        languages: [
          "eng",
          "fra"
        ],
        name: "Cameroon",
        status: "assigned"
      },
      {
        alpha2: "CN",
        alpha3: "CHN",
        countryCallingCodes: [
          "+86"
        ],
        currencies: [
          "CNY"
        ],
        emoji: "🇨🇳",
        ioc: "CHN",
        languages: [
          "zho"
        ],
        name: "China",
        status: "assigned"
      },
      {
        alpha2: "CO",
        alpha3: "COL",
        countryCallingCodes: [
          "+57"
        ],
        currencies: [
          "COP",
          "COU"
        ],
        emoji: "🇨🇴",
        ioc: "COL",
        languages: [
          "spa"
        ],
        name: "Colombia",
        status: "assigned"
      },
      {
        alpha2: "CP",
        alpha3: "",
        countryCallingCodes: [],
        currencies: [
          "EUR"
        ],
        emoji: "",
        ioc: "",
        languages: [],
        name: "Clipperton Island",
        status: "reserved"
      },
      {
        alpha2: "CR",
        alpha3: "CRI",
        countryCallingCodes: [
          "+506"
        ],
        currencies: [
          "CRC"
        ],
        emoji: "🇨🇷",
        ioc: "CRC",
        languages: [
          "spa"
        ],
        name: "Costa Rica",
        status: "assigned"
      },
      {
        alpha2: "CS",
        alpha3: "CSK",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Czechoslovakia",
        status: "deleted"
      },
      {
        alpha2: "CS",
        alpha3: "SCG",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Serbia and Montenegro",
        status: "deleted"
      },
      {
        alpha2: "CT",
        alpha3: "CTE",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Canton and Enderbury Islands",
        status: "deleted"
      },
      {
        alpha2: "CU",
        alpha3: "CUB",
        countryCallingCodes: [
          "+53"
        ],
        currencies: [
          "CUP",
          "CUC"
        ],
        emoji: "🇨🇺",
        ioc: "CUB",
        languages: [
          "spa"
        ],
        name: "Cuba",
        status: "assigned"
      },
      {
        alpha2: "CV",
        alpha3: "CPV",
        countryCallingCodes: [
          "+238"
        ],
        currencies: [
          "CVE"
        ],
        emoji: "🇨🇻",
        ioc: "CPV",
        languages: [
          "por"
        ],
        name: "Cabo Verde",
        status: "assigned"
      },
      {
        alpha2: "CW",
        alpha3: "CUW",
        countryCallingCodes: [
          "+599"
        ],
        currencies: [
          "ANG"
        ],
        emoji: "🇨🇼",
        ioc: "",
        languages: [
          "nld"
        ],
        name: "Curacao",
        status: "assigned"
      },
      {
        alpha2: "CX",
        alpha3: "CXR",
        countryCallingCodes: [
          "+61"
        ],
        currencies: [
          "AUD"
        ],
        emoji: "🇨🇽",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Christmas Island",
        status: "assigned"
      },
      {
        alpha2: "CY",
        alpha3: "CYP",
        countryCallingCodes: [
          "+357"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇨🇾",
        ioc: "CYP",
        languages: [
          "ell",
          "tur"
        ],
        name: "Cyprus",
        status: "assigned"
      },
      {
        alpha2: "CZ",
        alpha3: "CZE",
        countryCallingCodes: [
          "+420"
        ],
        currencies: [
          "CZK"
        ],
        emoji: "🇨🇿",
        ioc: "CZE",
        languages: [
          "ces"
        ],
        name: "Czech Republic",
        status: "assigned"
      },
      {
        alpha2: "DD",
        alpha3: "DDR",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "German Democratic Republic",
        status: "deleted"
      },
      {
        alpha2: "DE",
        alpha3: "DEU",
        countryCallingCodes: [
          "+49"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇩🇪",
        ioc: "GER",
        languages: [
          "deu"
        ],
        name: "Germany",
        status: "assigned"
      },
      {
        alpha2: "DG",
        alpha3: "",
        countryCallingCodes: [],
        currencies: [
          "USD"
        ],
        emoji: "",
        ioc: "",
        languages: [],
        name: "Diego Garcia",
        status: "reserved"
      },
      {
        alpha2: "DJ",
        alpha3: "DJI",
        countryCallingCodes: [
          "+253"
        ],
        currencies: [
          "DJF"
        ],
        emoji: "🇩🇯",
        ioc: "DJI",
        languages: [
          "ara",
          "fra"
        ],
        name: "Djibouti",
        status: "assigned"
      },
      {
        alpha2: "DK",
        alpha3: "DNK",
        countryCallingCodes: [
          "+45"
        ],
        currencies: [
          "DKK"
        ],
        emoji: "🇩🇰",
        ioc: "DEN",
        languages: [
          "dan"
        ],
        name: "Denmark",
        status: "assigned"
      },
      {
        alpha2: "DM",
        alpha3: "DMA",
        countryCallingCodes: [
          "+1 767"
        ],
        currencies: [
          "XCD"
        ],
        emoji: "🇩🇲",
        ioc: "DMA",
        languages: [
          "eng"
        ],
        name: "Dominica",
        status: "assigned"
      },
      {
        alpha2: "DO",
        alpha3: "DOM",
        countryCallingCodes: [
          "+1 809",
          "+1 829",
          "+1 849"
        ],
        currencies: [
          "DOP"
        ],
        emoji: "🇩🇴",
        ioc: "DOM",
        languages: [
          "spa"
        ],
        name: "Dominican Republic",
        status: "assigned"
      },
      {
        alpha2: "DY",
        alpha3: "DHY",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Dahomey",
        status: "deleted"
      },
      {
        alpha2: "DZ",
        alpha3: "DZA",
        countryCallingCodes: [
          "+213"
        ],
        currencies: [
          "DZD"
        ],
        emoji: "🇩🇿",
        ioc: "ALG",
        languages: [
          "ara"
        ],
        name: "Algeria",
        status: "assigned"
      },
      {
        alpha2: "EA",
        alpha3: "",
        countryCallingCodes: [],
        currencies: [
          "EUR"
        ],
        emoji: "",
        ioc: "",
        languages: [],
        name: "Ceuta, Mulilla",
        status: "reserved"
      },
      {
        alpha2: "EC",
        alpha3: "ECU",
        countryCallingCodes: [
          "+593"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇪🇨",
        ioc: "ECU",
        languages: [
          "spa",
          "que"
        ],
        name: "Ecuador",
        status: "assigned"
      },
      {
        alpha2: "EE",
        alpha3: "EST",
        countryCallingCodes: [
          "+372"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇪🇪",
        ioc: "EST",
        languages: [
          "est"
        ],
        name: "Estonia",
        status: "assigned"
      },
      {
        alpha2: "EG",
        alpha3: "EGY",
        countryCallingCodes: [
          "+20"
        ],
        currencies: [
          "EGP"
        ],
        emoji: "🇪🇬",
        ioc: "EGY",
        languages: [
          "ara"
        ],
        name: "Egypt",
        status: "assigned"
      },
      {
        alpha2: "EH",
        alpha3: "ESH",
        countryCallingCodes: [
          "+212"
        ],
        currencies: [
          "MAD"
        ],
        emoji: "🇪🇭",
        ioc: "",
        languages: [],
        name: "Western Sahara",
        status: "assigned"
      },
      {
        alpha2: "ER",
        alpha3: "ERI",
        countryCallingCodes: [
          "+291"
        ],
        currencies: [
          "ERN"
        ],
        emoji: "🇪🇷",
        ioc: "ERI",
        languages: [
          "eng",
          "ara",
          "tir"
        ],
        name: "Eritrea",
        status: "assigned"
      },
      {
        alpha2: "ES",
        alpha3: "ESP",
        countryCallingCodes: [
          "+34"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇪🇸",
        ioc: "ESP",
        languages: [
          "spa"
        ],
        name: "Spain",
        status: "assigned"
      },
      {
        alpha2: "ET",
        alpha3: "ETH",
        countryCallingCodes: [
          "+251"
        ],
        currencies: [
          "ETB"
        ],
        emoji: "🇪🇹",
        ioc: "ETH",
        languages: [
          "amh"
        ],
        name: "Ethiopia",
        status: "assigned"
      },
      {
        alpha2: "EU",
        alpha3: "",
        countryCallingCodes: [
          "+388"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇪🇺",
        ioc: "",
        languages: [],
        name: "European Union",
        status: "reserved"
      },
      {
        alpha2: "FI",
        alpha3: "FIN",
        countryCallingCodes: [
          "+358"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇫🇮",
        ioc: "FIN",
        languages: [
          "fin",
          "swe"
        ],
        name: "Finland",
        status: "assigned"
      },
      {
        alpha2: "FJ",
        alpha3: "FJI",
        countryCallingCodes: [
          "+679"
        ],
        currencies: [
          "FJD"
        ],
        emoji: "🇫🇯",
        ioc: "FIJ",
        languages: [
          "eng",
          "fij"
        ],
        name: "Fiji",
        status: "assigned"
      },
      {
        alpha2: "FK",
        alpha3: "FLK",
        countryCallingCodes: [
          "+500"
        ],
        currencies: [
          "FKP"
        ],
        emoji: "🇫🇰",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Falkland Islands",
        status: "assigned"
      },
      {
        alpha2: "FM",
        alpha3: "FSM",
        countryCallingCodes: [
          "+691"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇫🇲",
        ioc: "FSM",
        languages: [
          "eng"
        ],
        name: "Micronesia, Federated States Of",
        status: "assigned"
      },
      {
        alpha2: "FO",
        alpha3: "FRO",
        countryCallingCodes: [
          "+298"
        ],
        currencies: [
          "DKK"
        ],
        emoji: "🇫🇴",
        ioc: "FAI",
        languages: [
          "fao",
          "dan"
        ],
        name: "Faroe Islands",
        status: "assigned"
      },
      {
        alpha2: "FQ",
        alpha3: "ATF",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "French Southern and Antarctic Territories",
        status: "deleted"
      },
      {
        alpha2: "FR",
        alpha3: "FRA",
        countryCallingCodes: [
          "+33"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇫🇷",
        ioc: "FRA",
        languages: [
          "fra"
        ],
        name: "France",
        status: "assigned"
      },
      {
        alpha2: "FX",
        alpha3: "",
        countryCallingCodes: [
          "+241"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "France, Metropolitan",
        status: "reserved"
      },
      {
        alpha2: "GA",
        alpha3: "GAB",
        countryCallingCodes: [
          "+241"
        ],
        currencies: [
          "XAF"
        ],
        emoji: "🇬🇦",
        ioc: "GAB",
        languages: [
          "fra"
        ],
        name: "Gabon",
        status: "assigned"
      },
      {
        alpha2: "GB",
        alpha3: "GBR",
        countryCallingCodes: [
          "+44"
        ],
        currencies: [
          "GBP"
        ],
        emoji: "🇬🇧",
        ioc: "GBR",
        languages: [
          "eng",
          "cor",
          "gle",
          "gla",
          "cym"
        ],
        name: "United Kingdom",
        status: "assigned"
      },
      {
        alpha2: "GD",
        alpha3: "GRD",
        countryCallingCodes: [
          "+473"
        ],
        currencies: [
          "XCD"
        ],
        emoji: "🇬🇩",
        ioc: "GRN",
        languages: [
          "eng"
        ],
        name: "Grenada",
        status: "assigned"
      },
      {
        alpha2: "GE",
        alpha3: "GEO",
        countryCallingCodes: [
          "+995"
        ],
        currencies: [
          "GEL"
        ],
        emoji: "🇬🇪",
        ioc: "GEO",
        languages: [
          "kat"
        ],
        name: "Georgia",
        status: "assigned"
      },
      {
        alpha2: "GE",
        alpha3: "GEL",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Gilbert and Ellice Islands",
        status: "deleted"
      },
      {
        alpha2: "GF",
        alpha3: "GUF",
        countryCallingCodes: [
          "+594"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇬🇫",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "French Guiana",
        status: "assigned"
      },
      {
        alpha2: "GG",
        alpha3: "GGY",
        countryCallingCodes: [
          "+44"
        ],
        currencies: [
          "GBP"
        ],
        emoji: "🇬🇬",
        ioc: "GCI",
        languages: [
          "fra"
        ],
        name: "Guernsey",
        status: "assigned"
      },
      {
        alpha2: "GH",
        alpha3: "GHA",
        countryCallingCodes: [
          "+233"
        ],
        currencies: [
          "GHS"
        ],
        emoji: "🇬🇭",
        ioc: "GHA",
        languages: [
          "eng"
        ],
        name: "Ghana",
        status: "assigned"
      },
      {
        alpha2: "GI",
        alpha3: "GIB",
        countryCallingCodes: [
          "+350"
        ],
        currencies: [
          "GIP"
        ],
        emoji: "🇬🇮",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Gibraltar",
        status: "assigned"
      },
      {
        alpha2: "GL",
        alpha3: "GRL",
        countryCallingCodes: [
          "+299"
        ],
        currencies: [
          "DKK"
        ],
        emoji: "🇬🇱",
        ioc: "",
        languages: [
          "kal"
        ],
        name: "Greenland",
        status: "assigned"
      },
      {
        alpha2: "GM",
        alpha3: "GMB",
        countryCallingCodes: [
          "+220"
        ],
        currencies: [
          "GMD"
        ],
        emoji: "🇬🇲",
        ioc: "GAM",
        languages: [
          "eng"
        ],
        name: "Gambia",
        status: "assigned"
      },
      {
        alpha2: "GN",
        alpha3: "GIN",
        countryCallingCodes: [
          "+224"
        ],
        currencies: [
          "GNF"
        ],
        emoji: "🇬🇳",
        ioc: "GUI",
        languages: [
          "fra"
        ],
        name: "Guinea",
        status: "assigned"
      },
      {
        alpha2: "GP",
        alpha3: "GLP",
        countryCallingCodes: [
          "+590"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇬🇵",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "Guadeloupe",
        status: "assigned"
      },
      {
        alpha2: "GQ",
        alpha3: "GNQ",
        countryCallingCodes: [
          "+240"
        ],
        currencies: [
          "XAF"
        ],
        emoji: "🇬🇶",
        ioc: "GEQ",
        languages: [
          "spa",
          "fra",
          "por"
        ],
        name: "Equatorial Guinea",
        status: "assigned"
      },
      {
        alpha2: "GR",
        alpha3: "GRC",
        countryCallingCodes: [
          "+30"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇬🇷",
        ioc: "GRE",
        languages: [
          "ell"
        ],
        name: "Greece",
        status: "assigned"
      },
      {
        alpha2: "GS",
        alpha3: "SGS",
        countryCallingCodes: [],
        currencies: [
          "GBP"
        ],
        emoji: "🇬🇸",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "South Georgia And The South Sandwich Islands",
        status: "assigned"
      },
      {
        alpha2: "GT",
        alpha3: "GTM",
        countryCallingCodes: [
          "+502"
        ],
        currencies: [
          "GTQ"
        ],
        emoji: "🇬🇹",
        ioc: "GUA",
        languages: [
          "spa"
        ],
        name: "Guatemala",
        status: "assigned"
      },
      {
        alpha2: "GU",
        alpha3: "GUM",
        countryCallingCodes: [
          "+1 671"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇬🇺",
        ioc: "GUM",
        languages: [
          "eng"
        ],
        name: "Guam",
        status: "assigned"
      },
      {
        alpha2: "GW",
        alpha3: "GNB",
        countryCallingCodes: [
          "+245"
        ],
        currencies: [
          "XOF"
        ],
        emoji: "🇬🇼",
        ioc: "GBS",
        languages: [
          "por"
        ],
        name: "Guinea-bissau",
        status: "assigned"
      },
      {
        alpha2: "GY",
        alpha3: "GUY",
        countryCallingCodes: [
          "+592"
        ],
        currencies: [
          "GYD"
        ],
        emoji: "🇬🇾",
        ioc: "GUY",
        languages: [
          "eng"
        ],
        name: "Guyana",
        status: "assigned"
      },
      {
        alpha2: "HK",
        alpha3: "HKG",
        countryCallingCodes: [
          "+852"
        ],
        currencies: [
          "HKD"
        ],
        emoji: "🇭🇰",
        ioc: "HKG",
        languages: [
          "zho",
          "eng"
        ],
        name: "Hong Kong",
        status: "assigned"
      },
      {
        alpha2: "HM",
        alpha3: "HMD",
        countryCallingCodes: [],
        currencies: [
          "AUD"
        ],
        emoji: "🇭🇲",
        ioc: "",
        languages: [],
        name: "Heard Island And McDonald Islands",
        status: "assigned"
      },
      {
        alpha2: "HN",
        alpha3: "HND",
        countryCallingCodes: [
          "+504"
        ],
        currencies: [
          "HNL"
        ],
        emoji: "🇭🇳",
        ioc: "HON",
        languages: [
          "spa"
        ],
        name: "Honduras",
        status: "assigned"
      },
      {
        alpha2: "HR",
        alpha3: "HRV",
        countryCallingCodes: [
          "+385"
        ],
        currencies: [
          "HRK"
        ],
        emoji: "🇭🇷",
        ioc: "CRO",
        languages: [
          "hrv"
        ],
        name: "Croatia",
        status: "assigned"
      },
      {
        alpha2: "HT",
        alpha3: "HTI",
        countryCallingCodes: [
          "+509"
        ],
        currencies: [
          "HTG",
          "USD"
        ],
        emoji: "🇭🇹",
        ioc: "HAI",
        languages: [
          "fra",
          "hat"
        ],
        name: "Haiti",
        status: "assigned"
      },
      {
        alpha2: "HU",
        alpha3: "HUN",
        countryCallingCodes: [
          "+36"
        ],
        currencies: [
          "HUF"
        ],
        emoji: "🇭🇺",
        ioc: "HUN",
        languages: [
          "hun"
        ],
        name: "Hungary",
        status: "assigned"
      },
      {
        alpha2: "HV",
        alpha3: "HVO",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Upper Volta",
        status: "deleted"
      },
      {
        alpha2: "IC",
        alpha3: "",
        countryCallingCodes: [],
        currencies: [
          "EUR"
        ],
        emoji: "",
        ioc: "",
        languages: [],
        name: "Canary Islands",
        status: "reserved"
      },
      {
        alpha2: "ID",
        alpha3: "IDN",
        countryCallingCodes: [
          "+62"
        ],
        currencies: [
          "IDR"
        ],
        emoji: "🇮🇩",
        ioc: "INA",
        languages: [
          "ind"
        ],
        name: "Indonesia",
        status: "assigned"
      },
      {
        alpha2: "IE",
        alpha3: "IRL",
        countryCallingCodes: [
          "+353"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇮🇪",
        ioc: "IRL",
        languages: [
          "eng",
          "gle"
        ],
        name: "Ireland",
        status: "assigned"
      },
      {
        alpha2: "IL",
        alpha3: "ISR",
        countryCallingCodes: [
          "+972"
        ],
        currencies: [
          "ILS"
        ],
        emoji: "🇮🇱",
        ioc: "ISR",
        languages: [
          "heb",
          "ara",
          "eng"
        ],
        name: "Israel",
        status: "assigned"
      },
      {
        alpha2: "IM",
        alpha3: "IMN",
        countryCallingCodes: [
          "+44"
        ],
        currencies: [
          "GBP"
        ],
        emoji: "🇮🇲",
        ioc: "",
        languages: [
          "eng",
          "glv"
        ],
        name: "Isle Of Man",
        status: "assigned"
      },
      {
        alpha2: "IN",
        alpha3: "IND",
        countryCallingCodes: [
          "+91"
        ],
        currencies: [
          "INR"
        ],
        emoji: "🇮🇳",
        ioc: "IND",
        languages: [
          "eng",
          "hin"
        ],
        name: "India",
        status: "assigned"
      },
      {
        alpha2: "IO",
        alpha3: "IOT",
        countryCallingCodes: [
          "+246"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇮🇴",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "British Indian Ocean Territory",
        status: "assigned"
      },
      {
        alpha2: "IQ",
        alpha3: "IRQ",
        countryCallingCodes: [
          "+964"
        ],
        currencies: [
          "IQD"
        ],
        emoji: "🇮🇶",
        ioc: "IRQ",
        languages: [
          "ara",
          "kur"
        ],
        name: "Iraq",
        status: "assigned"
      },
      {
        alpha2: "IR",
        alpha3: "IRN",
        countryCallingCodes: [
          "+98"
        ],
        currencies: [
          "IRR"
        ],
        emoji: "🇮🇷",
        ioc: "IRI",
        languages: [
          "fas"
        ],
        name: "Iran, Islamic Republic Of",
        status: "assigned"
      },
      {
        alpha2: "IS",
        alpha3: "ISL",
        countryCallingCodes: [
          "+354"
        ],
        currencies: [
          "ISK"
        ],
        emoji: "🇮🇸",
        ioc: "ISL",
        languages: [
          "isl"
        ],
        name: "Iceland",
        status: "assigned"
      },
      {
        alpha2: "IT",
        alpha3: "ITA",
        countryCallingCodes: [
          "+39"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇮🇹",
        ioc: "ITA",
        languages: [
          "ita"
        ],
        name: "Italy",
        status: "assigned"
      },
      {
        alpha2: "JE",
        alpha3: "JEY",
        countryCallingCodes: [
          "+44"
        ],
        currencies: [
          "GBP"
        ],
        emoji: "🇯🇪",
        ioc: "JCI",
        languages: [
          "eng",
          "fra"
        ],
        name: "Jersey",
        status: "assigned"
      },
      {
        alpha2: "JM",
        alpha3: "JAM",
        countryCallingCodes: [
          "+1 876"
        ],
        currencies: [
          "JMD"
        ],
        emoji: "🇯🇲",
        ioc: "JAM",
        languages: [
          "eng"
        ],
        name: "Jamaica",
        status: "assigned"
      },
      {
        alpha2: "JO",
        alpha3: "JOR",
        countryCallingCodes: [
          "+962"
        ],
        currencies: [
          "JOD"
        ],
        emoji: "🇯🇴",
        ioc: "JOR",
        languages: [
          "ara"
        ],
        name: "Jordan",
        status: "assigned"
      },
      {
        alpha2: "JP",
        alpha3: "JPN",
        countryCallingCodes: [
          "+81"
        ],
        currencies: [
          "JPY"
        ],
        emoji: "🇯🇵",
        ioc: "JPN",
        languages: [
          "jpn"
        ],
        name: "Japan",
        status: "assigned"
      },
      {
        alpha2: "JT",
        alpha3: "JTN",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Johnston Island",
        status: "deleted"
      },
      {
        alpha2: "KE",
        alpha3: "KEN",
        countryCallingCodes: [
          "+254"
        ],
        currencies: [
          "KES"
        ],
        emoji: "🇰🇪",
        ioc: "KEN",
        languages: [
          "eng",
          "swa"
        ],
        name: "Kenya",
        status: "assigned"
      },
      {
        alpha2: "KG",
        alpha3: "KGZ",
        countryCallingCodes: [
          "+996"
        ],
        currencies: [
          "KGS"
        ],
        emoji: "🇰🇬",
        ioc: "KGZ",
        languages: [
          "rus"
        ],
        name: "Kyrgyzstan",
        status: "assigned"
      },
      {
        alpha2: "KH",
        alpha3: "KHM",
        countryCallingCodes: [
          "+855"
        ],
        currencies: [
          "KHR"
        ],
        emoji: "🇰🇭",
        ioc: "CAM",
        languages: [
          "khm"
        ],
        name: "Cambodia",
        status: "assigned"
      },
      {
        alpha2: "KI",
        alpha3: "KIR",
        countryCallingCodes: [
          "+686"
        ],
        currencies: [
          "AUD"
        ],
        emoji: "🇰🇮",
        ioc: "KIR",
        languages: [
          "eng"
        ],
        name: "Kiribati",
        status: "assigned"
      },
      {
        alpha2: "KM",
        alpha3: "COM",
        countryCallingCodes: [
          "+269"
        ],
        currencies: [
          "KMF"
        ],
        emoji: "🇰🇲",
        ioc: "COM",
        languages: [
          "ara",
          "fra"
        ],
        name: "Comoros",
        status: "assigned"
      },
      {
        alpha2: "KN",
        alpha3: "KNA",
        countryCallingCodes: [
          "+1 869"
        ],
        currencies: [
          "XCD"
        ],
        emoji: "🇰🇳",
        ioc: "SKN",
        languages: [
          "eng"
        ],
        name: "Saint Kitts And Nevis",
        status: "assigned"
      },
      {
        alpha2: "KP",
        alpha3: "PRK",
        countryCallingCodes: [
          "+850"
        ],
        currencies: [
          "KPW"
        ],
        emoji: "🇰🇵",
        ioc: "PRK",
        languages: [
          "kor"
        ],
        name: "Korea, Democratic People's Republic Of",
        status: "assigned"
      },
      {
        alpha2: "KR",
        alpha3: "KOR",
        countryCallingCodes: [
          "+82"
        ],
        currencies: [
          "KRW"
        ],
        emoji: "🇰🇷",
        ioc: "KOR",
        languages: [
          "kor"
        ],
        name: "Korea, Republic Of",
        status: "assigned"
      },
      {
        alpha2: "KW",
        alpha3: "KWT",
        countryCallingCodes: [
          "+965"
        ],
        currencies: [
          "KWD"
        ],
        emoji: "🇰🇼",
        ioc: "KUW",
        languages: [
          "ara"
        ],
        name: "Kuwait",
        status: "assigned"
      },
      {
        alpha2: "KY",
        alpha3: "CYM",
        countryCallingCodes: [
          "+1 345"
        ],
        currencies: [
          "KYD"
        ],
        emoji: "🇰🇾",
        ioc: "CAY",
        languages: [
          "eng"
        ],
        name: "Cayman Islands",
        status: "assigned"
      },
      {
        alpha2: "KZ",
        alpha3: "KAZ",
        countryCallingCodes: [
          "+7",
          "+7 6",
          "+7 7"
        ],
        currencies: [
          "KZT"
        ],
        emoji: "🇰🇿",
        ioc: "KAZ",
        languages: [
          "kaz",
          "rus"
        ],
        name: "Kazakhstan",
        status: "assigned"
      },
      {
        alpha2: "LA",
        alpha3: "LAO",
        countryCallingCodes: [
          "+856"
        ],
        currencies: [
          "LAK"
        ],
        emoji: "🇱🇦",
        ioc: "LAO",
        languages: [
          "lao"
        ],
        name: "Lao People's Democratic Republic",
        status: "assigned"
      },
      {
        alpha2: "LB",
        alpha3: "LBN",
        countryCallingCodes: [
          "+961"
        ],
        currencies: [
          "LBP"
        ],
        emoji: "🇱🇧",
        ioc: "LIB",
        languages: [
          "ara",
          "hye"
        ],
        name: "Lebanon",
        status: "assigned"
      },
      {
        alpha2: "LC",
        alpha3: "LCA",
        countryCallingCodes: [
          "+1 758"
        ],
        currencies: [
          "XCD"
        ],
        emoji: "🇱🇨",
        ioc: "LCA",
        languages: [
          "eng"
        ],
        name: "Saint Lucia",
        status: "assigned"
      },
      {
        alpha2: "LI",
        alpha3: "LIE",
        countryCallingCodes: [
          "+423"
        ],
        currencies: [
          "CHF"
        ],
        emoji: "🇱🇮",
        ioc: "LIE",
        languages: [
          "deu"
        ],
        name: "Liechtenstein",
        status: "assigned"
      },
      {
        alpha2: "LK",
        alpha3: "LKA",
        countryCallingCodes: [
          "+94"
        ],
        currencies: [
          "LKR"
        ],
        emoji: "🇱🇰",
        ioc: "SRI",
        languages: [
          "sin",
          "tam"
        ],
        name: "Sri Lanka",
        status: "assigned"
      },
      {
        alpha2: "LR",
        alpha3: "LBR",
        countryCallingCodes: [
          "+231"
        ],
        currencies: [
          "LRD"
        ],
        emoji: "🇱🇷",
        ioc: "LBR",
        languages: [
          "eng"
        ],
        name: "Liberia",
        status: "assigned"
      },
      {
        alpha2: "LS",
        alpha3: "LSO",
        countryCallingCodes: [
          "+266"
        ],
        currencies: [
          "LSL",
          "ZAR"
        ],
        emoji: "🇱🇸",
        ioc: "LES",
        languages: [
          "eng",
          "sot"
        ],
        name: "Lesotho",
        status: "assigned"
      },
      {
        alpha2: "LT",
        alpha3: "LTU",
        countryCallingCodes: [
          "+370"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇱🇹",
        ioc: "LTU",
        languages: [
          "lit"
        ],
        name: "Lithuania",
        status: "assigned"
      },
      {
        alpha2: "LU",
        alpha3: "LUX",
        countryCallingCodes: [
          "+352"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇱🇺",
        ioc: "LUX",
        languages: [
          "fra",
          "deu",
          "ltz"
        ],
        name: "Luxembourg",
        status: "assigned"
      },
      {
        alpha2: "LV",
        alpha3: "LVA",
        countryCallingCodes: [
          "+371"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇱🇻",
        ioc: "LAT",
        languages: [
          "lav"
        ],
        name: "Latvia",
        status: "assigned"
      },
      {
        alpha2: "LY",
        alpha3: "LBY",
        countryCallingCodes: [
          "+218"
        ],
        currencies: [
          "LYD"
        ],
        emoji: "🇱🇾",
        ioc: "LBA",
        languages: [
          "ara"
        ],
        name: "Libya",
        status: "assigned"
      },
      {
        alpha2: "MA",
        alpha3: "MAR",
        countryCallingCodes: [
          "+212"
        ],
        currencies: [
          "MAD"
        ],
        emoji: "🇲🇦",
        ioc: "MAR",
        languages: [
          "ara"
        ],
        name: "Morocco",
        status: "assigned"
      },
      {
        alpha2: "MC",
        alpha3: "MCO",
        countryCallingCodes: [
          "+377"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇲🇨",
        ioc: "MON",
        languages: [
          "fra"
        ],
        name: "Monaco",
        status: "assigned"
      },
      {
        alpha2: "MD",
        alpha3: "MDA",
        countryCallingCodes: [
          "+373"
        ],
        currencies: [
          "MDL"
        ],
        emoji: "🇲🇩",
        ioc: "MDA",
        languages: [
          "ron"
        ],
        name: "Moldova",
        status: "assigned"
      },
      {
        alpha2: "ME",
        alpha3: "MNE",
        countryCallingCodes: [
          "+382"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇲🇪",
        ioc: "MNE",
        languages: [
          "mot"
        ],
        name: "Montenegro",
        status: "assigned"
      },
      {
        alpha2: "MF",
        alpha3: "MAF",
        countryCallingCodes: [
          "+590"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇲🇫",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "Saint Martin",
        status: "assigned"
      },
      {
        alpha2: "MG",
        alpha3: "MDG",
        countryCallingCodes: [
          "+261"
        ],
        currencies: [
          "MGA"
        ],
        emoji: "🇲🇬",
        ioc: "MAD",
        languages: [
          "fra",
          "mlg"
        ],
        name: "Madagascar",
        status: "assigned"
      },
      {
        alpha2: "MH",
        alpha3: "MHL",
        countryCallingCodes: [
          "+692"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇲🇭",
        ioc: "MHL",
        languages: [
          "eng",
          "mah"
        ],
        name: "Marshall Islands",
        status: "assigned"
      },
      {
        alpha2: "MI",
        alpha3: "MID",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Midway Islands",
        status: "deleted"
      },
      {
        alpha2: "MK",
        alpha3: "MKD",
        countryCallingCodes: [
          "+389"
        ],
        currencies: [
          "MKD"
        ],
        emoji: "🇲🇰",
        ioc: "MKD",
        languages: [
          "mkd"
        ],
        name: "Macedonia, The Former Yugoslav Republic Of",
        status: "assigned"
      },
      {
        alpha2: "ML",
        alpha3: "MLI",
        countryCallingCodes: [
          "+223"
        ],
        currencies: [
          "XOF"
        ],
        emoji: "🇲🇱",
        ioc: "MLI",
        languages: [
          "fra"
        ],
        name: "Mali",
        status: "assigned"
      },
      {
        alpha2: "MM",
        alpha3: "MMR",
        countryCallingCodes: [
          "+95"
        ],
        currencies: [
          "MMK"
        ],
        emoji: "🇲🇲",
        ioc: "MYA",
        languages: [
          "mya"
        ],
        name: "Myanmar",
        status: "assigned"
      },
      {
        alpha2: "MN",
        alpha3: "MNG",
        countryCallingCodes: [
          "+976"
        ],
        currencies: [
          "MNT"
        ],
        emoji: "🇲🇳",
        ioc: "MGL",
        languages: [
          "mon"
        ],
        name: "Mongolia",
        status: "assigned"
      },
      {
        alpha2: "MO",
        alpha3: "MAC",
        countryCallingCodes: [
          "+853"
        ],
        currencies: [
          "MOP"
        ],
        emoji: "🇲🇴",
        ioc: "MAC",
        languages: [
          "zho",
          "por"
        ],
        name: "Macao",
        status: "assigned"
      },
      {
        alpha2: "MP",
        alpha3: "MNP",
        countryCallingCodes: [
          "+1 670"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇲🇵",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Northern Mariana Islands",
        status: "assigned"
      },
      {
        alpha2: "MQ",
        alpha3: "MTQ",
        countryCallingCodes: [
          "+596"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇲🇶",
        ioc: "",
        languages: [],
        name: "Martinique",
        status: "assigned"
      },
      {
        alpha2: "MR",
        alpha3: "MRT",
        countryCallingCodes: [
          "+222"
        ],
        currencies: [
          "MRO"
        ],
        emoji: "🇲🇷",
        ioc: "MTN",
        languages: [
          "ara",
          "fra"
        ],
        name: "Mauritania",
        status: "assigned"
      },
      {
        alpha2: "MS",
        alpha3: "MSR",
        countryCallingCodes: [
          "+1 664"
        ],
        currencies: [
          "XCD"
        ],
        emoji: "🇲🇸",
        ioc: "",
        languages: [],
        name: "Montserrat",
        status: "assigned"
      },
      {
        alpha2: "MT",
        alpha3: "MLT",
        countryCallingCodes: [
          "+356"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇲🇹",
        ioc: "MLT",
        languages: [
          "mlt",
          "eng"
        ],
        name: "Malta",
        status: "assigned"
      },
      {
        alpha2: "MU",
        alpha3: "MUS",
        countryCallingCodes: [
          "+230"
        ],
        currencies: [
          "MUR"
        ],
        emoji: "🇲🇺",
        ioc: "MRI",
        languages: [
          "eng",
          "fra"
        ],
        name: "Mauritius",
        status: "assigned"
      },
      {
        alpha2: "MV",
        alpha3: "MDV",
        countryCallingCodes: [
          "+960"
        ],
        currencies: [
          "MVR"
        ],
        emoji: "🇲🇻",
        ioc: "MDV",
        languages: [
          "div"
        ],
        name: "Maldives",
        status: "assigned"
      },
      {
        alpha2: "MW",
        alpha3: "MWI",
        countryCallingCodes: [
          "+265"
        ],
        currencies: [
          "MWK"
        ],
        emoji: "🇲🇼",
        ioc: "MAW",
        languages: [
          "eng",
          "nya"
        ],
        name: "Malawi",
        status: "assigned"
      },
      {
        alpha2: "MX",
        alpha3: "MEX",
        countryCallingCodes: [
          "+52"
        ],
        currencies: [
          "MXN",
          "MXV"
        ],
        emoji: "🇲🇽",
        ioc: "MEX",
        languages: [
          "spa"
        ],
        name: "Mexico",
        status: "assigned"
      },
      {
        alpha2: "MY",
        alpha3: "MYS",
        countryCallingCodes: [
          "+60"
        ],
        currencies: [
          "MYR"
        ],
        emoji: "🇲🇾",
        ioc: "MAS",
        languages: [
          "msa",
          "eng"
        ],
        name: "Malaysia",
        status: "assigned"
      },
      {
        alpha2: "MZ",
        alpha3: "MOZ",
        countryCallingCodes: [
          "+258"
        ],
        currencies: [
          "MZN"
        ],
        emoji: "🇲🇿",
        ioc: "MOZ",
        languages: [
          "por"
        ],
        name: "Mozambique",
        status: "assigned"
      },
      {
        alpha2: "NA",
        alpha3: "NAM",
        countryCallingCodes: [
          "+264"
        ],
        currencies: [
          "NAD",
          "ZAR"
        ],
        emoji: "🇳🇦",
        ioc: "NAM",
        languages: [
          "eng"
        ],
        name: "Namibia",
        status: "assigned"
      },
      {
        alpha2: "NC",
        alpha3: "NCL",
        countryCallingCodes: [
          "+687"
        ],
        currencies: [
          "XPF"
        ],
        emoji: "🇳🇨",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "New Caledonia",
        status: "assigned"
      },
      {
        alpha2: "NE",
        alpha3: "NER",
        countryCallingCodes: [
          "+227"
        ],
        currencies: [
          "XOF"
        ],
        emoji: "🇳🇪",
        ioc: "NIG",
        languages: [
          "fra"
        ],
        name: "Niger",
        status: "assigned"
      },
      {
        alpha2: "NF",
        alpha3: "NFK",
        countryCallingCodes: [
          "+672"
        ],
        currencies: [
          "AUD"
        ],
        emoji: "🇳🇫",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Norfolk Island",
        status: "assigned"
      },
      {
        alpha2: "NG",
        alpha3: "NGA",
        countryCallingCodes: [
          "+234"
        ],
        currencies: [
          "NGN"
        ],
        emoji: "🇳🇬",
        ioc: "NGR",
        languages: [
          "eng"
        ],
        name: "Nigeria",
        status: "assigned"
      },
      {
        alpha2: "NH",
        alpha3: "NHB",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "New Hebrides",
        status: "deleted"
      },
      {
        alpha2: "NI",
        alpha3: "NIC",
        countryCallingCodes: [
          "+505"
        ],
        currencies: [
          "NIO"
        ],
        emoji: "🇳🇮",
        ioc: "NCA",
        languages: [
          "spa"
        ],
        name: "Nicaragua",
        status: "assigned"
      },
      {
        alpha2: "NL",
        alpha3: "NLD",
        countryCallingCodes: [
          "+31"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇳🇱",
        ioc: "NED",
        languages: [
          "nld"
        ],
        name: "Netherlands",
        status: "assigned"
      },
      {
        alpha2: "NO",
        alpha3: "NOR",
        countryCallingCodes: [
          "+47"
        ],
        currencies: [
          "NOK"
        ],
        emoji: "🇳🇴",
        ioc: "NOR",
        languages: [
          "nor"
        ],
        name: "Norway",
        status: "assigned"
      },
      {
        alpha2: "NP",
        alpha3: "NPL",
        countryCallingCodes: [
          "+977"
        ],
        currencies: [
          "NPR"
        ],
        emoji: "🇳🇵",
        ioc: "NEP",
        languages: [
          "nep"
        ],
        name: "Nepal",
        status: "assigned"
      },
      {
        alpha2: "NQ",
        alpha3: "ATN",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Dronning Maud Land",
        status: "deleted"
      },
      {
        alpha2: "NR",
        alpha3: "NRU",
        countryCallingCodes: [
          "+674"
        ],
        currencies: [
          "AUD"
        ],
        emoji: "🇳🇷",
        ioc: "NRU",
        languages: [
          "eng",
          "nau"
        ],
        name: "Nauru",
        status: "assigned"
      },
      {
        alpha2: "NT",
        alpha3: "NTZ",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Neutral Zone",
        status: "deleted"
      },
      {
        alpha2: "NU",
        alpha3: "NIU",
        countryCallingCodes: [
          "+683"
        ],
        currencies: [
          "NZD"
        ],
        emoji: "🇳🇺",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Niue",
        status: "assigned"
      },
      {
        alpha2: "NZ",
        alpha3: "NZL",
        countryCallingCodes: [
          "+64"
        ],
        currencies: [
          "NZD"
        ],
        emoji: "🇳🇿",
        ioc: "NZL",
        languages: [
          "eng"
        ],
        name: "New Zealand",
        status: "assigned"
      },
      {
        alpha2: "OM",
        alpha3: "OMN",
        countryCallingCodes: [
          "+968"
        ],
        currencies: [
          "OMR"
        ],
        emoji: "🇴🇲",
        ioc: "OMA",
        languages: [
          "ara"
        ],
        name: "Oman",
        status: "assigned"
      },
      {
        alpha2: "PA",
        alpha3: "PAN",
        countryCallingCodes: [
          "+507"
        ],
        currencies: [
          "PAB",
          "USD"
        ],
        emoji: "🇵🇦",
        ioc: "PAN",
        languages: [
          "spa"
        ],
        name: "Panama",
        status: "assigned"
      },
      {
        alpha2: "PC",
        alpha3: "PCI",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Pacific Islands, Trust Territory of the",
        status: "deleted"
      },
      {
        alpha2: "PE",
        alpha3: "PER",
        countryCallingCodes: [
          "+51"
        ],
        currencies: [
          "PEN"
        ],
        emoji: "🇵🇪",
        ioc: "PER",
        languages: [
          "spa",
          "aym",
          "que"
        ],
        name: "Peru",
        status: "assigned"
      },
      {
        alpha2: "PF",
        alpha3: "PYF",
        countryCallingCodes: [
          "+689"
        ],
        currencies: [
          "XPF"
        ],
        emoji: "🇵🇫",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "French Polynesia",
        status: "assigned"
      },
      {
        alpha2: "PG",
        alpha3: "PNG",
        countryCallingCodes: [
          "+675"
        ],
        currencies: [
          "PGK"
        ],
        emoji: "🇵🇬",
        ioc: "PNG",
        languages: [
          "eng"
        ],
        name: "Papua New Guinea",
        status: "assigned"
      },
      {
        alpha2: "PH",
        alpha3: "PHL",
        countryCallingCodes: [
          "+63"
        ],
        currencies: [
          "PHP"
        ],
        emoji: "🇵🇭",
        ioc: "PHI",
        languages: [
          "eng"
        ],
        name: "Philippines",
        status: "assigned"
      },
      {
        alpha2: "PK",
        alpha3: "PAK",
        countryCallingCodes: [
          "+92"
        ],
        currencies: [
          "PKR"
        ],
        emoji: "🇵🇰",
        ioc: "PAK",
        languages: [
          "urd",
          "eng"
        ],
        name: "Pakistan",
        status: "assigned"
      },
      {
        alpha2: "PL",
        alpha3: "POL",
        countryCallingCodes: [
          "+48"
        ],
        currencies: [
          "PLN"
        ],
        emoji: "🇵🇱",
        ioc: "POL",
        languages: [
          "pol"
        ],
        name: "Poland",
        status: "assigned"
      },
      {
        alpha2: "PM",
        alpha3: "SPM",
        countryCallingCodes: [
          "+508"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇵🇲",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Saint Pierre And Miquelon",
        status: "assigned"
      },
      {
        alpha2: "PN",
        alpha3: "PCN",
        countryCallingCodes: [
          "+872"
        ],
        currencies: [
          "NZD"
        ],
        emoji: "🇵🇳",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Pitcairn",
        status: "assigned"
      },
      {
        alpha2: "PR",
        alpha3: "PRI",
        countryCallingCodes: [
          "+1 787",
          "+1 939"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇵🇷",
        ioc: "PUR",
        languages: [
          "spa",
          "eng"
        ],
        name: "Puerto Rico",
        status: "assigned"
      },
      {
        alpha2: "PS",
        alpha3: "PSE",
        countryCallingCodes: [
          "+970"
        ],
        currencies: [
          "JOD",
          "EGP",
          "ILS"
        ],
        emoji: "🇵🇸",
        ioc: "PLE",
        languages: [
          "ara"
        ],
        name: "Palestinian Territory, Occupied",
        status: "assigned"
      },
      {
        alpha2: "PT",
        alpha3: "PRT",
        countryCallingCodes: [
          "+351"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇵🇹",
        ioc: "POR",
        languages: [
          "por"
        ],
        name: "Portugal",
        status: "assigned"
      },
      {
        alpha2: "PU",
        alpha3: "PUS",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "U.S. Miscellaneous Pacific Islands",
        status: "deleted"
      },
      {
        alpha2: "PW",
        alpha3: "PLW",
        countryCallingCodes: [
          "+680"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇵🇼",
        ioc: "PLW",
        languages: [
          "eng"
        ],
        name: "Palau",
        status: "assigned"
      },
      {
        alpha2: "PY",
        alpha3: "PRY",
        countryCallingCodes: [
          "+595"
        ],
        currencies: [
          "PYG"
        ],
        emoji: "🇵🇾",
        ioc: "PAR",
        languages: [
          "spa"
        ],
        name: "Paraguay",
        status: "assigned"
      },
      {
        alpha2: "PZ",
        alpha3: "PCZ",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Panama Canal Zone",
        status: "deleted"
      },
      {
        alpha2: "QA",
        alpha3: "QAT",
        countryCallingCodes: [
          "+974"
        ],
        currencies: [
          "QAR"
        ],
        emoji: "🇶🇦",
        ioc: "QAT",
        languages: [
          "ara"
        ],
        name: "Qatar",
        status: "assigned"
      },
      {
        alpha2: "RE",
        alpha3: "REU",
        countryCallingCodes: [
          "+262"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇷🇪",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "Reunion",
        status: "assigned"
      },
      {
        alpha2: "RH",
        alpha3: "RHO",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Southern Rhodesia",
        status: "deleted"
      },
      {
        alpha2: "RO",
        alpha3: "ROU",
        countryCallingCodes: [
          "+40"
        ],
        currencies: [
          "RON"
        ],
        emoji: "🇷🇴",
        ioc: "ROU",
        languages: [
          "ron"
        ],
        name: "Romania",
        status: "assigned"
      },
      {
        alpha2: "RS",
        alpha3: "SRB",
        countryCallingCodes: [
          "+381"
        ],
        currencies: [
          "RSD"
        ],
        emoji: "🇷🇸",
        ioc: "SRB",
        languages: [
          "srp"
        ],
        name: "Serbia",
        status: "assigned"
      },
      {
        alpha2: "RU",
        alpha3: "RUS",
        countryCallingCodes: [
          "+7",
          "+7 3",
          "+7 4",
          "+7 8"
        ],
        currencies: [
          "RUB"
        ],
        emoji: "🇷🇺",
        ioc: "RUS",
        languages: [
          "rus"
        ],
        name: "Russian Federation",
        status: "assigned"
      },
      {
        alpha2: "RW",
        alpha3: "RWA",
        countryCallingCodes: [
          "+250"
        ],
        currencies: [
          "RWF"
        ],
        emoji: "🇷🇼",
        ioc: "RWA",
        languages: [
          "eng",
          "fra",
          "kin"
        ],
        name: "Rwanda",
        status: "assigned"
      },
      {
        alpha2: "SA",
        alpha3: "SAU",
        countryCallingCodes: [
          "+966"
        ],
        currencies: [
          "SAR"
        ],
        emoji: "🇸🇦",
        ioc: "KSA",
        languages: [
          "ara"
        ],
        name: "Saudi Arabia",
        status: "assigned"
      },
      {
        alpha2: "SB",
        alpha3: "SLB",
        countryCallingCodes: [
          "+677"
        ],
        currencies: [
          "SBD"
        ],
        emoji: "🇸🇧",
        ioc: "SOL",
        languages: [
          "eng"
        ],
        name: "Solomon Islands",
        status: "assigned"
      },
      {
        alpha2: "SC",
        alpha3: "SYC",
        countryCallingCodes: [
          "+248"
        ],
        currencies: [
          "SCR"
        ],
        emoji: "🇸🇨",
        ioc: "SEY",
        languages: [
          "eng",
          "fra"
        ],
        name: "Seychelles",
        status: "assigned"
      },
      {
        alpha2: "SD",
        alpha3: "SDN",
        countryCallingCodes: [
          "+249"
        ],
        currencies: [
          "SDG"
        ],
        emoji: "🇸🇩",
        ioc: "SUD",
        languages: [
          "ara",
          "eng"
        ],
        name: "Sudan",
        status: "assigned"
      },
      {
        alpha2: "SE",
        alpha3: "SWE",
        countryCallingCodes: [
          "+46"
        ],
        currencies: [
          "SEK"
        ],
        emoji: "🇸🇪",
        ioc: "SWE",
        languages: [
          "swe"
        ],
        name: "Sweden",
        status: "assigned"
      },
      {
        alpha2: "SG",
        alpha3: "SGP",
        countryCallingCodes: [
          "+65"
        ],
        currencies: [
          "SGD"
        ],
        emoji: "🇸🇬",
        ioc: "SIN",
        languages: [
          "eng",
          "zho",
          "msa",
          "tam"
        ],
        name: "Singapore",
        status: "assigned"
      },
      {
        alpha2: "SH",
        alpha3: "SHN",
        countryCallingCodes: [
          "+290"
        ],
        currencies: [
          "SHP"
        ],
        emoji: "🇸🇭",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Saint Helena, Ascension And Tristan Da Cunha",
        status: "assigned"
      },
      {
        alpha2: "SI",
        alpha3: "SVN",
        countryCallingCodes: [
          "+386"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇸🇮",
        ioc: "SLO",
        languages: [
          "slv"
        ],
        name: "Slovenia",
        status: "assigned"
      },
      {
        alpha2: "SJ",
        alpha3: "SJM",
        countryCallingCodes: [
          "+47"
        ],
        currencies: [
          "NOK"
        ],
        emoji: "🇸🇯",
        ioc: "",
        languages: [],
        name: "Svalbard And Jan Mayen",
        status: "assigned"
      },
      {
        alpha2: "SK",
        alpha3: "SVK",
        countryCallingCodes: [
          "+421"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇸🇰",
        ioc: "SVK",
        languages: [
          "slk"
        ],
        name: "Slovakia",
        status: "assigned"
      },
      {
        alpha2: "SK",
        alpha3: "SKM",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Sikkim",
        status: "deleted"
      },
      {
        alpha2: "SL",
        alpha3: "SLE",
        countryCallingCodes: [
          "+232"
        ],
        currencies: [
          "SLL"
        ],
        emoji: "🇸🇱",
        ioc: "SLE",
        languages: [
          "eng"
        ],
        name: "Sierra Leone",
        status: "assigned"
      },
      {
        alpha2: "SM",
        alpha3: "SMR",
        countryCallingCodes: [
          "+378"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇸🇲",
        ioc: "SMR",
        languages: [
          "ita"
        ],
        name: "San Marino",
        status: "assigned"
      },
      {
        alpha2: "SN",
        alpha3: "SEN",
        countryCallingCodes: [
          "+221"
        ],
        currencies: [
          "XOF"
        ],
        emoji: "🇸🇳",
        ioc: "SEN",
        languages: [
          "fra"
        ],
        name: "Senegal",
        status: "assigned"
      },
      {
        alpha2: "SO",
        alpha3: "SOM",
        countryCallingCodes: [
          "+252"
        ],
        currencies: [
          "SOS"
        ],
        emoji: "🇸🇴",
        ioc: "SOM",
        languages: [
          "som"
        ],
        name: "Somalia",
        status: "assigned"
      },
      {
        alpha2: "SR",
        alpha3: "SUR",
        countryCallingCodes: [
          "+597"
        ],
        currencies: [
          "SRD"
        ],
        emoji: "🇸🇷",
        ioc: "SUR",
        languages: [
          "nld"
        ],
        name: "Suriname",
        status: "assigned"
      },
      {
        alpha2: "SS",
        alpha3: "SSD",
        countryCallingCodes: [
          "+211"
        ],
        currencies: [
          "SSP"
        ],
        emoji: "🇸🇸",
        ioc: "SSD",
        languages: [
          "eng"
        ],
        name: "South Sudan",
        status: "assigned"
      },
      {
        alpha2: "ST",
        alpha3: "STP",
        countryCallingCodes: [
          "+239"
        ],
        currencies: [
          "STD"
        ],
        emoji: "🇸🇹",
        ioc: "STP",
        languages: [
          "por"
        ],
        name: "Sao Tome and Principe",
        status: "assigned"
      },
      {
        alpha2: "SU",
        alpha3: "",
        countryCallingCodes: [],
        currencies: [
          "RUB"
        ],
        emoji: "",
        ioc: "",
        languages: [
          "rus"
        ],
        name: "USSR",
        status: "reserved"
      },
      {
        alpha2: "SV",
        alpha3: "SLV",
        countryCallingCodes: [
          "+503"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇸🇻",
        ioc: "ESA",
        languages: [
          "spa"
        ],
        name: "El Salvador",
        status: "assigned"
      },
      {
        alpha2: "SX",
        alpha3: "SXM",
        countryCallingCodes: [
          "+1 721"
        ],
        currencies: [
          "ANG"
        ],
        emoji: "🇸🇽",
        ioc: "",
        languages: [
          "nld"
        ],
        name: "Sint Maarten",
        status: "assigned"
      },
      {
        alpha2: "SY",
        alpha3: "SYR",
        countryCallingCodes: [
          "+963"
        ],
        currencies: [
          "SYP"
        ],
        emoji: "🇸🇾",
        ioc: "SYR",
        languages: [
          "ara"
        ],
        name: "Syrian Arab Republic",
        status: "assigned"
      },
      {
        alpha2: "SZ",
        alpha3: "SWZ",
        countryCallingCodes: [
          "+268"
        ],
        currencies: [
          "SZL"
        ],
        emoji: "🇸🇿",
        ioc: "SWZ",
        languages: [
          "eng",
          "ssw"
        ],
        name: "Swaziland",
        status: "assigned"
      },
      {
        alpha2: "TA",
        alpha3: "",
        countryCallingCodes: [
          "+290"
        ],
        currencies: [
          "GBP"
        ],
        emoji: "",
        ioc: "",
        languages: [],
        name: "Tristan de Cunha",
        status: "reserved"
      },
      {
        alpha2: "TC",
        alpha3: "TCA",
        countryCallingCodes: [
          "+1 649"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇹🇨",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Turks And Caicos Islands",
        status: "assigned"
      },
      {
        alpha2: "TD",
        alpha3: "TCD",
        countryCallingCodes: [
          "+235"
        ],
        currencies: [
          "XAF"
        ],
        emoji: "🇹🇩",
        ioc: "CHA",
        languages: [
          "ara",
          "fra"
        ],
        name: "Chad",
        status: "assigned"
      },
      {
        alpha2: "TF",
        alpha3: "ATF",
        countryCallingCodes: [],
        currencies: [
          "EUR"
        ],
        emoji: "🇹🇫",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "French Southern Territories",
        status: "assigned"
      },
      {
        alpha2: "TG",
        alpha3: "TGO",
        countryCallingCodes: [
          "+228"
        ],
        currencies: [
          "XOF"
        ],
        emoji: "🇹🇬",
        ioc: "TOG",
        languages: [
          "fra"
        ],
        name: "Togo",
        status: "assigned"
      },
      {
        alpha2: "TH",
        alpha3: "THA",
        countryCallingCodes: [
          "+66"
        ],
        currencies: [
          "THB"
        ],
        emoji: "🇹🇭",
        ioc: "THA",
        languages: [
          "tha"
        ],
        name: "Thailand",
        status: "assigned"
      },
      {
        alpha2: "TJ",
        alpha3: "TJK",
        countryCallingCodes: [
          "+992"
        ],
        currencies: [
          "TJS"
        ],
        emoji: "🇹🇯",
        ioc: "TJK",
        languages: [
          "tgk",
          "rus"
        ],
        name: "Tajikistan",
        status: "assigned"
      },
      {
        alpha2: "TK",
        alpha3: "TKL",
        countryCallingCodes: [
          "+690"
        ],
        currencies: [
          "NZD"
        ],
        emoji: "🇹🇰",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "Tokelau",
        status: "assigned"
      },
      {
        alpha2: "TL",
        alpha3: "TLS",
        countryCallingCodes: [
          "+670"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇹🇱",
        ioc: "TLS",
        languages: [
          "por"
        ],
        name: "Timor-Leste, Democratic Republic of",
        status: "assigned"
      },
      {
        alpha2: "TM",
        alpha3: "TKM",
        countryCallingCodes: [
          "+993"
        ],
        currencies: [
          "TMT"
        ],
        emoji: "🇹🇲",
        ioc: "TKM",
        languages: [
          "tuk",
          "rus"
        ],
        name: "Turkmenistan",
        status: "assigned"
      },
      {
        alpha2: "TN",
        alpha3: "TUN",
        countryCallingCodes: [
          "+216"
        ],
        currencies: [
          "TND"
        ],
        emoji: "🇹🇳",
        ioc: "TUN",
        languages: [
          "ara"
        ],
        name: "Tunisia",
        status: "assigned"
      },
      {
        alpha2: "TO",
        alpha3: "TON",
        countryCallingCodes: [
          "+676"
        ],
        currencies: [
          "TOP"
        ],
        emoji: "🇹🇴",
        ioc: "TGA",
        languages: [
          "eng"
        ],
        name: "Tonga",
        status: "assigned"
      },
      {
        alpha2: "TP",
        alpha3: "TMP",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "East Timor",
        status: "deleted"
      },
      {
        alpha2: "TR",
        alpha3: "TUR",
        countryCallingCodes: [
          "+90"
        ],
        currencies: [
          "TRY"
        ],
        emoji: "🇹🇷",
        ioc: "TUR",
        languages: [
          "tur"
        ],
        name: "Turkey",
        status: "assigned"
      },
      {
        alpha2: "TT",
        alpha3: "TTO",
        countryCallingCodes: [
          "+1 868"
        ],
        currencies: [
          "TTD"
        ],
        emoji: "🇹🇹",
        ioc: "TTO",
        languages: [
          "eng"
        ],
        name: "Trinidad And Tobago",
        status: "assigned"
      },
      {
        alpha2: "TV",
        alpha3: "TUV",
        countryCallingCodes: [
          "+688"
        ],
        currencies: [
          "AUD"
        ],
        emoji: "🇹🇻",
        ioc: "TUV",
        languages: [
          "eng"
        ],
        name: "Tuvalu",
        status: "assigned"
      },
      {
        alpha2: "TW",
        alpha3: "TWN",
        countryCallingCodes: [
          "+886"
        ],
        currencies: [
          "TWD"
        ],
        emoji: "🇹🇼",
        ioc: "TPE",
        languages: [
          "zho"
        ],
        name: "Taiwan",
        status: "assigned"
      },
      {
        alpha2: "TZ",
        alpha3: "TZA",
        countryCallingCodes: [
          "+255"
        ],
        currencies: [
          "TZS"
        ],
        emoji: "🇹🇿",
        ioc: "TAN",
        languages: [
          "swa",
          "eng"
        ],
        name: "Tanzania, United Republic Of",
        status: "assigned"
      },
      {
        alpha2: "UA",
        alpha3: "UKR",
        countryCallingCodes: [
          "+380"
        ],
        currencies: [
          "UAH"
        ],
        emoji: "🇺🇦",
        ioc: "UKR",
        languages: [
          "ukr",
          "rus"
        ],
        name: "Ukraine",
        status: "assigned"
      },
      {
        alpha2: "UG",
        alpha3: "UGA",
        countryCallingCodes: [
          "+256"
        ],
        currencies: [
          "UGX"
        ],
        emoji: "🇺🇬",
        ioc: "UGA",
        languages: [
          "eng",
          "swa"
        ],
        name: "Uganda",
        status: "assigned"
      },
      {
        alpha2: "UK",
        alpha3: "",
        countryCallingCodes: [],
        currencies: [
          "GBP"
        ],
        emoji: "",
        ioc: "",
        languages: [
          "eng",
          "cor",
          "gle",
          "gla",
          "cym"
        ],
        name: "United Kingdom",
        status: "reserved"
      },
      {
        alpha2: "UM",
        alpha3: "UMI",
        countryCallingCodes: [
          "+1"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇺🇲",
        ioc: "",
        languages: [
          "eng"
        ],
        name: "United States Minor Outlying Islands",
        status: "assigned"
      },
      {
        alpha2: "US",
        alpha3: "USA",
        countryCallingCodes: [
          "+1"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇺🇸",
        ioc: "USA",
        languages: [
          "eng"
        ],
        name: "United States",
        status: "assigned"
      },
      {
        alpha2: "UY",
        alpha3: "URY",
        countryCallingCodes: [
          "+598"
        ],
        currencies: [
          "UYU",
          "UYI"
        ],
        emoji: "🇺🇾",
        ioc: "URU",
        languages: [
          "spa"
        ],
        name: "Uruguay",
        status: "assigned"
      },
      {
        alpha2: "UZ",
        alpha3: "UZB",
        countryCallingCodes: [
          "+998"
        ],
        currencies: [
          "UZS"
        ],
        emoji: "🇺🇿",
        ioc: "UZB",
        languages: [
          "uzb",
          "rus"
        ],
        name: "Uzbekistan",
        status: "assigned"
      },
      {
        alpha2: "VA",
        alpha3: "VAT",
        countryCallingCodes: [
          "+379",
          "+39"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇻🇦",
        ioc: "",
        languages: [
          "ita"
        ],
        name: "Vatican City State",
        status: "assigned"
      },
      {
        alpha2: "VC",
        alpha3: "VCT",
        countryCallingCodes: [
          "+1 784"
        ],
        currencies: [
          "XCD"
        ],
        emoji: "🇻🇨",
        ioc: "VIN",
        languages: [
          "eng"
        ],
        name: "Saint Vincent And The Grenadines",
        status: "assigned"
      },
      {
        alpha2: "VD",
        alpha3: "VDR",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Viet-Nam, Democratic Republic of",
        status: "deleted"
      },
      {
        alpha2: "VE",
        alpha3: "VEN",
        countryCallingCodes: [
          "+58"
        ],
        currencies: [
          "VEF"
        ],
        emoji: "🇻🇪",
        ioc: "VEN",
        languages: [
          "spa"
        ],
        name: "Venezuela, Bolivarian Republic Of",
        status: "assigned"
      },
      {
        alpha2: "VG",
        alpha3: "VGB",
        countryCallingCodes: [
          "+1 284"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇻🇬",
        ioc: "IVB",
        languages: [
          "eng"
        ],
        name: "Virgin Islands (British)",
        status: "assigned"
      },
      {
        alpha2: "VI",
        alpha3: "VIR",
        countryCallingCodes: [
          "+1 340"
        ],
        currencies: [
          "USD"
        ],
        emoji: "🇻🇮",
        ioc: "ISV",
        languages: [
          "eng"
        ],
        name: "Virgin Islands (US)",
        status: "assigned"
      },
      {
        alpha2: "VN",
        alpha3: "VNM",
        countryCallingCodes: [
          "+84"
        ],
        currencies: [
          "VND"
        ],
        emoji: "🇻🇳",
        ioc: "VIE",
        languages: [
          "vie"
        ],
        name: "Viet Nam",
        status: "assigned"
      },
      {
        alpha2: "VU",
        alpha3: "VUT",
        countryCallingCodes: [
          "+678"
        ],
        currencies: [
          "VUV"
        ],
        emoji: "🇻🇺",
        ioc: "VAN",
        languages: [
          "bis",
          "eng",
          "fra"
        ],
        name: "Vanuatu",
        status: "assigned"
      },
      {
        alpha2: "WF",
        alpha3: "WLF",
        countryCallingCodes: [
          "+681"
        ],
        currencies: [
          "XPF"
        ],
        emoji: "🇼🇫",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "Wallis And Futuna",
        status: "assigned"
      },
      {
        alpha2: "WK",
        alpha3: "WAK",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Wake Island",
        status: "deleted"
      },
      {
        alpha2: "WS",
        alpha3: "WSM",
        countryCallingCodes: [
          "+685"
        ],
        currencies: [
          "WST"
        ],
        emoji: "🇼🇸",
        ioc: "SAM",
        languages: [
          "eng",
          "smo"
        ],
        name: "Samoa",
        status: "assigned"
      },
      {
        alpha2: "XK",
        alpha3: "",
        countryCallingCodes: [
          "+383"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "",
        ioc: "KOS",
        languages: [
          "sqi",
          "srp",
          "bos",
          "tur",
          "rom"
        ],
        name: "Kosovo",
        status: "user assigned"
      },
      {
        alpha2: "YD",
        alpha3: "YMD",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Yemen, Democratic",
        status: "deleted"
      },
      {
        alpha2: "YE",
        alpha3: "YEM",
        countryCallingCodes: [
          "+967"
        ],
        currencies: [
          "YER"
        ],
        emoji: "🇾🇪",
        ioc: "YEM",
        languages: [
          "ara"
        ],
        name: "Yemen",
        status: "assigned"
      },
      {
        alpha2: "YT",
        alpha3: "MYT",
        countryCallingCodes: [
          "+262"
        ],
        currencies: [
          "EUR"
        ],
        emoji: "🇾🇹",
        ioc: "",
        languages: [
          "fra"
        ],
        name: "Mayotte",
        status: "assigned"
      },
      {
        alpha2: "YU",
        alpha3: "YUG",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Yugoslavia",
        status: "deleted"
      },
      {
        alpha2: "ZA",
        alpha3: "ZAF",
        countryCallingCodes: [
          "+27"
        ],
        currencies: [
          "ZAR"
        ],
        emoji: "🇿🇦",
        ioc: "RSA",
        languages: [
          "afr",
          "eng",
          "nbl",
          "som",
          "tso",
          "ven",
          "xho",
          "zul"
        ],
        name: "South Africa",
        status: "assigned"
      },
      {
        alpha2: "ZM",
        alpha3: "ZMB",
        countryCallingCodes: [
          "+260"
        ],
        currencies: [
          "ZMW"
        ],
        emoji: "🇿🇲",
        ioc: "ZAM",
        languages: [
          "eng"
        ],
        name: "Zambia",
        status: "assigned"
      },
      {
        alpha2: "ZR",
        alpha3: "ZAR",
        countryCallingCodes: [],
        currencies: [],
        ioc: "",
        languages: [],
        name: "Zaire",
        status: "deleted"
      },
      {
        alpha2: "ZW",
        alpha3: "ZWE",
        countryCallingCodes: [
          "+263"
        ],
        currencies: [
          "USD",
          "ZAR",
          "BWP",
          "GBP",
          "EUR"
        ],
        emoji: "🇿🇼",
        ioc: "ZIM",
        languages: [
          "eng",
          "sna",
          "nde"
        ],
        name: "Zimbabwe",
        status: "assigned"
      }
    ];
  }
});

// node_modules/country-data/data/currencies.json
var require_currencies = __commonJS({
  "node_modules/country-data/data/currencies.json"(exports, module) {
    module.exports = [
      {
        code: "AED",
        decimals: 2,
        name: "United Arab Emirates dirham",
        number: "784"
      },
      {
        code: "AFN",
        decimals: 2,
        name: "Afghan afghani",
        number: "971"
      },
      {
        code: "ALL",
        decimals: 2,
        name: "Albanian lek",
        number: "8"
      },
      {
        code: "AMD",
        decimals: 2,
        name: "Armenian dram",
        number: "51"
      },
      {
        code: "ANG",
        decimals: 2,
        name: "Netherlands Antillean guilder",
        number: "532"
      },
      {
        code: "AOA",
        decimals: 2,
        name: "Angolan kwanza",
        number: "973"
      },
      {
        code: "ARS",
        decimals: 2,
        name: "Argentine peso",
        number: "32"
      },
      {
        code: "AUD",
        decimals: 2,
        name: "Australian dollar",
        number: "36"
      },
      {
        code: "AWG",
        decimals: 2,
        name: "Aruban florin",
        number: "533"
      },
      {
        code: "AZN",
        decimals: 2,
        name: "Azerbaijani manat",
        number: "944"
      },
      {
        code: "BAM",
        decimals: 2,
        name: "Bosnia and Herzegovina convertible mark",
        number: "977"
      },
      {
        code: "BBD",
        decimals: 2,
        name: "Barbados dollar",
        number: "52"
      },
      {
        code: "BDT",
        decimals: 2,
        name: "Bangladeshi taka",
        number: "50"
      },
      {
        code: "BGN",
        decimals: 2,
        name: "Bulgarian lev",
        number: "975"
      },
      {
        code: "BHD",
        decimals: 3,
        name: "Bahraini dinar",
        number: "48"
      },
      {
        code: "BIF",
        decimals: 0,
        name: "Burundian franc",
        number: "108"
      },
      {
        code: "BMD",
        decimals: 2,
        name: "Bermudian dollar (customarily known as Bermuda dollar)",
        number: "60"
      },
      {
        code: "BND",
        decimals: 2,
        name: "Brunei dollar",
        number: "96"
      },
      {
        code: "BOB",
        decimals: 2,
        name: "Boliviano",
        number: "68"
      },
      {
        code: "BOV",
        decimals: 2,
        name: "Bolivian Mvdol (funds code)",
        number: "984"
      },
      {
        code: "BRL",
        decimals: 2,
        name: "Brazilian real",
        number: "986"
      },
      {
        code: "BSD",
        decimals: 2,
        name: "Bahamian dollar",
        number: "44"
      },
      {
        code: "BTN",
        decimals: 2,
        name: "Bhutanese ngultrum",
        number: "64"
      },
      {
        code: "BWP",
        decimals: 2,
        name: "Botswana pula",
        number: "72"
      },
      {
        code: "BYR",
        decimals: 0,
        name: "Belarusian ruble",
        number: "974"
      },
      {
        code: "BZD",
        decimals: 2,
        name: "Belize dollar",
        number: "84"
      },
      {
        code: "CAD",
        decimals: 2,
        name: "Canadian dollar",
        number: "124"
      },
      {
        code: "CDF",
        decimals: 2,
        name: "Congolese franc",
        number: "976"
      },
      {
        code: "CHE",
        decimals: 2,
        name: "WIR Euro (complementary currency)",
        number: "947"
      },
      {
        code: "CHF",
        decimals: 2,
        name: "Swiss franc",
        number: "756"
      },
      {
        code: "CHW",
        decimals: 2,
        name: "WIR Franc (complementary currency)",
        number: "948"
      },
      {
        code: "CLF",
        decimals: 0,
        name: "Unidad de Fomento (funds code)",
        number: "990"
      },
      {
        code: "CLP",
        decimals: 0,
        name: "Chilean peso",
        number: "152"
      },
      {
        code: "CNY",
        decimals: 2,
        name: "Chinese yuan",
        number: "156"
      },
      {
        code: "COP",
        decimals: 2,
        name: "Colombian peso",
        number: "170"
      },
      {
        code: "COU",
        decimals: 2,
        name: "Unidad de Valor Real",
        number: "970"
      },
      {
        code: "CRC",
        decimals: 2,
        name: "Costa Rican colon",
        number: "188"
      },
      {
        code: "CUC",
        decimals: 2,
        name: "Cuban convertible peso",
        number: "931"
      },
      {
        code: "CUP",
        decimals: 2,
        name: "Cuban peso",
        number: "192"
      },
      {
        code: "CVE",
        decimals: 0,
        name: "Cape Verde escudo",
        number: "132"
      },
      {
        code: "CZK",
        decimals: 2,
        name: "Czech koruna",
        number: "203"
      },
      {
        code: "DJF",
        decimals: 0,
        name: "Djiboutian franc",
        number: "262"
      },
      {
        code: "DKK",
        decimals: 2,
        name: "Danish krone",
        number: "208"
      },
      {
        code: "DOP",
        decimals: 2,
        name: "Dominican peso",
        number: "214"
      },
      {
        code: "DZD",
        decimals: 2,
        name: "Algerian dinar",
        number: "12"
      },
      {
        code: "EGP",
        decimals: 2,
        name: "Egyptian pound",
        number: "818"
      },
      {
        code: "ERN",
        decimals: 2,
        name: "Eritrean nakfa",
        number: "232"
      },
      {
        code: "ETB",
        decimals: 2,
        name: "Ethiopian birr",
        number: "230"
      },
      {
        code: "EUR",
        decimals: 2,
        name: "Euro",
        number: "978"
      },
      {
        code: "FJD",
        decimals: 2,
        name: "Fiji dollar",
        number: "242"
      },
      {
        code: "FKP",
        decimals: 2,
        name: "Falkland Islands pound",
        number: "238"
      },
      {
        code: "GBP",
        decimals: 2,
        name: "Pound sterling",
        number: "826"
      },
      {
        code: "GEL",
        decimals: 2,
        name: "Georgian lari",
        number: "981"
      },
      {
        code: "GHS",
        decimals: 2,
        name: "Ghanaian cedi",
        number: "936"
      },
      {
        code: "GIP",
        decimals: 2,
        name: "Gibraltar pound",
        number: "292"
      },
      {
        code: "GMD",
        decimals: 2,
        name: "Gambian dalasi",
        number: "270"
      },
      {
        code: "GNF",
        decimals: 0,
        name: "Guinean franc",
        number: "324"
      },
      {
        code: "GTQ",
        decimals: 2,
        name: "Guatemalan quetzal",
        number: "320"
      },
      {
        code: "GYD",
        decimals: 2,
        name: "Guyanese dollar",
        number: "328"
      },
      {
        code: "HKD",
        decimals: 2,
        name: "Hong Kong dollar",
        number: "344"
      },
      {
        code: "HNL",
        decimals: 2,
        name: "Honduran lempira",
        number: "340"
      },
      {
        code: "HRK",
        decimals: 2,
        name: "Croatian kuna",
        number: "191"
      },
      {
        code: "HTG",
        decimals: 2,
        name: "Haitian gourde",
        number: "332"
      },
      {
        code: "HUF",
        decimals: 2,
        name: "Hungarian forint",
        number: "348"
      },
      {
        code: "IDR",
        decimals: 2,
        name: "Indonesian rupiah",
        number: "360"
      },
      {
        code: "ILS",
        decimals: 2,
        name: "Israeli new shekel",
        number: "376"
      },
      {
        code: "INR",
        decimals: 2,
        name: "Indian rupee",
        number: "356"
      },
      {
        code: "IQD",
        decimals: 3,
        name: "Iraqi dinar",
        number: "368"
      },
      {
        code: "IRR",
        decimals: 0,
        name: "Iranian rial",
        number: "364"
      },
      {
        code: "ISK",
        decimals: 0,
        name: "Icelandic króna",
        number: "352"
      },
      {
        code: "JMD",
        decimals: 2,
        name: "Jamaican dollar",
        number: "388"
      },
      {
        code: "JOD",
        decimals: 3,
        name: "Jordanian dinar",
        number: "400"
      },
      {
        code: "JPY",
        decimals: 0,
        name: "Japanese yen",
        number: "392"
      },
      {
        code: "KES",
        decimals: 2,
        name: "Kenyan shilling",
        number: "404"
      },
      {
        code: "KGS",
        decimals: 2,
        name: "Kyrgyzstani som",
        number: "417"
      },
      {
        code: "KHR",
        decimals: 2,
        name: "Cambodian riel",
        number: "116"
      },
      {
        code: "KMF",
        decimals: 0,
        name: "Comoro franc",
        number: "174"
      },
      {
        code: "KPW",
        decimals: 0,
        name: "North Korean won",
        number: "408"
      },
      {
        code: "KRW",
        decimals: 0,
        name: "South Korean won",
        number: "410"
      },
      {
        code: "KWD",
        decimals: 3,
        name: "Kuwaiti dinar",
        number: "414"
      },
      {
        code: "KYD",
        decimals: 2,
        name: "Cayman Islands dollar",
        number: "136"
      },
      {
        code: "KZT",
        decimals: 2,
        name: "Kazakhstani tenge",
        number: "398"
      },
      {
        code: "LAK",
        decimals: 0,
        name: "Lao kip",
        number: "418"
      },
      {
        code: "LBP",
        decimals: 0,
        name: "Lebanese pound",
        number: "422"
      },
      {
        code: "LKR",
        decimals: 2,
        name: "Sri Lankan rupee",
        number: "144"
      },
      {
        code: "LRD",
        decimals: 2,
        name: "Liberian dollar",
        number: "430"
      },
      {
        code: "LSL",
        decimals: 2,
        name: "Lesotho loti",
        number: "426"
      },
      {
        code: "LTL",
        decimals: 2,
        name: "Lithuanian litas",
        number: "440"
      },
      {
        code: "LVL",
        decimals: 2,
        name: "Latvian lats",
        number: "428"
      },
      {
        code: "LYD",
        decimals: 3,
        name: "Libyan dinar",
        number: "434"
      },
      {
        code: "MAD",
        decimals: 2,
        name: "Moroccan dirham",
        number: "504"
      },
      {
        code: "MDL",
        decimals: 2,
        name: "Moldovan leu",
        number: "498"
      },
      {
        code: "MGA",
        decimals: 0,
        name: "Malagasy ariary",
        number: "969"
      },
      {
        code: "MKD",
        decimals: 0,
        name: "Macedonian denar",
        number: "807"
      },
      {
        code: "MMK",
        decimals: 0,
        name: "Myanma kyat",
        number: "104"
      },
      {
        code: "MNT",
        decimals: 2,
        name: "Mongolian tugrik",
        number: "496"
      },
      {
        code: "MOP",
        decimals: 2,
        name: "Macanese pataca",
        number: "446"
      },
      {
        code: "MRO",
        decimals: 0,
        name: "Mauritanian ouguiya",
        number: "478"
      },
      {
        code: "MUR",
        decimals: 2,
        name: "Mauritian rupee",
        number: "480"
      },
      {
        code: "MVR",
        decimals: 2,
        name: "Maldivian rufiyaa",
        number: "462"
      },
      {
        code: "MWK",
        decimals: 2,
        name: "Malawian kwacha",
        number: "454"
      },
      {
        code: "MXN",
        decimals: 2,
        name: "Mexican peso",
        number: "484"
      },
      {
        code: "MXV",
        decimals: 2,
        name: "Mexican Unidad de Inversion (UDI) (funds code)",
        number: "979"
      },
      {
        code: "MYR",
        decimals: 2,
        name: "Malaysian ringgit",
        number: "458"
      },
      {
        code: "MZN",
        decimals: 2,
        name: "Mozambican metical",
        number: "943"
      },
      {
        code: "NAD",
        decimals: 2,
        name: "Namibian dollar",
        number: "516"
      },
      {
        code: "NGN",
        decimals: 2,
        name: "Nigerian naira",
        number: "566"
      },
      {
        code: "NIO",
        decimals: 2,
        name: "Nicaraguan córdoba",
        number: "558"
      },
      {
        code: "NOK",
        decimals: 2,
        name: "Norwegian krone",
        number: "578"
      },
      {
        code: "NPR",
        decimals: 2,
        name: "Nepalese rupee",
        number: "524"
      },
      {
        code: "NZD",
        decimals: 2,
        name: "New Zealand dollar",
        number: "554"
      },
      {
        code: "OMR",
        decimals: 3,
        name: "Omani rial",
        number: "512"
      },
      {
        code: "PAB",
        decimals: 2,
        name: "Panamanian balboa",
        number: "590"
      },
      {
        code: "PEN",
        decimals: 2,
        name: "Peruvian nuevo sol",
        number: "604"
      },
      {
        code: "PGK",
        decimals: 2,
        name: "Papua New Guinean kina",
        number: "598"
      },
      {
        code: "PHP",
        decimals: 2,
        name: "Philippine peso",
        number: "608"
      },
      {
        code: "PKR",
        decimals: 2,
        name: "Pakistani rupee",
        number: "586"
      },
      {
        code: "PLN",
        decimals: 2,
        name: "Polish złoty",
        number: "985"
      },
      {
        code: "PYG",
        decimals: 0,
        name: "Paraguayan guaraní",
        number: "600"
      },
      {
        code: "QAR",
        decimals: 2,
        name: "Qatari riyal",
        number: "634"
      },
      {
        code: "RON",
        decimals: 2,
        name: "Romanian new leu",
        number: "946"
      },
      {
        code: "RSD",
        decimals: 2,
        name: "Serbian dinar",
        number: "941"
      },
      {
        code: "RUB",
        decimals: 2,
        name: "Russian rouble",
        number: "643"
      },
      {
        code: "RWF",
        decimals: 0,
        name: "Rwandan franc",
        number: "646"
      },
      {
        code: "SAR",
        decimals: 2,
        name: "Saudi riyal",
        number: "682"
      },
      {
        code: "SBD",
        decimals: 2,
        name: "Solomon Islands dollar",
        number: "90"
      },
      {
        code: "SCR",
        decimals: 2,
        name: "Seychelles rupee",
        number: "690"
      },
      {
        code: "SDG",
        decimals: 2,
        name: "Sudanese pound",
        number: "938"
      },
      {
        code: "SEK",
        decimals: 2,
        name: "Swedish krona/kronor",
        number: "752"
      },
      {
        code: "SGD",
        decimals: 2,
        name: "Singapore dollar",
        number: "702"
      },
      {
        code: "SHP",
        decimals: 2,
        name: "Saint Helena pound",
        number: "654"
      },
      {
        code: "SLL",
        decimals: 0,
        name: "Sierra Leonean leone",
        number: "694"
      },
      {
        code: "SOS",
        decimals: 2,
        name: "Somali shilling",
        number: "706"
      },
      {
        code: "SRD",
        decimals: 2,
        name: "Surinamese dollar",
        number: "968"
      },
      {
        code: "SSP",
        decimals: 2,
        name: "South Sudanese pound",
        number: "728"
      },
      {
        code: "STD",
        decimals: 0,
        name: "São Tomé and Príncipe dobra",
        number: "678"
      },
      {
        code: "SYP",
        decimals: 2,
        name: "Syrian pound",
        number: "760"
      },
      {
        code: "SZL",
        decimals: 2,
        name: "Swazi lilangeni",
        number: "748"
      },
      {
        code: "THB",
        decimals: 2,
        name: "Thai baht",
        number: "764"
      },
      {
        code: "TJS",
        decimals: 2,
        name: "Tajikistani somoni",
        number: "972"
      },
      {
        code: "TMT",
        decimals: 2,
        name: "Turkmenistani manat",
        number: "934"
      },
      {
        code: "TND",
        decimals: 3,
        name: "Tunisian dinar",
        number: "788"
      },
      {
        code: "TOP",
        decimals: 2,
        name: "Tongan paʻanga",
        number: "776"
      },
      {
        code: "TRY",
        decimals: 2,
        name: "Turkish lira",
        number: "949"
      },
      {
        code: "TTD",
        decimals: 2,
        name: "Trinidad and Tobago dollar",
        number: "780"
      },
      {
        code: "TWD",
        decimals: 2,
        name: "New Taiwan dollar",
        number: "901"
      },
      {
        code: "TZS",
        decimals: 2,
        name: "Tanzanian shilling",
        number: "834"
      },
      {
        code: "UAH",
        decimals: 2,
        name: "Ukrainian hryvnia",
        number: "980"
      },
      {
        code: "UGX",
        decimals: 2,
        name: "Ugandan shilling",
        number: "800"
      },
      {
        code: "USD",
        decimals: 2,
        name: "United States dollar",
        number: "840"
      },
      {
        code: "USN",
        decimals: 2,
        name: "United States dollar (next day) (funds code)",
        number: "997"
      },
      {
        code: "USS",
        decimals: 2,
        name: "United States dollar (same day) (funds code) (one source[who?] claims it is no longer used, but it is still on the ISO 4217-MA list)",
        number: "998"
      },
      {
        code: "UYI",
        decimals: 0,
        name: "Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
        number: "940"
      },
      {
        code: "UYU",
        decimals: 2,
        name: "Uruguayan peso",
        number: "858"
      },
      {
        code: "UZS",
        decimals: 2,
        name: "Uzbekistan som",
        number: "860"
      },
      {
        code: "VEF",
        decimals: 2,
        name: "Venezuelan bolívar fuerte",
        number: "937"
      },
      {
        code: "VND",
        decimals: 0,
        name: "Vietnamese dong",
        number: "704"
      },
      {
        code: "VUV",
        decimals: 0,
        name: "Vanuatu vatu",
        number: "548"
      },
      {
        code: "WST",
        decimals: 2,
        name: "Samoan tala",
        number: "882"
      },
      {
        code: "XAF",
        decimals: 0,
        name: "CFA franc BEAC",
        number: "950"
      },
      {
        code: "XAG",
        decimals: null,
        name: "Silver (one troy ounce)",
        number: "961"
      },
      {
        code: "XAU",
        decimals: null,
        name: "Gold (one troy ounce)",
        number: "959"
      },
      {
        code: "XBA",
        decimals: null,
        name: "European Composite Unit (EURCO) (bond market unit)",
        number: "955"
      },
      {
        code: "XBB",
        decimals: null,
        name: "European Monetary Unit (E.M.U.-6) (bond market unit)",
        number: "956"
      },
      {
        code: "XBC",
        decimals: null,
        name: "European Unit of Account 9 (E.U.A.-9) (bond market unit)",
        number: "957"
      },
      {
        code: "XBD",
        decimals: null,
        name: "European Unit of Account 17 (E.U.A.-17) (bond market unit)",
        number: "958"
      },
      {
        code: "XCD",
        decimals: 2,
        name: "East Caribbean dollar",
        number: "951"
      },
      {
        code: "XDR",
        decimals: null,
        name: "Special drawing rights",
        number: "960"
      },
      {
        code: "XFU",
        decimals: null,
        name: "UIC franc (special settlement currency)",
        number: "Nil"
      },
      {
        code: "XOF",
        decimals: 0,
        name: "CFA franc BCEAO",
        number: "952"
      },
      {
        code: "XPD",
        decimals: null,
        name: "Palladium (one troy ounce)",
        number: "964"
      },
      {
        code: "XPF",
        decimals: 0,
        name: "CFP franc",
        number: "953"
      },
      {
        code: "XPT",
        decimals: null,
        name: "Platinum (one troy ounce)",
        number: "962"
      },
      {
        code: "XTS",
        decimals: null,
        name: "Code reserved for testing purposes",
        number: "963"
      },
      {
        code: "XXX",
        decimals: null,
        name: "No currency",
        number: "999"
      },
      {
        code: "YER",
        decimals: 2,
        name: "Yemeni rial",
        number: "886"
      },
      {
        code: "ZAR",
        decimals: 2,
        name: "South African rand",
        number: "710"
      },
      {
        code: "ZMW",
        decimals: 2,
        name: "Zambian kwacha",
        number: "967"
      }
    ];
  }
});

// node_modules/country-data/data/languages.json
var require_languages = __commonJS({
  "node_modules/country-data/data/languages.json"(exports, module) {
    module.exports = [
      {
        alpha2: "aa",
        alpha3: "aar",
        bibliographic: "",
        name: "Afar"
      },
      {
        alpha2: "ab",
        alpha3: "abk",
        bibliographic: "",
        name: "Abkhazian"
      },
      {
        alpha2: "",
        alpha3: "ace",
        bibliographic: "",
        name: "Achinese"
      },
      {
        alpha2: "",
        alpha3: "ach",
        bibliographic: "",
        name: "Acoli"
      },
      {
        alpha2: "",
        alpha3: "ada",
        bibliographic: "",
        name: "Adangme"
      },
      {
        alpha2: "",
        alpha3: "ady",
        bibliographic: "",
        name: "Adygei"
      },
      {
        alpha2: "",
        alpha3: "ady",
        bibliographic: "",
        name: "Adyghe"
      },
      {
        alpha2: "",
        alpha3: "afa",
        bibliographic: "",
        name: "Afro-Asiatic languages"
      },
      {
        alpha2: "",
        alpha3: "afh",
        bibliographic: "",
        name: "Afrihili"
      },
      {
        alpha2: "af",
        alpha3: "afr",
        bibliographic: "",
        name: "Afrikaans"
      },
      {
        alpha2: "",
        alpha3: "ain",
        bibliographic: "",
        name: "Ainu"
      },
      {
        alpha2: "ak",
        alpha3: "aka",
        bibliographic: "",
        name: "Akan"
      },
      {
        alpha2: "",
        alpha3: "akk",
        bibliographic: "",
        name: "Akkadian"
      },
      {
        alpha2: "",
        alpha3: "ale",
        bibliographic: "",
        name: "Aleut"
      },
      {
        alpha2: "",
        alpha3: "alg",
        bibliographic: "",
        name: "Algonquian languages"
      },
      {
        alpha2: "",
        alpha3: "alt",
        bibliographic: "",
        name: "Southern Altai"
      },
      {
        alpha2: "am",
        alpha3: "amh",
        bibliographic: "",
        name: "Amharic"
      },
      {
        alpha2: "",
        alpha3: "ang",
        bibliographic: "",
        name: "English, Old (ca.450-1100)"
      },
      {
        alpha2: "",
        alpha3: "anp",
        bibliographic: "",
        name: "Angika"
      },
      {
        alpha2: "",
        alpha3: "apa",
        bibliographic: "",
        name: "Apache languages"
      },
      {
        alpha2: "ar",
        alpha3: "ara",
        bibliographic: "",
        name: "Arabic"
      },
      {
        alpha2: "",
        alpha3: "arc",
        bibliographic: "",
        name: "Imperial Aramaic (700-300 BCE)"
      },
      {
        alpha2: "",
        alpha3: "arc",
        bibliographic: "",
        name: "Official Aramaic (700-300 BCE)"
      },
      {
        alpha2: "an",
        alpha3: "arg",
        bibliographic: "",
        name: "Aragonese"
      },
      {
        alpha2: "",
        alpha3: "arn",
        bibliographic: "",
        name: "Mapuche"
      },
      {
        alpha2: "",
        alpha3: "arn",
        bibliographic: "",
        name: "Mapudungun"
      },
      {
        alpha2: "",
        alpha3: "arp",
        bibliographic: "",
        name: "Arapaho"
      },
      {
        alpha2: "",
        alpha3: "art",
        bibliographic: "",
        name: "Artificial languages"
      },
      {
        alpha2: "",
        alpha3: "arw",
        bibliographic: "",
        name: "Arawak"
      },
      {
        alpha2: "as",
        alpha3: "asm",
        bibliographic: "",
        name: "Assamese"
      },
      {
        alpha2: "",
        alpha3: "ast",
        bibliographic: "",
        name: "Asturian"
      },
      {
        alpha2: "",
        alpha3: "ast",
        bibliographic: "",
        name: "Asturleonese"
      },
      {
        alpha2: "",
        alpha3: "ast",
        bibliographic: "",
        name: "Bable"
      },
      {
        alpha2: "",
        alpha3: "ast",
        bibliographic: "",
        name: "Leonese"
      },
      {
        alpha2: "",
        alpha3: "ath",
        bibliographic: "",
        name: "Athapascan languages"
      },
      {
        alpha2: "",
        alpha3: "aus",
        bibliographic: "",
        name: "Australian languages"
      },
      {
        alpha2: "av",
        alpha3: "ava",
        bibliographic: "",
        name: "Avaric"
      },
      {
        alpha2: "ae",
        alpha3: "ave",
        bibliographic: "",
        name: "Avestan"
      },
      {
        alpha2: "",
        alpha3: "awa",
        bibliographic: "",
        name: "Awadhi"
      },
      {
        alpha2: "ay",
        alpha3: "aym",
        bibliographic: "",
        name: "Aymara"
      },
      {
        alpha2: "az",
        alpha3: "aze",
        bibliographic: "",
        name: "Azerbaijani"
      },
      {
        alpha2: "",
        alpha3: "bad",
        bibliographic: "",
        name: "Banda languages"
      },
      {
        alpha2: "",
        alpha3: "bai",
        bibliographic: "",
        name: "Bamileke languages"
      },
      {
        alpha2: "ba",
        alpha3: "bak",
        bibliographic: "",
        name: "Bashkir"
      },
      {
        alpha2: "",
        alpha3: "bal",
        bibliographic: "",
        name: "Baluchi"
      },
      {
        alpha2: "bm",
        alpha3: "bam",
        bibliographic: "",
        name: "Bambara"
      },
      {
        alpha2: "",
        alpha3: "ban",
        bibliographic: "",
        name: "Balinese"
      },
      {
        alpha2: "",
        alpha3: "bas",
        bibliographic: "",
        name: "Basa"
      },
      {
        alpha2: "",
        alpha3: "bat",
        bibliographic: "",
        name: "Baltic languages"
      },
      {
        alpha2: "",
        alpha3: "bej",
        bibliographic: "",
        name: "Bedawiyet"
      },
      {
        alpha2: "",
        alpha3: "bej",
        bibliographic: "",
        name: "Beja"
      },
      {
        alpha2: "be",
        alpha3: "bel",
        bibliographic: "",
        name: "Belarusian"
      },
      {
        alpha2: "",
        alpha3: "bem",
        bibliographic: "",
        name: "Bemba"
      },
      {
        alpha2: "bn",
        alpha3: "ben",
        bibliographic: "",
        name: "Bengali"
      },
      {
        alpha2: "",
        alpha3: "ber",
        bibliographic: "",
        name: "Berber languages"
      },
      {
        alpha2: "",
        alpha3: "bho",
        bibliographic: "",
        name: "Bhojpuri"
      },
      {
        alpha2: "bh",
        alpha3: "bih",
        bibliographic: "",
        name: "Bihari languages"
      },
      {
        alpha2: "",
        alpha3: "bik",
        bibliographic: "",
        name: "Bikol"
      },
      {
        alpha2: "",
        alpha3: "bin",
        bibliographic: "",
        name: "Bini"
      },
      {
        alpha2: "",
        alpha3: "bin",
        bibliographic: "",
        name: "Edo"
      },
      {
        alpha2: "bi",
        alpha3: "bis",
        bibliographic: "",
        name: "Bislama"
      },
      {
        alpha2: "",
        alpha3: "bla",
        bibliographic: "",
        name: "Siksika"
      },
      {
        alpha2: "",
        alpha3: "bnt",
        bibliographic: "",
        name: "Bantu languages"
      },
      {
        alpha2: "bo",
        alpha3: "bod",
        bibliographic: "tib",
        name: "Tibetan"
      },
      {
        alpha2: "bs",
        alpha3: "bos",
        bibliographic: "",
        name: "Bosnian"
      },
      {
        alpha2: "",
        alpha3: "bra",
        bibliographic: "",
        name: "Braj"
      },
      {
        alpha2: "br",
        alpha3: "bre",
        bibliographic: "",
        name: "Breton"
      },
      {
        alpha2: "",
        alpha3: "btk",
        bibliographic: "",
        name: "Batak languages"
      },
      {
        alpha2: "",
        alpha3: "bua",
        bibliographic: "",
        name: "Buriat"
      },
      {
        alpha2: "",
        alpha3: "bug",
        bibliographic: "",
        name: "Buginese"
      },
      {
        alpha2: "bg",
        alpha3: "bul",
        bibliographic: "",
        name: "Bulgarian"
      },
      {
        alpha2: "",
        alpha3: "byn",
        bibliographic: "",
        name: "Bilin"
      },
      {
        alpha2: "",
        alpha3: "byn",
        bibliographic: "",
        name: "Blin"
      },
      {
        alpha2: "",
        alpha3: "cad",
        bibliographic: "",
        name: "Caddo"
      },
      {
        alpha2: "",
        alpha3: "cai",
        bibliographic: "",
        name: "Central American Indian languages"
      },
      {
        alpha2: "",
        alpha3: "car",
        bibliographic: "",
        name: "Galibi Carib"
      },
      {
        alpha2: "ca",
        alpha3: "cat",
        bibliographic: "",
        name: "Catalan"
      },
      {
        alpha2: "ca",
        alpha3: "cat",
        bibliographic: "",
        name: "Valencian"
      },
      {
        alpha2: "",
        alpha3: "cau",
        bibliographic: "",
        name: "Caucasian languages"
      },
      {
        alpha2: "",
        alpha3: "ceb",
        bibliographic: "",
        name: "Cebuano"
      },
      {
        alpha2: "",
        alpha3: "cel",
        bibliographic: "",
        name: "Celtic languages"
      },
      {
        alpha2: "cs",
        alpha3: "ces",
        bibliographic: "cze",
        name: "Czech"
      },
      {
        alpha2: "ch",
        alpha3: "cha",
        bibliographic: "",
        name: "Chamorro"
      },
      {
        alpha2: "",
        alpha3: "chb",
        bibliographic: "",
        name: "Chibcha"
      },
      {
        alpha2: "ce",
        alpha3: "che",
        bibliographic: "",
        name: "Chechen"
      },
      {
        alpha2: "",
        alpha3: "chg",
        bibliographic: "",
        name: "Chagatai"
      },
      {
        alpha2: "",
        alpha3: "chk",
        bibliographic: "",
        name: "Chuukese"
      },
      {
        alpha2: "",
        alpha3: "chm",
        bibliographic: "",
        name: "Mari"
      },
      {
        alpha2: "",
        alpha3: "chn",
        bibliographic: "",
        name: "Chinook jargon"
      },
      {
        alpha2: "",
        alpha3: "cho",
        bibliographic: "",
        name: "Choctaw"
      },
      {
        alpha2: "",
        alpha3: "chp",
        bibliographic: "",
        name: "Chipewyan"
      },
      {
        alpha2: "",
        alpha3: "chp",
        bibliographic: "",
        name: "Dene Suline"
      },
      {
        alpha2: "",
        alpha3: "chr",
        bibliographic: "",
        name: "Cherokee"
      },
      {
        alpha2: "cu",
        alpha3: "chu",
        bibliographic: "",
        name: "Church Slavic"
      },
      {
        alpha2: "cu",
        alpha3: "chu",
        bibliographic: "",
        name: "Church Slavonic"
      },
      {
        alpha2: "cu",
        alpha3: "chu",
        bibliographic: "",
        name: "Old Bulgarian"
      },
      {
        alpha2: "cu",
        alpha3: "chu",
        bibliographic: "",
        name: "Old Church Slavonic"
      },
      {
        alpha2: "cu",
        alpha3: "chu",
        bibliographic: "",
        name: "Old Slavonic"
      },
      {
        alpha2: "cv",
        alpha3: "chv",
        bibliographic: "",
        name: "Chuvash"
      },
      {
        alpha2: "",
        alpha3: "chy",
        bibliographic: "",
        name: "Cheyenne"
      },
      {
        alpha2: "",
        alpha3: "cmc",
        bibliographic: "",
        name: "Chamic languages"
      },
      {
        alpha2: "",
        alpha3: "cop",
        bibliographic: "",
        name: "Coptic"
      },
      {
        alpha2: "kw",
        alpha3: "cor",
        bibliographic: "",
        name: "Cornish"
      },
      {
        alpha2: "co",
        alpha3: "cos",
        bibliographic: "",
        name: "Corsican"
      },
      {
        alpha2: "",
        alpha3: "cpe",
        bibliographic: "",
        name: "Creoles and pidgins, English based"
      },
      {
        alpha2: "",
        alpha3: "cpf",
        bibliographic: "",
        name: "Creoles and pidgins, French-based"
      },
      {
        alpha2: "",
        alpha3: "cpp",
        bibliographic: "",
        name: "Creoles and pidgins, Portuguese-based"
      },
      {
        alpha2: "cr",
        alpha3: "cre",
        bibliographic: "",
        name: "Cree"
      },
      {
        alpha2: "",
        alpha3: "crh",
        bibliographic: "",
        name: "Crimean Tatar"
      },
      {
        alpha2: "",
        alpha3: "crh",
        bibliographic: "",
        name: "Crimean Turkish"
      },
      {
        alpha2: "",
        alpha3: "crp",
        bibliographic: "",
        name: "Creoles and pidgins"
      },
      {
        alpha2: "",
        alpha3: "csb",
        bibliographic: "",
        name: "Kashubian"
      },
      {
        alpha2: "",
        alpha3: "cus",
        bibliographic: "",
        name: "Cushitic languages"
      },
      {
        alpha2: "cy",
        alpha3: "cym",
        bibliographic: "wel",
        name: "Welsh"
      },
      {
        alpha2: "",
        alpha3: "dak",
        bibliographic: "",
        name: "Dakota"
      },
      {
        alpha2: "da",
        alpha3: "dan",
        bibliographic: "",
        name: "Danish"
      },
      {
        alpha2: "",
        alpha3: "dar",
        bibliographic: "",
        name: "Dargwa"
      },
      {
        alpha2: "",
        alpha3: "day",
        bibliographic: "",
        name: "Land Dayak languages"
      },
      {
        alpha2: "",
        alpha3: "del",
        bibliographic: "",
        name: "Delaware"
      },
      {
        alpha2: "",
        alpha3: "den",
        bibliographic: "",
        name: "Slave (Athapascan)"
      },
      {
        alpha2: "de",
        alpha3: "deu",
        bibliographic: "ger",
        name: "German"
      },
      {
        alpha2: "",
        alpha3: "dgr",
        bibliographic: "",
        name: "Dogrib"
      },
      {
        alpha2: "",
        alpha3: "din",
        bibliographic: "",
        name: "Dinka"
      },
      {
        alpha2: "dv",
        alpha3: "div",
        bibliographic: "",
        name: "Dhivehi"
      },
      {
        alpha2: "dv",
        alpha3: "div",
        bibliographic: "",
        name: "Divehi"
      },
      {
        alpha2: "dv",
        alpha3: "div",
        bibliographic: "",
        name: "Maldivian"
      },
      {
        alpha2: "",
        alpha3: "doi",
        bibliographic: "",
        name: "Dogri"
      },
      {
        alpha2: "",
        alpha3: "dra",
        bibliographic: "",
        name: "Dravidian languages"
      },
      {
        alpha2: "",
        alpha3: "dsb",
        bibliographic: "",
        name: "Lower Sorbian"
      },
      {
        alpha2: "",
        alpha3: "dua",
        bibliographic: "",
        name: "Duala"
      },
      {
        alpha2: "",
        alpha3: "dum",
        bibliographic: "",
        name: "Dutch, Middle (ca.1050-1350)"
      },
      {
        alpha2: "",
        alpha3: "dyu",
        bibliographic: "",
        name: "Dyula"
      },
      {
        alpha2: "dz",
        alpha3: "dzo",
        bibliographic: "",
        name: "Dzongkha"
      },
      {
        alpha2: "",
        alpha3: "efi",
        bibliographic: "",
        name: "Efik"
      },
      {
        alpha2: "",
        alpha3: "egy",
        bibliographic: "",
        name: "Egyptian (Ancient)"
      },
      {
        alpha2: "",
        alpha3: "eka",
        bibliographic: "",
        name: "Ekajuk"
      },
      {
        alpha2: "el",
        alpha3: "ell",
        bibliographic: "gre",
        name: "Greek, Modern (1453-)"
      },
      {
        alpha2: "",
        alpha3: "elx",
        bibliographic: "",
        name: "Elamite"
      },
      {
        alpha2: "en",
        alpha3: "eng",
        bibliographic: "",
        name: "English"
      },
      {
        alpha2: "",
        alpha3: "enm",
        bibliographic: "",
        name: "English, Middle (1100-1500)"
      },
      {
        alpha2: "eo",
        alpha3: "epo",
        bibliographic: "",
        name: "Esperanto"
      },
      {
        alpha2: "et",
        alpha3: "est",
        bibliographic: "",
        name: "Estonian"
      },
      {
        alpha2: "eu",
        alpha3: "eus",
        bibliographic: "baq",
        name: "Basque"
      },
      {
        alpha2: "ee",
        alpha3: "ewe",
        bibliographic: "",
        name: "Ewe"
      },
      {
        alpha2: "",
        alpha3: "ewo",
        bibliographic: "",
        name: "Ewondo"
      },
      {
        alpha2: "",
        alpha3: "fan",
        bibliographic: "",
        name: "Fang"
      },
      {
        alpha2: "fo",
        alpha3: "fao",
        bibliographic: "",
        name: "Faroese"
      },
      {
        alpha2: "fa",
        alpha3: "fas",
        bibliographic: "per",
        name: "Persian"
      },
      {
        alpha2: "",
        alpha3: "fat",
        bibliographic: "",
        name: "Fanti"
      },
      {
        alpha2: "fj",
        alpha3: "fij",
        bibliographic: "",
        name: "Fijian"
      },
      {
        alpha2: "",
        alpha3: "fil",
        bibliographic: "",
        name: "Filipino"
      },
      {
        alpha2: "",
        alpha3: "fil",
        bibliographic: "",
        name: "Pilipino"
      },
      {
        alpha2: "fi",
        alpha3: "fin",
        bibliographic: "",
        name: "Finnish"
      },
      {
        alpha2: "",
        alpha3: "fiu",
        bibliographic: "",
        name: "Finno-Ugrian languages"
      },
      {
        alpha2: "",
        alpha3: "fon",
        bibliographic: "",
        name: "Fon"
      },
      {
        alpha2: "fr",
        alpha3: "fra",
        bibliographic: "fre",
        name: "French"
      },
      {
        alpha2: "",
        alpha3: "frm",
        bibliographic: "",
        name: "French, Middle (ca.1400-1600)"
      },
      {
        alpha2: "",
        alpha3: "fro",
        bibliographic: "",
        name: "French, Old (842-ca.1400)"
      },
      {
        alpha2: "",
        alpha3: "frr",
        bibliographic: "",
        name: "Northern Frisian"
      },
      {
        alpha2: "",
        alpha3: "frs",
        bibliographic: "",
        name: "Eastern Frisian"
      },
      {
        alpha2: "fy",
        alpha3: "fry",
        bibliographic: "",
        name: "Western Frisian"
      },
      {
        alpha2: "ff",
        alpha3: "ful",
        bibliographic: "",
        name: "Fulah"
      },
      {
        alpha2: "",
        alpha3: "fur",
        bibliographic: "",
        name: "Friulian"
      },
      {
        alpha2: "",
        alpha3: "gaa",
        bibliographic: "",
        name: "Ga"
      },
      {
        alpha2: "",
        alpha3: "gay",
        bibliographic: "",
        name: "Gayo"
      },
      {
        alpha2: "",
        alpha3: "gba",
        bibliographic: "",
        name: "Gbaya"
      },
      {
        alpha2: "",
        alpha3: "gem",
        bibliographic: "",
        name: "Germanic languages"
      },
      {
        alpha2: "",
        alpha3: "gez",
        bibliographic: "",
        name: "Geez"
      },
      {
        alpha2: "",
        alpha3: "gil",
        bibliographic: "",
        name: "Gilbertese"
      },
      {
        alpha2: "gd",
        alpha3: "gla",
        bibliographic: "",
        name: "Gaelic"
      },
      {
        alpha2: "gd",
        alpha3: "gla",
        bibliographic: "",
        name: "Scottish Gaelic"
      },
      {
        alpha2: "ga",
        alpha3: "gle",
        bibliographic: "",
        name: "Irish"
      },
      {
        alpha2: "gl",
        alpha3: "glg",
        bibliographic: "",
        name: "Galician"
      },
      {
        alpha2: "gv",
        alpha3: "glv",
        bibliographic: "",
        name: "Manx"
      },
      {
        alpha2: "",
        alpha3: "gmh",
        bibliographic: "",
        name: "German, Middle High (ca.1050-1500)"
      },
      {
        alpha2: "",
        alpha3: "goh",
        bibliographic: "",
        name: "German, Old High (ca.750-1050)"
      },
      {
        alpha2: "",
        alpha3: "gon",
        bibliographic: "",
        name: "Gondi"
      },
      {
        alpha2: "",
        alpha3: "gor",
        bibliographic: "",
        name: "Gorontalo"
      },
      {
        alpha2: "",
        alpha3: "got",
        bibliographic: "",
        name: "Gothic"
      },
      {
        alpha2: "",
        alpha3: "grb",
        bibliographic: "",
        name: "Grebo"
      },
      {
        alpha2: "",
        alpha3: "grc",
        bibliographic: "",
        name: "Greek, Ancient (to 1453)"
      },
      {
        alpha2: "gn",
        alpha3: "grn",
        bibliographic: "",
        name: "Guarani"
      },
      {
        alpha2: "",
        alpha3: "gsw",
        bibliographic: "",
        name: "Alemannic"
      },
      {
        alpha2: "",
        alpha3: "gsw",
        bibliographic: "",
        name: "Alsatian"
      },
      {
        alpha2: "",
        alpha3: "gsw",
        bibliographic: "",
        name: "Swiss German"
      },
      {
        alpha2: "gu",
        alpha3: "guj",
        bibliographic: "",
        name: "Gujarati"
      },
      {
        alpha2: "",
        alpha3: "gwi",
        bibliographic: "",
        name: "Gwich'in"
      },
      {
        alpha2: "",
        alpha3: "hai",
        bibliographic: "",
        name: "Haida"
      },
      {
        alpha2: "ht",
        alpha3: "hat",
        bibliographic: "",
        name: "Haitian"
      },
      {
        alpha2: "ht",
        alpha3: "hat",
        bibliographic: "",
        name: "Haitian Creole"
      },
      {
        alpha2: "ha",
        alpha3: "hau",
        bibliographic: "",
        name: "Hausa"
      },
      {
        alpha2: "",
        alpha3: "haw",
        bibliographic: "",
        name: "Hawaiian"
      },
      {
        alpha2: "he",
        alpha3: "heb",
        bibliographic: "",
        name: "Hebrew"
      },
      {
        alpha2: "hz",
        alpha3: "her",
        bibliographic: "",
        name: "Herero"
      },
      {
        alpha2: "",
        alpha3: "hil",
        bibliographic: "",
        name: "Hiligaynon"
      },
      {
        alpha2: "",
        alpha3: "him",
        bibliographic: "",
        name: "Himachali languages"
      },
      {
        alpha2: "",
        alpha3: "him",
        bibliographic: "",
        name: "Western Pahari languages"
      },
      {
        alpha2: "hi",
        alpha3: "hin",
        bibliographic: "",
        name: "Hindi"
      },
      {
        alpha2: "",
        alpha3: "hit",
        bibliographic: "",
        name: "Hittite"
      },
      {
        alpha2: "",
        alpha3: "hmn",
        bibliographic: "",
        name: "Hmong"
      },
      {
        alpha2: "",
        alpha3: "hmn",
        bibliographic: "",
        name: "Mong"
      },
      {
        alpha2: "ho",
        alpha3: "hmo",
        bibliographic: "",
        name: "Hiri Motu"
      },
      {
        alpha2: "hr",
        alpha3: "hrv",
        bibliographic: "",
        name: "Croatian"
      },
      {
        alpha2: "",
        alpha3: "hsb",
        bibliographic: "",
        name: "Upper Sorbian"
      },
      {
        alpha2: "hu",
        alpha3: "hun",
        bibliographic: "",
        name: "Hungarian"
      },
      {
        alpha2: "",
        alpha3: "hup",
        bibliographic: "",
        name: "Hupa"
      },
      {
        alpha2: "hy",
        alpha3: "hye",
        bibliographic: "arm",
        name: "Armenian"
      },
      {
        alpha2: "",
        alpha3: "iba",
        bibliographic: "",
        name: "Iban"
      },
      {
        alpha2: "ig",
        alpha3: "ibo",
        bibliographic: "",
        name: "Igbo"
      },
      {
        alpha2: "io",
        alpha3: "ido",
        bibliographic: "",
        name: "Ido"
      },
      {
        alpha2: "ii",
        alpha3: "iii",
        bibliographic: "",
        name: "Nuosu"
      },
      {
        alpha2: "ii",
        alpha3: "iii",
        bibliographic: "",
        name: "Sichuan Yi"
      },
      {
        alpha2: "",
        alpha3: "ijo",
        bibliographic: "",
        name: "Ijo languages"
      },
      {
        alpha2: "iu",
        alpha3: "iku",
        bibliographic: "",
        name: "Inuktitut"
      },
      {
        alpha2: "ie",
        alpha3: "ile",
        bibliographic: "",
        name: "Interlingue"
      },
      {
        alpha2: "ie",
        alpha3: "ile",
        bibliographic: "",
        name: "Occidental"
      },
      {
        alpha2: "",
        alpha3: "ilo",
        bibliographic: "",
        name: "Iloko"
      },
      {
        alpha2: "ia",
        alpha3: "ina",
        bibliographic: "",
        name: "Interlingua (International Auxiliary Language Association)"
      },
      {
        alpha2: "",
        alpha3: "inc",
        bibliographic: "",
        name: "Indic languages"
      },
      {
        alpha2: "id",
        alpha3: "ind",
        bibliographic: "",
        name: "Indonesian"
      },
      {
        alpha2: "",
        alpha3: "ine",
        bibliographic: "",
        name: "Indo-European languages"
      },
      {
        alpha2: "",
        alpha3: "inh",
        bibliographic: "",
        name: "Ingush"
      },
      {
        alpha2: "ik",
        alpha3: "ipk",
        bibliographic: "",
        name: "Inupiaq"
      },
      {
        alpha2: "",
        alpha3: "ira",
        bibliographic: "",
        name: "Iranian languages"
      },
      {
        alpha2: "",
        alpha3: "iro",
        bibliographic: "",
        name: "Iroquoian languages"
      },
      {
        alpha2: "is",
        alpha3: "isl",
        bibliographic: "ice",
        name: "Icelandic"
      },
      {
        alpha2: "it",
        alpha3: "ita",
        bibliographic: "",
        name: "Italian"
      },
      {
        alpha2: "jv",
        alpha3: "jav",
        bibliographic: "",
        name: "Javanese"
      },
      {
        alpha2: "",
        alpha3: "jbo",
        bibliographic: "",
        name: "Lojban"
      },
      {
        alpha2: "ja",
        alpha3: "jpn",
        bibliographic: "",
        name: "Japanese"
      },
      {
        alpha2: "",
        alpha3: "jpr",
        bibliographic: "",
        name: "Judeo-Persian"
      },
      {
        alpha2: "",
        alpha3: "jrb",
        bibliographic: "",
        name: "Judeo-Arabic"
      },
      {
        alpha2: "",
        alpha3: "kaa",
        bibliographic: "",
        name: "Kara-Kalpak"
      },
      {
        alpha2: "",
        alpha3: "kab",
        bibliographic: "",
        name: "Kabyle"
      },
      {
        alpha2: "",
        alpha3: "kac",
        bibliographic: "",
        name: "Jingpho"
      },
      {
        alpha2: "",
        alpha3: "kac",
        bibliographic: "",
        name: "Kachin"
      },
      {
        alpha2: "kl",
        alpha3: "kal",
        bibliographic: "",
        name: "Greenlandic"
      },
      {
        alpha2: "kl",
        alpha3: "kal",
        bibliographic: "",
        name: "Kalaallisut"
      },
      {
        alpha2: "",
        alpha3: "kam",
        bibliographic: "",
        name: "Kamba"
      },
      {
        alpha2: "kn",
        alpha3: "kan",
        bibliographic: "",
        name: "Kannada"
      },
      {
        alpha2: "",
        alpha3: "kar",
        bibliographic: "",
        name: "Karen languages"
      },
      {
        alpha2: "ks",
        alpha3: "kas",
        bibliographic: "",
        name: "Kashmiri"
      },
      {
        alpha2: "ka",
        alpha3: "kat",
        bibliographic: "geo",
        name: "Georgian"
      },
      {
        alpha2: "kr",
        alpha3: "kau",
        bibliographic: "",
        name: "Kanuri"
      },
      {
        alpha2: "",
        alpha3: "kaw",
        bibliographic: "",
        name: "Kawi"
      },
      {
        alpha2: "kk",
        alpha3: "kaz",
        bibliographic: "",
        name: "Kazakh"
      },
      {
        alpha2: "",
        alpha3: "kbd",
        bibliographic: "",
        name: "Kabardian"
      },
      {
        alpha2: "",
        alpha3: "kha",
        bibliographic: "",
        name: "Khasi"
      },
      {
        alpha2: "",
        alpha3: "khi",
        bibliographic: "",
        name: "Khoisan languages"
      },
      {
        alpha2: "km",
        alpha3: "khm",
        bibliographic: "",
        name: "Central Khmer"
      },
      {
        alpha2: "",
        alpha3: "kho",
        bibliographic: "",
        name: "Khotanese"
      },
      {
        alpha2: "",
        alpha3: "kho",
        bibliographic: "",
        name: "Sakan"
      },
      {
        alpha2: "ki",
        alpha3: "kik",
        bibliographic: "",
        name: "Gikuyu"
      },
      {
        alpha2: "ki",
        alpha3: "kik",
        bibliographic: "",
        name: "Kikuyu"
      },
      {
        alpha2: "rw",
        alpha3: "kin",
        bibliographic: "",
        name: "Kinyarwanda"
      },
      {
        alpha2: "ky",
        alpha3: "kir",
        bibliographic: "",
        name: "Kirghiz"
      },
      {
        alpha2: "ky",
        alpha3: "kir",
        bibliographic: "",
        name: "Kyrgyz"
      },
      {
        alpha2: "",
        alpha3: "kmb",
        bibliographic: "",
        name: "Kimbundu"
      },
      {
        alpha2: "",
        alpha3: "kok",
        bibliographic: "",
        name: "Konkani"
      },
      {
        alpha2: "kv",
        alpha3: "kom",
        bibliographic: "",
        name: "Komi"
      },
      {
        alpha2: "kg",
        alpha3: "kon",
        bibliographic: "",
        name: "Kongo"
      },
      {
        alpha2: "ko",
        alpha3: "kor",
        bibliographic: "",
        name: "Korean"
      },
      {
        alpha2: "",
        alpha3: "kos",
        bibliographic: "",
        name: "Kosraean"
      },
      {
        alpha2: "",
        alpha3: "kpe",
        bibliographic: "",
        name: "Kpelle"
      },
      {
        alpha2: "",
        alpha3: "krc",
        bibliographic: "",
        name: "Karachay-Balkar"
      },
      {
        alpha2: "",
        alpha3: "krl",
        bibliographic: "",
        name: "Karelian"
      },
      {
        alpha2: "",
        alpha3: "kro",
        bibliographic: "",
        name: "Kru languages"
      },
      {
        alpha2: "",
        alpha3: "kru",
        bibliographic: "",
        name: "Kurukh"
      },
      {
        alpha2: "kj",
        alpha3: "kua",
        bibliographic: "",
        name: "Kuanyama"
      },
      {
        alpha2: "kj",
        alpha3: "kua",
        bibliographic: "",
        name: "Kwanyama"
      },
      {
        alpha2: "",
        alpha3: "kum",
        bibliographic: "",
        name: "Kumyk"
      },
      {
        alpha2: "ku",
        alpha3: "kur",
        bibliographic: "",
        name: "Kurdish"
      },
      {
        alpha2: "",
        alpha3: "kut",
        bibliographic: "",
        name: "Kutenai"
      },
      {
        alpha2: "",
        alpha3: "lad",
        bibliographic: "",
        name: "Ladino"
      },
      {
        alpha2: "",
        alpha3: "lah",
        bibliographic: "",
        name: "Lahnda"
      },
      {
        alpha2: "",
        alpha3: "lam",
        bibliographic: "",
        name: "Lamba"
      },
      {
        alpha2: "lo",
        alpha3: "lao",
        bibliographic: "",
        name: "Lao"
      },
      {
        alpha2: "la",
        alpha3: "lat",
        bibliographic: "",
        name: "Latin"
      },
      {
        alpha2: "lv",
        alpha3: "lav",
        bibliographic: "",
        name: "Latvian"
      },
      {
        alpha2: "",
        alpha3: "lez",
        bibliographic: "",
        name: "Lezghian"
      },
      {
        alpha2: "li",
        alpha3: "lim",
        bibliographic: "",
        name: "Limburgan"
      },
      {
        alpha2: "li",
        alpha3: "lim",
        bibliographic: "",
        name: "Limburger"
      },
      {
        alpha2: "li",
        alpha3: "lim",
        bibliographic: "",
        name: "Limburgish"
      },
      {
        alpha2: "ln",
        alpha3: "lin",
        bibliographic: "",
        name: "Lingala"
      },
      {
        alpha2: "lt",
        alpha3: "lit",
        bibliographic: "",
        name: "Lithuanian"
      },
      {
        alpha2: "",
        alpha3: "lol",
        bibliographic: "",
        name: "Mongo"
      },
      {
        alpha2: "",
        alpha3: "loz",
        bibliographic: "",
        name: "Lozi"
      },
      {
        alpha2: "lb",
        alpha3: "ltz",
        bibliographic: "",
        name: "Letzeburgesch"
      },
      {
        alpha2: "lb",
        alpha3: "ltz",
        bibliographic: "",
        name: "Luxembourgish"
      },
      {
        alpha2: "",
        alpha3: "lua",
        bibliographic: "",
        name: "Luba-Lulua"
      },
      {
        alpha2: "lu",
        alpha3: "lub",
        bibliographic: "",
        name: "Luba-Katanga"
      },
      {
        alpha2: "lg",
        alpha3: "lug",
        bibliographic: "",
        name: "Ganda"
      },
      {
        alpha2: "",
        alpha3: "lui",
        bibliographic: "",
        name: "Luiseno"
      },
      {
        alpha2: "",
        alpha3: "lun",
        bibliographic: "",
        name: "Lunda"
      },
      {
        alpha2: "",
        alpha3: "luo",
        bibliographic: "",
        name: "Luo (Kenya and Tanzania)"
      },
      {
        alpha2: "",
        alpha3: "lus",
        bibliographic: "",
        name: "Lushai"
      },
      {
        alpha2: "",
        alpha3: "mad",
        bibliographic: "",
        name: "Madurese"
      },
      {
        alpha2: "",
        alpha3: "mag",
        bibliographic: "",
        name: "Magahi"
      },
      {
        alpha2: "mh",
        alpha3: "mah",
        bibliographic: "",
        name: "Marshallese"
      },
      {
        alpha2: "",
        alpha3: "mai",
        bibliographic: "",
        name: "Maithili"
      },
      {
        alpha2: "",
        alpha3: "mak",
        bibliographic: "",
        name: "Makasar"
      },
      {
        alpha2: "ml",
        alpha3: "mal",
        bibliographic: "",
        name: "Malayalam"
      },
      {
        alpha2: "",
        alpha3: "man",
        bibliographic: "",
        name: "Mandingo"
      },
      {
        alpha2: "",
        alpha3: "map",
        bibliographic: "",
        name: "Austronesian languages"
      },
      {
        alpha2: "mr",
        alpha3: "mar",
        bibliographic: "",
        name: "Marathi"
      },
      {
        alpha2: "",
        alpha3: "mas",
        bibliographic: "",
        name: "Masai"
      },
      {
        alpha2: "",
        alpha3: "mdf",
        bibliographic: "",
        name: "Moksha"
      },
      {
        alpha2: "",
        alpha3: "mdr",
        bibliographic: "",
        name: "Mandar"
      },
      {
        alpha2: "",
        alpha3: "men",
        bibliographic: "",
        name: "Mende"
      },
      {
        alpha2: "",
        alpha3: "mga",
        bibliographic: "",
        name: "Irish, Middle (900-1200)"
      },
      {
        alpha2: "",
        alpha3: "mic",
        bibliographic: "",
        name: "Mi'kmaq"
      },
      {
        alpha2: "",
        alpha3: "mic",
        bibliographic: "",
        name: "Micmac"
      },
      {
        alpha2: "",
        alpha3: "min",
        bibliographic: "",
        name: "Minangkabau"
      },
      {
        alpha2: "",
        alpha3: "mis",
        bibliographic: "",
        name: "Uncoded languages"
      },
      {
        alpha2: "mk",
        alpha3: "mkd",
        bibliographic: "mac",
        name: "Macedonian"
      },
      {
        alpha2: "",
        alpha3: "mkh",
        bibliographic: "",
        name: "Mon-Khmer languages"
      },
      {
        alpha2: "mg",
        alpha3: "mlg",
        bibliographic: "",
        name: "Malagasy"
      },
      {
        alpha2: "mt",
        alpha3: "mlt",
        bibliographic: "",
        name: "Maltese"
      },
      {
        alpha2: "",
        alpha3: "mnc",
        bibliographic: "",
        name: "Manchu"
      },
      {
        alpha2: "",
        alpha3: "mni",
        bibliographic: "",
        name: "Manipuri"
      },
      {
        alpha2: "",
        alpha3: "mno",
        bibliographic: "",
        name: "Manobo languages"
      },
      {
        alpha2: "",
        alpha3: "moh",
        bibliographic: "",
        name: "Mohawk"
      },
      {
        alpha2: "mn",
        alpha3: "mon",
        bibliographic: "",
        name: "Mongolian"
      },
      {
        alpha2: "",
        alpha3: "mos",
        bibliographic: "",
        name: "Mossi"
      },
      {
        alpha2: "",
        alpha3: "mot",
        bibliographic: "",
        name: "Montenegrin"
      },
      {
        alpha2: "mi",
        alpha3: "mri",
        bibliographic: "mao",
        name: "Maori"
      },
      {
        alpha2: "ms",
        alpha3: "msa",
        bibliographic: "may",
        name: "Malay"
      },
      {
        alpha2: "",
        alpha3: "mul",
        bibliographic: "",
        name: "Multiple languages"
      },
      {
        alpha2: "",
        alpha3: "mun",
        bibliographic: "",
        name: "Munda languages"
      },
      {
        alpha2: "",
        alpha3: "mus",
        bibliographic: "",
        name: "Creek"
      },
      {
        alpha2: "",
        alpha3: "mwl",
        bibliographic: "",
        name: "Mirandese"
      },
      {
        alpha2: "",
        alpha3: "mwr",
        bibliographic: "",
        name: "Marwari"
      },
      {
        alpha2: "my",
        alpha3: "mya",
        bibliographic: "bur",
        name: "Burmese"
      },
      {
        alpha2: "",
        alpha3: "myn",
        bibliographic: "",
        name: "Mayan languages"
      },
      {
        alpha2: "",
        alpha3: "myv",
        bibliographic: "",
        name: "Erzya"
      },
      {
        alpha2: "",
        alpha3: "nah",
        bibliographic: "",
        name: "Nahuatl languages"
      },
      {
        alpha2: "",
        alpha3: "nai",
        bibliographic: "",
        name: "North American Indian languages"
      },
      {
        alpha2: "",
        alpha3: "nap",
        bibliographic: "",
        name: "Neapolitan"
      },
      {
        alpha2: "na",
        alpha3: "nau",
        bibliographic: "",
        name: "Nauru"
      },
      {
        alpha2: "nv",
        alpha3: "nav",
        bibliographic: "",
        name: "Navaho"
      },
      {
        alpha2: "nv",
        alpha3: "nav",
        bibliographic: "",
        name: "Navajo"
      },
      {
        alpha2: "nr",
        alpha3: "nbl",
        bibliographic: "",
        name: "Ndebele, South"
      },
      {
        alpha2: "nr",
        alpha3: "nbl",
        bibliographic: "",
        name: "South Ndebele"
      },
      {
        alpha2: "nd",
        alpha3: "nde",
        bibliographic: "",
        name: "Ndebele, North"
      },
      {
        alpha2: "nd",
        alpha3: "nde",
        bibliographic: "",
        name: "North Ndebele"
      },
      {
        alpha2: "ng",
        alpha3: "ndo",
        bibliographic: "",
        name: "Ndonga"
      },
      {
        alpha2: "",
        alpha3: "nds",
        bibliographic: "",
        name: "German, Low"
      },
      {
        alpha2: "",
        alpha3: "nds",
        bibliographic: "",
        name: "Low German"
      },
      {
        alpha2: "",
        alpha3: "nds",
        bibliographic: "",
        name: "Low Saxon"
      },
      {
        alpha2: "",
        alpha3: "nds",
        bibliographic: "",
        name: "Saxon, Low"
      },
      {
        alpha2: "ne",
        alpha3: "nep",
        bibliographic: "",
        name: "Nepali"
      },
      {
        alpha2: "",
        alpha3: "new",
        bibliographic: "",
        name: "Nepal Bhasa"
      },
      {
        alpha2: "",
        alpha3: "new",
        bibliographic: "",
        name: "Newari"
      },
      {
        alpha2: "",
        alpha3: "nia",
        bibliographic: "",
        name: "Nias"
      },
      {
        alpha2: "",
        alpha3: "nic",
        bibliographic: "",
        name: "Niger-Kordofanian languages"
      },
      {
        alpha2: "",
        alpha3: "niu",
        bibliographic: "",
        name: "Niuean"
      },
      {
        alpha2: "nl",
        alpha3: "nld",
        bibliographic: "dut",
        name: "Dutch"
      },
      {
        alpha2: "nl",
        alpha3: "nld",
        bibliographic: "dut",
        name: "Flemish"
      },
      {
        alpha2: "nn",
        alpha3: "nno",
        bibliographic: "",
        name: "Norwegian Nynorsk"
      },
      {
        alpha2: "nn",
        alpha3: "nno",
        bibliographic: "",
        name: "Nynorsk, Norwegian"
      },
      {
        alpha2: "nb",
        alpha3: "nob",
        bibliographic: "",
        name: "Bokmål, Norwegian"
      },
      {
        alpha2: "nb",
        alpha3: "nob",
        bibliographic: "",
        name: "Norwegian Bokmål"
      },
      {
        alpha2: "",
        alpha3: "nog",
        bibliographic: "",
        name: "Nogai"
      },
      {
        alpha2: "",
        alpha3: "non",
        bibliographic: "",
        name: "Norse, Old"
      },
      {
        alpha2: "no",
        alpha3: "nor",
        bibliographic: "",
        name: "Norwegian"
      },
      {
        alpha2: "",
        alpha3: "nqo",
        bibliographic: "",
        name: "N'Ko"
      },
      {
        alpha2: "",
        alpha3: "nso",
        bibliographic: "",
        name: "Northern Sotho"
      },
      {
        alpha2: "",
        alpha3: "nso",
        bibliographic: "",
        name: "Pedi"
      },
      {
        alpha2: "",
        alpha3: "nso",
        bibliographic: "",
        name: "Sepedi"
      },
      {
        alpha2: "",
        alpha3: "nso",
        bibliographic: "",
        name: "Sotho, Northern"
      },
      {
        alpha2: "",
        alpha3: "nub",
        bibliographic: "",
        name: "Nubian languages"
      },
      {
        alpha2: "",
        alpha3: "nwc",
        bibliographic: "",
        name: "Classical Nepal Bhasa"
      },
      {
        alpha2: "",
        alpha3: "nwc",
        bibliographic: "",
        name: "Classical Newari"
      },
      {
        alpha2: "",
        alpha3: "nwc",
        bibliographic: "",
        name: "Old Newari"
      },
      {
        alpha2: "ny",
        alpha3: "nya",
        bibliographic: "",
        name: "Chewa"
      },
      {
        alpha2: "ny",
        alpha3: "nya",
        bibliographic: "",
        name: "Chichewa"
      },
      {
        alpha2: "ny",
        alpha3: "nya",
        bibliographic: "",
        name: "Nyanja"
      },
      {
        alpha2: "",
        alpha3: "nym",
        bibliographic: "",
        name: "Nyamwezi"
      },
      {
        alpha2: "",
        alpha3: "nyn",
        bibliographic: "",
        name: "Nyankole"
      },
      {
        alpha2: "",
        alpha3: "nyo",
        bibliographic: "",
        name: "Nyoro"
      },
      {
        alpha2: "",
        alpha3: "nzi",
        bibliographic: "",
        name: "Nzima"
      },
      {
        alpha2: "oc",
        alpha3: "oci",
        bibliographic: "",
        name: "Occitan (post 1500)"
      },
      {
        alpha2: "oj",
        alpha3: "oji",
        bibliographic: "",
        name: "Ojibwa"
      },
      {
        alpha2: "or",
        alpha3: "ori",
        bibliographic: "",
        name: "Oriya"
      },
      {
        alpha2: "om",
        alpha3: "orm",
        bibliographic: "",
        name: "Oromo"
      },
      {
        alpha2: "",
        alpha3: "osa",
        bibliographic: "",
        name: "Osage"
      },
      {
        alpha2: "os",
        alpha3: "oss",
        bibliographic: "",
        name: "Ossetian"
      },
      {
        alpha2: "os",
        alpha3: "oss",
        bibliographic: "",
        name: "Ossetic"
      },
      {
        alpha2: "",
        alpha3: "ota",
        bibliographic: "",
        name: "Turkish, Ottoman (1500-1928)"
      },
      {
        alpha2: "",
        alpha3: "oto",
        bibliographic: "",
        name: "Otomian languages"
      },
      {
        alpha2: "",
        alpha3: "paa",
        bibliographic: "",
        name: "Papuan languages"
      },
      {
        alpha2: "",
        alpha3: "pag",
        bibliographic: "",
        name: "Pangasinan"
      },
      {
        alpha2: "",
        alpha3: "pal",
        bibliographic: "",
        name: "Pahlavi"
      },
      {
        alpha2: "",
        alpha3: "pam",
        bibliographic: "",
        name: "Kapampangan"
      },
      {
        alpha2: "",
        alpha3: "pam",
        bibliographic: "",
        name: "Pampanga"
      },
      {
        alpha2: "pa",
        alpha3: "pan",
        bibliographic: "",
        name: "Panjabi"
      },
      {
        alpha2: "pa",
        alpha3: "pan",
        bibliographic: "",
        name: "Punjabi"
      },
      {
        alpha2: "",
        alpha3: "pap",
        bibliographic: "",
        name: "Papiamento"
      },
      {
        alpha2: "",
        alpha3: "pau",
        bibliographic: "",
        name: "Palauan"
      },
      {
        alpha2: "",
        alpha3: "peo",
        bibliographic: "",
        name: "Persian, Old (ca.600-400 B.C.)"
      },
      {
        alpha2: "",
        alpha3: "phi",
        bibliographic: "",
        name: "Philippine languages"
      },
      {
        alpha2: "",
        alpha3: "phn",
        bibliographic: "",
        name: "Phoenician"
      },
      {
        alpha2: "pi",
        alpha3: "pli",
        bibliographic: "",
        name: "Pali"
      },
      {
        alpha2: "pl",
        alpha3: "pol",
        bibliographic: "",
        name: "Polish"
      },
      {
        alpha2: "",
        alpha3: "pon",
        bibliographic: "",
        name: "Pohnpeian"
      },
      {
        alpha2: "pt",
        alpha3: "por",
        bibliographic: "",
        name: "Portuguese"
      },
      {
        alpha2: "",
        alpha3: "pra",
        bibliographic: "",
        name: "Prakrit languages"
      },
      {
        alpha2: "",
        alpha3: "pro",
        bibliographic: "",
        name: "Occitan, Old (to 1500)"
      },
      {
        alpha2: "",
        alpha3: "pro",
        bibliographic: "",
        name: "Provençal, Old (to 1500)"
      },
      {
        alpha2: "ps",
        alpha3: "pus",
        bibliographic: "",
        name: "Pashto"
      },
      {
        alpha2: "ps",
        alpha3: "pus",
        bibliographic: "",
        name: "Pushto"
      },
      {
        alpha2: "qu",
        alpha3: "que",
        bibliographic: "",
        name: "Quechua"
      },
      {
        alpha2: "",
        alpha3: "raj",
        bibliographic: "",
        name: "Rajasthani"
      },
      {
        alpha2: "",
        alpha3: "rap",
        bibliographic: "",
        name: "Rapanui"
      },
      {
        alpha2: "",
        alpha3: "rar",
        bibliographic: "",
        name: "Cook Islands Maori"
      },
      {
        alpha2: "",
        alpha3: "rar",
        bibliographic: "",
        name: "Rarotongan"
      },
      {
        alpha2: "",
        alpha3: "roa",
        bibliographic: "",
        name: "Romance languages"
      },
      {
        alpha2: "rm",
        alpha3: "roh",
        bibliographic: "",
        name: "Romansh"
      },
      {
        alpha2: "",
        alpha3: "rom",
        bibliographic: "",
        name: "Romany"
      },
      {
        alpha2: "ro",
        alpha3: "ron",
        bibliographic: "rum",
        name: "Moldavian"
      },
      {
        alpha2: "ro",
        alpha3: "ron",
        bibliographic: "rum",
        name: "Romanian"
      },
      {
        alpha2: "rn",
        alpha3: "run",
        bibliographic: "",
        name: "Rundi"
      },
      {
        alpha2: "",
        alpha3: "rup",
        bibliographic: "",
        name: "Aromanian"
      },
      {
        alpha2: "",
        alpha3: "rup",
        bibliographic: "",
        name: "Arumanian"
      },
      {
        alpha2: "",
        alpha3: "rup",
        bibliographic: "",
        name: "Macedo-Romanian"
      },
      {
        alpha2: "ru",
        alpha3: "rus",
        bibliographic: "",
        name: "Russian"
      },
      {
        alpha2: "",
        alpha3: "sad",
        bibliographic: "",
        name: "Sandawe"
      },
      {
        alpha2: "sg",
        alpha3: "sag",
        bibliographic: "",
        name: "Sango"
      },
      {
        alpha2: "",
        alpha3: "sah",
        bibliographic: "",
        name: "Yakut"
      },
      {
        alpha2: "",
        alpha3: "sai",
        bibliographic: "",
        name: "South American Indian languages"
      },
      {
        alpha2: "",
        alpha3: "sal",
        bibliographic: "",
        name: "Salishan languages"
      },
      {
        alpha2: "",
        alpha3: "sam",
        bibliographic: "",
        name: "Samaritan Aramaic"
      },
      {
        alpha2: "sa",
        alpha3: "san",
        bibliographic: "",
        name: "Sanskrit"
      },
      {
        alpha2: "",
        alpha3: "sas",
        bibliographic: "",
        name: "Sasak"
      },
      {
        alpha2: "",
        alpha3: "sat",
        bibliographic: "",
        name: "Santali"
      },
      {
        alpha2: "",
        alpha3: "scn",
        bibliographic: "",
        name: "Sicilian"
      },
      {
        alpha2: "",
        alpha3: "sco",
        bibliographic: "",
        name: "Scots"
      },
      {
        alpha2: "",
        alpha3: "sel",
        bibliographic: "",
        name: "Selkup"
      },
      {
        alpha2: "",
        alpha3: "sem",
        bibliographic: "",
        name: "Semitic languages"
      },
      {
        alpha2: "",
        alpha3: "sga",
        bibliographic: "",
        name: "Irish, Old (to 900)"
      },
      {
        alpha2: "",
        alpha3: "sgn",
        bibliographic: "",
        name: "Sign Languages"
      },
      {
        alpha2: "",
        alpha3: "shn",
        bibliographic: "",
        name: "Shan"
      },
      {
        alpha2: "",
        alpha3: "sid",
        bibliographic: "",
        name: "Sidamo"
      },
      {
        alpha2: "si",
        alpha3: "sin",
        bibliographic: "",
        name: "Sinhala"
      },
      {
        alpha2: "si",
        alpha3: "sin",
        bibliographic: "",
        name: "Sinhalese"
      },
      {
        alpha2: "",
        alpha3: "sio",
        bibliographic: "",
        name: "Siouan languages"
      },
      {
        alpha2: "",
        alpha3: "sit",
        bibliographic: "",
        name: "Sino-Tibetan languages"
      },
      {
        alpha2: "",
        alpha3: "sla",
        bibliographic: "",
        name: "Slavic languages"
      },
      {
        alpha2: "sk",
        alpha3: "slk",
        bibliographic: "slo",
        name: "Slovak"
      },
      {
        alpha2: "sl",
        alpha3: "slv",
        bibliographic: "",
        name: "Slovenian"
      },
      {
        alpha2: "",
        alpha3: "sma",
        bibliographic: "",
        name: "Southern Sami"
      },
      {
        alpha2: "se",
        alpha3: "sme",
        bibliographic: "",
        name: "Northern Sami"
      },
      {
        alpha2: "",
        alpha3: "smi",
        bibliographic: "",
        name: "Sami languages"
      },
      {
        alpha2: "",
        alpha3: "smj",
        bibliographic: "",
        name: "Lule Sami"
      },
      {
        alpha2: "",
        alpha3: "smn",
        bibliographic: "",
        name: "Inari Sami"
      },
      {
        alpha2: "sm",
        alpha3: "smo",
        bibliographic: "",
        name: "Samoan"
      },
      {
        alpha2: "",
        alpha3: "sms",
        bibliographic: "",
        name: "Skolt Sami"
      },
      {
        alpha2: "sn",
        alpha3: "sna",
        bibliographic: "",
        name: "Shona"
      },
      {
        alpha2: "sd",
        alpha3: "snd",
        bibliographic: "",
        name: "Sindhi"
      },
      {
        alpha2: "",
        alpha3: "snk",
        bibliographic: "",
        name: "Soninke"
      },
      {
        alpha2: "",
        alpha3: "sog",
        bibliographic: "",
        name: "Sogdian"
      },
      {
        alpha2: "so",
        alpha3: "som",
        bibliographic: "",
        name: "Somali"
      },
      {
        alpha2: "",
        alpha3: "son",
        bibliographic: "",
        name: "Songhai languages"
      },
      {
        alpha2: "st",
        alpha3: "sot",
        bibliographic: "",
        name: "Sotho, Southern"
      },
      {
        alpha2: "es",
        alpha3: "spa",
        bibliographic: "",
        name: "Castilian"
      },
      {
        alpha2: "es",
        alpha3: "spa",
        bibliographic: "",
        name: "Spanish"
      },
      {
        alpha2: "sq",
        alpha3: "sqi",
        bibliographic: "alb",
        name: "Albanian"
      },
      {
        alpha2: "sc",
        alpha3: "srd",
        bibliographic: "",
        name: "Sardinian"
      },
      {
        alpha2: "",
        alpha3: "srn",
        bibliographic: "",
        name: "Sranan Tongo"
      },
      {
        alpha2: "sr",
        alpha3: "srp",
        bibliographic: "",
        name: "Serbian"
      },
      {
        alpha2: "",
        alpha3: "srr",
        bibliographic: "",
        name: "Serer"
      },
      {
        alpha2: "",
        alpha3: "ssa",
        bibliographic: "",
        name: "Nilo-Saharan languages"
      },
      {
        alpha2: "ss",
        alpha3: "ssw",
        bibliographic: "",
        name: "Swati"
      },
      {
        alpha2: "",
        alpha3: "suk",
        bibliographic: "",
        name: "Sukuma"
      },
      {
        alpha2: "su",
        alpha3: "sun",
        bibliographic: "",
        name: "Sundanese"
      },
      {
        alpha2: "",
        alpha3: "sus",
        bibliographic: "",
        name: "Susu"
      },
      {
        alpha2: "",
        alpha3: "sux",
        bibliographic: "",
        name: "Sumerian"
      },
      {
        alpha2: "sw",
        alpha3: "swa",
        bibliographic: "",
        name: "Swahili"
      },
      {
        alpha2: "sv",
        alpha3: "swe",
        bibliographic: "",
        name: "Swedish"
      },
      {
        alpha2: "",
        alpha3: "syc",
        bibliographic: "",
        name: "Classical Syriac"
      },
      {
        alpha2: "",
        alpha3: "syr",
        bibliographic: "",
        name: "Syriac"
      },
      {
        alpha2: "ty",
        alpha3: "tah",
        bibliographic: "",
        name: "Tahitian"
      },
      {
        alpha2: "",
        alpha3: "tai",
        bibliographic: "",
        name: "Tai languages"
      },
      {
        alpha2: "ta",
        alpha3: "tam",
        bibliographic: "",
        name: "Tamil"
      },
      {
        alpha2: "tt",
        alpha3: "tat",
        bibliographic: "",
        name: "Tatar"
      },
      {
        alpha2: "te",
        alpha3: "tel",
        bibliographic: "",
        name: "Telugu"
      },
      {
        alpha2: "",
        alpha3: "tem",
        bibliographic: "",
        name: "Timne"
      },
      {
        alpha2: "",
        alpha3: "ter",
        bibliographic: "",
        name: "Tereno"
      },
      {
        alpha2: "",
        alpha3: "tet",
        bibliographic: "",
        name: "Tetum"
      },
      {
        alpha2: "tg",
        alpha3: "tgk",
        bibliographic: "",
        name: "Tajik"
      },
      {
        alpha2: "tl",
        alpha3: "tgl",
        bibliographic: "",
        name: "Tagalog"
      },
      {
        alpha2: "th",
        alpha3: "tha",
        bibliographic: "",
        name: "Thai"
      },
      {
        alpha2: "",
        alpha3: "tig",
        bibliographic: "",
        name: "Tigre"
      },
      {
        alpha2: "ti",
        alpha3: "tir",
        bibliographic: "",
        name: "Tigrinya"
      },
      {
        alpha2: "",
        alpha3: "tiv",
        bibliographic: "",
        name: "Tiv"
      },
      {
        alpha2: "",
        alpha3: "tkl",
        bibliographic: "",
        name: "Tokelau"
      },
      {
        alpha2: "",
        alpha3: "tlh",
        bibliographic: "",
        name: "Klingon"
      },
      {
        alpha2: "",
        alpha3: "tlh",
        bibliographic: "",
        name: "tlhIngan-Hol"
      },
      {
        alpha2: "",
        alpha3: "tli",
        bibliographic: "",
        name: "Tlingit"
      },
      {
        alpha2: "",
        alpha3: "tmh",
        bibliographic: "",
        name: "Tamashek"
      },
      {
        alpha2: "",
        alpha3: "tog",
        bibliographic: "",
        name: "Tonga (Nyasa)"
      },
      {
        alpha2: "to",
        alpha3: "ton",
        bibliographic: "",
        name: "Tonga (Tonga Islands)"
      },
      {
        alpha2: "",
        alpha3: "tpi",
        bibliographic: "",
        name: "Tok Pisin"
      },
      {
        alpha2: "",
        alpha3: "tsi",
        bibliographic: "",
        name: "Tsimshian"
      },
      {
        alpha2: "tn",
        alpha3: "tsn",
        bibliographic: "",
        name: "Tswana"
      },
      {
        alpha2: "ts",
        alpha3: "tso",
        bibliographic: "",
        name: "Tsonga"
      },
      {
        alpha2: "tk",
        alpha3: "tuk",
        bibliographic: "",
        name: "Turkmen"
      },
      {
        alpha2: "",
        alpha3: "tum",
        bibliographic: "",
        name: "Tumbuka"
      },
      {
        alpha2: "",
        alpha3: "tup",
        bibliographic: "",
        name: "Tupi languages"
      },
      {
        alpha2: "tr",
        alpha3: "tur",
        bibliographic: "",
        name: "Turkish"
      },
      {
        alpha2: "",
        alpha3: "tut",
        bibliographic: "",
        name: "Altaic languages"
      },
      {
        alpha2: "",
        alpha3: "tvl",
        bibliographic: "",
        name: "Tuvalu"
      },
      {
        alpha2: "tw",
        alpha3: "twi",
        bibliographic: "",
        name: "Twi"
      },
      {
        alpha2: "",
        alpha3: "tyv",
        bibliographic: "",
        name: "Tuvinian"
      },
      {
        alpha2: "",
        alpha3: "udm",
        bibliographic: "",
        name: "Udmurt"
      },
      {
        alpha2: "",
        alpha3: "uga",
        bibliographic: "",
        name: "Ugaritic"
      },
      {
        alpha2: "ug",
        alpha3: "uig",
        bibliographic: "",
        name: "Uighur"
      },
      {
        alpha2: "ug",
        alpha3: "uig",
        bibliographic: "",
        name: "Uyghur"
      },
      {
        alpha2: "uk",
        alpha3: "ukr",
        bibliographic: "",
        name: "Ukrainian"
      },
      {
        alpha2: "",
        alpha3: "umb",
        bibliographic: "",
        name: "Umbundu"
      },
      {
        alpha2: "",
        alpha3: "und",
        bibliographic: "",
        name: "Undetermined"
      },
      {
        alpha2: "ur",
        alpha3: "urd",
        bibliographic: "",
        name: "Urdu"
      },
      {
        alpha2: "uz",
        alpha3: "uzb",
        bibliographic: "",
        name: "Uzbek"
      },
      {
        alpha2: "",
        alpha3: "vai",
        bibliographic: "",
        name: "Vai"
      },
      {
        alpha2: "ve",
        alpha3: "ven",
        bibliographic: "",
        name: "Venda"
      },
      {
        alpha2: "vi",
        alpha3: "vie",
        bibliographic: "",
        name: "Vietnamese"
      },
      {
        alpha2: "vo",
        alpha3: "vol",
        bibliographic: "",
        name: "Volapük"
      },
      {
        alpha2: "",
        alpha3: "vot",
        bibliographic: "",
        name: "Votic"
      },
      {
        alpha2: "",
        alpha3: "wak",
        bibliographic: "",
        name: "Wakashan languages"
      },
      {
        alpha2: "",
        alpha3: "wal",
        bibliographic: "",
        name: "Wolaitta"
      },
      {
        alpha2: "",
        alpha3: "wal",
        bibliographic: "",
        name: "Wolaytta"
      },
      {
        alpha2: "",
        alpha3: "war",
        bibliographic: "",
        name: "Waray"
      },
      {
        alpha2: "",
        alpha3: "was",
        bibliographic: "",
        name: "Washo"
      },
      {
        alpha2: "",
        alpha3: "wen",
        bibliographic: "",
        name: "Sorbian languages"
      },
      {
        alpha2: "wa",
        alpha3: "wln",
        bibliographic: "",
        name: "Walloon"
      },
      {
        alpha2: "wo",
        alpha3: "wol",
        bibliographic: "",
        name: "Wolof"
      },
      {
        alpha2: "",
        alpha3: "xal",
        bibliographic: "",
        name: "Kalmyk"
      },
      {
        alpha2: "",
        alpha3: "xal",
        bibliographic: "",
        name: "Oirat"
      },
      {
        alpha2: "xh",
        alpha3: "xho",
        bibliographic: "",
        name: "Xhosa"
      },
      {
        alpha2: "",
        alpha3: "yao",
        bibliographic: "",
        name: "Yao"
      },
      {
        alpha2: "",
        alpha3: "yap",
        bibliographic: "",
        name: "Yapese"
      },
      {
        alpha2: "yi",
        alpha3: "yid",
        bibliographic: "",
        name: "Yiddish"
      },
      {
        alpha2: "yo",
        alpha3: "yor",
        bibliographic: "",
        name: "Yoruba"
      },
      {
        alpha2: "",
        alpha3: "ypk",
        bibliographic: "",
        name: "Yupik languages"
      },
      {
        alpha2: "",
        alpha3: "zap",
        bibliographic: "",
        name: "Zapotec"
      },
      {
        alpha2: "",
        alpha3: "zbl",
        bibliographic: "",
        name: "Bliss"
      },
      {
        alpha2: "",
        alpha3: "zbl",
        bibliographic: "",
        name: "Blissymbolics"
      },
      {
        alpha2: "",
        alpha3: "zbl",
        bibliographic: "",
        name: "Blissymbols"
      },
      {
        alpha2: "",
        alpha3: "zen",
        bibliographic: "",
        name: "Zenaga"
      },
      {
        alpha2: "",
        alpha3: "zgh",
        bibliographic: "",
        name: "Standard Moroccan Tamazight"
      },
      {
        alpha2: "za",
        alpha3: "zha",
        bibliographic: "",
        name: "Chuang"
      },
      {
        alpha2: "za",
        alpha3: "zha",
        bibliographic: "",
        name: "Zhuang"
      },
      {
        alpha2: "zh",
        alpha3: "zho",
        bibliographic: "chi",
        name: "Chinese"
      },
      {
        alpha2: "",
        alpha3: "znd",
        bibliographic: "",
        name: "Zande languages"
      },
      {
        alpha2: "zu",
        alpha3: "zul",
        bibliographic: "",
        name: "Zulu"
      },
      {
        alpha2: "",
        alpha3: "zun",
        bibliographic: "",
        name: "Zuni"
      },
      {
        alpha2: "",
        alpha3: "zxx",
        bibliographic: "",
        name: "No linguistic content"
      },
      {
        alpha2: "",
        alpha3: "zxx",
        bibliographic: "",
        name: "Not applicable"
      },
      {
        alpha2: "",
        alpha3: "zza",
        bibliographic: "",
        name: "Dimili"
      },
      {
        alpha2: "",
        alpha3: "zza",
        bibliographic: "",
        name: "Dimli"
      },
      {
        alpha2: "",
        alpha3: "zza",
        bibliographic: "",
        name: "Kirdki"
      },
      {
        alpha2: "",
        alpha3: "zza",
        bibliographic: "",
        name: "Kirmanjki"
      },
      {
        alpha2: "",
        alpha3: "zza",
        bibliographic: "",
        name: "Zaza"
      },
      {
        alpha2: "",
        alpha3: "zza",
        bibliographic: "",
        name: "Zazaki"
      }
    ];
  }
});

// node_modules/country-data/lookup.js
var require_lookup = __commonJS({
  "node_modules/country-data/lookup.js"(exports, module) {
    var _3 = (init_index_all(), __toCommonJS(index_all_exports));
    module.exports = init;
    function init(o) {
      return {
        countries: search.bind(null, o.countries),
        currencies: search.bind(null, o.currencies),
        languages: search.bind(null, o.languages)
      };
    }
    function search(data, query) {
      var q = _3.pairs(query);
      return data.filter(function(d) {
        return q.filter(function(v) {
          var prop = d[v[0]];
          if (_3.isArray(prop))
            return prop.indexOf(v[1]) >= 0;
          return prop == v[1];
        }).length == q.length;
      });
    }
  }
});

// node_modules/currency-symbol-map/map.js
var require_map = __commonJS({
  "node_modules/currency-symbol-map/map.js"(exports, module) {
    module.exports = {
      "ALL": "L",
      "AFN": "؋",
      "ARS": "$",
      "AWG": "ƒ",
      "AUD": "$",
      "AZN": "₼",
      "BSD": "$",
      "BBD": "$",
      "BYR": "p.",
      "BZD": "BZ$",
      "BMD": "$",
      "BOB": "Bs.",
      "BAM": "KM",
      "BWP": "P",
      "BGN": "лв",
      "BRL": "R$",
      "BND": "$",
      "KHR": "៛",
      "CAD": "$",
      "KYD": "$",
      "CLP": "$",
      "CNY": "¥",
      "COP": "$",
      "CRC": "₡",
      "HRK": "kn",
      "CUP": "₱",
      "CZK": "Kč",
      "DKK": "kr",
      "DOP": "RD$",
      "XCD": "$",
      "EGP": "£",
      "SVC": "$",
      "EEK": "kr",
      "EUR": "€",
      "FKP": "£",
      "FJD": "$",
      "GHC": "¢",
      "GIP": "£",
      "GTQ": "Q",
      "GGP": "£",
      "GYD": "$",
      "HNL": "L",
      "HKD": "$",
      "HUF": "Ft",
      "ISK": "kr",
      "INR": "₹",
      "IDR": "Rp",
      "IRR": "﷼",
      "IMP": "£",
      "ILS": "₪",
      "JMD": "J$",
      "JPY": "¥",
      "JEP": "£",
      "KES": "KSh",
      "KZT": "лв",
      "KPW": "₩",
      "KRW": "₩",
      "KGS": "лв",
      "LAK": "₭",
      "LVL": "Ls",
      "LBP": "£",
      "LRD": "$",
      "LTL": "Lt",
      "MKD": "ден",
      "MYR": "RM",
      "MUR": "₨",
      "MXN": "$",
      "MNT": "₮",
      "MZN": "MT",
      "NAD": "$",
      "NPR": "₨",
      "ANG": "ƒ",
      "NZD": "$",
      "NIO": "C$",
      "NGN": "₦",
      "NOK": "kr",
      "OMR": "﷼",
      "PKR": "₨",
      "PAB": "B/.",
      "PYG": "Gs",
      "PEN": "S/.",
      "PHP": "₱",
      "PLN": "zł",
      "QAR": "﷼",
      "RON": "lei",
      "RUB": "₽",
      "SHP": "£",
      "SAR": "﷼",
      "RSD": "Дин.",
      "SCR": "₨",
      "SGD": "$",
      "SBD": "$",
      "SOS": "S",
      "ZAR": "R",
      "LKR": "₨",
      "SEK": "kr",
      "CHF": "CHF",
      "SRD": "$",
      "SYP": "£",
      "TZS": "TSh",
      "TWD": "NT$",
      "THB": "฿",
      "TTD": "TT$",
      "TRY": "",
      "TRL": "₤",
      "TVD": "$",
      "UGX": "USh",
      "UAH": "₴",
      "GBP": "£",
      "USD": "$",
      "UYU": "$U",
      "UZS": "лв",
      "VEF": "Bs",
      "VND": "₫",
      "YER": "﷼",
      "ZWD": "Z$"
    };
  }
});

// node_modules/currency-symbol-map/currency-symbol-map.js
var require_currency_symbol_map = __commonJS({
  "node_modules/currency-symbol-map/currency-symbol-map.js"(exports, module) {
    module.exports = mapSymbol;
    var map2 = require_map();
    function mapSymbol(currencyCode) {
      if (map2.hasOwnProperty(currencyCode)) {
        return map2[currencyCode];
      } else {
        return "?";
      }
    }
  }
});

// node_modules/country-data/index.js
var require_country_data = __commonJS({
  "node_modules/country-data/index.js"(exports) {
    var _3 = (init_index_all(), __toCommonJS(index_all_exports));
    var continents = require_continents();
    var regions = require_regions();
    var countriesAll = require_countries();
    var currenciesAll = require_currencies();
    var languagesAll = require_languages();
    var lookup = require_lookup();
    var getSymbol = require_currency_symbol_map();
    exports.continents = continents;
    exports.regions = regions;
    exports.countries = {
      all: countriesAll
    };
    _3.each(countriesAll, function(country) {
      var exportedAlpha2 = exports.countries[country.alpha2];
      if (!exportedAlpha2 || exportedAlpha2.status === "deleted") {
        exports.countries[country.alpha2] = country;
      }
      var exportedAlpha3 = exports.countries[country.alpha3];
      if (!exportedAlpha3 || exportedAlpha3.status === "deleted") {
        exports.countries[country.alpha3] = country;
      }
    });
    exports.currencies = {
      all: currenciesAll
    };
    _3.each(currenciesAll, function(currency) {
      var symbol = getSymbol(currency.code);
      if (symbol == "?") {
        symbol = currency.code;
      }
      currency.symbol = symbol;
      exports.currencies[currency.code] = currency;
    });
    exports.languages = {
      all: languagesAll
    };
    _3.each(languagesAll, function(language) {
      exports.languages[language.alpha2] = language;
      exports.languages[language.bibliographic] = language;
      exports.languages[language.alpha3] = language;
    });
    exports.lookup = lookup({
      countries: countriesAll,
      currencies: currenciesAll,
      languages: languagesAll
    });
    var callingCountries = { all: [] };
    var callingCodesAll = _3.reduce(countriesAll, function(codes, country) {
      if (country.countryCallingCodes && country.countryCallingCodes.length) {
        callingCountries.all.push(country);
        callingCountries[country.alpha2] = country;
        callingCountries[country.alpha3] = country;
        _3.each(country.countryCallingCodes, function(code) {
          if (codes.indexOf(code) == -1) {
            codes.push(code);
          }
        });
      }
      return codes;
    }, []);
    delete callingCountries[""];
    exports.callingCountries = callingCountries;
    callingCodesAll.sort(function(a, b) {
      var parse = function(str) {
        return parseInt(str);
      };
      var splitA = _3.map(a.split(" "), parse);
      var splitB = _3.map(b.split(" "), parse);
      if (splitA[0] < splitB[0]) {
        return -1;
      } else if (splitA[0] > splitB[0]) {
        return 1;
      } else {
        if (splitA[1] === void 0 && splitB[1] !== void 0) {
          return -1;
        } else if (splitA[1] !== void 0 && splitB[1] === void 0) {
          return 1;
        } else if (splitA[1] < splitB[1]) {
          return -1;
        } else if (splitA[1] > splitB[1]) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    exports.callingCodes = {
      all: callingCodesAll
    };
  }
});
export default require_country_data();
//# sourceMappingURL=country-data.js.map
