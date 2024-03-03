import {toObject, inverse} from '@iterable-iterator/mapping';
import {enumerate} from '@iterable-iterator/zip';

const variants = {
	// Standard
	RFC4648: {
		alphabet:
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
		padding: '=',
	},

	// Unpadded base64url
	RFC7515: {
		alphabet:
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
		padding: false,
	},

	// YUI library
	Y64: {
		alphabet:
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._',
		padding: '-',
	},

	// IMAP mailbox names
	RFC3501: {
		alphabet:
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+,',
		padding: false,
	},
};

for (const variant in variants) {
	if (Object.hasOwn(variants, variant)) {
		variants[variant].index = toObject(
			inverse(enumerate(variants[variant].alphabet)),
		);
	}
}

export default variants;
