"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = char4tobyte3;

var _marked = [char4tobyte3].map(regeneratorRuntime.mark);

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
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyNHRvYnl0ZTMuanMiXSwibmFtZXMiOlsiY2hhcjR0b2J5dGUzIiwiaW5kZXgiLCJhIiwiYiIsImMiLCJkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBeUJBLFk7O2VBQUFBLFk7O0FBQVYsU0FBVUEsWUFBVixDQUF5QkMsS0FBekIsRUFBaUNDLENBQWpDLEVBQXFDQyxDQUFyQyxFQUF5Q0MsQ0FBekMsRUFBNkNDLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRURKLE1BQU1DLENBQU4sS0FBWSxDQUFaLEdBQWdCRCxNQUFNRSxDQUFOLEtBQVksQ0FGM0I7O0FBQUE7QUFBQTtBQUFBLFlBR1IsT0FBT0YsTUFBTUUsQ0FBTixLQUFZLENBQW5CLEdBQXVCRixNQUFNRyxDQUFOLEtBQVksQ0FIM0I7O0FBQUE7QUFBQTtBQUFBLFlBSVIsT0FBT0gsTUFBTUcsQ0FBTixLQUFZLENBQW5CLEdBQXVCSCxNQUFNSSxDQUFOLENBSmY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2hhcjR0b2J5dGUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNoYXI0dG9ieXRlMyAoIGluZGV4ICwgYSAsIGIgLCBjICwgZCApIHtcblxuXHR5aWVsZCAgICAgICAgaW5kZXhbYV0gPDwgMiB8IGluZGV4W2JdID4+IDQgO1xuXHR5aWVsZCAweEZGICYgaW5kZXhbYl0gPDwgNCB8IGluZGV4W2NdID4+IDIgO1xuXHR5aWVsZCAweEZGICYgaW5kZXhbY10gPDwgNiB8IGluZGV4W2RdIDtcblxufVxuIl19