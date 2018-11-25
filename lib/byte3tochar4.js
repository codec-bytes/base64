"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = byte3tochar4;

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(byte3tochar4);

function byte3tochar4(alphabet, a, b, c) {
  return regeneratorRuntime.wrap(function byte3tochar4$(_context) {
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
          return alphabet[63 & b << 2 | c >> 6];

        case 6:
          _context.next = 8;
          return alphabet[63 & c];

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ieXRlM3RvY2hhcjQuanMiXSwibmFtZXMiOlsiYnl0ZTN0b2NoYXI0IiwiYWxwaGFiZXQiLCJhIiwiYiIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozt3QkFBeUJBLFk7O0FBQVYsU0FBVUEsWUFBVixDQUF5QkMsUUFBekIsRUFBb0NDLENBQXBDLEVBQXdDQyxDQUF4QyxFQUE0Q0MsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU1ILFFBQVEsQ0FBT0MsQ0FBQyxJQUFJLENBQVosQ0FBZDs7QUFEYztBQUFBO0FBRWQsaUJBQU1ELFFBQVEsQ0FBRSxLQUFLQyxDQUFDLElBQUksQ0FBVixHQUFjQyxDQUFDLElBQUksQ0FBckIsQ0FBZDs7QUFGYztBQUFBO0FBR2QsaUJBQU1GLFFBQVEsQ0FBRSxLQUFjRSxDQUFDLElBQUksQ0FBbkIsR0FBdUJDLENBQUMsSUFBSSxDQUE5QixDQUFkOztBQUhjO0FBQUE7QUFJZCxpQkFBTUgsUUFBUSxDQUFFLEtBQXVCRyxDQUF6QixDQUFkOztBQUpjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGJ5dGUzdG9jaGFyNCAoIGFscGhhYmV0ICwgYSAsIGIgLCBjICkge1xuXHR5aWVsZCBhbHBoYWJldFsgICAgICBhID4+IDIgICAgICAgICAgICAgICAgICAgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyA2MyAmIGEgPDwgNCB8IGIgPj4gNCAgICAgICAgICBdIDtcblx0eWllbGQgYWxwaGFiZXRbIDYzICYgICAgICAgICAgYiA8PCAyIHwgYyA+PiA2IF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgNjMgJiAgICAgICAgICAgICAgICAgICBjICAgICAgXSA7XG59XG4iXX0=