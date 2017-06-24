import test from 'ava' ;
import ascii from '@aureooms/js-codec-ascii' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { encode , Base64EncodeError , byte2pair } from '../../src' ;

function success ( t , string , options , expected ) {

	const bytes = encode( string ) ;

	t.deepEqual( bytes , expected ) ;

}

success.title = ( _ , string , options , expected ) => `encode '${string}' should succeed` ;

function from_ascii ( t , string , options , expected ) {
	const bytes = ascii.encode( expected ) ;
	return success( t , string , options , bytes ) ;
}

from_ascii.title = success.title ;

function failure ( t , string , options , ExpectedError , position ) {

	t.throws( ( ) => encode( string ) , CodecError ) ;
	t.throws( ( ) => encode( string ) , ExpectedError ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.encoding === 'base64' ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.object === string ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.position.start === position.start ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.position.end === position.end ) ;

}

failure.title = ( _ , string , options , expected ) => `encode '${string}' should fail` ;


test( success , '' , null , [ ] ) ;
test( success , 'QQ==' , null , [ 0x41 ] ) ;
test( success , 'QWE=' , null , [ 0x41 , 0x61 ] ) ;
test( success , 'QWFC' , null , [ 0x41 , 0x61 , 0x42 ] ) ;

test( failure , '$' , null , Base64EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'A' , null , Base64EncodeError , { start : 0 , end : 1 } ) ;
test( failure , '=' , null , Base64EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'AAAA=' , null , Base64EncodeError , { start : 4 , end : 5 } ) ;
test( failure , 'AAAA=' , null , Base64EncodeError , { start : 4 , end : 5 } ) ;
test( failure , 'QWE' , null , Base64EncodeError , { start : 0 , end : 3 } ) ;
test( failure , 'QU==' , null , Base64EncodeError , { start : 1 , end : 2 } ) ;
test( failure , 'QWF=' , null , Base64EncodeError , { start : 2 , end : 3 } ) ;

test( from_ascii ,
	'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=' ,
	null ,
	'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.'
) ;
