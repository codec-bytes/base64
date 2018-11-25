"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsItertools = require("@aureooms/js-itertools");

var _jsMapping = require("@aureooms/js-mapping");

var variants = {
  // standard
  'RFC4648': {
    'alphabet': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    'padding': '='
  },
  // unpadded base64url
  'RFC7515': {
    'alphabet': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
    'padding': false
  },
  // YUI library
  'Y64': {
    'alphabet': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._',
    'padding': '-'
  },
  // IMAP mailbox names
  'RFC3501': {
    'alphabet': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+,',
    'padding': false
  }
};

for (var variant in variants) {
  variants[variant].index = (0, _jsMapping.object)((0, _jsMapping.reflect)((0, _jsItertools.enumerate)(variants[variant].alphabet)));
}

var _default = variants;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYW50cy5qcyJdLCJuYW1lcyI6WyJ2YXJpYW50cyIsInZhcmlhbnQiLCJpbmRleCIsImFscGhhYmV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBRWhCO0FBQ0EsYUFBWTtBQUNYLGdCQUFhLGtFQURGO0FBRVgsZUFBWTtBQUZELEdBSEk7QUFRaEI7QUFDQSxhQUFZO0FBQ1gsZ0JBQWEsa0VBREY7QUFFWCxlQUFZO0FBRkQsR0FUSTtBQWNoQjtBQUNBLFNBQVE7QUFDUCxnQkFBYSxrRUFETjtBQUVQLGVBQVk7QUFGTCxHQWZRO0FBb0JoQjtBQUNBLGFBQVk7QUFDWCxnQkFBYSxrRUFERjtBQUVYLGVBQVk7QUFGRDtBQXJCSSxDQUFqQjs7QUE0QkEsS0FBTSxJQUFNQyxPQUFaLElBQXVCRCxRQUF2QixFQUFrQztBQUNqQ0EsRUFBQUEsUUFBUSxDQUFDQyxPQUFELENBQVIsQ0FBa0JDLEtBQWxCLEdBQTBCLHVCQUFRLHdCQUFTLDRCQUFXRixRQUFRLENBQUNDLE9BQUQsQ0FBUixDQUFrQkUsUUFBN0IsQ0FBVCxDQUFSLENBQTFCO0FBQ0E7O2VBRWNILFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbnVtZXJhdGUgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmltcG9ydCB7IG9iamVjdCAsIHJlZmxlY3QgfSBmcm9tICdAYXVyZW9vbXMvanMtbWFwcGluZycgO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcblxuXHQvLyBzdGFuZGFyZFxuXHQnUkZDNDY0OCcgOiB7XG5cdFx0J2FscGhhYmV0JyA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJyAsXG5cdFx0J3BhZGRpbmcnIDogJz0nICxcblx0fSAsXG5cblx0Ly8gdW5wYWRkZWQgYmFzZTY0dXJsXG5cdCdSRkM3NTE1JyA6IHtcblx0XHQnYWxwaGFiZXQnIDogJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LV8nICxcblx0XHQncGFkZGluZycgOiBmYWxzZSAsXG5cdH0gLFxuXG5cdC8vIFlVSSBsaWJyYXJ5XG5cdCdZNjQnIDoge1xuXHRcdCdhbHBoYWJldCcgOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkuXycgLFxuXHRcdCdwYWRkaW5nJyA6ICctJyAsXG5cdH0gLFxuXG5cdC8vIElNQVAgbWFpbGJveCBuYW1lc1xuXHQnUkZDMzUwMScgOiB7XG5cdFx0J2FscGhhYmV0JyA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSssJyAsXG5cdFx0J3BhZGRpbmcnIDogZmFsc2UgLFxuXHR9ICxcblxufSA7XG5cbmZvciAoIGNvbnN0IHZhcmlhbnQgaW4gdmFyaWFudHMgKSB7XG5cdHZhcmlhbnRzW3ZhcmlhbnRdLmluZGV4ID0gb2JqZWN0KCByZWZsZWN0KCBlbnVtZXJhdGUoIHZhcmlhbnRzW3ZhcmlhbnRdLmFscGhhYmV0ICkgKSApIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFyaWFudHMgO1xuIl19