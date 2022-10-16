import test from 'ava';
import * as ascii from '@codec-bytes/ascii';
import {range} from '@iterable-iterator/range';

import {decode, Base64DecodeError} from '../../src/index.js';
import {ValueError, CodecError} from './_fixtures.js';

function success(t, bytes, options, expected) {
	const string = decode(bytes, options);

	t.deepEqual(string, expected);
}

success.title = (title, bytes, options, expected) =>
	title ??
	`decode(${JSON.stringify(bytes)}, ${JSON.stringify(
		options,
	)})' == ${JSON.stringify(expected)}`;

function fromASCII(t, string, options, expected) {
	const bytes = ascii.encode(string);
	return success(t, bytes, options, expected);
}

fromASCII.title = success.title;

function failure(t, bytes, options, ExpectedError, position) {
	const error = t.throws(() => decode(bytes, options), {
		instanceOf: ExpectedError,
	});

	if (position) {
		t.true(error instanceof CodecError);
		t.is(error.encoding, 'base64');
		t.is(error.object, bytes);
		t.is(error.position.start, position.start);
		t.is(error.position.end, position.end);
	}
}

failure.title = (title, bytes, options, expected) =>
	title ??
	`decode(${JSON.stringify(bytes)}, ${JSON.stringify(options)})' fails with ${
		expected.name
	}`;

test(success, [], undefined, '');
test(success, [0x41], undefined, 'QQ==');
test(success, [0x41, 0x61], undefined, 'QWE=');
test(success, [0x41, 0x61, 0x42], undefined, 'QWFC');

test(failure, [-1], undefined, Base64DecodeError, {start: 0, end: 1});
test(failure, [0, -1], undefined, Base64DecodeError, {start: 1, end: 2});
test(failure, [0, 0, -1], undefined, Base64DecodeError, {start: 2, end: 3});
test(failure, [0xff + 1], undefined, Base64DecodeError, {start: 0, end: 1});
test(failure, [...range(0xff + 2)], undefined, Base64DecodeError, {
	start: 256,
	end: 257,
});

test(
	fromASCII,
	'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.',
	undefined,
	'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=',
);

test(
	fromASCII,
	'any carnal pleasure',
	undefined,
	'YW55IGNhcm5hbCBwbGVhc3VyZQ==',
);

test(
	fromASCII,
	'any carnal pleasure',
	{variant: 'RFC7515'},
	'YW55IGNhcm5hbCBwbGVhc3VyZQ',
);

test(
	fromASCII,
	'any carnal pleasure',
	{variant: 'Y64'},
	'YW55IGNhcm5hbCBwbGVhc3VyZQ--',
);

test(success, [0xff, 0xe0], undefined, '/+A=');
test(success, [0xff, 0xe0], {variant: 'RFC7515'}, '_-A');
test(success, [0xff, 0xe0], {variant: 'Y64'}, '_.A-');
test(success, [0xff, 0xe0], {variant: 'RFC3501'}, ',+A');

test(failure, [], {variant: '?'}, ValueError);
