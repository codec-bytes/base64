'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.variants = exports.encode = exports.decode = exports.char4tobyte3 = exports.char3tobyte2 = exports.char2tobyte1 = exports.byte3tochar4 = exports.byte2tochar3 = exports.byte1tochar2 = exports._encode = exports._decode = exports.DEFAULT_OPTIONS = exports.Base64EncodeError = exports.Base64DecodeError = undefined;

var _Base64DecodeError = require('./Base64DecodeError');

var _Base64DecodeError2 = _interopRequireDefault(_Base64DecodeError);

var _Base64EncodeError = require('./Base64EncodeError');

var _Base64EncodeError2 = _interopRequireDefault(_Base64EncodeError);

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

var _decode2 = require('./_decode');

var _decode3 = _interopRequireDefault(_decode2);

var _encode2 = require('./_encode');

var _encode3 = _interopRequireDefault(_encode2);

var _byte1tochar = require('./byte1tochar2');

var _byte1tochar2 = _interopRequireDefault(_byte1tochar);

var _byte2tochar = require('./byte2tochar3');

var _byte2tochar2 = _interopRequireDefault(_byte2tochar);

var _byte3tochar = require('./byte3tochar4');

var _byte3tochar2 = _interopRequireDefault(_byte3tochar);

var _char2tobyte = require('./char2tobyte1');

var _char2tobyte2 = _interopRequireDefault(_char2tobyte);

var _char3tobyte = require('./char3tobyte2');

var _char3tobyte2 = _interopRequireDefault(_char3tobyte);

var _char4tobyte = require('./char4tobyte3');

var _char4tobyte2 = _interopRequireDefault(_char4tobyte);

var _decode4 = require('./decode');

var _decode5 = _interopRequireDefault(_decode4);

var _encode4 = require('./encode');

var _encode5 = _interopRequireDefault(_encode4);

var _variants = require('./variants');

var _variants2 = _interopRequireDefault(_variants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	decode: _decode5.default,
	encode: _encode5.default
};
exports.Base64DecodeError = _Base64DecodeError2.default;
exports.Base64EncodeError = _Base64EncodeError2.default;
exports.DEFAULT_OPTIONS = _DEFAULT_OPTIONS2.default;
exports._decode = _decode3.default;
exports._encode = _encode3.default;
exports.byte1tochar2 = _byte1tochar2.default;
exports.byte2tochar3 = _byte2tochar2.default;
exports.byte3tochar4 = _byte3tochar2.default;
exports.char2tobyte1 = _char2tobyte2.default;
exports.char3tobyte2 = _char3tobyte2.default;
exports.char4tobyte3 = _char4tobyte2.default;
exports.decode = _decode5.default;
exports.encode = _encode5.default;
exports.variants = _variants2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWNvZGUiLCJlbmNvZGUiLCJCYXNlNjREZWNvZGVFcnJvciIsIkJhc2U2NEVuY29kZUVycm9yIiwiREVGQVVMVF9PUFRJT05TIiwiX2RlY29kZSIsIl9lbmNvZGUiLCJieXRlMXRvY2hhcjIiLCJieXRlMnRvY2hhcjMiLCJieXRlM3RvY2hhcjQiLCJjaGFyMnRvYnl0ZTEiLCJjaGFyM3RvYnl0ZTIiLCJjaGFyNHRvYnl0ZTMiLCJ2YXJpYW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNkQSx5QkFEYztBQUVkQztBQUZjLEM7UUFNZEMsaUI7UUFDQUMsaUI7UUFDQUMsZTtRQUNBQyxPO1FBQ0FDLE87UUFDQUMsWTtRQUNBQyxZO1FBQ0FDLFk7UUFDQUMsWTtRQUNBQyxZO1FBQ0FDLFk7UUFDQVosTTtRQUNBQyxNO1FBQ0FZLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZTY0RGVjb2RlRXJyb3IgZnJvbSAnLi9CYXNlNjREZWNvZGVFcnJvcicgO1xuaW1wb3J0IEJhc2U2NEVuY29kZUVycm9yIGZyb20gJy4vQmFzZTY0RW5jb2RlRXJyb3InIDtcbmltcG9ydCBERUZBVUxUX09QVElPTlMgZnJvbSAnLi9ERUZBVUxUX09QVElPTlMnIDtcbmltcG9ydCBfZGVjb2RlIGZyb20gJy4vX2RlY29kZScgO1xuaW1wb3J0IF9lbmNvZGUgZnJvbSAnLi9fZW5jb2RlJyA7XG5pbXBvcnQgYnl0ZTF0b2NoYXIyIGZyb20gJy4vYnl0ZTF0b2NoYXIyJyA7XG5pbXBvcnQgYnl0ZTJ0b2NoYXIzIGZyb20gJy4vYnl0ZTJ0b2NoYXIzJyA7XG5pbXBvcnQgYnl0ZTN0b2NoYXI0IGZyb20gJy4vYnl0ZTN0b2NoYXI0JyA7XG5pbXBvcnQgY2hhcjJ0b2J5dGUxIGZyb20gJy4vY2hhcjJ0b2J5dGUxJyA7XG5pbXBvcnQgY2hhcjN0b2J5dGUyIGZyb20gJy4vY2hhcjN0b2J5dGUyJyA7XG5pbXBvcnQgY2hhcjR0b2J5dGUzIGZyb20gJy4vY2hhcjR0b2J5dGUzJyA7XG5pbXBvcnQgZGVjb2RlIGZyb20gJy4vZGVjb2RlJyA7XG5pbXBvcnQgZW5jb2RlIGZyb20gJy4vZW5jb2RlJyA7XG5pbXBvcnQgdmFyaWFudHMgZnJvbSAnLi92YXJpYW50cycgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRlY29kZSAsXG5cdGVuY29kZSAsXG59IDtcblxuZXhwb3J0IHtcblx0QmFzZTY0RGVjb2RlRXJyb3IgLFxuXHRCYXNlNjRFbmNvZGVFcnJvciAsXG5cdERFRkFVTFRfT1BUSU9OUyAsXG5cdF9kZWNvZGUgLFxuXHRfZW5jb2RlICxcblx0Ynl0ZTF0b2NoYXIyICxcblx0Ynl0ZTJ0b2NoYXIzICxcblx0Ynl0ZTN0b2NoYXI0ICxcblx0Y2hhcjJ0b2J5dGUxICxcblx0Y2hhcjN0b2J5dGUyICxcblx0Y2hhcjR0b2J5dGUzICxcblx0ZGVjb2RlICxcblx0ZW5jb2RlICxcblx0dmFyaWFudHMgLFxufSA7XG4iXX0=