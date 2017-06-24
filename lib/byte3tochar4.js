"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = byte3tochar4;

var _marked = [byte3tochar4].map(regeneratorRuntime.mark);

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
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ieXRlM3RvY2hhcjQuanMiXSwibmFtZXMiOlsiYnl0ZTN0b2NoYXI0IiwiYWxwaGFiZXQiLCJhIiwiYiIsImMiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF5QkEsWTs7ZUFBQUEsWTs7QUFBVixTQUFVQSxZQUFWLENBQXlCQyxRQUF6QixFQUFvQ0MsQ0FBcEMsRUFBd0NDLENBQXhDLEVBQTRDQyxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNSSCxTQUFlQyxLQUFLLENBQXBCLENBRFE7O0FBQUE7QUFBQTtBQUFBLFlBRVJELFNBQVUsS0FBS0MsS0FBSyxDQUFWLEdBQWNDLEtBQUssQ0FBN0IsQ0FGUTs7QUFBQTtBQUFBO0FBQUEsWUFHUkYsU0FBVSxLQUFjRSxLQUFLLENBQW5CLEdBQXVCQyxLQUFLLENBQXRDLENBSFE7O0FBQUE7QUFBQTtBQUFBLFlBSVJILFNBQVUsS0FBdUJHLENBQWpDLENBSlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnl0ZTN0b2NoYXI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGJ5dGUzdG9jaGFyNCAoIGFscGhhYmV0ICwgYSAsIGIgLCBjICkge1xuXHR5aWVsZCBhbHBoYWJldFsgICAgICBhID4+IDIgICAgICAgICAgICAgICAgICAgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyA2MyAmIGEgPDwgNCB8IGIgPj4gNCAgICAgICAgICBdIDtcblx0eWllbGQgYWxwaGFiZXRbIDYzICYgICAgICAgICAgYiA8PCAyIHwgYyA+PiA2IF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgNjMgJiAgICAgICAgICAgICAgICAgICBjICAgICAgXSA7XG59XG4iXX0=