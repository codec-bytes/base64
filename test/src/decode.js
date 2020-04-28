import test from 'ava' ;
import ascii from '@aureooms/js-codec-ascii' ;
import { ValueError } from '@aureooms/js-error' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { decode , Base64DecodeError , byte2pair } from '../../src' ;

function success ( t , bytes , options , expected ) {

	const string = decode( bytes , options ) ;

	t.deepEqual( string , expected ) ;

}

success.title = ( _ , bytes , options , expected ) => `decode '${bytes}' ${JSON.stringify(options)} succeed` ;

function from_ascii ( t , string , options , expected ) {
	const bytes = ascii.encode( string ) ;
	return success( t , bytes , options , expected ) ;
}

from_ascii.title = success.title ;

function failure ( t , bytes , options , ExpectedError , position ) {

	const error = t.throws( ( ) => decode( bytes , options ) , { instanceOf: ExpectedError } ) ;

	if ( position ) {
		t.true( error instanceof CodecError ) ;
		t.is( error.encoding , 'base64' ) ;
		t.is( error.object , bytes ) ;
		t.is( error.position.start , position.start ) ;
		t.is( error.position.end , position.end ) ;
	}

}

failure.title = ( _ , bytes , options , expected ) => `decode '${bytes}' ${JSON.stringify(options)} should fail` ;


test( success , [ ] , undefined , '' ) ;
test( success , [ 0x41 ] , undefined , 'QQ==' ) ;
test( success , [ 0x41 , 0x61 ] , undefined , 'QWE=' ) ;
test( success , [ 0x41 , 0x61 , 0x42 ] , undefined , 'QWFC' ) ;

test( failure , [ -1 ] , undefined , Base64DecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ 0, -1 ] , undefined , Base64DecodeError , { start : 1 , end : 2 } ) ;
test( failure , [ 0, 0, -1 ] , undefined , Base64DecodeError , { start : 2 , end : 3 } ) ;
test( failure , [ 0xFF + 1 ] , undefined , Base64DecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ ...range(0xFF + 2) ] , undefined , Base64DecodeError , { start : 256 , end : 257 } ) ;

test( from_ascii ,
	'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.' ,
	undefined ,
	'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4='
) ;

test( from_ascii ,
	'any carnal pleasure' ,
	undefined ,
	'YW55IGNhcm5hbCBwbGVhc3VyZQ=='
) ;

test( from_ascii ,
	'any carnal pleasure' ,
	{ variant : 'RFC7515'} ,
	'YW55IGNhcm5hbCBwbGVhc3VyZQ'
) ;

test( from_ascii ,
	'any carnal pleasure' ,
	{ variant : 'Y64'} ,
	'YW55IGNhcm5hbCBwbGVhc3VyZQ--'
) ;

test( success , [ 0xFF , 0xE0 ] , undefined , '/+A=' ) ;
test( success , [ 0xFF , 0xE0 ] , { variant : 'RFC7515'} , '_-A' ) ;
test( success , [ 0xFF , 0xE0 ] , { variant : 'Y64'} , '_.A-' ) ;
test( success , [ 0xFF , 0xE0 ] , { variant : 'RFC3501'} , ',+A' ) ;

test( failure , [] , { variant : '?' } , ValueError ) ;
