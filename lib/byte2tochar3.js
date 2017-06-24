"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = byte2tochar3;

var _marked = [byte2tochar3].map(regeneratorRuntime.mark);

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
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ieXRlMnRvY2hhcjMuanMiXSwibmFtZXMiOlsiYnl0ZTJ0b2NoYXIzIiwiYWxwaGFiZXQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXlCQSxZOztlQUFBQSxZOztBQUFWLFNBQVVBLFlBQVYsQ0FBeUJDLFFBQXpCLEVBQW9DQyxDQUFwQyxFQUF3Q0MsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDUkYsU0FBZUMsS0FBSyxDQUFwQixDQURROztBQUFBO0FBQUE7QUFBQSxZQUVSRCxTQUFVLEtBQUtDLEtBQUssQ0FBVixHQUFjQyxLQUFLLENBQTdCLENBRlE7O0FBQUE7QUFBQTtBQUFBLFlBR1JGLFNBQVUsS0FBY0UsS0FBSyxDQUE3QixDQUhROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImJ5dGUydG9jaGFyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBieXRlMnRvY2hhcjMgKCBhbHBoYWJldCAsIGEgLCBiICkge1xuXHR5aWVsZCBhbHBoYWJldFsgICAgICBhID4+IDIgICAgICAgICAgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyA2MyAmIGEgPDwgNCB8IGIgPj4gNCBdIDtcblx0eWllbGQgYWxwaGFiZXRbIDYzICYgICAgICAgICAgYiA8PCAyIF0gO1xufVxuIl19