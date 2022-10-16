import {iter} from '@iterable-iterator/iter';
import {next, StopIteration} from '@iterable-iterator/next';
import {ValueError} from '@failure-abstraction/error';

import byte3tochar4 from './byte3tochar4.js';
import byte2tochar3 from './byte2tochar3.js';
import byte1tochar2 from './byte1tochar2.js';

import Base64DecodeError from './Base64DecodeError.js';

import variants from './variants.js';
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS.js';

export default function* _decode(bytes, options = DEFAULT_OPTIONS) {
	if (options.variant) {
		if (Object.prototype.hasOwnProperty.call(variants, options.variant)) {
			options = variants[options.variant];
		} else {
			throw new ValueError(`unknown Base64 variant ${options.variant}`);
		}
	}

	let start = 0;

	const {alphabet, padding} = options;

	const it = iter(bytes);

	while (true) {
		let a;
		let b;
		let c;

		try {
			a = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				break;
			} else {
				throw error;
			}
		}

		if (a < 0x00 || a > 0xff) {
			const reason = `byte out of range 0x00 <= ${a} <= 0xFF`;
			const position = {start, end: start + 1};
			throw new Base64DecodeError(reason, bytes, position);
		}

		++start;

		try {
			b = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				yield* byte1tochar2(alphabet, a);
				if (padding) {
					yield padding;
					yield padding;
				}

				break;
			} else {
				throw error;
			}
		}

		if (b < 0x00 || b > 0xff) {
			const reason = `byte out of range 0x00 <= ${b} <= 0xFF`;
			const position = {start, end: start + 1};
			throw new Base64DecodeError(reason, bytes, position);
		}

		++start;

		try {
			c = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				yield* byte2tochar3(alphabet, a, b);
				if (padding) {
					yield padding;
				}

				break;
			} else {
				throw error;
			}
		}

		if (c < 0x00 || c > 0xff) {
			const reason = `byte out of range 0x00 <= ${c} <= 0xFF`;
			const position = {start, end: start + 1};
			throw new Base64DecodeError(reason, bytes, position);
		}

		yield* byte3tochar4(alphabet, a, b, c);

		++start;
	}
}
