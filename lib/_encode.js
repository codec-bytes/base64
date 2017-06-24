'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _encode;

var _jsItertools = require('@aureooms/js-itertools');

var _jsMapping = require('@aureooms/js-mapping');

var _jsError = require('@aureooms/js-error');

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
					if (!options.variant) {
						_context.next = 6;
						break;
					}

					if (!variants.hasOwnProperty(options.variant)) {
						_context.next = 5;
						break;
					}

					options = variants[options.variant];
					_context.next = 6;
					break;

				case 5:
					throw new _jsError.ValueError('unknown Base64 variant ' + options.variant);

				case 6:
					start = 0;
					index = options.index || (0, _jsMapping.object)((0, _jsMapping.reflect)((0, _jsItertools.enumerate)(options.alphabet)));
					padding = options.padding;
					it = (0, _jsItertools.iter)(string);

				case 10:
					if (!true) {
						_context.next = 121;
						break;
					}

					a = void 0, b = void 0, c = void 0, d = void 0;
					stop = 4;
					_context.prev = 13;

					a = (0, _jsItertools.next)(it);
					_context.next = 24;
					break;

				case 17:
					_context.prev = 17;
					_context.t0 = _context['catch'](13);

					if (!(_context.t0 instanceof _jsItertools.StopIteration)) {
						_context.next = 23;
						break;
					}

					return _context.abrupt('break', 121);

				case 23:
					throw _context.t0;

				case 24:
					_context.prev = 24;

					b = (0, _jsItertools.next)(it);
					_context.next = 37;
					break;

				case 28:
					_context.prev = 28;
					_context.t1 = _context['catch'](24);

					if (!(_context.t1 instanceof _jsItertools.StopIteration)) {
						_context.next = 36;
						break;
					}

					reason = 'lone character ' + a;
					position = { start: start, end: start + 1 };
					throw new _Base64EncodeError2.default(reason, string, position);

				case 36:
					throw _context.t1;

				case 37:
					_context.prev = 37;

					c = (0, _jsItertools.next)(it);
					_context.next = 52;
					break;

				case 41:
					_context.prev = 41;
					_context.t2 = _context['catch'](37);

					if (!(_context.t2 instanceof _jsItertools.StopIteration)) {
						_context.next = 51;
						break;
					}

					if (!padding) {
						_context.next = 48;
						break;
					}

					_reason = 'missing padding after ' + a + b;
					_position = { start: start, end: start + 2 };
					throw new _Base64EncodeError2.default(_reason, string, _position);

				case 48:
					stop = 2;
					_context.next = 52;
					break;

				case 51:
					throw _context.t2;

				case 52:
					if (!(stop === 4)) {
						_context.next = 68;
						break;
					}

					_context.prev = 53;

					d = (0, _jsItertools.next)(it);
					_context.next = 68;
					break;

				case 57:
					_context.prev = 57;
					_context.t3 = _context['catch'](53);

					if (!(_context.t3 instanceof _jsItertools.StopIteration)) {
						_context.next = 67;
						break;
					}

					if (!padding) {
						_context.next = 64;
						break;
					}

					_reason2 = 'missing padding after ' + a + b + c;
					_position2 = { start: start, end: start + 3 };
					throw new _Base64EncodeError2.default(_reason2, string, _position2);

				case 64:
					stop = 3;
					_context.next = 68;
					break;

				case 67:
					throw _context.t3;

				case 68:
					if (!padding) {
						_context.next = 79;
						break;
					}

					stop = [a, b, c, d].indexOf(padding);
					stop = stop === -1 ? 4 : stop;

					if (!(stop < 2)) {
						_context.next = 75;
						break;
					}

					_reason3 = 'padding at wrong position in ' + a + b + c + d;
					_position3 = { start: start + stop, end: start + stop + 1 };
					throw new _Base64EncodeError2.default(_reason3, string, _position3);

				case 75:
					if (!(stop === 2 && d !== padding)) {
						_context.next = 79;
						break;
					}

					_reason4 = 'incorrect padding end in ' + a + b + c + d;
					_position4 = { start: start + 3, end: start + 4 };
					throw new _Base64EncodeError2.default(_reason4, string, _position4);

				case 79:
					if (index.hasOwnProperty(a)) {
						_context.next = 83;
						break;
					}

					_reason5 = 'not in alphabet ' + a;
					_position5 = { start: start, end: start + 1 };
					throw new _Base64EncodeError2.default(_reason5, string, _position5);

				case 83:
					if (index.hasOwnProperty(b)) {
						_context.next = 87;
						break;
					}

					_reason6 = 'not in alphabet ' + b;
					_position6 = { start: start + 1, end: start + 2 };
					throw new _Base64EncodeError2.default(_reason6, string, _position6);

				case 87:
					if (!(stop > 2)) {
						_context.next = 105;
						break;
					}

					if (index.hasOwnProperty(c)) {
						_context.next = 92;
						break;
					}

					_reason7 = 'not in alphabet ' + c;
					_position7 = { start: start + 2, end: start + 3 };
					throw new _Base64EncodeError2.default(_reason7, string, _position7);

				case 92:
					if (!(stop > 3)) {
						_context.next = 99;
						break;
					}

					if (index.hasOwnProperty(d)) {
						_context.next = 97;
						break;
					}

					_reason8 = 'not in alphabet ' + d;
					_position8 = { start: start + 3, end: start + 4 };
					throw new _Base64EncodeError2.default(_reason8, string, _position8);

				case 97:
					_context.next = 103;
					break;

				case 99:
					if (!(index[c] & 3)) {
						_context.next = 103;
						break;
					}

					_reason9 = 'trailing bits in ' + a + b + c + ', last digit should be ' + options.alphabet[index[c] & 63 << 2];
					_position9 = { start: start + 2, end: start + 3 };
					throw new _Base64EncodeError2.default(_reason9, string, _position9);

				case 103:
					_context.next = 109;
					break;

				case 105:
					if (!(index[b] & 15)) {
						_context.next = 109;
						break;
					}

					_reason10 = 'trailing bits in ' + a + b + ', last digit should be ' + options.alphabet[index[b] & 3 << 4];
					_position10 = { start: start + 1, end: start + 2 };
					throw new _Base64EncodeError2.default(_reason10, string, _position10);

				case 109:
					_context.t4 = stop;
					_context.next = _context.t4 === 4 ? 112 : _context.t4 === 3 ? 114 : _context.t4 === 2 ? 116 : 118;
					break;

				case 112:
					return _context.delegateYield((0, _char4tobyte2.default)(index, a, b, c, d), 't5', 113);

				case 113:
					return _context.abrupt('break', 118);

				case 114:
					return _context.delegateYield((0, _char3tobyte2.default)(index, a, b, c), 't6', 115);

				case 115:
					return _context.abrupt('break', 118);

				case 116:
					return _context.delegateYield((0, _char2tobyte2.default)(index, a, b), 't7', 117);

				case 117:
					return _context.abrupt('break', 118);

				case 118:

					start += 4;

					_context.next = 10;
					break;

				case 121:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[13, 17], [24, 28], [37, 41], [53, 57]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZW5jb2RlLmpzIl0sIm5hbWVzIjpbIl9lbmNvZGUiLCJzdHJpbmciLCJvcHRpb25zIiwidmFyaWFudCIsInZhcmlhbnRzIiwiaGFzT3duUHJvcGVydHkiLCJzdGFydCIsImluZGV4IiwiYWxwaGFiZXQiLCJwYWRkaW5nIiwiaXQiLCJhIiwiYiIsImMiLCJkIiwic3RvcCIsInJlYXNvbiIsInBvc2l0aW9uIiwiZW5kIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXlCQSxPOztBQVp6Qjs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7ZUFFeUJBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsTUFBcEI7QUFBQSxLQUE2QkMsT0FBN0I7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVUQSxRQUFRQyxPQUZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLFVBR1JDLFNBQVNDLGNBQVQsQ0FBd0JILFFBQVFDLE9BQWhDLENBSFE7QUFBQTtBQUFBO0FBQUE7O0FBSVpELGVBQVVFLFNBQVNGLFFBQVFDLE9BQWpCLENBQVY7QUFKWTtBQUFBOztBQUFBO0FBQUEsV0FPTixvREFBMENELFFBQVFDLE9BQWxELENBUE07O0FBQUE7QUFXVkcsVUFYVSxHQVdGLENBWEU7QUFhUkMsVUFiUSxHQWFBTCxRQUFRSyxLQUFSLElBQWlCLHVCQUFRLHdCQUFTLDRCQUFXTCxRQUFRTSxRQUFuQixDQUFULENBQVIsQ0FiakI7QUFjUkMsWUFkUSxHQWNFUCxRQUFRTyxPQWRWO0FBZ0JSQyxPQWhCUSxHQWdCSCx1QkFBS1QsTUFBTCxDQWhCRzs7QUFBQTtBQUFBLFVBa0JOLElBbEJNO0FBQUE7QUFBQTtBQUFBOztBQW9CVFUsTUFwQlMsV0FvQk5DLENBcEJNLFdBb0JIQyxDQXBCRyxXQW9CQUMsQ0FwQkE7QUFzQlRDLFNBdEJTLEdBc0JGLENBdEJFO0FBQUE7O0FBeUJaSixTQUFJLHVCQUFNRCxFQUFO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RUFBb0JJLENBQXBCLEVBQXVCQyxDQUF2QixFQUEwQkMsQ0FBMUIsQ0FoSkk7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1DQW1KSiwyQkFBYU4sS0FBYixFQUFvQkksQ0FBcEIsRUFBdUJDLENBQXZCLENBbkpJOztBQUFBO0FBQUE7O0FBQUE7O0FBdUpiTixjQUFTLENBQVQ7O0FBdkphO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX2VuY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgLCBuZXh0ICwgU3RvcEl0ZXJhdGlvbiAsIGVudW1lcmF0ZSB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcbmltcG9ydCB7IG9iamVjdCAsIHJlZmxlY3QgfSBmcm9tICdAYXVyZW9vbXMvanMtbWFwcGluZycgO1xuaW1wb3J0IHsgVmFsdWVFcnJvciB9IGZyb20gJ0BhdXJlb29tcy9qcy1lcnJvcicgO1xuXG5pbXBvcnQgREVGQVVMVF9PUFRJT05TIGZyb20gJy4vREVGQVVMVF9PUFRJT05TJyA7XG5cbmltcG9ydCBjaGFyNHRvYnl0ZTMgZnJvbSAnLi9jaGFyNHRvYnl0ZTMnIDtcbmltcG9ydCBjaGFyM3RvYnl0ZTIgZnJvbSAnLi9jaGFyM3RvYnl0ZTInIDtcbmltcG9ydCBjaGFyMnRvYnl0ZTEgZnJvbSAnLi9jaGFyMnRvYnl0ZTEnIDtcblxuaW1wb3J0IEJhc2U2NEVuY29kZUVycm9yIGZyb20gJy4vQmFzZTY0RW5jb2RlRXJyb3InIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIF9lbmNvZGUgKCBzdHJpbmcgLCBvcHRpb25zID0gREVGQVVMVF9PUFRJT05TICkge1xuXG5cdGlmICggb3B0aW9ucy52YXJpYW50ICkge1xuXHRcdGlmICggdmFyaWFudHMuaGFzT3duUHJvcGVydHkob3B0aW9ucy52YXJpYW50KSApIHtcblx0XHRcdG9wdGlvbnMgPSB2YXJpYW50c1tvcHRpb25zLnZhcmlhbnRdIDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVmFsdWVFcnJvciggYHVua25vd24gQmFzZTY0IHZhcmlhbnQgJHtvcHRpb25zLnZhcmlhbnR9YCApIDtcblx0XHR9XG5cdH1cblxuXHRsZXQgc3RhcnQgPSAwIDtcblxuXHRjb25zdCBpbmRleCA9IG9wdGlvbnMuaW5kZXggfHwgb2JqZWN0KCByZWZsZWN0KCBlbnVtZXJhdGUoIG9wdGlvbnMuYWxwaGFiZXQgKSApICkgO1xuXHRjb25zdCBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nIDtcblxuXHRjb25zdCBpdCA9IGl0ZXIoc3RyaW5nKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0bGV0IGEsIGIsIGMsIGQgO1xuXG5cdFx0bGV0IHN0b3AgPSA0IDtcblxuXHRcdHRyeSB7XG5cdFx0XHRhID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZSApIHtcblx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSBicmVhayA7XG5cdFx0XHRlbHNlIHRocm93IGUgO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRiID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZSApIHtcblx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBsb25lIGNoYXJhY3RlciAke2F9YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0YyA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRpZiAoIGUgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkge1xuXHRcdFx0XHRpZiAoIHBhZGRpbmcgKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVhc29uID0gYG1pc3NpbmcgcGFkZGluZyBhZnRlciAke2F9JHtifWAgO1xuXHRcdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAyIH0gO1xuXHRcdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RvcCA9IDIgO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHR9XG5cblx0XHRpZiAoIHN0b3AgPT09IDQgKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkID0gbmV4dCggaXQgKSA7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSB7XG5cdFx0XHRcdFx0aWYgKCBwYWRkaW5nICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVhc29uID0gYG1pc3NpbmcgcGFkZGluZyBhZnRlciAke2F9JHtifSR7Y31gIDtcblx0XHRcdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAzIH0gO1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RvcCA9IDMgO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgdGhyb3cgZSA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBwYWRkaW5nICkge1xuXHRcdFx0c3RvcCA9IFthLCBiLCBjLCBkXS5pbmRleE9mKHBhZGRpbmcpIDtcblx0XHRcdHN0b3AgPSBzdG9wID09PSAtMSA/IDQgOiBzdG9wIDtcblx0XHRcdGlmICggc3RvcCA8IDIgKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBwYWRkaW5nIGF0IHdyb25nIHBvc2l0aW9uIGluICR7YX0ke2J9JHtjfSR7ZH1gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyBzdG9wICwgZW5kIDogc3RhcnQgKyBzdG9wICsgMSB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblx0XHRcdGlmICggc3RvcCA9PT0gMiAmJiBkICE9PSBwYWRkaW5nICkge1xuXHRcdFx0XHRjb25zdCByZWFzb24gPSBgaW5jb3JyZWN0IHBhZGRpbmcgZW5kIGluICR7YX0ke2J9JHtjfSR7ZH1gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyAzICwgZW5kIDogc3RhcnQgKyA0IH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIWluZGV4Lmhhc093blByb3BlcnR5KGEpICkge1xuXHRcdFx0Y29uc3QgcmVhc29uID0gYG5vdCBpbiBhbHBoYWJldCAke2F9YCA7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcbiBcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdGlmICggIWluZGV4Lmhhc093blByb3BlcnR5KGIpICkge1xuXHRcdFx0Y29uc3QgcmVhc29uID0gYG5vdCBpbiBhbHBoYWJldCAke2J9YCA7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIDEgLCBlbmQgOiBzdGFydCArIDIgfSA7XG4gXHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHR9XG5cblx0XHRpZiAoIHN0b3AgPiAyICkge1xuXG5cdFx0XHRpZiAoICFpbmRleC5oYXNPd25Qcm9wZXJ0eShjKSApIHtcblx0XHRcdFx0Y29uc3QgcmVhc29uID0gYG5vdCBpbiBhbHBoYWJldCAke2N9YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgMiAsIGVuZCA6IHN0YXJ0ICsgMyB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdG9wID4gMyApIHtcblxuXHRcdFx0XHRpZiAoICFpbmRleC5oYXNPd25Qcm9wZXJ0eShkKSApIHtcblx0XHRcdFx0XHRjb25zdCByZWFzb24gPSBgbm90IGluIGFscGhhYmV0ICR7ZH1gIDtcblx0XHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIDMgLCBlbmQgOiBzdGFydCArIDQgfSA7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAoIGluZGV4W2NdICYgMyApIHtcblx0XHRcdFx0XHRjb25zdCByZWFzb24gPSBgdHJhaWxpbmcgYml0cyBpbiAke2F9JHtifSR7Y30sIGxhc3QgZGlnaXQgc2hvdWxkIGJlICR7b3B0aW9ucy5hbHBoYWJldFtpbmRleFtjXSAmIDYzIDw8IDJdfWAgO1xuXHRcdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgMiAsIGVuZCA6IHN0YXJ0ICsgMyB9IDtcblx0XHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblx0XHRcdGlmICggaW5kZXhbYl0gJiAxNSApIHtcblx0XHRcdFx0Y29uc3QgcmVhc29uID0gYHRyYWlsaW5nIGJpdHMgaW4gJHthfSR7Yn0sIGxhc3QgZGlnaXQgc2hvdWxkIGJlICR7b3B0aW9ucy5hbHBoYWJldFtpbmRleFtiXSAmIDMgPDwgNF19YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgMSAsIGVuZCA6IHN0YXJ0ICsgMiB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRzd2l0Y2ggKCBzdG9wICkge1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR5aWVsZCogY2hhcjR0b2J5dGUzKGluZGV4LCBhLCBiLCBjLCBkKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR5aWVsZCogY2hhcjN0b2J5dGUyKGluZGV4LCBhLCBiLCBjKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR5aWVsZCogY2hhcjJ0b2J5dGUxKGluZGV4LCBhLCBiKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHN0YXJ0ICs9IDQgO1xuXG5cdH1cblxufVxuIl19