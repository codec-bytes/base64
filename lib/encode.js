"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encode;

var _encode2 = _interopRequireDefault(require("./_encode"));

var _DEFAULT_OPTIONS = _interopRequireDefault(require("./DEFAULT_OPTIONS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function encode(bytes) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DEFAULT_OPTIONS.default;
  return _toConsumableArray((0, _encode2.default)(bytes, options));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbmNvZGUuanMiXSwibmFtZXMiOlsiZW5jb2RlIiwiYnl0ZXMiLCJvcHRpb25zIiwiREVGQVVMVF9PUFRJT05TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBa0JDLEtBQWxCLEVBQXNEO0FBQUEsTUFBNUJDLE9BQTRCLHVFQUFsQkMsd0JBQWtCO0FBRXBFLDRCQUFZLHNCQUFRRixLQUFSLEVBQWVDLE9BQWYsQ0FBWjtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9lbmNvZGUgZnJvbSAnLi9fZW5jb2RlJyA7XG5pbXBvcnQgREVGQVVMVF9PUFRJT05TIGZyb20gJy4vREVGQVVMVF9PUFRJT05TJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuY29kZSAoIGJ5dGVzICwgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUyApIHtcblxuXHRyZXR1cm4gWyAuLi5fZW5jb2RlKGJ5dGVzLCBvcHRpb25zKSBdIDtcblxufVxuIl19