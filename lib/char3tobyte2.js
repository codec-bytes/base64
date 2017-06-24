"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = char3tobyte2;

var _marked = [char3tobyte2].map(regeneratorRuntime.mark);

function char3tobyte2(index, a, b, c) {
	return regeneratorRuntime.wrap(function char3tobyte2$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return index[a] << 2 | index[b] >> 4;

				case 2:
					_context.next = 4;
					return 0xFF & index[b] << 4 | index[c] >> 2;

				case 4:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyM3RvYnl0ZTIuanMiXSwibmFtZXMiOlsiY2hhcjN0b2J5dGUyIiwiaW5kZXgiLCJhIiwiYiIsImMiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF5QkEsWTs7ZUFBQUEsWTs7QUFBVixTQUFVQSxZQUFWLENBQXlCQyxLQUF6QixFQUFpQ0MsQ0FBakMsRUFBcUNDLENBQXJDLEVBQXlDQyxDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUVESCxNQUFNQyxDQUFOLEtBQVksQ0FBWixHQUFnQkQsTUFBTUUsQ0FBTixLQUFZLENBRjNCOztBQUFBO0FBQUE7QUFBQSxZQUdSLE9BQU9GLE1BQU1FLENBQU4sS0FBWSxDQUFuQixHQUF1QkYsTUFBTUcsQ0FBTixLQUFZLENBSDNCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNoYXIzdG9ieXRlMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjaGFyM3RvYnl0ZTIgKCBpbmRleCAsIGEgLCBiICwgYyApIHtcblxuXHR5aWVsZCAgICAgICAgaW5kZXhbYV0gPDwgMiB8IGluZGV4W2JdID4+IDQgO1xuXHR5aWVsZCAweEZGICYgaW5kZXhbYl0gPDwgNCB8IGluZGV4W2NdID4+IDIgO1xuXG59XG4iXX0=