"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _decode;

var _jsItertools = require("@aureooms/js-itertools");

var _jsError = require("@aureooms/js-error");

var _byte3tochar = _interopRequireDefault(require("./byte3tochar4"));

var _byte2tochar = _interopRequireDefault(require("./byte2tochar3"));

var _byte1tochar = _interopRequireDefault(require("./byte1tochar2"));

var _Base64DecodeError = _interopRequireDefault(require("./Base64DecodeError"));

var _variants = _interopRequireDefault(require("./variants"));

var _DEFAULT_OPTIONS = _interopRequireDefault(require("./DEFAULT_OPTIONS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(_decode);

function _decode(bytes) {
  var options,
      start,
      _options,
      alphabet,
      padding,
      it,
      a,
      b,
      c,
      reason,
      position,
      _reason,
      _position,
      _reason2,
      _position2,
      _args = arguments;

  return regeneratorRuntime.wrap(function _decode$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : _DEFAULT_OPTIONS.default;

          if (!options.variant) {
            _context.next = 7;
            break;
          }

          if (!_variants.default.hasOwnProperty(options.variant)) {
            _context.next = 6;
            break;
          }

          options = _variants.default[options.variant];
          _context.next = 7;
          break;

        case 6:
          throw new _jsError.ValueError("unknown Base64 variant ".concat(options.variant));

        case 7:
          start = 0;
          _options = options, alphabet = _options.alphabet, padding = _options.padding;
          it = (0, _jsItertools.iter)(bytes);

        case 10:
          if (!true) {
            _context.next = 73;
            break;
          }

          a = void 0, b = void 0, c = void 0;
          _context.prev = 12;
          a = (0, _jsItertools.next)(it);
          _context.next = 23;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](12);

          if (!(_context.t0 instanceof _jsItertools.StopIteration)) {
            _context.next = 22;
            break;
          }

          return _context.abrupt("break", 73);

        case 22:
          throw _context.t0;

        case 23:
          if (!(a < 0x00 || a > 0xFF)) {
            _context.next = 27;
            break;
          }

          reason = "byte out of range 0x00 <= ".concat(a, " <= 0xFF");
          position = {
            start: start,
            end: start + 1
          };
          throw new _Base64DecodeError.default(reason, bytes, position);

        case 27:
          ++start;
          _context.prev = 28;
          b = (0, _jsItertools.next)(it);
          _context.next = 45;
          break;

        case 32:
          _context.prev = 32;
          _context.t1 = _context["catch"](28);

          if (!(_context.t1 instanceof _jsItertools.StopIteration)) {
            _context.next = 44;
            break;
          }

          return _context.delegateYield((0, _byte1tochar.default)(alphabet, a), "t2", 36);

        case 36:
          if (!padding) {
            _context.next = 41;
            break;
          }

          _context.next = 39;
          return padding;

        case 39:
          _context.next = 41;
          return padding;

        case 41:
          return _context.abrupt("break", 73);

        case 44:
          throw _context.t1;

        case 45:
          if (!(b < 0x00 || b > 0xFF)) {
            _context.next = 49;
            break;
          }

          _reason = "byte out of range 0x00 <= ".concat(b, " <= 0xFF");
          _position = {
            start: start,
            end: start + 1
          };
          throw new _Base64DecodeError.default(_reason, bytes, _position);

        case 49:
          ++start;
          _context.prev = 50;
          c = (0, _jsItertools.next)(it);
          _context.next = 65;
          break;

        case 54:
          _context.prev = 54;
          _context.t3 = _context["catch"](50);

          if (!(_context.t3 instanceof _jsItertools.StopIteration)) {
            _context.next = 64;
            break;
          }

          return _context.delegateYield((0, _byte2tochar.default)(alphabet, a, b), "t4", 58);

        case 58:
          if (!padding) {
            _context.next = 61;
            break;
          }

          _context.next = 61;
          return padding;

        case 61:
          return _context.abrupt("break", 73);

        case 64:
          throw _context.t3;

        case 65:
          if (!(c < 0x00 || c > 0xFF)) {
            _context.next = 69;
            break;
          }

          _reason2 = "byte out of range 0x00 <= ".concat(c, " <= 0xFF");
          _position2 = {
            start: start,
            end: start + 1
          };
          throw new _Base64DecodeError.default(_reason2, bytes, _position2);

        case 69:
          return _context.delegateYield((0, _byte3tochar.default)(alphabet, a, b, c), "t5", 70);

        case 70:
          ++start;
          _context.next = 10;
          break;

        case 73:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[12, 16], [28, 32], [50, 54]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZGVjb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvZGUiLCJieXRlcyIsIm9wdGlvbnMiLCJERUZBVUxUX09QVElPTlMiLCJ2YXJpYW50IiwidmFyaWFudHMiLCJoYXNPd25Qcm9wZXJ0eSIsIlZhbHVlRXJyb3IiLCJzdGFydCIsImFscGhhYmV0IiwicGFkZGluZyIsIml0IiwiYSIsImIiLCJjIiwiU3RvcEl0ZXJhdGlvbiIsInJlYXNvbiIsInBvc2l0aW9uIiwiZW5kIiwiQmFzZTY0RGVjb2RlRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7O3dCQUV5QkEsTzs7QUFBVixTQUFVQSxPQUFWLENBQW9CQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCQyxVQUFBQSxPQUE1QiwyREFBc0NDLHdCQUF0Qzs7QUFBQSxlQUVURCxPQUFPLENBQUNFLE9BRkM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZUFHUkMsa0JBQVNDLGNBQVQsQ0FBd0JKLE9BQU8sQ0FBQ0UsT0FBaEMsQ0FIUTtBQUFBO0FBQUE7QUFBQTs7QUFJWkYsVUFBQUEsT0FBTyxHQUFHRyxrQkFBU0gsT0FBTyxDQUFDRSxPQUFqQixDQUFWO0FBSlk7QUFBQTs7QUFBQTtBQUFBLGdCQU9OLElBQUlHLG1CQUFKLGtDQUEwQ0wsT0FBTyxDQUFDRSxPQUFsRCxFQVBNOztBQUFBO0FBV1ZJLFVBQUFBLEtBWFUsR0FXRixDQVhFO0FBQUEscUJBYWlCTixPQWJqQixFQWFOTyxRQWJNLFlBYU5BLFFBYk0sRUFhS0MsT0FiTCxZQWFLQSxPQWJMO0FBZVJDLFVBQUFBLEVBZlEsR0FlSCx1QkFBS1YsS0FBTCxDQWZHOztBQUFBO0FBQUEsZUFpQk4sSUFqQk07QUFB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ZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuaW1wb3J0IHsgVmFsdWVFcnJvciB9IGZyb20gJ0BhdXJlb29tcy9qcy1lcnJvcicgO1xuXG5pbXBvcnQgYnl0ZTN0b2NoYXI0IGZyb20gJy4vYnl0ZTN0b2NoYXI0JyA7XG5pbXBvcnQgYnl0ZTJ0b2NoYXIzIGZyb20gJy4vYnl0ZTJ0b2NoYXIzJyA7XG5pbXBvcnQgYnl0ZTF0b2NoYXIyIGZyb20gJy4vYnl0ZTF0b2NoYXIyJyA7XG5cbmltcG9ydCBCYXNlNjREZWNvZGVFcnJvciBmcm9tICcuL0Jhc2U2NERlY29kZUVycm9yJyA7XG5cbmltcG9ydCB2YXJpYW50cyBmcm9tICcuL3ZhcmlhbnRzJyA7XG5pbXBvcnQgREVGQVVMVF9PUFRJT05TIGZyb20gJy4vREVGQVVMVF9PUFRJT05TJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBfZGVjb2RlICggYnl0ZXMgLCBvcHRpb25zID0gREVGQVVMVF9PUFRJT05TICkge1xuXG5cdGlmICggb3B0aW9ucy52YXJpYW50ICkge1xuXHRcdGlmICggdmFyaWFudHMuaGFzT3duUHJvcGVydHkob3B0aW9ucy52YXJpYW50KSApIHtcblx0XHRcdG9wdGlvbnMgPSB2YXJpYW50c1tvcHRpb25zLnZhcmlhbnRdIDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVmFsdWVFcnJvciggYHVua25vd24gQmFzZTY0IHZhcmlhbnQgJHtvcHRpb25zLnZhcmlhbnR9YCApIDtcblx0XHR9XG5cdH1cblxuXHRsZXQgc3RhcnQgPSAwIDtcblxuXHRjb25zdCB7IGFscGhhYmV0ICwgcGFkZGluZyB9ID0gb3B0aW9ucyA7XG5cblx0Y29uc3QgaXQgPSBpdGVyKGJ5dGVzKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0bGV0IGEsIGIsIGM7XG5cblx0XHR0cnkge1xuXHRcdFx0YSA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRpZiAoIGUgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkgYnJlYWsgO1xuXHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHR9XG5cblx0XHRpZiAoIGEgPCAweDAwIHx8IGEgPiAweEZGICkge1xuXHRcdFx0Y29uc3QgcmVhc29uID0gYGJ5dGUgb3V0IG9mIHJhbmdlIDB4MDAgPD0gJHthfSA8PSAweEZGYCA7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcblx0XHRcdHRocm93IG5ldyBCYXNlNjREZWNvZGVFcnJvciggcmVhc29uICwgYnl0ZXMgLCBwb3NpdGlvbiApIDtcblx0XHR9XG5cblx0XHQrK3N0YXJ0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGIgPSBuZXh0KCBpdCApIDtcblx0XHR9XG5cdFx0Y2F0Y2ggKCBlICkge1xuXHRcdFx0aWYgKCBlIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIHtcblx0XHRcdFx0eWllbGQqIGJ5dGUxdG9jaGFyMihhbHBoYWJldCwgYSk7XG5cdFx0XHRcdGlmIChwYWRkaW5nKSB7XG5cdFx0XHRcdFx0eWllbGQgcGFkZGluZztcblx0XHRcdFx0XHR5aWVsZCBwYWRkaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHR9XG5cblx0XHRpZiAoIGIgPCAweDAwIHx8IGIgPiAweEZGICkge1xuXHRcdFx0Y29uc3QgcmVhc29uID0gYGJ5dGUgb3V0IG9mIHJhbmdlIDB4MDAgPD0gJHtifSA8PSAweEZGYCA7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcblx0XHRcdHRocm93IG5ldyBCYXNlNjREZWNvZGVFcnJvciggcmVhc29uICwgYnl0ZXMgLCBwb3NpdGlvbiApIDtcblx0XHR9XG5cblx0XHQrK3N0YXJ0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGMgPSBuZXh0KCBpdCApIDtcblx0XHR9XG5cdFx0Y2F0Y2ggKCBlICkge1xuXHRcdFx0aWYgKCBlIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIHtcblx0XHRcdFx0eWllbGQqIGJ5dGUydG9jaGFyMyhhbHBoYWJldCwgYSwgYik7XG5cdFx0XHRcdGlmIChwYWRkaW5nKSB7XG5cdFx0XHRcdFx0eWllbGQgcGFkZGluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGVsc2UgdGhyb3cgZSA7XG5cdFx0fVxuXG5cdFx0aWYgKCBjIDwgMHgwMCB8fCBjID4gMHhGRiApIHtcblx0XHRcdGNvbnN0IHJlYXNvbiA9IGBieXRlIG91dCBvZiByYW5nZSAweDAwIDw9ICR7Y30gPD0gMHhGRmAgO1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDEgfSA7XG5cdFx0XHR0aHJvdyBuZXcgQmFzZTY0RGVjb2RlRXJyb3IoIHJlYXNvbiAsIGJ5dGVzICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0eWllbGQqIGJ5dGUzdG9jaGFyNChhbHBoYWJldCwgYSwgYiwgYyk7XG5cblx0XHQrK3N0YXJ0O1xuXG5cdH1cblxufVxuIl19