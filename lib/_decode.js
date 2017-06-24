'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _decode;

var _jsItertools = require('@aureooms/js-itertools');

var _byte3tochar = require('./byte3tochar4');

var _byte3tochar2 = _interopRequireDefault(_byte3tochar);

var _byte2tochar = require('./byte2tochar3');

var _byte2tochar2 = _interopRequireDefault(_byte2tochar);

var _byte1tochar = require('./byte1tochar2');

var _byte1tochar2 = _interopRequireDefault(_byte1tochar);

var _Base64DecodeError = require('./Base64DecodeError');

var _Base64DecodeError2 = _interopRequireDefault(_Base64DecodeError);

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_decode].map(regeneratorRuntime.mark);

function _decode(bytes) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DEFAULT_OPTIONS2.default;

	var start, alphabet, padding, it, a, b, c, reason, position, _reason, _position, _reason2, _position2;

	return regeneratorRuntime.wrap(function _decode$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					start = 0;
					alphabet = options.alphabet;
					padding = options.padding;
					it = (0, _jsItertools.iter)(bytes);

				case 4:
					if (!true) {
						_context.next = 67;
						break;
					}

					a = void 0, b = void 0, c = void 0;
					_context.prev = 6;

					a = (0, _jsItertools.next)(it);
					_context.next = 17;
					break;

				case 10:
					_context.prev = 10;
					_context.t0 = _context['catch'](6);

					if (!(_context.t0 instanceof _jsItertools.StopIteration)) {
						_context.next = 16;
						break;
					}

					return _context.abrupt('break', 67);

				case 16:
					throw _context.t0;

				case 17:
					if (!(a < 0x00 || a > 0xFF)) {
						_context.next = 21;
						break;
					}

					reason = 'byte out of range 0x00 <= ' + a + ' <= 0xFF';
					position = { start: start, end: start + 1 };
					throw new _Base64DecodeError2.default(reason, bytes, position);

				case 21:

					++start;

					_context.prev = 22;

					b = (0, _jsItertools.next)(it);
					_context.next = 39;
					break;

				case 26:
					_context.prev = 26;
					_context.t1 = _context['catch'](22);

					if (!(_context.t1 instanceof _jsItertools.StopIteration)) {
						_context.next = 38;
						break;
					}

					return _context.delegateYield((0, _byte1tochar2.default)(alphabet, a), 't2', 30);

				case 30:
					if (!padding) {
						_context.next = 35;
						break;
					}

					_context.next = 33;
					return padding;

				case 33:
					_context.next = 35;
					return padding;

				case 35:
					return _context.abrupt('break', 67);

				case 38:
					throw _context.t1;

				case 39:
					if (!(b < 0x00 || b > 0xFF)) {
						_context.next = 43;
						break;
					}

					_reason = 'byte out of range 0x00 <= ' + b + ' <= 0xFF';
					_position = { start: start, end: start + 1 };
					throw new _Base64DecodeError2.default(_reason, bytes, _position);

				case 43:

					++start;

					_context.prev = 44;

					c = (0, _jsItertools.next)(it);
					_context.next = 59;
					break;

				case 48:
					_context.prev = 48;
					_context.t3 = _context['catch'](44);

					if (!(_context.t3 instanceof _jsItertools.StopIteration)) {
						_context.next = 58;
						break;
					}

					return _context.delegateYield((0, _byte2tochar2.default)(alphabet, a, b), 't4', 52);

				case 52:
					if (!padding) {
						_context.next = 55;
						break;
					}

					_context.next = 55;
					return padding;

				case 55:
					return _context.abrupt('break', 67);

				case 58:
					throw _context.t3;

				case 59:
					if (!(c < 0x00 || c > 0xFF)) {
						_context.next = 63;
						break;
					}

					_reason2 = 'byte out of range 0x00 <= ' + c + ' <= 0xFF';
					_position2 = { start: start, end: start + 1 };
					throw new _Base64DecodeError2.default(_reason2, bytes, _position2);

				case 63:
					return _context.delegateYield((0, _byte3tochar2.default)(alphabet, a, b, c), 't5', 64);

				case 64:

					++start;

					_context.next = 4;
					break;

				case 67:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[6, 10], [22, 26], [44, 48]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZGVjb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvZGUiLCJieXRlcyIsIm9wdGlvbnMiLCJzdGFydCIsImFscGhhYmV0IiwicGFkZGluZyIsIml0IiwiYSIsImIiLCJjIiwicmVhc29uIiwicG9zaXRpb24iLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVN5QkEsTzs7QUFUekI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O2VBRXlCQSxPOztBQUFWLFNBQVVBLE9BQVYsQ0FBb0JDLEtBQXBCO0FBQUEsS0FBNEJDLE9BQTVCOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLFVBRlUsR0FFRixDQUZFO0FBSVJDLGFBSlEsR0FJR0YsUUFBUUUsUUFKWDtBQUtSQyxZQUxRLEdBS0VILFFBQVFHLE9BTFY7QUFPUkMsT0FQUSxHQU9ILHVCQUFLTCxLQUFMLENBUEc7O0FBQUE7QUFBQSxVQVNOLElBVE07QUFBQTtBQUFBO0FBQUE7O0FBV1RNLE1BWFMsV0FXTkMsQ0FYTSxXQVdIQyxDQVhHO0FBQUE7O0FBY1pGLFNBQUksdUJBQU1ELEVBQU4sQ0FBSjtBQWRZO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBaUJQLGlEQWpCTztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsV0FxQlJDLElBQUksSUFBSixJQUFZQSxJQUFJLElBckJSO0FBQUE7QUFBQTtBQUFBOztBQXNCTkcsV0F0Qk0sa0NBc0JnQ0gsQ0F0QmhDO0FBdUJOSSxhQXZCTSxHQXVCSyxFQUFFUixPQUFRQSxLQUFWLEVBQWtCUyxLQUFNVCxRQUFRLENBQWhDLEVBdkJMO0FBQUEsV0F3Qk4sZ0NBQXVCTyxNQUF2QixFQUFnQ1QsS0FBaEMsRUFBd0NVLFFBQXhDLENBeEJNOztBQUFBOztBQTJCYixPQUFFUixLQUFGOztBQTNCYTs7QUE4QlpLLFNBQUksdUJBQU1GLEVBQU4sQ0FBSjtBQTlCWTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxXQWlDUCxpREFqQ087QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUNBa0NKLDJCQUFhRixRQUFiLEVBQXVCRyxDQUF2QixDQWxDSTs7QUFBQTtBQUFBLFVBbUNQRixPQW5DTztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBb0NKQSxPQXBDSTs7QUFBQTtBQUFBO0FBQUEsWUFxQ0pBLE9BckNJOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLFdBNENSRyxJQUFJLElBQUosSUFBWUEsSUFBSSxJQTVDUjtBQUFBO0FBQUE7QUFBQTs7QUE2Q05FLFlBN0NNLGtDQTZDZ0NGLENBN0NoQztBQThDTkcsY0E5Q00sR0E4Q0ssRUFBRVIsT0FBUUEsS0FBVixFQUFrQlMsS0FBTVQsUUFBUSxDQUFoQyxFQTlDTDtBQUFBLFdBK0NOLGdDQUF1Qk8sT0FBdkIsRUFBZ0NULEtBQWhDLEVBQXdDVSxTQUF4QyxDQS9DTTs7QUFBQTs7QUFrRGIsT0FBRVIsS0FBRjs7QUFsRGE7O0FBcURaTSxTQUFJLHVCQUFNSCxFQUFOLENBQUo7QUFyRFk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsV0F3RFAsaURBeERPO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1DQXlESiwyQkFBYUYsUUFBYixFQUF1QkcsQ0FBdkIsRUFBMEJDLENBQTFCLENBekRJOztBQUFBO0FBQUEsVUEwRFBILE9BMURPO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsWUEyREpBLE9BM0RJOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLFdBa0VSSSxJQUFJLElBQUosSUFBWUEsSUFBSSxJQWxFUjtBQUFBO0FBQUE7QUFBQTs7QUFtRU5DLGFBbkVNLGtDQW1FZ0NELENBbkVoQztBQW9FTkUsZUFwRU0sR0FvRUssRUFBRVIsT0FBUUEsS0FBVixFQUFrQlMsS0FBTVQsUUFBUSxDQUFoQyxFQXBFTDtBQUFBLFdBcUVOLGdDQUF1Qk8sUUFBdkIsRUFBZ0NULEtBQWhDLEVBQXdDVSxVQUF4QyxDQXJFTTs7QUFBQTtBQUFBLG1DQXdFTiwyQkFBYVAsUUFBYixFQUF1QkcsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCQyxDQUE3QixDQXhFTTs7QUFBQTs7QUEwRWIsT0FBRU4sS0FBRjs7QUExRWE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfZGVjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciAsIG5leHQgLCBTdG9wSXRlcmF0aW9uIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgYnl0ZTN0b2NoYXI0IGZyb20gJy4vYnl0ZTN0b2NoYXI0JyA7XG5pbXBvcnQgYnl0ZTJ0b2NoYXIzIGZyb20gJy4vYnl0ZTJ0b2NoYXIzJyA7XG5pbXBvcnQgYnl0ZTF0b2NoYXIyIGZyb20gJy4vYnl0ZTF0b2NoYXIyJyA7XG5cbmltcG9ydCBCYXNlNjREZWNvZGVFcnJvciBmcm9tICcuL0Jhc2U2NERlY29kZUVycm9yJyA7XG5pbXBvcnQgREVGQVVMVF9PUFRJT05TIGZyb20gJy4vREVGQVVMVF9PUFRJT05TJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBfZGVjb2RlICggYnl0ZXMgLCBvcHRpb25zID0gREVGQVVMVF9PUFRJT05TICkge1xuXG5cdGxldCBzdGFydCA9IDAgO1xuXG5cdGNvbnN0IGFscGhhYmV0ID0gb3B0aW9ucy5hbHBoYWJldDtcblx0Y29uc3QgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcblxuXHRjb25zdCBpdCA9IGl0ZXIoYnl0ZXMpIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgYSwgYiwgYztcblxuXHRcdHRyeSB7XG5cdFx0XHRhID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZSApIHtcblx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSBicmVhayA7XG5cdFx0XHRlbHNlIHRocm93IGUgO1xuXHRcdH1cblxuXHRcdGlmICggYSA8IDB4MDAgfHwgYSA+IDB4RkYgKSB7XG5cdFx0XHRjb25zdCByZWFzb24gPSBgYnl0ZSBvdXQgb2YgcmFuZ2UgMHgwMCA8PSAke2F9IDw9IDB4RkZgIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuXHRcdFx0dGhyb3cgbmV3IEJhc2U2NERlY29kZUVycm9yKCByZWFzb24gLCBieXRlcyAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdCsrc3RhcnQ7XG5cblx0XHR0cnkge1xuXHRcdFx0YiA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRpZiAoIGUgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkge1xuXHRcdFx0XHR5aWVsZCogYnl0ZTF0b2NoYXIyKGFscGhhYmV0LCBhKTtcblx0XHRcdFx0aWYgKHBhZGRpbmcpIHtcblx0XHRcdFx0XHR5aWVsZCBwYWRkaW5nO1xuXHRcdFx0XHRcdHlpZWxkIHBhZGRpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHRocm93IGUgO1xuXHRcdH1cblxuXHRcdGlmICggYiA8IDB4MDAgfHwgYiA+IDB4RkYgKSB7XG5cdFx0XHRjb25zdCByZWFzb24gPSBgYnl0ZSBvdXQgb2YgcmFuZ2UgMHgwMCA8PSAke2J9IDw9IDB4RkZgIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuXHRcdFx0dGhyb3cgbmV3IEJhc2U2NERlY29kZUVycm9yKCByZWFzb24gLCBieXRlcyAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdCsrc3RhcnQ7XG5cblx0XHR0cnkge1xuXHRcdFx0YyA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRpZiAoIGUgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkge1xuXHRcdFx0XHR5aWVsZCogYnl0ZTJ0b2NoYXIzKGFscGhhYmV0LCBhLCBiKTtcblx0XHRcdFx0aWYgKHBhZGRpbmcpIHtcblx0XHRcdFx0XHR5aWVsZCBwYWRkaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHR9XG5cblx0XHRpZiAoIGMgPCAweDAwIHx8IGMgPiAweEZGICkge1xuXHRcdFx0Y29uc3QgcmVhc29uID0gYGJ5dGUgb3V0IG9mIHJhbmdlIDB4MDAgPD0gJHtjfSA8PSAweEZGYCA7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcblx0XHRcdHRocm93IG5ldyBCYXNlNjREZWNvZGVFcnJvciggcmVhc29uICwgYnl0ZXMgLCBwb3NpdGlvbiApIDtcblx0XHR9XG5cblx0XHR5aWVsZCogYnl0ZTN0b2NoYXI0KGFscGhhYmV0LCBhLCBiLCBjKTtcblxuXHRcdCsrc3RhcnQ7XG5cblx0fVxuXG59XG4iXX0=