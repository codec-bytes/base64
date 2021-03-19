import assert from 'assert';
import {iter, next, StopIteration, enumerate} from '@aureooms/js-itertools';
import {object, reflect} from '@aureooms/js-mapping';
import {ValueError} from '@aureooms/js-error';

import char4tobyte3 from './char4tobyte3.js';
import char3tobyte2 from './char3tobyte2.js';
import char2tobyte1 from './char2tobyte1.js';

import Base64EncodeError from './Base64EncodeError.js';

import variants from './variants.js';
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS.js';

export default function* _encode(string, options = DEFAULT_OPTIONS) {
	if (options.variant) {
		if (Object.prototype.hasOwnProperty.call(variants, options.variant)) {
			options = variants[options.variant];
		} else {
			throw new ValueError(`unknown Base64 variant ${options.variant}`);
		}
	}

	let start = 0;

	const index = options.index || object(reflect(enumerate(options.alphabet)));
	const padding = options.padding;

	const it = iter(string);

	while (true) {
		let a;
		let b;
		let c;
		let d;

		let stop = 4;

		try {
			a = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				break;
			} else {
				throw error;
			}
		}

		try {
			b = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				const reason = `lone character ${a}`;
				const position = {start, end: start + 1};
				throw new Base64EncodeError(reason, string, position);
			} else {
				throw error;
			}
		}

		try {
			c = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				if (padding) {
					const reason = `missing padding after ${a}${b}`;
					const position = {start, end: start + 2};
					throw new Base64EncodeError(reason, string, position);
				}

				stop = 2;
			} else {
				throw error;
			}
		}

		if (stop === 4) {
			try {
				d = next(it);
			} catch (error) {
				if (error instanceof StopIteration) {
					if (padding) {
						const reason = `missing padding after ${a}${b}${c}`;
						const position = {start, end: start + 3};
						throw new Base64EncodeError(reason, string, position);
					}

					stop = 3;
				} else {
					throw error;
				}
			}
		}

		if (padding) {
			stop = [a, b, c, d].indexOf(padding);
			stop = stop === -1 ? 4 : stop;
			if (stop < 2) {
				const reason = `padding at wrong position in ${a}${b}${c}${d}`;
				const position = {start: start + stop, end: start + stop + 1};
				throw new Base64EncodeError(reason, string, position);
			}

			if (stop === 2 && d !== padding) {
				const reason = `incorrect padding end in ${a}${b}${c}${d}`;
				const position = {start: start + 3, end: start + 4};
				throw new Base64EncodeError(reason, string, position);
			}
		}

		if (!Object.prototype.hasOwnProperty.call(index, a)) {
			const reason = `not in alphabet ${a}`;
			const position = {start, end: start + 1};
			throw new Base64EncodeError(reason, string, position);
		}

		if (!Object.prototype.hasOwnProperty.call(index, b)) {
			const reason = `not in alphabet ${b}`;
			const position = {start: start + 1, end: start + 2};
			throw new Base64EncodeError(reason, string, position);
		}

		if (stop > 2) {
			if (!Object.prototype.hasOwnProperty.call(index, c)) {
				const reason = `not in alphabet ${c}`;
				const position = {start: start + 2, end: start + 3};
				throw new Base64EncodeError(reason, string, position);
			}

			if (stop > 3) {
				if (!Object.prototype.hasOwnProperty.call(index, d)) {
					const reason = `not in alphabet ${d}`;
					const position = {start: start + 3, end: start + 4};
					throw new Base64EncodeError(reason, string, position);
				}
			} else if (index[c] & 3) {
				const reason = `trailing bits in ${a}${b}${c}, last digit should be ${
					options.alphabet[index[c] & (63 << 2)]
				}`;
				const position = {start: start + 2, end: start + 3};
				throw new Base64EncodeError(reason, string, position);
			}
		} else if (index[b] & 15) {
			const reason = `trailing bits in ${a}${b}, last digit should be ${
				options.alphabet[index[b] & (3 << 4)]
			}`;
			const position = {start: start + 1, end: start + 2};
			throw new Base64EncodeError(reason, string, position);
		}

		switch (stop) {
			case 4:
				yield* char4tobyte3(index, a, b, c, d);
				break;
			case 3:
				yield* char3tobyte2(index, a, b, c);
				break;
			case 2:
				yield* char2tobyte1(index, a, b);
				break;
			default:
				assert(false, `Unexpected stop value: ${stop}.`);
		}

		start += 4;
	}
}
