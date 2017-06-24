'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _encode;

var _jsItertools = require('@aureooms/js-itertools');

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

var _char4tobyte = require('./char4tobyte3');

var _char4tobyte2 = _interopRequireDefault(_char4tobyte);

var _char3tobyte = require('./char3tobyte2');

var _char3tobyte2 = _interopRequireDefault(_char3tobyte);

var _char2tobyte = require('./char2tobyte1');

var _char2tobyte2 = _interopRequireDefault(_char2tobyte);

var _Base64EncodeError = require('./Base64EncodeError');

var _Base64EncodeError2 = _interopRequireDefault(_Base64EncodeError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_encode].map(regeneratorRuntime.mark);

function _encode(string) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DEFAULT_OPTIONS2.default;

	var start, index, padding, it, a, b, c, d, stop, reason, position, _reason, _position, _reason2, _position2, _reason3, _position3, _reason4, _position4, _reason5, _position5, _reason6, _position6, _reason7, _position7, _reason8, _position8, _reason9, _position9, _reason10, _position10;

	return regeneratorRuntime.wrap(function _encode$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					start = 0;
					index = options.index;
					padding = options.padding;
					it = (0, _jsItertools.iter)(string);

				case 4:
					if (!true) {
						_context.next = 115;
						break;
					}

					a = void 0, b = void 0, c = void 0, d = void 0;
					stop = 4;
					_context.prev = 7;

					a = (0, _jsItertools.next)(it);
					_context.next = 18;
					break;

				case 11:
					_context.prev = 11;
					_context.t0 = _context['catch'](7);

					if (!(_context.t0 instanceof _jsItertools.StopIteration)) {
						_context.next = 17;
						break;
					}

					return _context.abrupt('break', 115);

				case 17:
					throw _context.t0;

				case 18:
					_context.prev = 18;

					b = (0, _jsItertools.next)(it);
					_context.next = 31;
					break;

				case 22:
					_context.prev = 22;
					_context.t1 = _context['catch'](18);

					if (!(_context.t1 instanceof _jsItertools.StopIteration)) {
						_context.next = 30;
						break;
					}

					reason = 'lone character ' + a;
					position = { start: start, end: start + 1 };
					throw new _Base64EncodeError2.default(reason, string, position);

				case 30:
					throw _context.t1;

				case 31:
					_context.prev = 31;

					c = (0, _jsItertools.next)(it);
					_context.next = 46;
					break;

				case 35:
					_context.prev = 35;
					_context.t2 = _context['catch'](31);

					if (!(_context.t2 instanceof _jsItertools.StopIteration)) {
						_context.next = 45;
						break;
					}

					if (!padding) {
						_context.next = 42;
						break;
					}

					_reason = 'missing padding after ' + a + b;
					_position = { start: start, end: start + 2 };
					throw new _Base64EncodeError2.default(_reason, string, _position);

				case 42:
					stop = 2;
					_context.next = 46;
					break;

				case 45:
					throw _context.t2;

				case 46:
					if (!(stop === 4)) {
						_context.next = 62;
						break;
					}

					_context.prev = 47;

					d = (0, _jsItertools.next)(it);
					_context.next = 62;
					break;

				case 51:
					_context.prev = 51;
					_context.t3 = _context['catch'](47);

					if (!(_context.t3 instanceof _jsItertools.StopIteration)) {
						_context.next = 61;
						break;
					}

					if (!padding) {
						_context.next = 58;
						break;
					}

					_reason2 = 'missing padding after ' + a + b + c;
					_position2 = { start: start, end: start + 3 };
					throw new _Base64EncodeError2.default(_reason2, string, _position2);

				case 58:
					stop = 3;
					_context.next = 62;
					break;

				case 61:
					throw _context.t3;

				case 62:
					if (!padding) {
						_context.next = 73;
						break;
					}

					stop = [a, b, c, d].indexOf(padding);
					stop = stop === -1 ? 4 : stop;

					if (!(stop < 2)) {
						_context.next = 69;
						break;
					}

					_reason3 = 'padding at wrong position in ' + a + b + c + d;
					_position3 = { start: start + stop, end: start + stop + 1 };
					throw new _Base64EncodeError2.default(_reason3, string, _position3);

				case 69:
					if (!(stop === 2 && d !== padding)) {
						_context.next = 73;
						break;
					}

					_reason4 = 'incorrect padding end in ' + a + b + c + d;
					_position4 = { start: start + 3, end: start + 4 };
					throw new _Base64EncodeError2.default(_reason4, string, _position4);

				case 73:
					if (index.hasOwnProperty(a)) {
						_context.next = 77;
						break;
					}

					_reason5 = 'not in alphabet ' + a;
					_position5 = { start: start, end: start + 1 };
					throw new _Base64EncodeError2.default(_reason5, string, _position5);

				case 77:
					if (index.hasOwnProperty(b)) {
						_context.next = 81;
						break;
					}

					_reason6 = 'not in alphabet ' + b;
					_position6 = { start: start + 1, end: start + 2 };
					throw new _Base64EncodeError2.default(_reason6, string, _position6);

				case 81:
					if (!(stop > 2)) {
						_context.next = 99;
						break;
					}

					if (index.hasOwnProperty(c)) {
						_context.next = 86;
						break;
					}

					_reason7 = 'not in alphabet ' + c;
					_position7 = { start: start + 2, end: start + 3 };
					throw new _Base64EncodeError2.default(_reason7, string, _position7);

				case 86:
					if (!(stop > 3)) {
						_context.next = 93;
						break;
					}

					if (index.hasOwnProperty(d)) {
						_context.next = 91;
						break;
					}

					_reason8 = 'not in alphabet ' + d;
					_position8 = { start: start + 3, end: start + 4 };
					throw new _Base64EncodeError2.default(_reason8, string, _position8);

				case 91:
					_context.next = 97;
					break;

				case 93:
					if (!(index[c] & 3)) {
						_context.next = 97;
						break;
					}

					_reason9 = 'trailing bits in ' + a + b + c + ', last digit should be ' + options.alphabet[index[c] & 63 << 2];
					_position9 = { start: start + 2, end: start + 3 };
					throw new _Base64EncodeError2.default(_reason9, string, _position9);

				case 97:
					_context.next = 103;
					break;

				case 99:
					if (!(index[b] & 15)) {
						_context.next = 103;
						break;
					}

					_reason10 = 'trailing bits in ' + a + b + ', last digit should be ' + options.alphabet[index[b] & 3 << 4];
					_position10 = { start: start + 1, end: start + 2 };
					throw new _Base64EncodeError2.default(_reason10, string, _position10);

				case 103:
					_context.t4 = stop;
					_context.next = _context.t4 === 4 ? 106 : _context.t4 === 3 ? 108 : _context.t4 === 2 ? 110 : 112;
					break;

				case 106:
					return _context.delegateYield((0, _char4tobyte2.default)(index, a, b, c, d), 't5', 107);

				case 107:
					return _context.abrupt('break', 112);

				case 108:
					return _context.delegateYield((0, _char3tobyte2.default)(index, a, b, c), 't6', 109);

				case 109:
					return _context.abrupt('break', 112);

				case 110:
					return _context.delegateYield((0, _char2tobyte2.default)(index, a, b), 't7', 111);

				case 111:
					return _context.abrupt('break', 112);

				case 112:

					start += 4;

					_context.next = 4;
					break;

				case 115:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[7, 11], [18, 22], [31, 35], [47, 51]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZW5jb2RlLmpzIl0sIm5hbWVzIjpbIl9lbmNvZGUiLCJzdHJpbmciLCJvcHRpb25zIiwic3RhcnQiLCJpbmRleCIsInBhZGRpbmciLCJpdCIsImEiLCJiIiwiYyIsImQiLCJzdG9wIiwicmVhc29uIiwicG9zaXRpb24iLCJlbmQiLCJpbmRleE9mIiwiaGFzT3duUHJvcGVydHkiLCJhbHBoYWJldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBU3lCQSxPOztBQVR6Qjs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7ZUFFeUJBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsTUFBcEI7QUFBQSxLQUE2QkMsT0FBN0I7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVkMsVUFGVSxHQUVGLENBRkU7QUFJUkMsVUFKUSxHQUlBRixRQUFRRSxLQUpSO0FBS1JDLFlBTFEsR0FLRUgsUUFBUUcsT0FMVjtBQU9SQyxPQVBRLEdBT0gsdUJBQUtMLE1BQUwsQ0FQRzs7QUFBQTtBQUFBLFVBU04sSUFUTTtBQUFBO0FBQUE7QUFBQTs7QUFXVE0sTUFYUyxXQVdOQyxDQVhNLFdBV0hDLENBWEcsV0FXQUMsQ0FYQTtBQWFUQyxTQWJTLEdBYUYsQ0FiRTtBQUFBOztBQWdCWkosU0FBSSx1QkFBTUQsRUFBTixDQUFKO0FBaEJZO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBbUJQLGlEQW5CTztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBd0JaRSxTQUFJLHVCQUFNRixFQUFOLENBQUo7QUF4Qlk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsV0EyQlAsaURBM0JPO0FBQUE7QUFBQTtBQUFBOztBQTRCTE0sV0E1QkssdUJBNEJzQkwsQ0E1QnRCO0FBNkJMTSxhQTdCSyxHQTZCTSxFQUFFVixPQUFRQSxLQUFWLEVBQWtCVyxLQUFNWCxRQUFRLENBQWhDLEVBN0JOO0FBQUEsV0E4QkwsZ0NB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QlcsS0FBTVgsUUFBUSxDQUFwQyxFQW5IUDtBQUFBLFdBb0hKLGdDQUF1QlMsUUFBdkIsRUFBZ0NYLE1BQWhDLEVBQXlDWSxVQUF6QyxDQXBISTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQTJIUFQsTUFBTUksQ0FBTixJQUFXLEVBM0hKO0FBQUE7QUFBQTtBQUFBOztBQTRITEksY0E1SEsseUJBNEh3QkwsQ0E1SHhCLEdBNEg0QkMsQ0E1SDVCLCtCQTRIdUROLFFBQVFlLFFBQVIsQ0FBaUJiLE1BQU1JLENBQU4sSUFBVyxLQUFLLENBQWpDLENBNUh2RDtBQTZITEssZ0JBN0hLLEdBNkhNLEVBQUVWLE9BQVFBLFFBQVEsQ0FBbEIsRUFBc0JXLEtBQU1YLFFBQVEsQ0FBcEMsRUE3SE47QUFBQSxXQThITCxnQ0FBdUJTLFNBQXZCLEVBQWdDWCxNQUFoQyxFQUF5Q1ksV0FBekMsQ0E5SEs7O0FBQUE7QUFBQSxtQkFrSUpGLElBbElJO0FBQUEscUNBbUlQLENBbklPLHlCQXNJUCxDQXRJTyx5QkF5SVAsQ0F6SU87QUFBQTs7QUFBQTtBQUFBLG1DQW9JSiwyQkFBYVAsS0FBYixFQUFvQkcsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QkMsQ0FBN0IsQ0FwSUk7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1DQXVJSiwyQkFBYU4sS0FBYixFQUFvQkcsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixDQXZJSTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUNBMElKLDJCQUFhTCxLQUFiLEVBQW9CRyxDQUFwQixFQUF1QkMsQ0FBdkIsQ0ExSUk7O0FBQUE7QUFBQTs7QUFBQTs7QUE4SWJMLGNBQVMsQ0FBVDs7QUE5SWE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfZW5jb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciAsIG5leHQgLCBTdG9wSXRlcmF0aW9uIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuaW1wb3J0IERFRkFVTFRfT1BUSU9OUyBmcm9tICcuL0RFRkFVTFRfT1BUSU9OUycgO1xuXG5pbXBvcnQgY2hhcjR0b2J5dGUzIGZyb20gJy4vY2hhcjR0b2J5dGUzJyA7XG5pbXBvcnQgY2hhcjN0b2J5dGUyIGZyb20gJy4vY2hhcjN0b2J5dGUyJyA7XG5pbXBvcnQgY2hhcjJ0b2J5dGUxIGZyb20gJy4vY2hhcjJ0b2J5dGUxJyA7XG5cbmltcG9ydCBCYXNlNjRFbmNvZGVFcnJvciBmcm9tICcuL0Jhc2U2NEVuY29kZUVycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBfZW5jb2RlICggc3RyaW5nICwgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUyApIHtcblxuXHRsZXQgc3RhcnQgPSAwIDtcblxuXHRjb25zdCBpbmRleCA9IG9wdGlvbnMuaW5kZXggO1xuXHRjb25zdCBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nIDtcblxuXHRjb25zdCBpdCA9IGl0ZXIoc3RyaW5nKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0bGV0IGEsIGIsIGMsIGQgO1xuXG5cdFx0bGV0IHN0b3AgPSA0IDtcblxuXHRcdHRyeSB7XG5cdFx0XHRhID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZSApIHtcblx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSBicmVhayA7XG5cdFx0XHRlbHNlIHRocm93IGUgO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRiID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZSApIHtcblx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBsb25lIGNoYXJhY3RlciAke2F9YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0YyA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRpZiAoIGUgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkge1xuXHRcdFx0XHRpZiAoIHBhZGRpbmcgKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVhc29uID0gYG1pc3NpbmcgcGFkZGluZyBhZnRlciAke2F9JHtifWAgO1xuXHRcdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAyIH0gO1xuXHRcdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RvcCA9IDIgO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHR9XG5cblx0XHRpZiAoIHN0b3AgPT09IDQgKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkID0gbmV4dCggaXQgKSA7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSB7XG5cdFx0XHRcdFx0aWYgKCBwYWRkaW5nICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVhc29uID0gYG1pc3NpbmcgcGFkZGluZyBhZnRlciAke2F9JHtifSR7Y31gIDtcblx0XHRcdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAzIH0gO1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RvcCA9IDMgO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgdGhyb3cgZSA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBwYWRkaW5nICkge1xuXHRcdFx0c3RvcCA9IFthLCBiLCBjLCBkXS5pbmRleE9mKHBhZGRpbmcpIDtcblx0XHRcdHN0b3AgPSBzdG9wID09PSAtMSA/IDQgOiBzdG9wIDtcblx0XHRcdGlmICggc3RvcCA8IDIgKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBwYWRkaW5nIGF0IHdyb25nIHBvc2l0aW9uIGluICR7YX0ke2J9JHtjfSR7ZH1gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyBzdG9wICwgZW5kIDogc3RhcnQgKyBzdG9wICsgMSB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblx0XHRcdGlmICggc3RvcCA9PT0gMiAmJiBkICE9PSBwYWRkaW5nICkge1xuXHRcdFx0XHRjb25zdCByZWFzb24gPSBgaW5jb3JyZWN0IHBhZGRpbmcgZW5kIGluICR7YX0ke2J9JHtjfSR7ZH1gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyAzICwgZW5kIDogc3RhcnQgKyA0IH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIWluZGV4Lmhhc093blByb3BlcnR5KGEpICkge1xuXHRcdFx0Y29uc3QgcmVhc29uID0gYG5vdCBpbiBhbHBoYWJldCAke2F9YCA7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcbiBcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdGlmICggIWluZGV4Lmhhc093blByb3BlcnR5KGIpICkge1xuXHRcdFx0Y29uc3QgcmVhc29uID0gYG5vdCBpbiBhbHBoYWJldCAke2J9YCA7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIDEgLCBlbmQgOiBzdGFydCArIDIgfSA7XG4gXHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHR9XG5cblx0XHRpZiAoIHN0b3AgPiAyICkge1xuXG5cdFx0XHRpZiAoICFpbmRleC5oYXNPd25Qcm9wZXJ0eShjKSApIHtcblx0XHRcdFx0Y29uc3QgcmVhc29uID0gYG5vdCBpbiBhbHBoYWJldCAke2N9YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgMiAsIGVuZCA6IHN0YXJ0ICsgMyB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdG9wID4gMyApIHtcblxuXHRcdFx0XHRpZiAoICFpbmRleC5oYXNPd25Qcm9wZXJ0eShkKSApIHtcblx0XHRcdFx0XHRjb25zdCByZWFzb24gPSBgbm90IGluIGFscGhhYmV0ICR7ZH1gIDtcblx0XHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIDMgLCBlbmQgOiBzdGFydCArIDQgfSA7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAoIGluZGV4W2NdICYgMyApIHtcblx0XHRcdFx0XHRjb25zdCByZWFzb24gPSBgdHJhaWxpbmcgYml0cyBpbiAke2F9JHtifSR7Y30sIGxhc3QgZGlnaXQgc2hvdWxkIGJlICR7b3B0aW9ucy5hbHBoYWJldFtpbmRleFtjXSAmIDYzIDw8IDJdfWAgO1xuXHRcdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgMiAsIGVuZCA6IHN0YXJ0ICsgMyB9IDtcblx0XHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblx0XHRcdGlmICggaW5kZXhbYl0gJiAxNSApIHtcblx0XHRcdFx0Y29uc3QgcmVhc29uID0gYHRyYWlsaW5nIGJpdHMgaW4gJHthfSR7Yn0sIGxhc3QgZGlnaXQgc2hvdWxkIGJlICR7b3B0aW9ucy5hbHBoYWJldFtpbmRleFtiXSAmIDMgPDwgNF19YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgMSAsIGVuZCA6IHN0YXJ0ICsgMiB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRzd2l0Y2ggKCBzdG9wICkge1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR5aWVsZCogY2hhcjR0b2J5dGUzKGluZGV4LCBhLCBiLCBjLCBkKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR5aWVsZCogY2hhcjN0b2J5dGUyKGluZGV4LCBhLCBiLCBjKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR5aWVsZCogY2hhcjJ0b2J5dGUxKGluZGV4LCBhLCBiKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHN0YXJ0ICs9IDQgO1xuXG5cdH1cblxufVxuIl19