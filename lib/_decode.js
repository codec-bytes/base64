'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _decode;

var _jsItertools = require('@aureooms/js-itertools');

var _jsError = require('@aureooms/js-error');

var _byte3tochar = require('./byte3tochar4');

var _byte3tochar2 = _interopRequireDefault(_byte3tochar);

var _byte2tochar = require('./byte2tochar3');

var _byte2tochar2 = _interopRequireDefault(_byte2tochar);

var _byte1tochar = require('./byte1tochar2');

var _byte1tochar2 = _interopRequireDefault(_byte1tochar);

var _Base64DecodeError = require('./Base64DecodeError');

var _Base64DecodeError2 = _interopRequireDefault(_Base64DecodeError);

var _variants = require('./variants');

var _variants2 = _interopRequireDefault(_variants);

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_decode].map(regeneratorRuntime.mark);

function _decode(bytes) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DEFAULT_OPTIONS2.default;

	var start, _options, alphabet, padding, it, a, b, c, reason, position, _reason, _position, _reason2, _position2;

	return regeneratorRuntime.wrap(function _decode$(_context) {
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
					_options = options, alphabet = _options.alphabet, padding = _options.padding;
					it = (0, _jsItertools.iter)(bytes);

				case 9:
					if (!true) {
						_context.next = 72;
						break;
					}

					a = void 0, b = void 0, c = void 0;
					_context.prev = 11;

					a = (0, _jsItertools.next)(it);
					_context.next = 22;
					break;

				case 15:
					_context.prev = 15;
					_context.t0 = _context['catch'](11);

					if (!(_context.t0 instanceof _jsItertools.StopIteration)) {
						_context.next = 21;
						break;
					}

					return _context.abrupt('break', 72);

				case 21:
					throw _context.t0;

				case 22:
					if (!(a < 0x00 || a > 0xFF)) {
						_context.next = 26;
						break;
					}

					reason = 'byte out of range 0x00 <= ' + a + ' <= 0xFF';
					position = { start: start, end: start + 1 };
					throw new _Base64DecodeError2.default(reason, bytes, position);

				case 26:

					++start;

					_context.prev = 27;

					b = (0, _jsItertools.next)(it);
					_context.next = 44;
					break;

				case 31:
					_context.prev = 31;
					_context.t1 = _context['catch'](27);

					if (!(_context.t1 instanceof _jsItertools.StopIteration)) {
						_context.next = 43;
						break;
					}

					return _context.delegateYield((0, _byte1tochar2.default)(alphabet, a), 't2', 35);

				case 35:
					if (!padding) {
						_context.next = 40;
						break;
					}

					_context.next = 38;
					return padding;

				case 38:
					_context.next = 40;
					return padding;

				case 40:
					return _context.abrupt('break', 72);

				case 43:
					throw _context.t1;

				case 44:
					if (!(b < 0x00 || b > 0xFF)) {
						_context.next = 48;
						break;
					}

					_reason = 'byte out of range 0x00 <= ' + b + ' <= 0xFF';
					_position = { start: start, end: start + 1 };
					throw new _Base64DecodeError2.default(_reason, bytes, _position);

				case 48:

					++start;

					_context.prev = 49;

					c = (0, _jsItertools.next)(it);
					_context.next = 64;
					break;

				case 53:
					_context.prev = 53;
					_context.t3 = _context['catch'](49);

					if (!(_context.t3 instanceof _jsItertools.StopIteration)) {
						_context.next = 63;
						break;
					}

					return _context.delegateYield((0, _byte2tochar2.default)(alphabet, a, b), 't4', 57);

				case 57:
					if (!padding) {
						_context.next = 60;
						break;
					}

					_context.next = 60;
					return padding;

				case 60:
					return _context.abrupt('break', 72);

				case 63:
					throw _context.t3;

				case 64:
					if (!(c < 0x00 || c > 0xFF)) {
						_context.next = 68;
						break;
					}

					_reason2 = 'byte out of range 0x00 <= ' + c + ' <= 0xFF';
					_position2 = { start: start, end: start + 1 };
					throw new _Base64DecodeError2.default(_reason2, bytes, _position2);

				case 68:
					return _context.delegateYield((0, _byte3tochar2.default)(alphabet, a, b, c), 't5', 69);

				case 69:

					++start;

					_context.next = 9;
					break;

				case 72:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[11, 15], [27, 31], [49, 53]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZGVjb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvZGUiLCJieXRlcyIsIm9wdGlvbnMiLCJ2YXJpYW50IiwiaGFzT3duUHJvcGVydHkiLCJzdGFydCIsImFscGhhYmV0IiwicGFkZGluZyIsIml0IiwiYSIsImIiLCJjIiwicmVhc29uIiwicG9zaXRpb24iLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVl5QkEsTzs7QUFaekI7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7ZUFFeUJBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsS0FBcEI7QUFBQSxLQUE0QkMsT0FBNUI7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVUQSxRQUFRQyxPQUZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLFVBR1IsbUJBQVNDLGNBQVQsQ0FBd0JGLFFBQVFDLE9BQWhDLENBSFE7QUFBQTtBQUFBO0FBQUE7O0FBSVpELGVBQVUsbUJBQVNBLFFBQVFDLE9BQWpCLENBQVY7QUFKWTtBQUFBOztBQUFBO0FBQUEsV0FPTixvREFBMENELFFBQVFDLE9BQWxELENBUE07O0FBQUE7QUFXVkUsVUFYVSxHQVdGLENBWEU7QUFBQSxnQkFhaUJILE9BYmpCLEVBYU5JLFFBYk0sWUFhTkEsUUFiTSxFQWFLQyxPQWJMLFlBYUtBLE9BYkw7QUFlUkMsT0FmUSxHQWVILHVCQUFLUCxLQUFMLENBZkc7O0FBQUE7QUFBQSxVQWlCTixJQWpCTTtBQUFBO0FBQUE7QUFBQTs7QUFtQlRRLE1BbkJTLFdBbUJOQyxDQW5CTSxXQW1CSEMsQ0FuQkc7QUFBQTs7QUFzQlpGLFNBQUksdUJBQU1ELEVBQU4sQ0FBSjtBQXRCWTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxXQXlCUCxpREF6Qk87QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLFdBNkJSQyxJQUFJLElBQUosSUFBWUEsSUFBSSxJQTdCUjtBQUFBO0FBQUE7QUFBQTs7QUE4Qk5HLFdBOUJNLGtDQThCZ0NILENBOUJoQztBQStCTkksYUEvQk0sR0ErQkssRUFBRVIsT0FBUUEsS0FBVixFQUFrQlMsS0FBTVQsUUFBUSxDQUFoQyxFQS9CTDtBQUFBLFdBZ0NOLGdDQUF1Qk8sTUFBdkIsRUFBZ0NYLEtBQWhDLEVBQXdDWSxRQUF4QyxDQWhDTTs7QUFBQTs7QUFtQ2IsT0FBRVIsS0FBRjs7QUFuQ2E7O0FBc0NaSyxTQUFJLHVCQUFNRixFQUFOLENBQUo7QUF0Q1k7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsV0F5Q1AsaURBekNPO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1DQTBDSiwyQkFBYUYsUUFBYixFQUF1QkcsQ0FBdkIsQ0ExQ0k7O0FBQUE7QUFBQSxVQTJDUEYsT0EzQ087QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQTRDSkEsT0E1Q0k7O0FBQUE7QUFBQTtBQUFBLFlBNkNKQSxPQTdDSTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQW9EUkcsSUFBSSxJQUFKLElBQVlBLElBQUksSUFwRFI7QUFBQTtBQUFBO0FBQUE7O0FBcURORSxZQXJETSxrQ0FxRGdDRixDQXJEaEM7QUFzRE5HLGNBdERNLEdBc0RLLEVBQUVSLE9BQVFBLEtBQVYsRUFBa0JTLEtBQU1ULFFBQVEsQ0FBaEMsRUF0REw7QUFBQSxXQXVETixnQ0FBdUJPLE9BQXZCLEVBQWdDWCxLQUFoQyxFQUF3Q1ksU0FBeEMsQ0F2RE07O0FBQUE7O0FBMERiLE9BQUVSLEtBQUY7O0FBMURhOztBQTZEWk0sU0FBSSx1QkFBTUgsRUFBTixDQUFKO0FBN0RZO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBZ0VQLGlEQWhFTztBQUFBO0FBQUE7QUFBQTs7QUFBQSxtQ0FpRUosMkJBQWFGLFFBQWIsRUFBdUJHLENBQXZCLEVBQTBCQyxDQUExQixDQWpFSTs7QUFBQTtBQUFBLFVBa0VQSCxPQWxFTztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBbUVKQSxPQW5FSTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxXQTBFUkksSUFBSSxJQUFKLElBQVlBLElBQUksSUExRVI7QUFBQTtBQUFBO0FBQUE7O0FBMkVOQyxhQTNFTSxrQ0EyRWdDRCxDQTNFaEM7QUE0RU5FLGVBNUVNLEdBNEVLLEVBQUVSLE9BQVFBLEtBQVYsRUFBa0JTLEtBQU1ULFFBQVEsQ0FBaEMsRUE1RUw7QUFBQSxXQTZFTixnQ0FBdUJPLFFBQXZCLEVBQWdDWCxLQUFoQyxFQUF3Q1ksVUFBeEMsQ0E3RU07O0FBQUE7QUFBQSxtQ0FnRk4sMkJBQWFQLFFBQWIsRUFBdUJHLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QkMsQ0FBN0IsQ0FoRk07O0FBQUE7O0FBa0ZiLE9BQUVOLEtBQUY7O0FBbEZhO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX2RlY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgLCBuZXh0ICwgU3RvcEl0ZXJhdGlvbiB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcbmltcG9ydCB7IFZhbHVlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtZXJyb3InIDtcblxuaW1wb3J0IGJ5dGUzdG9jaGFyNCBmcm9tICcuL2J5dGUzdG9jaGFyNCcgO1xuaW1wb3J0IGJ5dGUydG9jaGFyMyBmcm9tICcuL2J5dGUydG9jaGFyMycgO1xuaW1wb3J0IGJ5dGUxdG9jaGFyMiBmcm9tICcuL2J5dGUxdG9jaGFyMicgO1xuXG5pbXBvcnQgQmFzZTY0RGVjb2RlRXJyb3IgZnJvbSAnLi9CYXNlNjREZWNvZGVFcnJvcicgO1xuXG5pbXBvcnQgdmFyaWFudHMgZnJvbSAnLi92YXJpYW50cycgO1xuaW1wb3J0IERFRkFVTFRfT1BUSU9OUyBmcm9tICcuL0RFRkFVTFRfT1BUSU9OUycgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogX2RlY29kZSAoIGJ5dGVzICwgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUyApIHtcblxuXHRpZiAoIG9wdGlvbnMudmFyaWFudCApIHtcblx0XHRpZiAoIHZhcmlhbnRzLmhhc093blByb3BlcnR5KG9wdGlvbnMudmFyaWFudCkgKSB7XG5cdFx0XHRvcHRpb25zID0gdmFyaWFudHNbb3B0aW9ucy52YXJpYW50XSA7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IFZhbHVlRXJyb3IoIGB1bmtub3duIEJhc2U2NCB2YXJpYW50ICR7b3B0aW9ucy52YXJpYW50fWAgKSA7XG5cdFx0fVxuXHR9XG5cblx0bGV0IHN0YXJ0ID0gMCA7XG5cblx0Y29uc3QgeyBhbHBoYWJldCAsIHBhZGRpbmcgfSA9IG9wdGlvbnMgO1xuXG5cdGNvbnN0IGl0ID0gaXRlcihieXRlcykgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGxldCBhLCBiLCBjO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGEgPSBuZXh0KCBpdCApIDtcblx0XHR9XG5cdFx0Y2F0Y2ggKCBlICkge1xuXHRcdFx0aWYgKCBlIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIGJyZWFrIDtcblx0XHRcdGVsc2UgdGhyb3cgZSA7XG5cdFx0fVxuXG5cdFx0aWYgKCBhIDwgMHgwMCB8fCBhID4gMHhGRiApIHtcblx0XHRcdGNvbnN0IHJlYXNvbiA9IGBieXRlIG91dCBvZiByYW5nZSAweDAwIDw9ICR7YX0gPD0gMHhGRmAgO1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDEgfSA7XG5cdFx0XHR0aHJvdyBuZXcgQmFzZTY0RGVjb2RlRXJyb3IoIHJlYXNvbiAsIGJ5dGVzICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0KytzdGFydDtcblxuXHRcdHRyeSB7XG5cdFx0XHRiID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZSApIHtcblx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSB7XG5cdFx0XHRcdHlpZWxkKiBieXRlMXRvY2hhcjIoYWxwaGFiZXQsIGEpO1xuXHRcdFx0XHRpZiAocGFkZGluZykge1xuXHRcdFx0XHRcdHlpZWxkIHBhZGRpbmc7XG5cdFx0XHRcdFx0eWllbGQgcGFkZGluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGVsc2UgdGhyb3cgZSA7XG5cdFx0fVxuXG5cdFx0aWYgKCBiIDwgMHgwMCB8fCBiID4gMHhGRiApIHtcblx0XHRcdGNvbnN0IHJlYXNvbiA9IGBieXRlIG91dCBvZiByYW5nZSAweDAwIDw9ICR7Yn0gPD0gMHhGRmAgO1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDEgfSA7XG5cdFx0XHR0aHJvdyBuZXcgQmFzZTY0RGVjb2RlRXJyb3IoIHJlYXNvbiAsIGJ5dGVzICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0KytzdGFydDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZSApIHtcblx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSB7XG5cdFx0XHRcdHlpZWxkKiBieXRlMnRvY2hhcjMoYWxwaGFiZXQsIGEsIGIpO1xuXHRcdFx0XHRpZiAocGFkZGluZykge1xuXHRcdFx0XHRcdHlpZWxkIHBhZGRpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHRocm93IGUgO1xuXHRcdH1cblxuXHRcdGlmICggYyA8IDB4MDAgfHwgYyA+IDB4RkYgKSB7XG5cdFx0XHRjb25zdCByZWFzb24gPSBgYnl0ZSBvdXQgb2YgcmFuZ2UgMHgwMCA8PSAke2N9IDw9IDB4RkZgIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuXHRcdFx0dGhyb3cgbmV3IEJhc2U2NERlY29kZUVycm9yKCByZWFzb24gLCBieXRlcyAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdHlpZWxkKiBieXRlM3RvY2hhcjQoYWxwaGFiZXQsIGEsIGIsIGMpO1xuXG5cdFx0KytzdGFydDtcblxuXHR9XG5cbn1cbiJdfQ==