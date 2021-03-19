import test from 'ava';
import ascii from '@aureooms/js-codec-ascii';
import {ValueError} from '@aureooms/js-error';
import {CodecError} from '@aureooms/js-codec';

import {encode, Base64EncodeError} from '../../src/index.js';

function success(t, string, options, expected) {
	const bytes = encode(string, options);

	t.deepEqual(bytes, expected);
}

success.title = (_, string, _options, _expected) =>
	`encode '${string}' should succeed`;

function fromASCII(t, string, options, expected) {
	const bytes = ascii.encode(expected);
	return success(t, string, options, bytes);
}

fromASCII.title = success.title;

function failure(t, string, options, ExpectedError, position) {
	const error = t.throws(() => encode(string, options), {
		instanceOf: ExpectedError
	});

	if (position) {
		t.true(error instanceof CodecError);
		t.is(error.encoding, 'base64');
		t.is(error.object, string);
		t.is(error.position.start, position.start);
		t.is(error.position.end, position.end);
	}
}

failure.title = (_, string, _options, _expected) =>
	`encode '${string}' should fail`;

test(success, '', undefined, []);
test(success, 'QQ==', undefined, [0x41]);
test(success, 'QWE=', undefined, [0x41, 0x61]);
test(success, 'QWFC', undefined, [0x41, 0x61, 0x42]);

test(failure, '$', undefined, Base64EncodeError, {start: 0, end: 1});
test(failure, 'A', undefined, Base64EncodeError, {start: 0, end: 1});
test(failure, '=', undefined, Base64EncodeError, {start: 0, end: 1});
test(failure, '$$$$', undefined, Base64EncodeError, {start: 0, end: 1});
test(failure, 'A$$$', undefined, Base64EncodeError, {start: 1, end: 2});
test(failure, 'AA$$', undefined, Base64EncodeError, {start: 2, end: 3});
test(failure, 'AAA$', undefined, Base64EncodeError, {start: 3, end: 4});
test(failure, 'AAAA=', undefined, Base64EncodeError, {start: 4, end: 5});
test(failure, '====', undefined, Base64EncodeError, {start: 0, end: 1});
test(failure, 'Q===', undefined, Base64EncodeError, {start: 1, end: 2});
test(failure, 'QW', undefined, Base64EncodeError, {start: 0, end: 2});
test(failure, 'QWE', undefined, Base64EncodeError, {start: 0, end: 3});
test(failure, 'QU==', undefined, Base64EncodeError, {start: 1, end: 2});
test(failure, 'QWF=', undefined, Base64EncodeError, {start: 2, end: 3});
test(failure, 'QQ=A', undefined, Base64EncodeError, {start: 3, end: 4});

test(
	fromASCII,
	'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=',
	undefined,
	'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.'
);

test(success, '/A==', undefined, [0xfc]);
test(success, '_A', {variant: 'RFC7515'}, [0xfc]);
test(success, '_A--', {variant: 'Y64'}, [0xfc]);
test(success, ',A', {variant: 'RFC3501'}, [0xfc]);

test(success, '/+A=', undefined, [0xff, 0xe0]);
test(success, '_-A', {variant: 'RFC7515'}, [0xff, 0xe0]);
test(success, '_.A-', {variant: 'Y64'}, [0xff, 0xe0]);
test(success, ',+A', {variant: 'RFC3501'}, [0xff, 0xe0]);

test(
	success,
	'$*A',
	{
		alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*$'
	},
	[0xff, 0xe0]
);

test(failure, '', {variant: '?'}, ValueError);
