"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decode;

var _decode2 = _interopRequireDefault(require("./_decode"));

var _DEFAULT_OPTIONS = _interopRequireDefault(require("./DEFAULT_OPTIONS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function decode(bytes) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DEFAULT_OPTIONS.default;
  return _toConsumableArray((0, _decode2.default)(bytes, options)).join('');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvZGUuanMiXSwibmFtZXMiOlsiZGVjb2RlIiwiYnl0ZXMiLCJvcHRpb25zIiwiREVGQVVMVF9PUFRJT05TIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxNQUFULENBQWtCQyxLQUFsQixFQUFzRDtBQUFBLE1BQTVCQyxPQUE0Qix1RUFBbEJDLHdCQUFrQjtBQUVwRSxTQUFPLG1CQUFLLHNCQUFRRixLQUFSLEVBQWVDLE9BQWYsQ0FBTCxFQUErQkUsSUFBL0IsQ0FBb0MsRUFBcEMsQ0FBUDtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9kZWNvZGUgZnJvbSAnLi9fZGVjb2RlJyA7XG5pbXBvcnQgREVGQVVMVF9PUFRJT05TIGZyb20gJy4vREVGQVVMVF9PUFRJT05TJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlY29kZSAoIGJ5dGVzICwgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUyApIHtcblxuXHRyZXR1cm4gWyAuLi5fZGVjb2RlKGJ5dGVzLCBvcHRpb25zKSBdLmpvaW4oJycpIDtcblxufVxuIl19