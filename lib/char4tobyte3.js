"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = char4tobyte3;

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(char4tobyte3);

function char4tobyte3(index, a, b, c, d) {
  return regeneratorRuntime.wrap(function char4tobyte3$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return index[a] << 2 | index[b] >> 4;

        case 2:
          _context.next = 4;
          return 0xFF & index[b] << 4 | index[c] >> 2;

        case 4:
          _context.next = 6;
          return 0xFF & index[c] << 6 | index[d];

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyNHRvYnl0ZTMuanMiXSwibmFtZXMiOlsiY2hhcjR0b2J5dGUzIiwiaW5kZXgiLCJhIiwiYiIsImMiLCJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7d0JBQXlCQSxZOztBQUFWLFNBQVVBLFlBQVYsQ0FBeUJDLEtBQXpCLEVBQWlDQyxDQUFqQyxFQUFxQ0MsQ0FBckMsRUFBeUNDLENBQXpDLEVBQTZDQyxDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZCxpQkFBYUosS0FBSyxDQUFDQyxDQUFELENBQUwsSUFBWSxDQUFaLEdBQWdCRCxLQUFLLENBQUNFLENBQUQsQ0FBTCxJQUFZLENBQXpDOztBQUZjO0FBQUE7QUFHZCxpQkFBTSxPQUFPRixLQUFLLENBQUNFLENBQUQsQ0FBTCxJQUFZLENBQW5CLEdBQXVCRixLQUFLLENBQUNHLENBQUQsQ0FBTCxJQUFZLENBQXpDOztBQUhjO0FBQUE7QUFJZCxpQkFBTSxPQUFPSCxLQUFLLENBQUNHLENBQUQsQ0FBTCxJQUFZLENBQW5CLEdBQXVCSCxLQUFLLENBQUNJLENBQUQsQ0FBbEM7O0FBSmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogY2hhcjR0b2J5dGUzICggaW5kZXggLCBhICwgYiAsIGMgLCBkICkge1xuXG5cdHlpZWxkICAgICAgICBpbmRleFthXSA8PCAyIHwgaW5kZXhbYl0gPj4gNCA7XG5cdHlpZWxkIDB4RkYgJiBpbmRleFtiXSA8PCA0IHwgaW5kZXhbY10gPj4gMiA7XG5cdHlpZWxkIDB4RkYgJiBpbmRleFtjXSA8PCA2IHwgaW5kZXhbZF0gO1xuXG59XG4iXX0=