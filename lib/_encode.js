'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _encode;

var _jsItertools = require('@aureooms/js-itertools');

var _jsMapping = require('@aureooms/js-mapping');

var _jsError = require('@aureooms/js-error');

var _char4tobyte = require('./char4tobyte3');

var _char4tobyte2 = _interopRequireDefault(_char4tobyte);

var _char3tobyte = require('./char3tobyte2');

var _char3tobyte2 = _interopRequireDefault(_char3tobyte);

var _char2tobyte = require('./char2tobyte1');

var _char2tobyte2 = _interopRequireDefault(_char2tobyte);

var _Base64EncodeError = require('./Base64EncodeError');

var _Base64EncodeError2 = _interopRequireDefault(_Base64EncodeError);

var _variants = require('./variants');

var _variants2 = _interopRequireDefault(_variants);

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

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

					if (!_variants2.default.hasOwnProperty(options.variant)) {
						_context.next = 5;
						break;
					}

					options = _variants2.default[options.variant];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZW5jb2RlLmpzIl0sIm5hbWVzIjpbIl9lbmNvZGUiLCJzdHJpbmciLCJvcHRpb25zIiwidmFyaWFudCIsImhhc093blByb3BlcnR5Iiwic3RhcnQiLCJpbmRleCIsImFscGhhYmV0IiwicGFkZGluZyIsIml0IiwiYSIsImIiLCJjIiwiZCIsInN0b3AiLCJyZWFzb24iLCJwb3NpdGlvbiIsImVuZCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWF5QkEsTzs7QUFiekI7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7ZUFFeUJBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsTUFBcEI7QUFBQSxLQUE2QkMsT0FBN0I7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVUQSxRQUFRQyxPQUZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLFVBR1IsbUJBQVNDLGNBQVQsQ0FBd0JGLFFBQVFDLE9BQWhDLENBSFE7QUFBQTtBQUFBO0FBQUE7O0FBSVpELGVBQVUsbUJBQVNBLFFBQVFDLE9BQWpCLENBQVY7QUFKWTtBQUFBOztBQUFBO0FBQUEsV0FPTixvREFBMENELFFBQVFDLE9BQWxELENBUE07O0FBQUE7QUFXVkUsVUFYVSxHQVdGLENBWEU7QUFhUkMsVUFiUSxHQWFBSixRQUFRSSxLQUFSLElBQWlCLHVCQUFRLHdCQUFTLDRCQUFXSixRQUFRSyxRQUFuQixDQUFULENBQVIsQ0FiakI7QUFjUkMsWUFkUSxHQWNFTixRQUFRTSxPQWRWO0FBZ0JSQyxPQWhCUSxHQWdCSCx1QkFBS1IsTUFBTCxDQWhCRzs7QUFBQTtBQUFBLFVBa0JOLElBbEJNO0FBQUE7QUFBQTtBQUFBOztBQW9CVFMsTUFwQlMsV0FvQk5DLENBcEJNLFdBb0JIQyxDQXBCRyxXQW9CQUMsQ0FwQkE7QUFzQlRDLFNBdEJTLEdBc0JGLENBdEJFO0FBQUE7O0FBeUJaSixTQUFJLHVCQUFNRCxFQUFOLENB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QUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLENBaEpJOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQ0FtSkosMkJBQWFOLEtBQWIsRUFBb0JJLENBQXBCLEVBQXVCQyxDQUF2QixDQW5KSTs7QUFBQTtBQUFBOztBQUFBOztBQXVKYk4sY0FBUyxDQUFUOztBQXZKYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il9lbmNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyICwgbmV4dCAsIFN0b3BJdGVyYXRpb24gLCBlbnVtZXJhdGUgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBvYmplY3QgLCByZWZsZWN0IH0gZnJvbSAnQGF1cmVvb21zL2pzLW1hcHBpbmcnIDtcbmltcG9ydCB7IFZhbHVlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtZXJyb3InIDtcblxuaW1wb3J0IGNoYXI0dG9ieXRlMyBmcm9tICcuL2NoYXI0dG9ieXRlMycgO1xuaW1wb3J0IGNoYXIzdG9ieXRlMiBmcm9tICcuL2NoYXIzdG9ieXRlMicgO1xuaW1wb3J0IGNoYXIydG9ieXRlMSBmcm9tICcuL2NoYXIydG9ieXRlMScgO1xuXG5pbXBvcnQgQmFzZTY0RW5jb2RlRXJyb3IgZnJvbSAnLi9CYXNlNjRFbmNvZGVFcnJvcicgO1xuXG5pbXBvcnQgdmFyaWFudHMgZnJvbSAnLi92YXJpYW50cycgO1xuaW1wb3J0IERFRkFVTFRfT1BUSU9OUyBmcm9tICcuL0RFRkFVTFRfT1BUSU9OUycgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogX2VuY29kZSAoIHN0cmluZyAsIG9wdGlvbnMgPSBERUZBVUxUX09QVElPTlMgKSB7XG5cblx0aWYgKCBvcHRpb25zLnZhcmlhbnQgKSB7XG5cdFx0aWYgKCB2YXJpYW50cy5oYXNPd25Qcm9wZXJ0eShvcHRpb25zLnZhcmlhbnQpICkge1xuXHRcdFx0b3B0aW9ucyA9IHZhcmlhbnRzW29wdGlvbnMudmFyaWFudF0gO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRocm93IG5ldyBWYWx1ZUVycm9yKCBgdW5rbm93biBCYXNlNjQgdmFyaWFudCAke29wdGlvbnMudmFyaWFudH1gICkgO1xuXHRcdH1cblx0fVxuXG5cdGxldCBzdGFydCA9IDAgO1xuXG5cdGNvbnN0IGluZGV4ID0gb3B0aW9ucy5pbmRleCB8fCBvYmplY3QoIHJlZmxlY3QoIGVudW1lcmF0ZSggb3B0aW9ucy5hbHBoYWJldCApICkgKSA7XG5cdGNvbnN0IHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgO1xuXG5cdGNvbnN0IGl0ID0gaXRlcihzdHJpbmcpIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgYSwgYiwgYywgZCA7XG5cblx0XHRsZXQgc3RvcCA9IDQgO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGEgPSBuZXh0KCBpdCApIDtcblx0XHR9XG5cdFx0Y2F0Y2ggKCBlICkge1xuXHRcdFx0aWYgKCBlIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIGJyZWFrIDtcblx0XHRcdGVsc2UgdGhyb3cgZSA7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGIgPSBuZXh0KCBpdCApIDtcblx0XHR9XG5cdFx0Y2F0Y2ggKCBlICkge1xuXHRcdFx0aWYgKCBlIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIHtcblx0XHRcdFx0Y29uc3QgcmVhc29uID0gYGxvbmUgY2hhcmFjdGVyICR7YX1gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDEgfSA7XG5cdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHRocm93IGUgO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZSApIHtcblx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSB7XG5cdFx0XHRcdGlmICggcGFkZGluZyApIHtcblx0XHRcdFx0XHRjb25zdCByZWFzb24gPSBgbWlzc2luZyBwYWRkaW5nIGFmdGVyICR7YX0ke2J9YCA7XG5cdFx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDIgfSA7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdG9wID0gMiA7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHRocm93IGUgO1xuXHRcdH1cblxuXHRcdGlmICggc3RvcCA9PT0gNCApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGQgPSBuZXh0KCBpdCApIDtcblx0XHRcdH1cblx0XHRcdGNhdGNoICggZSApIHtcblx0XHRcdFx0aWYgKCBlIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIHtcblx0XHRcdFx0XHRpZiAoIHBhZGRpbmcgKSB7XG5cdFx0XHRcdFx0XHRjb25zdCByZWFzb24gPSBgbWlzc2luZyBwYWRkaW5nIGFmdGVyICR7YX0ke2J9JHtjfWAgO1xuXHRcdFx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDMgfSA7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdG9wID0gMyA7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHBhZGRpbmcgKSB7XG5cdFx0XHRzdG9wID0gW2EsIGIsIGMsIGRdLmluZGV4T2YocGFkZGluZykgO1xuXHRcdFx0c3RvcCA9IHN0b3AgPT09IC0xID8gNCA6IHN0b3AgO1xuXHRcdFx0aWYgKCBzdG9wIDwgMiApIHtcblx0XHRcdFx0Y29uc3QgcmVhc29uID0gYHBhZGRpbmcgYXQgd3JvbmcgcG9zaXRpb24gaW4gJHthfSR7Yn0ke2N9JHtkfWAgO1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIHN0b3AgLCBlbmQgOiBzdGFydCArIHN0b3AgKyAxIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBzdG9wID09PSAyICYmIGQgIT09IHBhZGRpbmcgKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBpbmNvcnJlY3QgcGFkZGluZyBlbmQgaW4gJHthfSR7Yn0ke2N9JHtkfWAgO1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIDMgLCBlbmQgOiBzdGFydCArIDQgfSA7XG5cdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW5kZXguaGFzT3duUHJvcGVydHkoYSkgKSB7XG5cdFx0XHRjb25zdCByZWFzb24gPSBgbm90IGluIGFscGhhYmV0ICR7YX1gIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuIFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW5kZXguaGFzT3duUHJvcGVydHkoYikgKSB7XG5cdFx0XHRjb25zdCByZWFzb24gPSBgbm90IGluIGFscGhhYmV0ICR7Yn1gIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgMSAsIGVuZCA6IHN0YXJ0ICsgMiB9IDtcbiBcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdGlmICggc3RvcCA+IDIgKSB7XG5cblx0XHRcdGlmICggIWluZGV4Lmhhc093blByb3BlcnR5KGMpICkge1xuXHRcdFx0XHRjb25zdCByZWFzb24gPSBgbm90IGluIGFscGhhYmV0ICR7Y31gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyAyICwgZW5kIDogc3RhcnQgKyAzIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0b3AgPiAzICkge1xuXG5cdFx0XHRcdGlmICggIWluZGV4Lmhhc093blByb3BlcnR5KGQpICkge1xuXHRcdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBub3QgaW4gYWxwaGFiZXQgJHtkfWAgO1xuXHRcdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgMyAsIGVuZCA6IHN0YXJ0ICsgNCB9IDtcblx0XHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmICggaW5kZXhbY10gJiAzICkge1xuXHRcdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGB0cmFpbGluZyBiaXRzIGluICR7YX0ke2J9JHtjfSwgbGFzdCBkaWdpdCBzaG91bGQgYmUgJHtvcHRpb25zLmFscGhhYmV0W2luZGV4W2NdICYgNjMgPDwgMl19YCA7XG5cdFx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyAyICwgZW5kIDogc3RhcnQgKyAzIH0gO1xuXHRcdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKCBpbmRleFtiXSAmIDE1ICkge1xuXHRcdFx0XHRjb25zdCByZWFzb24gPSBgdHJhaWxpbmcgYml0cyBpbiAke2F9JHtifSwgbGFzdCBkaWdpdCBzaG91bGQgYmUgJHtvcHRpb25zLmFscGhhYmV0W2luZGV4W2JdICYgMyA8PCA0XX1gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyAxICwgZW5kIDogc3RhcnQgKyAyIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHN3aXRjaCAoIHN0b3AgKSB7XG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHlpZWxkKiBjaGFyNHRvYnl0ZTMoaW5kZXgsIGEsIGIsIGMsIGQpIDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHlpZWxkKiBjaGFyM3RvYnl0ZTIoaW5kZXgsIGEsIGIsIGMpIDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHlpZWxkKiBjaGFyMnRvYnl0ZTEoaW5kZXgsIGEsIGIpIDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0c3RhcnQgKz0gNCA7XG5cblx0fVxuXG59XG4iXX0=