"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsCodec = require("@aureooms/js-codec");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Base64EncodeError =
/*#__PURE__*/
function (_EncodeError) {
  _inherits(Base64EncodeError, _EncodeError);

  function Base64EncodeError(reason, object, position) {
    _classCallCheck(this, Base64EncodeError);

    return _possibleConstructorReturn(this, _getPrototypeOf(Base64EncodeError).call(this, 'base64', reason, object, position));
  }

  return Base64EncodeError;
}(_jsCodec.EncodeError);

exports.default = Base64EncodeError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNlNjRFbmNvZGVFcnJvci5qcyJdLCJuYW1lcyI6WyJCYXNlNjRFbmNvZGVFcnJvciIsInJlYXNvbiIsIm9iamVjdCIsInBvc2l0aW9uIiwiRW5jb2RlRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7O0FBRXBCLDZCQUFjQyxNQUFkLEVBQXVCQyxNQUF2QixFQUFnQ0MsUUFBaEMsRUFBMkM7QUFBQTs7QUFBQSwwRkFDbkMsUUFEbUMsRUFDeEJGLE1BRHdCLEVBQ2ZDLE1BRGUsRUFDTkMsUUFETTtBQUUxQzs7O0VBSjZDQyxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuY29kZUVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWNvZGVjJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2U2NEVuY29kZUVycm9yIGV4dGVuZHMgRW5jb2RlRXJyb3Ige1xuXG5cdGNvbnN0cnVjdG9yICggcmVhc29uICwgb2JqZWN0ICwgcG9zaXRpb24gKSB7XG5cdFx0c3VwZXIoICdiYXNlNjQnICwgcmVhc29uICwgb2JqZWN0ICwgcG9zaXRpb24gKSA7XG5cdH1cblxufVxuXG4iXX0=