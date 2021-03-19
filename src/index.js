import Base64DecodeError from './Base64DecodeError.js';
import Base64EncodeError from './Base64EncodeError.js';
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS.js';
import _decode from './_decode.js';
import _encode from './_encode.js';
import byte1tochar2 from './byte1tochar2.js';
import byte2tochar3 from './byte2tochar3.js';
import byte3tochar4 from './byte3tochar4.js';
import char2tobyte1 from './char2tobyte1.js';
import char3tobyte2 from './char3tobyte2.js';
import char4tobyte3 from './char4tobyte3.js';
import decode from './decode.js';
import encode from './encode.js';
import variants from './variants.js';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	decode,
	encode,
};

export {
	Base64DecodeError,
	Base64EncodeError,
	DEFAULT_OPTIONS,
	_decode,
	_encode,
	byte1tochar2,
	byte2tochar3,
	byte3tochar4,
	char2tobyte1,
	char3tobyte2,
	char4tobyte3,
	decode,
	encode,
	variants,
};
