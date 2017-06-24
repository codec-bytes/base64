import test from 'ava' ;
import ascii from '@aureooms/js-codec-ascii' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { decode , Base64DecodeError , byte2pair } from '../../src' ;

function success ( t , bytes , options , expected ) {

	const string = decode( bytes ) ;

	t.deepEqual( string , expected ) ;

}

success.title = ( _ , bytes , options , expected ) => `decode '${bytes}' succeed` ;

function from_ascii ( t , string , options , expected ) {
	const bytes = ascii.encode( string ) ;
	return success( t , bytes , options , expected ) ;
}

from_ascii.title = success.title ;

function failure ( t , bytes , options , ExpectedError , position ) {

	t.throws( ( ) => decode( bytes ) , CodecError ) ;
	t.throws( ( ) => decode( bytes ) , ExpectedError ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.encoding === 'base64' ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.object === bytes ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.position.start === position.start ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.position.end === position.end ) ;

}

failure.title = ( _ , bytes , options , expected ) => `decode '${bytes}' should fail` ;


test( success , [ ] , null , '' ) ;
test( success , [ 0x41 ] , null , 'QQ==' ) ;
test( success , [ 0x41 , 0x61 ] , null , 'QWE=' ) ;
test( success , [ 0x41 , 0x61 , 0x42 ] , null , 'QWFC' ) ;

test( failure , [ -1 ] , null , Base64DecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ 0, -1 ] , null , Base64DecodeError , { start : 1 , end : 2 } ) ;
test( failure , [ 0, 0, -1 ] , null , Base64DecodeError , { start : 2 , end : 3 } ) ;
test( failure , [ 0xFF + 1 ] , null , Base64DecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ ...range(0xFF + 2) ] , null , Base64DecodeError , { start : 256 , end : 257 } ) ;

test( from_ascii ,
	'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.' ,
	null ,
	'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4='
) ;

test( from_ascii ,
	'any carnal pleasure' ,
	null ,
	'YW55IGNhcm5hbCBwbGVhc3VyZQ=='
) ;
