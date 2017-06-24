'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsCodec = require('@aureooms/js-codec');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base64EncodeError = function (_EncodeError) {
	_inherits(Base64EncodeError, _EncodeError);

	function Base64EncodeError(reason, object, position) {
		_classCallCheck(this, Base64EncodeError);

		return _possibleConstructorReturn(this, (Base64EncodeError.__proto__ || Object.getPrototypeOf(Base64EncodeError)).call(this, 'base64', reason, object, position));
	}

	return Base64EncodeError;
}(_jsCodec.EncodeError);

exports.default = Base64EncodeError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNlNjRFbmNvZGVFcnJvci5qcyJdLCJuYW1lcyI6WyJCYXNlNjRFbmNvZGVFcnJvciIsInJlYXNvbiIsIm9iamVjdCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7SUFFcUJBLGlCOzs7QUFFcEIsNEJBQWNDLE1BQWQsRUFBdUJDLE1BQXZCLEVBQWdDQyxRQUFoQyxFQUEyQztBQUFBOztBQUFBLCtIQUNuQyxRQURtQyxFQUN4QkYsTUFEd0IsRUFDZkMsTUFEZSxFQUNOQyxRQURNO0FBRTFDOzs7OztrQkFKbUJILGlCIiwiZmlsZSI6IkJhc2U2NEVuY29kZUVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5jb2RlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtY29kZWMnIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZTY0RW5jb2RlRXJyb3IgZXh0ZW5kcyBFbmNvZGVFcnJvciB7XG5cblx0Y29uc3RydWN0b3IgKCByZWFzb24gLCBvYmplY3QgLCBwb3NpdGlvbiApIHtcblx0XHRzdXBlciggJ2Jhc2U2NCcgLCByZWFzb24gLCBvYmplY3QgLCBwb3NpdGlvbiApIDtcblx0fVxuXG59XG5cbiJdfQ==