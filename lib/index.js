'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.encode = exports.decode = exports.char4tobyte3 = exports.char3tobyte2 = exports.char2tobyte1 = exports.byte3tochar4 = exports.byte2tochar3 = exports.byte1tochar2 = exports._encode = exports._decode = exports.DEFAULT_PADDING = exports.DEFAULT_OPTIONS = exports.DEFAULT_INDEX = exports.DEFAULT_ALPHABET = exports.Base64EncodeError = exports.Base64DecodeError = undefined;

var _Base64DecodeError = require('./Base64DecodeError');

var _Base64DecodeError2 = _interopRequireDefault(_Base64DecodeError);

var _Base64EncodeError = require('./Base64EncodeError');

var _Base64EncodeError2 = _interopRequireDefault(_Base64EncodeError);

var _DEFAULT_ALPHABET = require('./DEFAULT_ALPHABET');

var _DEFAULT_ALPHABET2 = _interopRequireDefault(_DEFAULT_ALPHABET);

var _DEFAULT_INDEX = require('./DEFAULT_INDEX');

var _DEFAULT_INDEX2 = _interopRequireDefault(_DEFAULT_INDEX);

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

var _DEFAULT_PADDING = require('./DEFAULT_PADDING');

var _DEFAULT_PADDING2 = _interopRequireDefault(_DEFAULT_PADDING);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	decode: _decode5.default,
	encode: _encode5.default
};
exports.Base64DecodeError = _Base64DecodeError2.default;
exports.Base64EncodeError = _Base64EncodeError2.default;
exports.DEFAULT_ALPHABET = _DEFAULT_ALPHABET2.default;
exports.DEFAULT_INDEX = _DEFAULT_INDEX2.default;
exports.DEFAULT_OPTIONS = _DEFAULT_OPTIONS2.default;
exports.DEFAULT_PADDING = _DEFAULT_PADDING2.default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWNvZGUiLCJlbmNvZGUiLCJCYXNlNjREZWNvZGVFcnJvciIsIkJhc2U2NEVuY29kZUVycm9yIiwiREVGQVVMVF9BTFBIQUJFVCIsIkRFRkFVTFRfSU5ERVgiLCJERUZBVUxUX09QVElPTlMiLCJERUZBVUxUX1BBRERJTkciLCJfZGVjb2RlIiwiX2VuY29kZSIsImJ5dGUxdG9jaGFyMiIsImJ5dGUydG9jaGFyMyIsImJ5dGUzdG9jaGFyNCIsImNoYXIydG9ieXRlMSIsImNoYXIzdG9ieXRlMiIsImNoYXI0dG9ieXRlMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDZEEseUJBRGM7QUFFZEM7QUFGYyxDO1FBTWRDLGlCO1FBQ0FDLGlCO1FBQ0FDLGdCO1FBQ0FDLGE7UUFDQUMsZTtRQUNBQyxlO1FBQ0FDLE87UUFDQUMsTztRQUNBQyxZO1FBQ0FDLFk7UUFDQUMsWTtRQUNBQyxZO1FBQ0FDLFk7UUFDQUMsWTtRQUNBZixNO1FBQ0FDLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZTY0RGVjb2RlRXJyb3IgZnJvbSAnLi9CYXNlNjREZWNvZGVFcnJvcicgO1xuaW1wb3J0IEJhc2U2NEVuY29kZUVycm9yIGZyb20gJy4vQmFzZTY0RW5jb2RlRXJyb3InIDtcbmltcG9ydCBERUZBVUxUX0FMUEhBQkVUIGZyb20gJy4vREVGQVVMVF9BTFBIQUJFVCcgO1xuaW1wb3J0IERFRkFVTFRfSU5ERVggZnJvbSAnLi9ERUZBVUxUX0lOREVYJyA7XG5pbXBvcnQgREVGQVVMVF9PUFRJT05TIGZyb20gJy4vREVGQVVMVF9PUFRJT05TJyA7XG5pbXBvcnQgREVGQVVMVF9QQURESU5HIGZyb20gJy4vREVGQVVMVF9QQURESU5HJyA7XG5pbXBvcnQgX2RlY29kZSBmcm9tICcuL19kZWNvZGUnIDtcbmltcG9ydCBfZW5jb2RlIGZyb20gJy4vX2VuY29kZScgO1xuaW1wb3J0IGJ5dGUxdG9jaGFyMiBmcm9tICcuL2J5dGUxdG9jaGFyMicgO1xuaW1wb3J0IGJ5dGUydG9jaGFyMyBmcm9tICcuL2J5dGUydG9jaGFyMycgO1xuaW1wb3J0IGJ5dGUzdG9jaGFyNCBmcm9tICcuL2J5dGUzdG9jaGFyNCcgO1xuaW1wb3J0IGNoYXIydG9ieXRlMSBmcm9tICcuL2NoYXIydG9ieXRlMScgO1xuaW1wb3J0IGNoYXIzdG9ieXRlMiBmcm9tICcuL2NoYXIzdG9ieXRlMicgO1xuaW1wb3J0IGNoYXI0dG9ieXRlMyBmcm9tICcuL2NoYXI0dG9ieXRlMycgO1xuaW1wb3J0IGRlY29kZSBmcm9tICcuL2RlY29kZScgO1xuaW1wb3J0IGVuY29kZSBmcm9tICcuL2VuY29kZScgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRlY29kZSAsXG5cdGVuY29kZSAsXG59IDtcblxuZXhwb3J0IHtcblx0QmFzZTY0RGVjb2RlRXJyb3IgLFxuXHRCYXNlNjRFbmNvZGVFcnJvciAsXG5cdERFRkFVTFRfQUxQSEFCRVQgLFxuXHRERUZBVUxUX0lOREVYICxcblx0REVGQVVMVF9PUFRJT05TICxcblx0REVGQVVMVF9QQURESU5HICxcblx0X2RlY29kZSAsXG5cdF9lbmNvZGUgLFxuXHRieXRlMXRvY2hhcjIgLFxuXHRieXRlMnRvY2hhcjMgLFxuXHRieXRlM3RvY2hhcjQgLFxuXHRjaGFyMnRvYnl0ZTEgLFxuXHRjaGFyM3RvYnl0ZTIgLFxuXHRjaGFyNHRvYnl0ZTMgLFxuXHRkZWNvZGUgLFxuXHRlbmNvZGUgLFxufSA7XG4iXX0=