"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _encode;

var _jsItertools = require("@aureooms/js-itertools");

var _jsMapping = require("@aureooms/js-mapping");

var _jsError = require("@aureooms/js-error");

var _char4tobyte = _interopRequireDefault(require("./char4tobyte3"));

var _char3tobyte = _interopRequireDefault(require("./char3tobyte2"));

var _char2tobyte = _interopRequireDefault(require("./char2tobyte1"));

var _Base64EncodeError = _interopRequireDefault(require("./Base64EncodeError"));

var _variants = _interopRequireDefault(require("./variants"));

var _DEFAULT_OPTIONS = _interopRequireDefault(require("./DEFAULT_OPTIONS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(_encode);

function _encode(string) {
  var options,
      start,
      index,
      padding,
      it,
      a,
      b,
      c,
      d,
      stop,
      reason,
      position,
      _reason,
      _position,
      _reason2,
      _position2,
      _reason3,
      _position3,
      _reason4,
      _position4,
      _reason5,
      _position5,
      _reason6,
      _position6,
      _reason7,
      _position7,
      _reason8,
      _position8,
      _reason9,
      _position9,
      _reason10,
      _position10,
      _args = arguments;

  return regeneratorRuntime.wrap(function _encode$(_context) {
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
          index = options.index || (0, _jsMapping.object)((0, _jsMapping.reflect)((0, _jsItertools.enumerate)(options.alphabet)));
          padding = options.padding;
          it = (0, _jsItertools.iter)(string);

        case 11:
          if (!true) {
            _context.next = 122;
            break;
          }

          a = void 0, b = void 0, c = void 0, d = void 0;
          stop = 4;
          _context.prev = 14;
          a = (0, _jsItertools.next)(it);
          _context.next = 25;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](14);

          if (!(_context.t0 instanceof _jsItertools.StopIteration)) {
            _context.next = 24;
            break;
          }

          return _context.abrupt("break", 122);

        case 24:
          throw _context.t0;

        case 25:
          _context.prev = 25;
          b = (0, _jsItertools.next)(it);
          _context.next = 38;
          break;

        case 29:
          _context.prev = 29;
          _context.t1 = _context["catch"](25);

          if (!(_context.t1 instanceof _jsItertools.StopIteration)) {
            _context.next = 37;
            break;
          }

          reason = "lone character ".concat(a);
          position = {
            start: start,
            end: start + 1
          };
          throw new _Base64EncodeError.default(reason, string, position);

        case 37:
          throw _context.t1;

        case 38:
          _context.prev = 38;
          c = (0, _jsItertools.next)(it);
          _context.next = 53;
          break;

        case 42:
          _context.prev = 42;
          _context.t2 = _context["catch"](38);

          if (!(_context.t2 instanceof _jsItertools.StopIteration)) {
            _context.next = 52;
            break;
          }

          if (!padding) {
            _context.next = 49;
            break;
          }

          _reason = "missing padding after ".concat(a).concat(b);
          _position = {
            start: start,
            end: start + 2
          };
          throw new _Base64EncodeError.default(_reason, string, _position);

        case 49:
          stop = 2;
          _context.next = 53;
          break;

        case 52:
          throw _context.t2;

        case 53:
          if (!(stop === 4)) {
            _context.next = 69;
            break;
          }

          _context.prev = 54;
          d = (0, _jsItertools.next)(it);
          _context.next = 69;
          break;

        case 58:
          _context.prev = 58;
          _context.t3 = _context["catch"](54);

          if (!(_context.t3 instanceof _jsItertools.StopIteration)) {
            _context.next = 68;
            break;
          }

          if (!padding) {
            _context.next = 65;
            break;
          }

          _reason2 = "missing padding after ".concat(a).concat(b).concat(c);
          _position2 = {
            start: start,
            end: start + 3
          };
          throw new _Base64EncodeError.default(_reason2, string, _position2);

        case 65:
          stop = 3;
          _context.next = 69;
          break;

        case 68:
          throw _context.t3;

        case 69:
          if (!padding) {
            _context.next = 80;
            break;
          }

          stop = [a, b, c, d].indexOf(padding);
          stop = stop === -1 ? 4 : stop;

          if (!(stop < 2)) {
            _context.next = 76;
            break;
          }

          _reason3 = "padding at wrong position in ".concat(a).concat(b).concat(c).concat(d);
          _position3 = {
            start: start + stop,
            end: start + stop + 1
          };
          throw new _Base64EncodeError.default(_reason3, string, _position3);

        case 76:
          if (!(stop === 2 && d !== padding)) {
            _context.next = 80;
            break;
          }

          _reason4 = "incorrect padding end in ".concat(a).concat(b).concat(c).concat(d);
          _position4 = {
            start: start + 3,
            end: start + 4
          };
          throw new _Base64EncodeError.default(_reason4, string, _position4);

        case 80:
          if (index.hasOwnProperty(a)) {
            _context.next = 84;
            break;
          }

          _reason5 = "not in alphabet ".concat(a);
          _position5 = {
            start: start,
            end: start + 1
          };
          throw new _Base64EncodeError.default(_reason5, string, _position5);

        case 84:
          if (index.hasOwnProperty(b)) {
            _context.next = 88;
            break;
          }

          _reason6 = "not in alphabet ".concat(b);
          _position6 = {
            start: start + 1,
            end: start + 2
          };
          throw new _Base64EncodeError.default(_reason6, string, _position6);

        case 88:
          if (!(stop > 2)) {
            _context.next = 106;
            break;
          }

          if (index.hasOwnProperty(c)) {
            _context.next = 93;
            break;
          }

          _reason7 = "not in alphabet ".concat(c);
          _position7 = {
            start: start + 2,
            end: start + 3
          };
          throw new _Base64EncodeError.default(_reason7, string, _position7);

        case 93:
          if (!(stop > 3)) {
            _context.next = 100;
            break;
          }

          if (index.hasOwnProperty(d)) {
            _context.next = 98;
            break;
          }

          _reason8 = "not in alphabet ".concat(d);
          _position8 = {
            start: start + 3,
            end: start + 4
          };
          throw new _Base64EncodeError.default(_reason8, string, _position8);

        case 98:
          _context.next = 104;
          break;

        case 100:
          if (!(index[c] & 3)) {
            _context.next = 104;
            break;
          }

          _reason9 = "trailing bits in ".concat(a).concat(b).concat(c, ", last digit should be ").concat(options.alphabet[index[c] & 63 << 2]);
          _position9 = {
            start: start + 2,
            end: start + 3
          };
          throw new _Base64EncodeError.default(_reason9, string, _position9);

        case 104:
          _context.next = 110;
          break;

        case 106:
          if (!(index[b] & 15)) {
            _context.next = 110;
            break;
          }

          _reason10 = "trailing bits in ".concat(a).concat(b, ", last digit should be ").concat(options.alphabet[index[b] & 3 << 4]);
          _position10 = {
            start: start + 1,
            end: start + 2
          };
          throw new _Base64EncodeError.default(_reason10, string, _position10);

        case 110:
          _context.t4 = stop;
          _context.next = _context.t4 === 4 ? 113 : _context.t4 === 3 ? 115 : _context.t4 === 2 ? 117 : 119;
          break;

        case 113:
          return _context.delegateYield((0, _char4tobyte.default)(index, a, b, c, d), "t5", 114);

        case 114:
          return _context.abrupt("break", 119);

        case 115:
          return _context.delegateYield((0, _char3tobyte.default)(index, a, b, c), "t6", 116);

        case 116:
          return _context.abrupt("break", 119);

        case 117:
          return _context.delegateYield((0, _char2tobyte.default)(index, a, b), "t7", 118);

        case 118:
          return _context.abrupt("break", 119);

        case 119:
          start += 4;
          _context.next = 11;
          break;

        case 122:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[14, 18], [25, 29], [38, 42], [54, 58]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZW5jb2RlLmpzIl0sIm5hbWVzIjpbIl9lbmNvZGUiLCJzdHJpbmciLCJvcHRpb25zIiwiREVGQVVMVF9PUFRJT05TIiwidmFyaWFudCIsInZhcmlhbnRzIiwiaGFzT3duUHJvcGVydHkiLCJWYWx1ZUVycm9yIiwic3RhcnQiLCJpbmRleCIsImFscGhhYmV0IiwicGFkZGluZyIsIml0IiwiYSIsImIiLCJjIiwiZCIsInN0b3AiLCJTdG9wSXRlcmF0aW9uIiwicmVhc29uIiwicG9zaXRpb24iLCJlbmQiLCJCYXNlNjRFbmNvZGVFcnJvciIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7O3dCQUV5QkEsTzs7QUFBVixTQUFVQSxPQUFWLENBQW9CQyxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QkMsVUFBQUEsT0FBN0IsMkRBQXVDQyx3QkFBdkM7O0FBQUEsZUFFVEQsT0FBTyxDQUFDRSxPQUZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGVBR1JDLGtCQUFTQyxjQUFULENBQXdCSixPQUFPLENBQUNFLE9BQWhDLENBSFE7QUFBQTtBQUFBO0FBQUE7O0FBSVpGLFVBQUFBLE9BQU8sR0FBR0csa0JBQVNILE9BQU8sQ0FBQ0UsT0FBakIsQ0FBVjtBQUpZO0FBQUE7O0FBQUE7QUFBQSxnQkFPTixJQUFJRyxtQkFBSixrQ0FBMENMLE9BQU8sQ0FBQ0UsT0FBbEQsRUFQTTs7QUFBQTtBQVdWSSxVQUFBQSxLQVhVLEdBV0YsQ0FYRTtBQWFSQyxV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LElBQUljLDBCQUFKLENBQXVCSCxTQUF2QixFQUFnQ2xCLE1BQWhDLEVBQXlDbUIsV0FBekMsQ0F2SUs7O0FBQUE7QUFBQSx3QkEySUpILElBM0lJO0FBQUEsMENBNElQLENBNUlPLHlCQStJUCxDQS9JTyx5QkFrSlAsQ0FsSk87QUFBQTs7QUFBQTtBQTZJWCx3Q0FBTywwQkFBYVIsS0FBYixFQUFvQkksQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QkMsQ0FBN0IsQ0FBUDs7QUE3SVc7QUFBQTs7QUFBQTtBQWdKWCx3Q0FBTywwQkFBYVAsS0FBYixFQUFvQkksQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixDQUFQOztBQWhKVztBQUFBOztBQUFBO0FBbUpYLHdDQUFPLDBCQUFhTixLQUFiLEVBQW9CSSxDQUFwQixFQUF1QkMsQ0FBdkIsQ0FBUDs7QUFuSlc7QUFBQTs7QUFBQTtBQXVKYk4sVUFBQUEsS0FBSyxJQUFJLENBQVQ7QUF2SmE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgLCBuZXh0ICwgU3RvcEl0ZXJhdGlvbiAsIGVudW1lcmF0ZSB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcbmltcG9ydCB7IG9iamVjdCAsIHJlZmxlY3QgfSBmcm9tICdAYXVyZW9vbXMvanMtbWFwcGluZycgO1xuaW1wb3J0IHsgVmFsdWVFcnJvciB9IGZyb20gJ0BhdXJlb29tcy9qcy1lcnJvcicgO1xuXG5pbXBvcnQgY2hhcjR0b2J5dGUzIGZyb20gJy4vY2hhcjR0b2J5dGUzJyA7XG5pbXBvcnQgY2hhcjN0b2J5dGUyIGZyb20gJy4vY2hhcjN0b2J5dGUyJyA7XG5pbXBvcnQgY2hhcjJ0b2J5dGUxIGZyb20gJy4vY2hhcjJ0b2J5dGUxJyA7XG5cbmltcG9ydCBCYXNlNjRFbmNvZGVFcnJvciBmcm9tICcuL0Jhc2U2NEVuY29kZUVycm9yJyA7XG5cbmltcG9ydCB2YXJpYW50cyBmcm9tICcuL3ZhcmlhbnRzJyA7XG5pbXBvcnQgREVGQVVMVF9PUFRJT05TIGZyb20gJy4vREVGQVVMVF9PUFRJT05TJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBfZW5jb2RlICggc3RyaW5nICwgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUyApIHtcblxuXHRpZiAoIG9wdGlvbnMudmFyaWFudCApIHtcblx0XHRpZiAoIHZhcmlhbnRzLmhhc093blByb3BlcnR5KG9wdGlvbnMudmFyaWFudCkgKSB7XG5cdFx0XHRvcHRpb25zID0gdmFyaWFudHNbb3B0aW9ucy52YXJpYW50XSA7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IFZhbHVlRXJyb3IoIGB1bmtub3duIEJhc2U2NCB2YXJpYW50ICR7b3B0aW9ucy52YXJpYW50fWAgKSA7XG5cdFx0fVxuXHR9XG5cblx0bGV0IHN0YXJ0ID0gMCA7XG5cblx0Y29uc3QgaW5kZXggPSBvcHRpb25zLmluZGV4IHx8IG9iamVjdCggcmVmbGVjdCggZW51bWVyYXRlKCBvcHRpb25zLmFscGhhYmV0ICkgKSApIDtcblx0Y29uc3QgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyA7XG5cblx0Y29uc3QgaXQgPSBpdGVyKHN0cmluZykgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGxldCBhLCBiLCBjLCBkIDtcblxuXHRcdGxldCBzdG9wID0gNCA7XG5cblx0XHR0cnkge1xuXHRcdFx0YSA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRpZiAoIGUgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkgYnJlYWsgO1xuXHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0YiA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRpZiAoIGUgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkge1xuXHRcdFx0XHRjb25zdCByZWFzb24gPSBgbG9uZSBjaGFyYWN0ZXIgJHthfWAgO1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblx0XHRcdGVsc2UgdGhyb3cgZSA7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGMgPSBuZXh0KCBpdCApIDtcblx0XHR9XG5cdFx0Y2F0Y2ggKCBlICkge1xuXHRcdFx0aWYgKCBlIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIHtcblx0XHRcdFx0aWYgKCBwYWRkaW5nICkge1xuXHRcdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBtaXNzaW5nIHBhZGRpbmcgYWZ0ZXIgJHthfSR7Yn1gIDtcblx0XHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMiB9IDtcblx0XHRcdFx0XHR0aHJvdyBuZXcgQmFzZTY0RW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b3AgPSAyIDtcblx0XHRcdH1cblx0XHRcdGVsc2UgdGhyb3cgZSA7XG5cdFx0fVxuXG5cdFx0aWYgKCBzdG9wID09PSA0ICkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZCA9IG5leHQoIGl0ICkgO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKCBlICkge1xuXHRcdFx0XHRpZiAoIGUgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkge1xuXHRcdFx0XHRcdGlmICggcGFkZGluZyApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBtaXNzaW5nIHBhZGRpbmcgYWZ0ZXIgJHthfSR7Yn0ke2N9YCA7XG5cdFx0XHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMyB9IDtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0b3AgPSAzIDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHRocm93IGUgO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggcGFkZGluZyApIHtcblx0XHRcdHN0b3AgPSBbYSwgYiwgYywgZF0uaW5kZXhPZihwYWRkaW5nKSA7XG5cdFx0XHRzdG9wID0gc3RvcCA9PT0gLTEgPyA0IDogc3RvcCA7XG5cdFx0XHRpZiAoIHN0b3AgPCAyICkge1xuXHRcdFx0XHRjb25zdCByZWFzb24gPSBgcGFkZGluZyBhdCB3cm9uZyBwb3NpdGlvbiBpbiAke2F9JHtifSR7Y30ke2R9YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgc3RvcCAsIGVuZCA6IHN0YXJ0ICsgc3RvcCArIDEgfSA7XG5cdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHN0b3AgPT09IDIgJiYgZCAhPT0gcGFkZGluZyApIHtcblx0XHRcdFx0Y29uc3QgcmVhc29uID0gYGluY29ycmVjdCBwYWRkaW5nIGVuZCBpbiAke2F9JHtifSR7Y30ke2R9YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgMyAsIGVuZCA6IHN0YXJ0ICsgNCB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFpbmRleC5oYXNPd25Qcm9wZXJ0eShhKSApIHtcblx0XHRcdGNvbnN0IHJlYXNvbiA9IGBub3QgaW4gYWxwaGFiZXQgJHthfWAgO1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDEgfSA7XG4gXHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHR9XG5cblx0XHRpZiAoICFpbmRleC5oYXNPd25Qcm9wZXJ0eShiKSApIHtcblx0XHRcdGNvbnN0IHJlYXNvbiA9IGBub3QgaW4gYWxwaGFiZXQgJHtifWAgO1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyAxICwgZW5kIDogc3RhcnQgKyAyIH0gO1xuIFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0aWYgKCBzdG9wID4gMiApIHtcblxuXHRcdFx0aWYgKCAhaW5kZXguaGFzT3duUHJvcGVydHkoYykgKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBub3QgaW4gYWxwaGFiZXQgJHtjfWAgO1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIDIgLCBlbmQgOiBzdGFydCArIDMgfSA7XG5cdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RvcCA+IDMgKSB7XG5cblx0XHRcdFx0aWYgKCAhaW5kZXguaGFzT3duUHJvcGVydHkoZCkgKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVhc29uID0gYG5vdCBpbiBhbHBoYWJldCAke2R9YCA7XG5cdFx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyAzICwgZW5kIDogc3RhcnQgKyA0IH0gO1xuXHRcdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKCBpbmRleFtjXSAmIDMgKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVhc29uID0gYHRyYWlsaW5nIGJpdHMgaW4gJHthfSR7Yn0ke2N9LCBsYXN0IGRpZ2l0IHNob3VsZCBiZSAke29wdGlvbnMuYWxwaGFiZXRbaW5kZXhbY10gJiA2MyA8PCAyXX1gIDtcblx0XHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIDIgLCBlbmQgOiBzdGFydCArIDMgfSA7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEJhc2U2NEVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoIGluZGV4W2JdICYgMTUgKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGB0cmFpbGluZyBiaXRzIGluICR7YX0ke2J9LCBsYXN0IGRpZ2l0IHNob3VsZCBiZSAke29wdGlvbnMuYWxwaGFiZXRbaW5kZXhbYl0gJiAzIDw8IDRdfWAgO1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIDEgLCBlbmQgOiBzdGFydCArIDIgfSA7XG5cdFx0XHRcdHRocm93IG5ldyBCYXNlNjRFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0c3dpdGNoICggc3RvcCApIHtcblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0eWllbGQqIGNoYXI0dG9ieXRlMyhpbmRleCwgYSwgYiwgYywgZCkgO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0eWllbGQqIGNoYXIzdG9ieXRlMihpbmRleCwgYSwgYiwgYykgO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0eWllbGQqIGNoYXIydG9ieXRlMShpbmRleCwgYSwgYikgO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRzdGFydCArPSA0IDtcblxuXHR9XG5cbn1cbiJdfQ==