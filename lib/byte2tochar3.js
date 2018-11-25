"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = byte2tochar3;

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(byte2tochar3);

function byte2tochar3(alphabet, a, b) {
  return regeneratorRuntime.wrap(function byte2tochar3$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return alphabet[a >> 2];

        case 2:
          _context.next = 4;
          return alphabet[63 & a << 4 | b >> 4];

        case 4:
          _context.next = 6;
          return alphabet[63 & b << 2];

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ieXRlMnRvY2hhcjMuanMiXSwibmFtZXMiOlsiYnl0ZTJ0b2NoYXIzIiwiYWxwaGFiZXQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3dCQUF5QkEsWTs7QUFBVixTQUFVQSxZQUFWLENBQXlCQyxRQUF6QixFQUFvQ0MsQ0FBcEMsRUFBd0NDLENBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLGlCQUFNRixRQUFRLENBQU9DLENBQUMsSUFBSSxDQUFaLENBQWQ7O0FBRGM7QUFBQTtBQUVkLGlCQUFNRCxRQUFRLENBQUUsS0FBS0MsQ0FBQyxJQUFJLENBQVYsR0FBY0MsQ0FBQyxJQUFJLENBQXJCLENBQWQ7O0FBRmM7QUFBQTtBQUdkLGlCQUFNRixRQUFRLENBQUUsS0FBY0UsQ0FBQyxJQUFJLENBQXJCLENBQWQ7O0FBSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogYnl0ZTJ0b2NoYXIzICggYWxwaGFiZXQgLCBhICwgYiApIHtcblx0eWllbGQgYWxwaGFiZXRbICAgICAgYSA+PiAyICAgICAgICAgIF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgNjMgJiBhIDw8IDQgfCBiID4+IDQgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyA2MyAmICAgICAgICAgIGIgPDwgMiBdIDtcbn1cbiJdfQ==